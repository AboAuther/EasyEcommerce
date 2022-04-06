const MessageChosen = (props: {
  basicInfo: {
    id: number;
    price: number;
    mainPicture: string;
    description: string;
  };
  num: number | null;
}) => {
  const { basicInfo, num } = props;
  return (
    <div className="itemContentMessage">
      <img src={basicInfo.mainPicture} className="shopImage" />
      <div className="shopContent">
        <div className="desc">{basicInfo.description}</div>
        <div className="chosenContent">
          <span className="price">￥{Number(basicInfo.price).toFixed(2)}</span>
          <span className="num">x{num === null ? 0 : num}</span>
        </div>
      </div>
    </div>
  );
};
export default MessageChosen;
