import { Button, Col, Row, Table, Typography } from 'antd';
import HeardSearch from '../home/components/heardSearch';
import './index.less';
import { columns, Data } from './data';
import dataSource from './mock';

const ShoppingCat = () => {
  const footer = () => {
    let total = 0;
    let size = 0;
    const priceList = dataSource.map(item => ({
      total: item.price,
      size: item.num,
    }));
    priceList.forEach(item => {
      total += item.total;
      size += item.size;
    });
    return (
      <Row>
        <Col span={12} className="left">
          <Button>批量删除</Button>
          <Button>批量加入收藏</Button>
        </Col>
        <Col span={12} className="right">
          <span className="num">
            已选择<i>{size}</i>件商品
          </span>
          <div>
            总价：<span>¥{total.toFixed(2)}</span>
          </div>
          <span className="go-pay">去结算</span>
        </Col>
      </Row>
    );
  };

  return (
    <div className="content">
      <div className="orderHead">
        <HeardSearch currentIndex={''} isDisplay={true} />
      </div>
      <div className="orderContent">
        <div className="content_card">
          <div className="common_width dm_MyShoppingCart">
            <Row className="table_title">
              <Typography.Title level={4}>我的购物车</Typography.Title>
              <div>
                {/* （当前购物车共有 <i>{allProductsSize}</i> 件商品） */}
              </div>
            </Row>
            <Table<Data>
              columns={columns}
              dataSource={dataSource}
              pagination={false}
              footer={() => footer()}
              bordered={true}
              rowKey={record => record.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCat;
