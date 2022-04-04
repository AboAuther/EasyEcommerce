export interface OrdersData {
  id: number;
  submitTime: string;
  ordernum: number;
  content: Array<{
    key: number;
    description: string;
    price: number;
    num: number;
    totalprice: number;
  }>;
}
export const dataSource = [
  {
    id: 1,
    submitTime: '2022-3-24 14:00',
    ordernum: 1234567,
    content: [
      {
        key: 1,
        // mainPicture: '',
        description: '这是一个非常非常棒的商品',
        price: 32,
        num: 1,
        totalprice: 32,
      },
      {
        key: 2,
        // mainPicture: '',
        description: '第一个订单的第二个商品',
        price: 32,
        num: 1,
        totalprice: 32,
      },
    ],
  },
  {
    id: 2,
    submitTime: '2022-3-24 14:00',
    ordernum: 1234567,
    content: [
      {
        key: 3,
        // mainPicture: '',
        description: '这是一个非常非常棒的商品',
        price: 32,
        num: 1,
        totalprice: 32,
      },
    ],
  },
  {
    id: 3,
    submitTime: '2022-3-24 14:00',
    ordernum: 1234567,
    content: [
      {
        key: 4,
        // mainPicture: '',
        description: '这是一个非常非常棒的商品',
        price: 32,
        num: 1,
        totalprice: 32,
      },
    ],
  },
];
