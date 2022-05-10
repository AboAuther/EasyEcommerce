const MessageChosen = (props: {
  basicInfo: {
    key: number;
    productPrice: number;
    productImg: string;
    description: string;
  };
  num: number | null;
}) => {
  const { basicInfo, num } = props;
  return (
    <div className="itemContentMessage">
      <img src={basicInfo.productImg} className="shopImage" />
      <div className="shopContent">
        <div className="desc">{basicInfo.description}</div>
        <div className="chosenContent">
          <span className="price">
            ￥{Number(basicInfo.productPrice).toFixed(2)}
          </span>
          <span className="num"> x{num === null ? 0 : num}</span>
        </div>
      </div>
    </div>
  );
};
export default MessageChosen;
