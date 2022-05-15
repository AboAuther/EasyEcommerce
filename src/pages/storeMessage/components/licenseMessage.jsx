import { Row, Col } from 'antd';
import './layout.less';

const LicenseMessage = props => {
  const { source } = props;
  return (
    <div className="real-content">
      <span>
        <p className="title">门店详情</p>
      </span>
      <div style={{ padding: '0 0 20px 0 ' }}>
        <Row wrap>
          <Col span={12}>
            <div className="content">
              {/* <div>营业执照</div> */}
              {source?.hygieneUrl && (
                <img
                  src={source?.hygieneUrl}
                  alt="营业执照"
                  height={300}
                  width={260}
                />
              )}
            </div>
          </Col>

          <Col span={12}>
            <div>
              {/* <div>卫生许可证</div> */}
              {source?.licenseUrl && (
                <img src={source?.licenseUrl} alt="卫生许可证" height={300} />
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LicenseMessage;
