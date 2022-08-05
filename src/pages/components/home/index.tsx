import React from "react";
import styles from './index.less'
const Home = ()=>{
  return (
    <div className={styles.home}>
      <div className={styles.title}>欢迎来到我的博客</div>
      <div className={styles.carImg}>
        <img
          src={require('../../../assets/bg.jpeg')}
          alt="car"
          className={styles.car}
        />
        <img
          src={require('../../../assets/brabus.png')}
          alt="car"
          className={styles.car}
        />
        <img
          src={require('../../../assets/car.webp')}
          alt="car"
          className={styles.car}
        />
      </div>
    </div>
  );
}


export default Home
