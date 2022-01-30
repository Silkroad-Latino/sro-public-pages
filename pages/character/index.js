import React from "react";

import FooterComponent from "../../components/footer";
import NavbarComponent from "../../components/navbar";

import styles from './styles.module.css'

export default  function  news(){
  return(
    <div>
      <NavbarComponent/>
      <div className="container page-container">
        <div className="page-header">
          <h2 className="page-title">Perfil de personaje</h2>
        </div>
        <div className="col-md-12 account-content">
          <div className="row char-info-content">
            <div
              className="char-info-left col-sm-3 left-separator no-padding-all"
              style={{
                height: '611px;',
              }}>
              <div className="char-info text-center">
                <div className="char-img">
                  <img
                    style={{
                      width: '151px;',
                    }}
                    src="https://www.alfa.srolatino-servers.com/assets/images/char/1912.png"
                    alt=""/>
                    <div className="shadow"/>
                </div>
              </div>
              <div className="col-xs-12">
                <h2 className="char-title ch">
                  <img
                    src="https://www.alfa.srolatino-servers.com/assets/images/ch.png"
                    width="18"
                    height="18"
                    alt=""/>
                    _HiT_HarD
                  </h2>

                <dl className="char-features">
                  <dt>
                    <h5><strong/></h5>
                  </dt>
                  <dt>
                    <h5>
                      Level:
                      <strong>112</strong>
                    </h5>
                  </dt>
                  <dt>
                    <h5>Items Point:
                      <strong>3,457</strong>
                    </h5>
                  </dt>
                  <dt>
                    <h5>STR:
                      <strong>172</strong>
                    </h5>
                  </dt>
                  <dt>
                    <h5>INT:
                      <strong>423</strong>
                    </h5>
                  </dt>
                  <dt>
                    <h5>Skill Points:
                      <strong>2,097</strong>
                    </h5>
                  </dt>
                  <dt>
                    <h5> Guild:
                      <a href="https://www.alfa.srolatino-servers.com/guild/_FreesTyLer_">
                        <img
                          src="https://www.alfa.srolatino-servers.com/assets/images/guild.png"
                          alt=""
                          width="20"
                          height="20"/>
                          <strong>_FreesTyLer_</strong>
                      </a>
                    </h5>
                  </dt>
                  <dt>
                    <h5>Job:
                    <strong>None</strong>
                    </h5>
                  </dt>
                  <dt>
                    <h5>Job Alias:
                      <strong> </strong>
                    </h5>
                  </dt>
                  <dt>
                    <h5>Ultima Conexion:
                      <strong>Dec 31 2019 11:31:00:000PM</strong>
                    </h5>
                  </dt>
                </dl>
              </div>
            </div>

            <div className="col-sm-9 col-md-6 item-group">
              <ul id="myTab" className="nav nav-pills sub-spot-title-list margin-top">
                <li className="sub-spot-title">
                  <h4>Articulos</h4>
                </li>
              </ul>
              <div className="row">
                <div className="items-template">
                  <div
                    data-item="233295"
                    className="char-items-sos wp1"
                    title=" Seal of Nova">
                    <img
                    src="https://www.alfa.srolatino-servers.com/assets/images/items/item/china/weapon/tblade_11.PNG"
                    alt=""/>
                      <span/>
                    </div>

                  <div data-item="0" className="char-items wp2" title="Normal">
                    <img
                    src="https://www.alfa.srolatino-servers.com/assets/images/items/item/clean.PNG"
                    alt=""/>
                      <span/>
                  </div>

                  <div
                    data-item="1707402"
                    className="char-items ha"
                    title="Normal">
                    <img
                      src="https://www.alfa.srolatino-servers.com/assets/images/items/item/china/man_item/heavy_11_ha.PNG"
                      alt=""/>
                      <span/>
                    </div>

                  <div
                    data-item="854363"
                    className="char-items-sos ba"
                    title=" Seal of Nova">
                    <img
                      src="https://www.alfa.srolatino-servers.com/assets/images/items/item/china/man_item/heavy_11_ba.PNG"
                      alt=""/>
                    <span/>
                  </div>

                  <div
                    data-item="278135"
                    className="char-items-sos sa"
                    title=" Seal of Nova">
                    <img
                      src="https://www.alfa.srolatino-servers.com/assets/images/items/item/china/man_item/heavy_11_sa.PNG"
                      alt=""/>
                    <span/>
                  </div>

                  <div
                    data-item="775431"
                    className="char-items-sos aa"
                    title=" Seal of Nova">
                    <img
                      src="https://www.alfa.srolatino-servers.com/assets/images/items/item/china/man_item/heavy_11_aa.PNG"
                      alt=""/>
                      <span/>
                  </div>

                  <div
                    data-item="874834"
                    className="char-items-sos la"
                    title=" Seal of Nova">
                    <img
                      src="https://www.alfa.srolatino-servers.com/assets/images/items/item/china/man_item/heavy_11_la.PNG"
                      alt=""/>
                    <span/>
                  </div>

                  <div
                    data-item="385236"
                    className="char-items-sos ta"
                    title=" Seal of Nova">
                    <img
                      src="https://www.alfa.srolatino-servers.com/assets/images/items/item/china/man_item/heavy_11_fa.PNG"
                      alt=""/>
                    <span/>
                  </div>
                </div>

                <div className="char-items-description">
                  <div id="detail-item" className="">
                    <div className="data">
                      <div style={{
                        color: '#f2e43d;',
                        'font-weight' : 'bold;',
                      }}> Horyeokbongin Polearm (+5)</div>
                      <br/>
                        <div style={{
                          color: '#f2e43d;',
                          'font-weight' : 'bold;',
                        }}> Seal of Nova</div>
                        <div style={{
                          color: '#efdaa4;',
                        }}>Sort of item: Glaive</div>
                        <div style={{
                          color: '#efdaa4;',
                        }}>Degree: 11 degrees</div>
                        <br/><br/>
                          <div>Phy. atk. pwr. +80%</div>
                          <div>Mag. atk. pwr. +9%</div>
                          <div>Durability +19%</div>
                          <div>Attack rate +54%</div>
                          <div>Critical +29%</div>
                          <div>Phy. reinforce +16%</div>
                          <div>Mag. reinforce +41%</div>
                          <br/>
                            <div>Required level 101</div>
                            <div>Chinese</div>
                            <br/>
                              <div style={{
                                color: '#efdaa4;',
                              }}>Max. no. of magic options: 9 Unit</div>
                              <br/>
                                <div
                                  style={{
                                    color: '#50cecd;',
                                    'font-weight' : 'bold;',
                                  }}>
                                  Immortalt (2Time/times)
                                </div>

                                <div
                                  style={{
                                    color: '#50cecd;',
                                    'font-weight' : 'bold;',
                                  }}>
                                  <span
                                    style={{
                                      color: '#ff2f51;',
                                      'font-weight' : 'bold;',
                                    }}>
                                    Maximum Durability 82% Reduce
                                  </span>
                                </div>

                                <div style={{
                                  color: '#50cecd;',
                                  'font-weight' : 'bold;',
                                }}>
                                  Durability 200% Increase
                                </div>

                                <div style={{
                                  color: '#50cecd;',
                                  'font-weight' : 'bold;',
                                }}>
                                  Steady (6Time/times)
                                </div>

                                <div style={{
                                  color: '#50cecd;',
                                  'font-weight' : 'bold;',
                                }}>
                                  Str 7 Increase
                                </div>

                                <div style={{
                                  color: '#50cecd;',
                                  'font-weight' : 'bold;',
                                }}>
                                  Int 2 Increase
                                </div>

                                <div style={{
                                  color: '#50cecd;',
                                  'font-weight' : 'bold;',
                                }}>
                                  Able to use Advanced elixir.
                                </div>

                                <br/>
                                  <div style={{
                                    color: '#efdaa4;',
                                    'font-size' : '10px;',
                                  }}>
                                    Version Beta: Valores aproximados
                                  </div>
                    </div>
                  </div>
                  <ul className="list-unstyled">
                    <li className="wp1">
                      <h5>Horyeokbongin Polearm</h5>
                      <ul className="list-unstyled">
                        <li>Nivel 101 +5</li>
                        <li>Weapon</li>
                      </ul>
                    </li>
                    <li className="ha">
                      <h5>Drako War God Casque</h5>
                      <ul className="list-unstyled">
                        <li>Nivel 101 +4</li>
                        <li>Head</li>
                      </ul>
                    </li>
                    <li className="ba">
                      <h5>Drako War God Armor</h5>
                      <ul className="list-unstyled">
                        <li>Nivel 101 +5</li>
                        <li>Suit</li>
                      </ul>
                    </li>
                    <li className="sa">
                      <h5>Drako War God Shoulder</h5>
                      <ul className="list-unstyled">
                        <li>Nivel 101 +4</li>
                        <li>Shoulders</li>
                      </ul>
                    </li>
                    <li className="aa">
                      <h5>Drako War God Bracer</h5>
                      <ul className="list-unstyled">
                        <li>Nivel 101 +4</li>
                        <li>Hands</li>
                      </ul>
                    </li>
                    <li className="la">
                      <h5>Drako War God Hose</h5>
                      <ul className="list-unstyled">
                        <li>Nivel 101 +4</li>
                        <li>Legs</li>
                      </ul>
                    </li>
                    <li className="ta">
                      <h5>Drako War God Footgear</h5>
                      <ul className="list-unstyled">
                        <li>Nivel 101 +4 (ADV)</li>
                        <li>Shoes</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5">
                  <ul id="myTab" className="nav nav-pills sub-spot-title-list">
                    <li className="sub-spot-title">
                      <h4>MAESTRIAS</h4>
                    </li>
                  </ul>
                  <ul className="list-unstyled masterys">
                    <li>
                      <h5>
                        <img
                          src="https://www.alfa.srolatino-servers.com/assets/images/ingame/masterys/china/mastery_spear.PNG"
                          alt="Spear"/>
                          Spear
                      </h5>
                    </li>

                    <li>
                      <h5>
                        <img
                          src="https://www.alfa.srolatino-servers.com/assets/images/ingame/masterys/china/mastery_cold.PNG"
                          alt="Cold"/>
                          Cold
                      </h5>
                    </li>

                    <li>
                      <h5>
                        <img
                          src="https://www.alfa.srolatino-servers.com/assets/images/ingame/masterys/mastery_gigong.PNG"
                          alt="Gigong"/>
                          Gigong
                      </h5>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-7">
                  <ul id="myTab" className="nav nav-pills sub-spot-title-list">
                    <li className="sub-spot-title">
                      <h4>Ultimo unico asesinados</h4>
                    </li>
                  </ul>
                  <ul className="list-unstyled mini-rank list-group">
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="corner-box margin-top hide">
                <h4>Options</h4>
                <ul className="char-options list-unstyled">
                  <li>
                    <a href="##name">
                      <span className="glyphicon glyphicon-pencil"/>
                      Change Character Name
                    </a>
                  </li>

                  <li>
                    <a href="##pk">
                      <span className="glyphicon glyphicon-remove-circle"/>
                      Remove PK
                    </a>
                  </li>

                  <li>
                    <a href="##skills">
                      <span className="glyphicon glyphicon-flash"/>
                      Reset Skills
                    </a>
                  </li>

                  <li>
                    <a href="##stat">
                      <span className="glyphicon glyphicon-plus-sign"/>
                      Reset Stat Points
                    </a>
                  </li>

                  <li>
                    <a href="##ftwd">
                      <span className="glyphicon glyphicon-tower"/>
                      Fortress War Dungeon
                    </a>
                  </li>

                  <li>
                    <a href="##fix">
                      <span className="glyphicon glyphicon-exclamation-sign"/>
                      Fix Character
                    </a>
                  </li>
                </ul>
              </div>

              <ul id="myTab" className="nav nav-pills sub-spot-title-list margin-top">
                <li className="sub-spot-title">
                  <h4>Compartir Esto!</h4>
                </li>
              </ul>
              <div className="center-block text-center">
                <br/>
                  <div
                    className="fb-like fb_iframe_widget"
                    data-layout="box_count"
                    data-action="like"
                    data-show-faces="true"
                    data-share="false"
                    fb-xfbml-state="rendered"
                    fb-iframe-plugin-query="action=like&amp;app_id=&amp;container_width=255&amp;href=https%3A%2F%2Fwww.alfa.srolatino-servers.com%2Fguild%2F_FreesTyLer_%2F_HiT_HarD&amp;layout=box_count&amp;locale=es_LA&amp;sdk=joey&amp;share=false&amp;show_faces=true">
                    <span
                      style={{
                        'vertical-align' : 'top;',
                        width : '0px;',
                        height : '0px;',
                        overflow : 'hidden;',
                      }}>
                      <iframe
                        name="f37f9674d47f938"
                        width="1000px"
                        height="1000px"
                        data-testid="fb:like Facebook Social Plugin"
                        title="fb:like Facebook Social Plugin"
                        frameBorder="0"
                        allowTransparency="true"
                        allowFullScreen="true"
                        scrolling="no"
                        allow="encrypted-media"
                        src="https://web.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2e411779eb6a94%26domain%3Dwww.alfa.srolatino-servers.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.alfa.srolatino-servers.com%252Ff3f1b840f875e28%26relation%3Dparent.parent&amp;container_width=255&amp;href=https%3A%2F%2Fwww.alfa.srolatino-servers.com%2Fguild%2F_FreesTyLer_%2F_HiT_HarD&amp;layout=box_count&amp;locale=es_LA&amp;sdk=joey&amp;share=false&amp;show_faces=true"
                        style={{
                          border: 'none;',
                          visibility : 'visible;',
                          width : '0px;',
                          height : '0px;',
                        }}>
                      </iframe>
                    </span>
                  </div>
                  <br/>
              </div>
              <ul id="myTab" className="nav nav-pills sub-spot-title-list margin-top">
                <li className="sub-spot-title">
                  <h4>Puntaje de unicos: 0</h4>
                </li>
              </ul>
              <ul className="list-unstyled mini-rank list-group">

              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 separator no-margin-top"/>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row margin-top">
                <div className="col-md-7">
                  <div id="fb-root" className=" fb_reset">
                    <div
                      style={{
                        position: 'absolute;',
                        top : '-10000px;',
                        width : '0px;',
                        height : '0px;',
                      }}>
                      <div/>
                    </div>
                  </div>

                  {/*<script>(function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.8";
                    fjs.parentNode.insertBefore(js, fjs);
                  }(document, 'script', 'facebook-jssdk'));
                  </script>*/}

                  <div
                    className="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop"
                    data-colorscheme="dark"
                    data-href="https://www.alfa.srolatino-servers.com/guild/_FreesTyLer_/_HiT_HarD" data-width="100%"
                    data-numposts="5"
                    fb-xfbml-state="rendered"
                    fb-iframe-plugin-query="app_id=&amp;color_scheme=dark&amp;container_width=634&amp;height=100&amp;href=https%3A%2F%2Fwww.alfa.srolatino-servers.com%2Fguild%2F_FreesTyLer_%2F_HiT_HarD&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width="
                    style={{
                      width: '100%;',
                    }}>
                    <span
                    style={{
                      'vertical-align' : 'top;',
                      width : '100%;',
                      height : '0px;',
                      overflow : 'hidden;',
                    }}>
                      <iframe
                        name="f2d2c3f06a4bfe4"
                        width="1000px"
                        height="100px"
                        data-testid="fb:comments Facebook Social Plugin"
                        title="fb:comments Facebook Social Plugin"
                        frameBorder="0"
                        allowTransparency="true"
                        allowFullScreen="true"
                        scrolling="no"
                        allow="encrypted-media"
                        src="https://web.facebook.com/v2.8/plugins/comments.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df198710807ed8c8%26domain%3Dwww.alfa.srolatino-servers.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.alfa.srolatino-servers.com%252Ff3f1b840f875e28%26relation%3Dparent.parent&amp;color_scheme=dark&amp;container_width=634&amp;height=100&amp;href=https%3A%2F%2Fwww.alfa.srolatino-servers.com%2Fguild%2F_FreesTyLer_%2F_HiT_HarD&amp;locale=es_LA&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width="
                        style={{
                          border : 'none;',
                          visibility : 'visible;',
                          width : '0px;',
                          height : '0px;',
                        }}>
                      </iframe>
                    </span>
                  </div>
                </div>

                <div className="col-md-5">
                  <ul id="myTab" className="nav nav-pills sub-spot-title-list">
                    <li className="sub-spot-title">
                      <h4>FIRMA</h4>
                    </li>
                    <li className="pull-right">
                      <ul className="nav nav-tabs nav-tabs-grunge pull-right">
                        <li className="active">
                          <a href="#sign1" data-toggle="tab">Estilo 1</a>
                        </li>
                        <li>
                          <a href="#sign2" data-toggle="tab">Estilo 2</a>
                        </li>
                        <li>
                          <a href="#sign3" data-toggle="tab">Estilo 3</a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <div id="myTabContent" className="tab-content">
                    <div className="tab-pane active" id="sign1">
                      <img
                        src="https://www.alfa.srolatino-servers.com/sig/get/_HiT_HarD?s=1"
                        alt=""
                        className="img-responsive center-block margin-top"/>
                        <div className="panel panel-grunge margin-top">
                          <div className="panel-body">
                            <p>
                              <small>HTML CODE</small>
                              <input
                                onClick="$(this).select();"
                                style={{
                                  width : '100%;',
                                  'padding-top' : '3px;',
                                  padding : '5px;',
                                  'font-size' : '12px;',
                                  border : '0px;',
                                  background : 'rgba(255,255,255,.05);',
                                }}
                                type="text"
                                value="<a href=&quot;https://www.alfa.srolatino-servers.com/&quot; target=&quot;_blank&quot;><img src=&quot;https://www.alfa.srolatino-servers.com/sig/get/_HiT_HarD?s=1&quot;></a>"/>
                                <small>BBCODE</small>
                                <input
                                  onClick="$(this).select();"
                                  style={{
                                    width : '100%;',
                                    'padding-top' : '3px;',
                                    padding : '5px;',
                                    'font-size' : '12px;',
                                    border : '0px;',
                                    background : 'rgba(255,255,255,.05);',
                                  }}
                                  type="text"
                                  value="[url=https://www.alfa.srolatino-servers.com/][img]https://www.alfa.srolatino-servers.com/sig/get/_HiT_HarD?s=1[/img][/url]"/>
                            </p>
                          </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="sign2">
                      <img
                        src="https://www.alfa.srolatino-servers.com/sig/get/_HiT_HarD?s=2"
                        alt=""
                        className="img-responsive center-block margin-top"/>
                        <div className="panel panel-grunge margin-top">
                          <div className="panel-body">
                            <p>
                              <small>HTML CODE</small>
                              <input
                                onClick="$(this).select();"
                                style={{
                                  width : '100%;',
                                  'padding-top' : '3px;',
                                  padding : '5px;',
                                  'font-size' : '12px;',
                                  border : '0px;',
                                  background : 'rgba(255,255,255,.05);',
                                }}
                                type="text"
                                value="<a href=&quot;https://www.alfa.srolatino-servers.com/&quot; target=&quot;_blank&quot;><img src=&quot;https://www.alfa.srolatino-servers.com/sig/get/_HiT_HarD?s=2&quot;></a>"/>
                                <small>BBCODE</small>
                                <input
                                  onClick="$(this).select();"
                                  style={{
                                    width : '100%;',
                                    'padding-top' : '3px;',
                                    padding : '5px;',
                                    'font-size' : '12px;',
                                    border : '0px;',
                                    background : 'rgba(255,255,255,.05);',
                                  }}
                                  type="text"
                                  value="[url=https://www.alfa.srolatino-servers.com/][img]https://www.alfa.srolatino-servers.com/sig/get/_HiT_HarD?s=2[/img][/url]"/>
                            </p>
                          </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="sign3">
                      <img src="https://www.alfa.srolatino-servers.com/sig/get/_HiT_HarD?s=3" alt=""
                           className="img-responsive center-block margin-top"/>
                        <div className="panel panel-grunge margin-top">
                          <div className="panel-body">
                            <p>
                              <small>HTML CODE</small>
                              <input
                                onClick="$(this).select();"
                                style={{
                                  width : '100%;',
                                  'padding-top' : '3px;',
                                  padding : '5px;',
                                  'font-size' : '12px;',
                                  border : '0px;',
                                  background : 'rgba(255,255,255,.05);',
                                }}
                                type="text"
                                value="<a href=&quot;https://www.alfa.srolatino-servers.com/&quot; target=&quot;_blank&quot;><img src=&quot;https://www.alfa.srolatino-servers.com/sig/get/_HiT_HarD?s=3&quot;></a>"/>
                                <small>BBCODE</small>
                                <input
                                  onClick="$(this).select();"
                                  style={{
                                    width : '100%;',
                                    'padding-top' : '3px;',
                                    padding : '5px;',
                                    'font-size' : '12px;',
                                    border : '0px;',
                                    background : 'rgba(255,255,255,.05);',
                                  }}
                                  type="text"
                                  value="[url=https://www.alfa.srolatino-servers.com/][img]https://www.alfa.srolatino-servers.com/sig/get/_HiT_HarD?s=3[/img][/url]"/>
                            </p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  )
}