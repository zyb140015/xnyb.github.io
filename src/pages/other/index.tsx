import React from 'react';
import HeaderPage from '../../components/header/index';
import styles from './index.less';
import { history } from 'umi';

const Other = () => {
  const handleClick = (url: string) => {
    history.push(url);
  };
  return (
    <div>
      <HeaderPage></HeaderPage>
      <div className={styles.other}>
        <div className={styles.title}>杂项</div>
        <div className={styles.otherContent}>
          <div
            className={styles.otherContentList}
            onClick={() => handleClick('/other/cat')}
          >
            猫片～
          </div>
          <div
            className={styles.otherContentList}
            onClick={() => handleClick('/other/vue')}
          >
            一起来学vue～
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
