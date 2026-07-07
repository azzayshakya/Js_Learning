import { Button, Col, Form, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';

export default function Child({ selectColor, ChangeNumber }) {
  const [form] = Form.useForm();
  const [number, setNumber] = useState(0);
  console.log('babes', number);
  const colorOptions = [
    { label: 'RED', value: 'red' },
    { label: 'GREEN', value: 'green' },
    { label: 'BLUE', value: 'blue' },
  ];
  useEffect(() => {
    ChangeNumber(number);
  }, [number]);
  return (
    <div>
      <Form form={form} id="selectColor">
        <Row gutter={[24]}>
          <Col span={6}>
            <Form.Item label={'Select Color'}>
              <Select
                placeholder={'Please Select Color'}
                options={colorOptions}
                onChange={(e) => {
                  selectColor(e);
                }}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label={'Number Management'}>
              <Button
                onClick={() => setNumber(number + 1)}
                style={{
                  background: 'green',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '10px',
                  marginRight: '1rem',
                }}>
                ADD
              </Button>
              <Button
                onClick={() => setNumber(number - 1)}
                style={{
                  background: 'red',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '10px',
                }}>
                SUBS
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
