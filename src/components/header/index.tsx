import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { history } from 'umi';
import styles from './index.less';

const HeaderPage = () => {
  const dispatch = useDispatch();
  const router = useSelector((state: any) => state.router);

  const [arr, setArr] = useState([
    { name: '首页', id: 1, click: true, path: '/home' },
    { name: '关于', id: 2, path: '/about' },
  ]);
  const handleClick = (v: number) => {
    const newArr = arr.map((val) => {
      val.click = false;
      if (v == val.id) {
        val.click = true;
        dispatch(action('router/save', { id: val.id }));
        history.push(val.path);
      }
      return val;
    });
    setArr(newArr);
  };
  useEffect(() => {
    if (!router || !router.id) {
      // 解决刷新token消失图标显示错误问题
      if (history.location.pathname) {
        arr.forEach((v) => {
          if (v.path === history.location.pathname) {
            dispatch(action('router/save', { id: v.id }));
          }
        });
      } else {
        dispatch(action('router/save', { id: arr[0].id }));
      }
    }
  }, []);
  const action = (type: string, payload: any) => ({ type, payload });
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div>
          <img src={require('../../assets/logo.png')} className={styles.logo} />
        </div>
        <div>西南以北</div>
      </div>
      <div className={styles.headerRight}>
        {arr.map((v) => (
          <div
            key={v.id}
            className={styles.navName}
            onClick={() => handleClick(v.id)}
          >
            {v.name}
            {v.id == router.id && (
              <img
                className={styles.accuracy}
                src={require('../../assets/accuracy.png')}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderPage;
