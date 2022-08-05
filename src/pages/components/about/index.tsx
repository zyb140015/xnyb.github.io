import React from "react";
import styles from './index.less'

const About = ()=>{
  return (
    <div className={styles.about}>
      <div>
        <img
          src={require('../../../assets/man.jpeg')}
          alt="man"
          className={styles.man}
        />
      </div>
      <div className={styles.user}>
        <div className={styles.name}>张毅波</div>
        <div className={styles.title}>你怎能勉强向南的人陪你向北</div>
        <div className={styles.tips}>联系我</div>
        <div>邮箱：568272239</div>
        <div>电话：15708422834</div>
      </div>
    </div>
  );
}


export default About
