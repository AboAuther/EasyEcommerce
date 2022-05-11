import axios from 'axios';

interface Banner {
  productId: string;
  productName: string;
  productIntro: string;
  categoryId: number;
  productCoverImg: string;
  productBanner: string;
  originalPrice: number;
  sellingPrice: number;
  stockNum: number;
  click_num: number;
  tag: string;
  sellStatus: number;
  createUser: string;
  updateUser: string;
  productDetailContent: string;
  isDeleted: boolean;
  createAt: string;
  updateAt: string;
}
export const get = async () => {
  // const res = await axios.get(`${DOMAIN}/product/banner`);
  // return res.data;
};
