import React from 'react';
import styles from './index.less';
import RViewerJS from 'viewerjs-react';
const VuePage = () => {
  return (
    <div className={styles.vue}>
      <div className={styles.content}>
        <div className={styles.name}>问题记录</div>
        <div className={styles.list}>
          <div className={styles.title}>
            问题一：div嵌套内层div的margin-top转移给外层div的解决办法
          </div>
          <div className={styles.substance}>
            <div>解决办法：</div>
            <div>1.给父元素增加overflow:hidden</div>
            <div>2.给父元素设置padding-top，值为需要设置的margin-top值</div>
            <RViewerJS>
              <img
                className={styles.img}
                src={require('../../assets/img1.png')}
                alt="图片1"
              ></img>
            </RViewerJS>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.title}>问题2:Ref的使用</div>
          <div className={styles.substance}>
            <div className={styles.headTitle}>vue中使用ref</div>
            <RViewerJS>
              <img
                className={styles.img}
                src={require('../../assets/img2.png')}
                alt="图片2"
              ></img>
              <img
                className={styles.img}
                src={require('../../assets/img3.png')}
                alt="图片3"
              ></img>
              <img
                className={styles.img}
                src={require('../../assets/img4.png')}
              ></img>
            </RViewerJS>
            <div className={styles.headTitle}>react中使用ref</div>
            <p className={styles.font}>useRef</p>
            <div>
              useRef返回一个可变的ref对象，其.current属性被初始化为传入的参数（initialValue）。返回的ref对象在整个组件的生命周期内持续存在
            </div>
            <p className={styles.font}>useImperativeHandle</p>
            <div>
              <p>
                useImperativeHandle可以让你在使用ref时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用ref这样的命令式代码。
              </p>
              <p>useImperativehandle应当与forwardRef一起使用</p>
            </div>
            <p className={styles.font}>React.forwardRef</p>
            <div>
              <p>
                React.forwardRef会创建一个React组件，这个组件能够将其接受的ref属性转发到其组件树下的另一个组件中
              </p>
              <div>
                <p>使用场景：</p>
                <p>1.转发refs到DOM组件。</p>
                <p>2.在高阶组件中转发refs</p>
              </div>
            </div>
            <div>
              <RViewerJS>
                <img
                  className={styles.img}
                  src={require('../../assets/img5.png')}
                  alt="图片5"
                ></img>
                <img
                  className={styles.img}
                  src={require('../../assets/img6.png')}
                  alt="图片6"
                ></img>
                <img
                  className={styles.img}
                  src={require('../../assets/img7.png')}
                  alt="图片7"
                ></img>
              </RViewerJS>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VuePage;
