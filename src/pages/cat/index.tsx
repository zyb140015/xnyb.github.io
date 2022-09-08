import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { message, Button, Spin } from 'antd';
import RViewerJS from 'viewerjs-react';
import styles from './index.less';
interface Image {
  id: string;
  url: string;
  width: number;
  height: number;
}
const Cat = () => {
  let loading = false;
  const [image, setImage] = useState<Image>();
  useEffect(() => {
    getImg();
    return () => {
      loading = false;
    };
  }, []);
  const getImg = () => {
    loading = true;
    axios({
      method: 'get',
      url: 'https://api.thecatapi.com/v1/images/search',
      data: {
        limit: 1,
        size: 'full',
      },
    })
      .then((response) => {
        loading = false;
        setImage(response.data[0]);
      })
      .catch((error) => {
        loading = false;
        message.error('请求失败啦～');
      });
  };
  return (
    <RViewerJS>
      <div className={styles.cat}>
        <div className={styles.title}>难道一直叫我喵喵吗～</div>
        <Button
          shape="round"
          size="large"
          type="dashed"
          danger
          className={styles.btn}
          onClick={getImg}
        >
          有请下一位小喵咪～
        </Button>
        {JSON.stringify(image) !== '{}' && image ? (
          <div>
            <img src={image.url} className={styles.img} />
          </div>
        ) : (
          <div>
            <Spin size="large" />
          </div>
        )}
      </div>
    </RViewerJS>
  );
};

export default Cat;
