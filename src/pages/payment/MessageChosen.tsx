const MessageChosen = (props: {
  basicInfo:  any;
  // {
  //   // id: number;
  //   // price: number;
  //   // mainPicture: string;
  //   // description: string;
  //   // productCoverImg: string;
  //   // productName: string;
  //   // productIntro: string;
  //   // sellingPrice: number;
  //   // categoryId: number;
  // };
  num: number | null;
}) => {
  const { basicInfo, num } = props;
  return (
    <div className="itemContentMessage">
      <img src={basicInfo.productCoverImg} className="shopImage" />
      <div className="shopContent">
        <div className="desc">{basicInfo.productIntro}</div>
        <div className="chosenContent">
          <span className="price">
            ￥{Number(basicInfo.sellingPrice).toFixed(2)}
          </span>
          <span className="num">x{num === null ? 0 : num}</span>
        </div>
      </div>
    </div>
  );
};
export default MessageChosen;
