import React from 'react';
import Link from "next/link";
import styles from "./styles.module.css";

const NavbarComponent = () => {
  return (
    <>
      <header className={styles.headerMain}>
        <div className={styles.topBar}>
          <div className="container">
            <div className={`${styles.pullRight} ${styles.lang}`}>
              <a href="?lang=en" className={styles.langA}>
                <font className={styles.verticalAlign}/>
              </a>

              <font className={styles.verticalAlign}>
                <a href="?lang=es" className={`es ${styles.selected}`}>
                  <font className={styles.verticalAlign}>Español</font>
                </a>

                <a href="?lang=en" className="en ">
                  <font className={styles.verticalAlign}>inglés</font>
                </a>
              </font>

              <a href="?lang=es" className={`es ${styles.selected}`}>
                <font className={styles.verticalAlign}/>
              </a>
            </div>

          </div>
        </div>
        <div className="container">
          <nav
            className={`navbar navbar-default ${styles.navbarMain}`}
            role="navigation">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className={styles.navbarToggle} data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1">
                            <span className={styles.srOnly}>
                                <font className={styles.verticalAlign}>
                                    <font className={styles.verticalAlign}>Navegación de palanca</font>
                                </font>
                            </span>
                  <span className={styles.iconBar}/>
                  <span className={styles.iconBar}/>
                  <span className={styles.iconBar}/>
                </button>
                <div className={styles.logoContainer}>
                  <Link href="/">
                    <a className={`${styles.navbarBrand} ${styles.logo}`}/>
                  </Link>
                </div>
              </div>

              <div className={`navbar-collapse collapse ${styles.forceCollapse}`}>
                <ul className={`${styles.nav} ${styles.navbarNav}`}>
                  <li>
                    <Link href="/blog">
                      <a className={styles.navbarNavA}>Noticias</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/register">
                      <a className={styles.navbarNavA}>Registro</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/community">
                      <a className={styles.navbarNavA}>Comunidad</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/downloads">
                      <a className={styles.navbarNavA}>Descargas</a>
                    </Link>
                  </li>
                  <li>
                    <a href="https://sro-latino.com/" className={styles.navbarNavA}>Foro</a>
                  </li>
                  <li>
                    <a href="http://wiki.srolatino-servers.com/" className={styles.navbarNavA}>
                      <font
                        className={styles.verticalAlign}
                      >
                        <font className={styles.verticalAlign}>Wiki</font>
                      </font>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavbarComponent;
