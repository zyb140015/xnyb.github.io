import { useRef } from 'react';
import App from './components/form/index';
import { Button } from 'antd';
const TestPage = () => {
  const dataRef: any = useRef(null);
  const handleClick = () => {
    console.log(dataRef.current.val, 'dataRef');
  };
  const handleEmpty = () => {
    dataRef.current.handleClick();
  };
  return (
    <div style={{ width: '500px', margin: '20% auto' }}>
      <App ref={dataRef} />
      <p>
        <Button onClick={handleClick}>获取ref</Button>
      </p>
      <p>
        <Button onClick={handleEmpty}>清空</Button>
      </p>
    </div>
  );
};

export default TestPage;
