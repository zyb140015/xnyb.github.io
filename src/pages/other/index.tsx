import React from 'react';
import HeaderPage from '../../components/header/index';
import styles from './index.less';
import { history } from 'umi';

const Other = () => {
  const handleClick = () => {
    history.push('/other/cat');
  };
  return (
    <div>
      <HeaderPage></HeaderPage>
      <div className={styles.other}>
        <div className={styles.otherContent}>
          <div className={styles.otherContentList} onClick={handleClick}>
            谁能拒绝可爱的小喵咪呢～
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
