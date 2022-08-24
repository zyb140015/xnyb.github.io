import React, { useEffect, useState } from 'react';
import HeaderPage from '../../components/header/index';
import axios from 'axios';
import { message, Button } from 'antd';
import styles from './index.less';
interface Image {
  id: string;
  url: string;
  width: number;
  height: number;
}
const Cat = () => {
  const [image, setImage] = useState<Image>();
  useEffect(() => {
    getImg();
  }, []);
  const getImg = () => {
    axios({
      method: 'get',
      url: 'https://api.thecatapi.com/v1/images/search',
      data: {
        limit: 1,
        size: 'full',
      },
    })
      .then((response) => {
        console.log(response.data, 'response');
        setImage(response.data[0]);
      })
      .catch((error) => {
        message.error('请求失败啦～');
      });
  };
  return (
    <div className={styles.cat}>
      <div>难道一直叫我喵喵吗～</div>
      <Button type="primary" className={styles.btn} onClick={getImg}>
        有请下一位小喵咪～
      </Button>
      {JSON.stringify(image) !== '{}' && image && (
        <div>
          <img src={image.url} style={{ height: '300px' }}></img>
        </div>
      )}
    </div>
  );
};

export default Cat;
