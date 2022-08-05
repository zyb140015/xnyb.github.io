import HeaderPage from './components/header/index';
import Home from '@/pages/components/home';
import About from '@/pages/components/about';
import { useState } from 'react';
import styles from './index.less';
export default function IndexPage() {
  const [count, setCount] = useState(1);
  const handleSetCount =(val:number)=>{
    setCount(val)
  }
  return (
    <div>
      <HeaderPage handleSetCount={handleSetCount} />
      {count == 1 ? <Home /> : <About />}
    </div>
  );
}
