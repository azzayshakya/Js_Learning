import { Button, Col, Form, Input, Row, Select } from "antd";
import React, { useEffect, useState } from "react";

export default function Child({
  selectColor,
  ChangeNumber,
  AddObject,
  filterItems,
}) {
  const [form] = Form.useForm();
  const [number, setNumber] = useState(0);
  const colorOptions = [
    { label: "RED", value: "red" },
    { label: "GREEN", value: "green" },
    { label: "BLUE", value: "blue" },
  ];

  useEffect(() => {
    ChangeNumber(number);
  }, [number]);
  return (
    <div>
      <Form form={form} id="selectColor">
        <Row gutter={[24]}>
          <Col span={6}>
            <Form.Item label={"Select Color"}>
              <Select
                placeholder={"Please Select Color"}
                options={colorOptions}
                onChange={(e) => {
                  selectColor(e);
                }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label={"Number Management"}>
              <Button
                onClick={() => setNumber(number + 1)}
                style={{
                  background: "green",
                  color: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  marginRight: "1rem",
                }}
              >
                ADD
              </Button>
              <Button
                onClick={() => setNumber(number - 1)}
                style={{
                  background: "red",
                  color: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  marginRight: "1rem",
                }}
              >
                SUBS
              </Button>
              <Button
                onClick={() => {
                  const randomLetter = String.fromCharCode(
                    65 + Math.floor(Math.random() * 26),
                  );
                  const randomId = Math.floor(100 + Math.random() * 900);
                  AddObject({ id: randomId, name: `AZ_${randomLetter}` });
                }}
                style={{
                  background: "Blue",
                  color: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  marginRight: "1rem",
                }}
              >
                Add New Object
              </Button>
            </Form.Item>
            <Col span={6}>
              <Form.Item label={"Select Color"}>
                <Input onChange={(e) => filterItems(e.target.value)} />
              </Form.Item>
            </Col>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
