import { Row, Col } from "antd";
import StoreMessage from "../mock/index";
import './layout.less';
import zhizhao from '../components/images/zhizhao.jpeg';
import weisheng from '../components/images/weisheng.jpeg';

const LicenseMessage = () => {
  return (
    <div className="real-content">
      <span><p className="title">门店详情</p></span>
      <div style={{padding: '0 0 20px 0 '}}>
      <Row wrap>
          <Col span={12}>
            <div className="content">
              {/* <div>营业执照</div> */}
              <img src={zhizhao} alt="营业执照" height={300} width={260} />
            </div>
          </Col>

          <Col span={12}>
            <div>
              {/* <div>卫生许可证</div> */}
              <img src={weisheng} alt="卫生许可证" height={300} />
            </div>
          </Col>
        </Row>
        </div>
    </div>
  )
}

export default LicenseMessage;
