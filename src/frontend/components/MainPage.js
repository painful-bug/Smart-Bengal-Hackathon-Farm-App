import { React, useState } from "react";
import { Button, Flex, Form, Input, Select, Space } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const MainPage = () => {
  const [form] = Form.useForm();
  const [predictedCrop, setPredictedCrop] = useState("");
  const [loadings, setLoadings] = useState([]);


  const onFinish = (values, index) => {
    fetch("http://127.0.0.1:8000/predict/?q=" + values.query, {
      method: "POST",
    }).then((response) => {
      response.json().then((data) => setPredictedCrop(data));
    });
  };

  return (
    <div>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        {
          //input code
        }
        <Form.Item
          name="query"
          label="query"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Enter the parameters" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="dashed" danger onSubmit={onFinish} htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <h1
        style={{
          textAlign: "center",
        }}
      >
        Predicted Crop :{predictedCrop}
      </h1>
    </div>
  );
};
