import { Modal, Form, Row, Col, Input, Radio, Button } from 'antd';
import './index.less';
import { useEffect } from 'react';
import { Address } from '../mock';

const AddressModal = (props: {
  visible: boolean | undefined;
  handleCancel: any;
  address: Address;
}) => {
  const { visible, handleCancel, address } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    if (Object.keys(address).length === 0) {
      form.resetFields();
    } else {
      const { name, region, detail, phone, isDefault } = address;
      form.setFieldsValue({
        name,
        region,
        detail,
        phone,
        isDefault,
      });
    }
  }, [address]);

  const handleFinish = () => {
    // console.log(value);
  };

  const handleReset = () => {
    form.resetFields();
  };
  return (
    <Modal
      width={800}
      title="添加收货地址"
      visible={visible}
      // onOk={value => handleOk(value)}
      onCancel={handleCancel}
      destroyOnClose={true}
      footer={null}
      className="dm_ReceivingAddress_modal">
      <Form form={form} onFinish={handleFinish}>
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
        <Row className="radio">
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
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </Radio.Group>
          </Form.Item>
        </Row>
        <Row style={{ margin: '0 200px' }}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ margin: '0 8px' }}>
              保存
            </Button>
            {address && (
              <Button
                htmlType="button"
                onClick={handleReset}
                style={{ margin: '0 8px' }}>
                重置
              </Button>
            )}
          </Form.Item>
        </Row>
      </Form>
    </Modal>
  );
};
export default AddressModal;
