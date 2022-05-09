export interface Address {
  index?: number;
  id?: number;
  name?: string;
  region?: string;
  detail?: string;
  phone?: string;
  isDefault?: boolean;
}
const addressSource = [
  {
    index: 1,
    id: 1,
    name: '小宝',
    region: '上海市徐汇区',
    detail: '古美小区',
    phone: '1124534534',
    isDefault: true,
  },
  {
    index: 2,
    id: 2,
    name: '小jun',
    region: '上海市徐汇区',
    detail: '古美小区',
    phone: '1124534534',
    isDefault: false,
  },
  {
    index: 3,
    id: 3,
    name: '小哈',
    region: '上海市徐汇区',
    detail: '古美小区',
    phone: '1124534534',
    isDefault: false,
  },
  {
    index: 4,
    id: 4,
    name: '小啦',
    region: '上海市徐汇区',
    detail: '古美小区',
    phone: '1124534534',
    isDefault: false,
  },
];
export default addressSource;
