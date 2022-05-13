import {
  Button,
  Checkbox,
  Col,
  InputNumber,
  message,
  Popconfirm,
  Row,
  Table,
  Typography,
  Alert,
} from 'antd';
import { useEffect, useState } from 'react';
import Icon from '@ant-design/icons';
import HeadSearch from '../home/components/headSearch';
import './index.less';
import BuyDrawer from '../paymentByCats/BuyDrawer';
import axios from 'axios';
import { DOMAIN } from '@/constants';
import nullImage from '@/images/nullImage.png';

const ShoppingCat = () => {
  const [visible, setVisible] = useState(false);
  const [changeVisible, setChangeVisible] = useState(-1);
  const [source, setSource] = useState([]);
  const [chosenMap, setChosenMap] = useState({});
  const getSource = async () => {
    const id = localStorage.getItem('userId');
    await axios.get(`${DOMAIN}/order/getCart?userID=${id}`).then(res => {
      if (res.data.entity.success) {
        setSource(res.data.entity.data);
      }
    });
  };
  useEffect(() => {
    getSource();
  }, []);
  const openDialog = () => {
    setVisible(true);
  };
  const closeDialog = () => {
    setVisible(false);
  };
  const handleChange = id => {
    if (changeVisible === id) {
      setChangeVisible(-1);
    } else {
      setChangeVisible(id);
    }
  };
  const handleNumChange = async (value, id) => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/order/editCart`,
      data: {
        id,
        productNum: value,
      },
    }).then(res => {
      if (res.data.entity.success) {
        getSource();
        message.success('修改成功！');
      }
    });
  };
  const handleMakeOrder = () => {
    if (source.length !== 0) {
      openDialog();
    } else {
      message.error('加入购物车后，才可结算哦');
    }
  };
  const handleDeleteCart = async id => {
    // 删除单个
    await axios({
      method: 'post',
      url: `${DOMAIN}/order/deleteCart`,
      data: [{ id }],
    }).then(res => {
      if (res.data.entity.success) {
        message.success('商品删除成功！');
        getSource();
      } else {
        message.error('删除失败！');
      }
    });
  };

  const handleChosen = id => {
    const result = chosenMap;
    if (!result[id]) {
      result[id] = true;
    } else {
      delete result[id];
    }
    setChosenMap(result);
  };
  const handleDeleteSomeCarts = async () => {
    // 批量删除
    await axios({
      method: 'post',
      url: `${DOMAIN}/order/deleteCart`,
      data: Object.keys(chosenMap).map(item => {
        return {
          id: Number(item),
        };
      }),
    }).then(res => {
      if (res.data.entity.success) {
        message.success('删除成功！');
        getSource();
      }
    });
  };

  const columns: ColumnsType<Data> = [
    {
      title: '图片',
      dataIndex: 'productCoverImg',
      key: 'productCoverImg',
      align: 'center',
      width: '23%',
      render: (text, record) => {
        return (
          <Checkbox onChange={() => handleChosen(record.ID)}>
            <img
              className="imgs_style"
              src={text}
              alt={text}
              height={110}
              width={110}
            />
          </Checkbox>
        );
      },
    },
    {
      title: '商品',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
      width: '20%',
    },
    {
      title: '单价',
      dataIndex: 'productPrice',
      key: 'productPrice',
      align: 'center',
      width: '13%',
      render: text => (Number(text) ? `￥${Number(text).toFixed(2)}` : 0),
    },
    {
      title: '数量',
      dataIndex: 'productNum',
      key: 'productNum',
      align: 'center',
      width: '14%',
      render: (text, record) => (
        <InputNumber
          min={1}
          max={99}
          defaultValue={text}
          precision={0}
          disabled={record.ID !== changeVisible}
          onChange={value => handleNumChange(value, record.ID)}
        />
      ),
    },
    {
      title: '小计',
      dataIndex: 'totalprice',
      key: 'totalprice',
      align: 'center',
      width: '13%',
      render: (text, record) => {
        const num = record.productPrice * record.productNum;
        return `￥${num.toFixed(2)}`;
      },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      align: 'center',
      width: '148px',
      render: (text, record, index) => (
        <div className="operation">
          <Popconfirm
            title="你确定要删除这条数据？"
            icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
            onConfirm={() => {
              handleDeleteCart(record.ID);
            }}
            okText="是"
            cancelText="否">
            <span>删除</span>
          </Popconfirm>
          <Button
            type="text"
            className="changeButton"
            onClick={() => handleChange(record.ID)}>
            {changeVisible === record.ID ? '保存' : '修改'}
          </Button>
        </div>
      ),
    },
  ];
  const footer = () => {
    let total = 0;
    let size = 0;
    const priceList = source.map(item => ({
      total: item.productPrice * item.productNum,
      size: item.productNum,
    }));
    priceList.forEach(item => {
      total += item.total;
      size += item.size;
    });
    return (
      <>
        <Row>
          <Col span={12} className="left">
            <Button onClick={handleDeleteSomeCarts}>批量删除</Button>
          </Col>
          <Col span={12} className="right">
            <span className="num">
              已选择<i>{size}</i>件商品
            </span>
            <div>
              总价：<span>¥{total.toFixed(2)}</span>
            </div>
            <span className="go-pay" onClick={handleMakeOrder}>
              去结算
            </span>
          </Col>
        </Row>
        <BuyDrawer
          visible={visible}
          onClose={closeDialog}
          total={total}
          shoppingCatsList={source}
          getSource={getSource}
        />
      </>
    );
  };
  return (
    <div className="content">
      <div className="orderHead">
        <HeadSearch currentIndex={''} isDisplay={true} />
      </div>
      {!localStorage.getItem('userId') ? (
        <div>
          <Alert description="请登录后查看" type="warning" showIcon closable />
          <div className="nullPage">
            <img src={nullImage} className="nullImage" />
          </div>
        </div>
      ) : (
        <div className="orderContent">
          <div className="content_card">
            <div className="common_width dm_MyShoppingCart">
              <Row className="table_title">
                <Typography.Title level={4}>我的购物车</Typography.Title>
                <div>
                  （当前购物车共有 <i>{source.length}</i> 件商品）
                </div>
              </Row>
              <Table
                columns={columns}
                dataSource={source}
                pagination={false}
                footer={() => footer()}
                bordered={true}
                rowKey={record => record.ID}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCat;
