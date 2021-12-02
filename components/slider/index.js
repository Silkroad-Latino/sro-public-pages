import React from 'react';
import styles from './styles.module.css'

const SliderComponent = () => {
  return (
    <>
      <div className="col-md-9 home-slider">
        <div className={`bx-wrapper ${styles.bxWrapper}`}>
          <div className={`bx-viewport ${styles.bxViewport}`}>
            <div className={`bx-slider ${styles.bxSlider}`}>
              <div className={styles.divStyle}>
                <a href="https://www.alfa.srolatino-servers.com/download" >
                  <img className={styles.imgSlider} data-src="/assets/images/slide-1-min.png"
                       src="/assets/img/slide-1-min.png"/>
                </a>
              </div>

              <div className={styles.divStyle}>
                <a href="https://www.alfa.srolatino-servers.com/download" >
                  <img className={styles.imgSlider} data-src="/assets/images/slide-2-min.png"
                       src="/assets/img/slide-2-min.png"/>
                </a>
              </div>

              <div className={styles.divStyle}>
                <a href="https://www.alfa.srolatino-servers.com/download" >
                  <img className={styles.imgSlider} data-src="/assets/images/slide-3-min.png"
                       src="/assets/img/slide-3-min.png"/>
                </a>
              </div>

              <div className={styles.divStyle}>
                <a href="https://www.alfa.srolatino-servers.com/download">
                  <img className={styles.imgSlider} data-src="/assets/images/slide-4-min.png"
                       src="/assets/img/slide-4-min.png"/>
                </a>
              </div>
              <div className={styles.divStyle}>
                <a href="https://www.alfa.srolatino-servers.com/register" >
                  <img className={styles.imgSlider} data-src="/assets/images/slide-5-min.png"
                       src="/assets/img/slide-5-min.png"/>
                </a>
              </div>
            </div>
          </div>

          <div className="bx-controls bx-has-controls-direction">
            <div className="bx-controls-direction">
              <a className={`bx-prev ${styles.bxControlsA}`} href="" >
                <font className={styles.verticalAlign}>
                  <font className={styles.verticalAlign}>Anterior</font>
                </font>
              </a>
              <a className={`bx-next ${styles.bxControlsA}`} href="">
                <font className={styles.verticalAlign}>
                  <font sclassName={styles.verticalAlign}>próximo</font>
                </font>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderComponent;
