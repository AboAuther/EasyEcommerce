import './index.less';
import SaleChart from './SaleChart';

const PerformanceChart = (props: { data: any }) => {
  const { data } = props;
  return (
    <div className="real-content">
      <span>
        <p className="title">销售额</p>
      </span>
      <SaleChart source={data?.saleDatas} />
    </div>
  );
};

export default PerformanceChart;
