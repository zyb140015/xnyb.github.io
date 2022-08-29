import { Button, Checkbox, Form, Input } from 'antd';
import React, {
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
} from 'react';

const App = forwardRef((props, ref: any) => {
  const [val, setVal] = useState('');
  useImperativeHandle(ref, () => ({
    val,
    handleClick,
  }));
  const handleClick = () => {
    console.log('点击了提交,清空子组件输入框内容');
    setVal('');
  };
  return (
    <div>
      <Input
        placeholder="请输入内容"
        value={val}
        onInput={(e: any) => setVal(e.target.value)}
      ></Input>
      {/* <Button onClick={handleClick}>清空</Button> */}
    </div>
    // <Form
    //   name="basic"
    //   labelCol={{ span: 8 }}
    //   wrapperCol={{ span: 16 }}
    //   initialValues={{ remember: true }}
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
    //   autoComplete="off"
    // >
    //   <Form.Item
    //     label="Username"
    //     name="username"
    //     rules={[{ required: true, message: 'Please input your username!' }]}
    //   >
    //     <Input />
    //   </Form.Item>

    //   <Form.Item
    //     label="Password"
    //     name="password"
    //     rules={[{ required: true, message: 'Please input your password!' }]}
    //   >
    //     <Input.Password />
    //   </Form.Item>

    //   <Form.Item
    //     name="remember"
    //     valuePropName="checked"
    //     wrapperCol={{ offset: 8, span: 16 }}
    //   >
    //     <Checkbox>Remember me</Checkbox>
    //   </Form.Item>

    //   <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    //     <Button type="primary" htmlType="submit">
    //       Submit
    //     </Button>
    //   </Form.Item>
    // </Form>
  );
});

export default App;
