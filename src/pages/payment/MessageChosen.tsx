import './buyDrawer.less';

const MessageChosen = (props: { basicInfo: any; num: number | null }) => {
  const { basicInfo, num } = props;
  return (
    <div className="itemContentMessage">
      <img src={basicInfo.productCoverImg} className="shopImage" />
      <div className="shopContent">
        <div className="desc">{basicInfo.productName}</div>
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
