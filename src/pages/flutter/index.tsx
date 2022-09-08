import styles from './index.less';
import RViewerJS from 'viewerjs-react';
const FlutterPage = () => {
  return (
    <RViewerJS>
      <div className={styles.flutterPage}>
        <div className={styles.content}>
          <div className={styles.title}>flutter学习笔记</div>
          <div className={styles.substance}>
            <div className={styles.flex}>
              <text className={styles.block}>学习链接：</text>
              <div className={styles.mr20}>
                <a target="_blank" href="https://flutter.cn/">
                  flutter官网
                </a>
              </div>
              <a target="_blank" href="https://book.flutterchina.club/">
                实战
              </a>
            </div>
            <div>
              <text className={styles.block}>启动模拟器：</text> open -a
              simulator
            </div>
            <div>
              <text className={styles.block}>启动项目：</text>
              使用flutter run 或在vscode中直接点击运行和调试
            </div>
            <div className={styles.red}>lib/main.dart是项目初始页面</div>
            <div className={styles.mb20}>
              <div className={styles.block}>StatelessWidget:</div>
              <div>
                StatelessWidget用于不需要维护状态的场景，它通常在build方法中通过嵌套其它Widget来构建UI，在构建过程中会递归的构建其嵌套的Widget
              </div>
              <img
                className={styles.img}
                src={require('../../assets/flutter1.png')}
              ></img>
              <img
                className={styles.img}
                src={require('../../assets/flutter2.png')}
              ></img>
            </div>
            <div>
              <div className={styles.block}>statefulWidget:</div>
              <div>
                和StatelessWidget一样，StatefulWidget也是继承自widget类，并重写了createElement()方法，不同的是返回的Element
                对象并不相同；另外StatefulWidget类中添加了一个新的接口createState().
              </div>
              <img
                className={styles.img}
                src={require('../../assets/flutter3.png')}
              ></img>
            </div>
            <div className={styles.block}>生命周期</div>
            {/* <div>
            <p>Dart</p>
            <div>
              1.var。
              <p>相当于js中的var,但是赋值后类型确定就不能改变其类型</p>
            </div>
            <div>
              2.dynamic和Object。
              <p>
                Object是Dart中所有对象的根基类，Dart中所有类型都是Object中的子集（报错Function和Null）。所以任何类型的数据都可以赋值给Object声明的对象
              </p>
              <p>
                dynamic和Object声明的对象都可以赋值任意对象,且后期可以修改赋值类型
              </p>
              <p>
                不同：dynamic声明的对象编译器会提供所有可能的组合，而Objeect声明的对象只能使用Object的属性和方法，否则编译器会报错
              </p>
            </div>
            <div>3.final和const。</div>
            <p>
              如何从未打算改变一个变量。被final或const修饰的变量，变量类型可以直接省略
            </p>
            <p>一个final变量只能被执行一次</p>
            <p>
              区别：const变量是一个编译时常量（编译时直接替换为常量值），final变量在第一次使用时被初始化
            </p>
            <div>4.空安全。</div>
            <div>
              Dart引入空安全前，代码执行不会报错，只有触发的时候会报错。有了空安全，定义变量时我们可以指定变量是可空还是不可空。
              <p>int i = 9 //默认不可空，初始时初始化 int定义整数类型</p>
              <p>int? j // 定义为可空。使用前必须判空</p>
              <div>
                late int k;
                <p>k = 9;</p>
                如果预期变量不为空，但在定义时不确定其初始值，可以加上late关键字，表示会稍后初始化，但是在正式使用它之前必须得保证初始化过，否则报错
                <p>写法：print(i! * 8);fun!();fun?.call()</p>
              </div>
            </div>
            <div>
              5.函数。
              <p>
                Dart是一种真正面向对象的语言，所以即使时函数也是对象，并且有个类型Funtion。意味着函数可以赋值给变量或作为参数传递给其他函数
              </p>
            </div>
            <div>
              6.函数。
              <p>Dart不支持多继承的，但是他支持mixin</p>
              写法：class Dog with Eat, Walk{}
            </div>
            <div>
              7.异步支持
              <div>
                Dart类库有非常多的返回Future或者Stream对象函数。这些函数都被称为异步函数
              </div>
              <div>
                7.1
                Future。与js中的promise非常相似。Future的所有的Api的返回值依然是一个Future对象，所以可以很方便的进行链式调用
              </div>
              <div>7.2 async/await 与js中功能一样</div>
              <div>7.3 Stream 可以接收多个异步操作的结果(成功或失败)</div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </RViewerJS>
  );
};

export default FlutterPage;
