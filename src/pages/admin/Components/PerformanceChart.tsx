import UserLine from './dataImage';
import './Layout.less';
const PerformanceChart = () => {
  return(
    <div className="real-content">
 <span><p className="title">销售额</p></span>
 <div className='dataTitle'>
   <div className='dataContent'>
     <h3>昨日支付金额(元)</h3>
     <div className='dataMoney'>677.00</div>
   </div>
   <div className='dataContent'>
     <h3>本月已完成(元)</h3>
     <div className='dataMoney'>3412.00</div>
   </div>
   <div className='dataContent'>
     <h3>本月目标(元)</h3>
     <div className='dataMoney'>10000</div>
   </div>
   <div className='dataContent'>
     <h3>完成进度</h3>
     <div className='dataMoney'>34.12%</div>
   </div>
 </div>
 <UserLine />
    </div>
  )
}

export default PerformanceChart;
