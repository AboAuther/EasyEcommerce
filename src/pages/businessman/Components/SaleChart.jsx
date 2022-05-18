import { Line } from '@ant-design/charts';
import moment from 'moment';
import './index.less';

const SaleChart = props => {
  const { source } = props;
  const map = { LastMonth: [], CurrentMonth: [] };
  let lineData = [];
  const getData = list => {
    const result = map;
    let arr = [];
    list.forEach(item => {
      if (item.date === 'LastMonth') {
        arr = result.LastMonth;
        arr = arr.push(item);
      } else {
        arr = result.CurrentMonth;
        arr.push(item);
      }
    });
    const curMonth = getCurrentList();
    const lastMonth = getLastList();
    return curMonth.concat(lastMonth);
  };
  const getCurrentList = () => {
    // 本月数据
    const curtMonth = map.CurrentMonth.map(item => {
      return {
        day: moment(item.time).format('YYYY-MM-DD'),
        value: item.amount,
        category: '本月',
      };
    });
    return curtMonth;
  };

  const getLastList = () => {
    // 上月数据
    const currntMonth = map.LastMonth.map(item => {
      return {
        day: moment(item.time).format('YYYY-MM-DD'),
        value: item.amount,
        category: '上月',
      };
    });
    return currntMonth;
  };

  lineData = source && getData(source);
  const config = {
    data: lineData || [],
    xField: 'day',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v: any) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`),
      },
    },
    color: ['#1979C9', '#FAA219'],
  };
  return (
    <div className="chartPadding">
      <Line {...config} />
    </div>
  );
};
export default SaleChart;
