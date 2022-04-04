import { Modal, Form, Row, Col, Input, Radio } from 'antd';
import { useState } from 'react';
import './index.less';

const AddressModal = (props: {
  visible: boolean | undefined;
  handleCancel: any;
}) => {
  const { visible, handleCancel } = props;
  const [fields, setFields] = useState<FieldData[]>([{ name: '', value: '' }]);
  return (
    <Modal
      width={800}
      title="添加收货地址"
      visible={visible}
      // onOk={value => handleOk(value)}
      onCancel={handleCancel}
      destroyOnClose={true}
      className="dm_ReceivingAddress_modal">
      <Form layout="inline">
        <Row>
          <Col span={12}>
            <Form.Item
              label="收货人"
              name="name"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: '必填',
                },
              ]}>
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="所在地区"
              name="region"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: '必填',
                },
              ]}>
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              label="详情地址"
              name="detail"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: '必填',
                },
              ]}>
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="联系电话"
              name="phone"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: '必填',
                },
              ]}>
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
        </Row>
        <Col span={12} className="radio">
          <Form.Item
            label="设为默认地址"
            name="isDefault"
            rules={[
              {
                required: true,
                message: '必填',
              },
            ]}>
            <Radio.Group>
              <Radio value={1}>是</Radio>
              <Radio value={0}>否</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Form>
    </Modal>
  );
};
export default AddressModal;
