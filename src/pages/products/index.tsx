/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/order */
/* eslint-disable no-nested-ternary */
import React, { Fragment, useEffect, useState } from 'react';
import { Row, Col, Card, Typography, Pagination, Empty } from 'antd';
import { Link } from '@modern-js/runtime/router';
import { FileList } from '../home/components/mock';
import './index.less';
import HeadSearch from '../home/components/headSearch';
import axios from 'axios';
import { DOMAIN } from '@/constants';
import { useModel } from '@modern-js/runtime/model';
import stateModel from '@/store/store';

const Product = () => {
  const current = 1;
  const { Meta } = Card;
  const { Title } = Typography;
  const [productsList, setProductsList] = useState([]);
  const [state] = useModel(stateModel);
  const [searchList, setSearchList] = useState(state.allList);
  const [classify, setClassify] = useState<number>();
  const [price, setPrice] = useState<number>();
  const total = productsList.length;
  const pageSize = total;

  useEffect(() => {
    const getList = async () => {
      await axios.get(`${DOMAIN}/product/listByCategory`).then(res => {
        setProductsList(res.data.entity.data);
      });
    };
    getList();
  }, []);

  useEffect(() => {
    setSearchList(state.allList);
  }, [state.allList]);

  const handleFileClick = async (value: number) => {
    setPrice(undefined);
    setClassify(value);
    await axios
      .get(`${DOMAIN}/product/listByCategory?category=${value}`)
      .then(res => {
        if (res.data.entity.code === 200) {
          setProductsList(res.data.entity.data);
        } else {
          setProductsList([]);
        }
      });
  };

  const handlePriceClick = async (value: number) => {
    setClassify(undefined);
    setPrice(value);
    await axios
      .get(`${DOMAIN}/product/listByCategory?price=${value}`)
      .then(res => {
        if (res.data.entity.code === 200) {
          setProductsList(res.data.entity.data);
        } else {
          setProductsList([]);
        }
      });
  };
  const tarArr =
    searchList.length !== 0
      ? searchList
      : productsList !== null
      ? productsList
      : null;

  return (
    <div className="dm_Products">
      <HeadSearch currentIndex="2" isDisplay={false} />
      <div className="common_width">
        <div className="page-all">
          {/* 商品筛选 */}
          <div className="filter_title">
            <h1>商品筛选</h1>
            <span className="total">
              共{' '}
              {searchList.length !== 0
                ? searchList.length
                : productsList.length || 0}{' '}
              件商品
            </span>
          </div>
          {/* 商品分类 */}
          <div className="filter_condition">
            <Fragment>
              {/* 分类 */}
              <Row>
                <Col span={2}>分类: </Col>
                <Col span={22}>
                  {FileList.classify.map(item => (
                    <span
                      key={item.value}
                      style={{
                        color: classify === item.value ? '#1890ff' : '',
                      }}
                      onClick={() => handleFileClick(item.value)}>
                      {item.label}
                    </span>
                  ))}
                </Col>
              </Row>

              {/* 价格 */}
              <Row>
                <Col span={2}>价格: </Col>
                <Col span={22}>
                  {FileList.price.map((item, index) => (
                    <span
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      style={{
                        color: price === item.value ? '#1890ff' : '',
                      }}
                      onClick={() => handlePriceClick(item.value)}>
                      {item.label}
                    </span>
                  ))}
                </Col>
              </Row>
            </Fragment>
          </div>
          {/* 商品元素 */}
          {tarArr !== null ? (
            tarArr.length > 0 ? (
              <Row className="all_products">
                {tarArr.map(
                  (item: {
                    productId: string;
                    sellingPrice: number;
                    originalPrice: number;
                    productIntro: string;
                    productCoverImg: string;
                  }) => {
                    const id = Number(item.productId);
                    return (
                      <Col span={6} key={id}>
                        <Card
                          key={id}
                          bordered={false}
                          cover={
                            <Link to={`/products/${id}`}>
                              <img
                                alt=""
                                src={item.productCoverImg}
                                style={{ width: '100%' }}
                                height={210}
                              />
                            </Link>
                          }
                        />
                        <Meta
                          title={
                            <Title level={4}>
                              <span className="unit">¥</span>
                              {item.sellingPrice
                                ? Number(item.sellingPrice).toFixed(2)
                                : 0}
                            </Title>
                          }
                          description={
                            <Link to={`/products/${id}`}>
                              {item.productIntro}
                            </Link>
                          }
                        />
                      </Col>
                    );
                  },
                )}
              </Row>
            ) : (
              <Empty description="抱歉！没有找到符合筛选条件的商品" />
            )
          ) : (
            <Empty description="抱歉！没有找到符合筛选条件的商品" />
          )}
          {total ? (
            <Pagination
              showQuickJumper={true}
              current={current}
              pageSize={pageSize}
              total={total}
              // eslint-disable-next-line no-console
              onChange={() => console.log('change')}
              showTotal={total => `共 ${total}条`}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
