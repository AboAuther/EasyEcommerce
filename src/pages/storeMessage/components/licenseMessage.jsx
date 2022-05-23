import { UpCircleOutlined } from '@ant-design/icons';
import { Row, Col, Button, Modal, Form, Upload, message } from 'antd';
import { useState } from 'react';
import axios from 'axios';

import { DOMAIN } from '@/constants';
import './layout.less';

const LicenseMessage = props => {
  const { source, getSource } = props;
  const [visible, setVisible] = useState(false);
  const handleSubmit = async value => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/seller/edit`,
      data: {
        userID: localStorage.getItem('userId'),
        hygieneUrl: value.hygiene.fileList[0].response.entity.data,
        licenseUrl: value.license.fileList[0].response.entity.data,
      },
    }).then(res => {
      if (res.data.entity.success) {
        setVisible(false);
        getSource();
        message.success('上传成功');
      } else {
        message.error(res.data.entity.data);
      }
    });
  };
  return (
    <div className="real-content">
      <span>
        <p className="title">资质详情</p>
      </span>
      <div style={{ padding: '0 0 20px 0 ' }}>
        <Row wrap>
          <Col span={11}>
            <div className="content">
              营业执照
              <div>
                {source?.hygieneUrl && (
                  <img
                    src={source?.hygieneUrl}
                    alt="卫生许可"
                    height={300}
                    width={260}
                    style={{ margin: '20px 0 0 0 ' }}
                  />
                )}
              </div>
            </div>
          </Col>

          <Col span={11}>
            <div className="content">
              卫生许可证
              <div>
                {source?.licenseUrl && (
                  <img
                    src={source?.licenseUrl}
                    alt="营业执照"
                    height={300}
                    width={260}
                    style={{ margin: '20px 0 0 0 ' }}
                  />
                )}
              </div>
            </div>
          </Col>
          <Col span={2}>
            <div className="reUpload">
              <Button
                block={true}
                type="primary"
                onClick={() => setVisible(true)}>
                重新上传
              </Button>
            </div>
          </Col>
        </Row>
        <Modal
          title="重新上传"
          visible={visible}
          footer={false}
          onCancel={() => setVisible(false)}>
          <Form onFinish={handleSubmit}>
            <Form.Item name="license">
              <Upload
                action={`${DOMAIN}/seller/upload`}
                listType="picture"
                name="file"
                maxCount={1}>
                <Button icon={<UpCircleOutlined />}>上传营业执照</Button>
              </Upload>
            </Form.Item>
            <Form.Item name="hygiene">
              <Upload
                action={`${DOMAIN}/seller/upload`}
                listType="picture"
                name="file"
                maxCount={1}>
                <Button icon={<UpCircleOutlined />}>上传卫生许可</Button>
              </Upload>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default LicenseMessage;
