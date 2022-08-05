import React, { useState } from 'react';
import styles from './index.less';

const HeaderPage = ({handleSetCount}) => {
  const [arr, setArr] = useState([{ name: '首页',id:1,click:true }, { name: '关于',id:2 }]);
  const handleClick = (v)=>{
    const newArr = arr.map((val)=>{
      val.click = false;
      if(v.id == val.id){
        val.click = true
        handleSetCount(val.id)
      }
      return val
    })
    setArr(newArr)
  }
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div>
          <img
            src={require('../../../assets/logo.png')}
            className={styles.logo}
          />
        </div>
        <div>西南以北</div>
      </div>
      <div className={styles.headerRight}>
        {arr.map((v) => (
          <div key={v.id} className={styles.navName} onClick={()=>handleClick(v)}>
            {v.name}
            {v.click && (
              <img
                className={styles.accuracy}
                src={require('../../../assets/accuracy.png')}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderPage;
