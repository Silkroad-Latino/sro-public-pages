import React from "react";

import FooterComponent from "../../components/footer";
import NavbarComponent from "../../components/navbar";
import ListGroup from "../../components/list_group";

import styles from './styles.module.css'

export default  function  news(){
  return(
    <div>
      <NavbarComponent/>
      <div className="container">
        <div className={styles.titleNews}>
          <h2>INFORMACION Y REGLAS</h2>
        </div>
        <div className={`container ${styles.newsContainer}`}>
          <div className="col-md-8">
            <div className="col-md-12 normal-content rankings-content">
              <div className="row">
                <ol className={`${styles.breadcrumb} ${styles.grunge}`}>
                  <li>
                    <a href="https://www.alfa.srolatino-servers.com/">Inicio</a>
                  </li>
                  <li className="active">Informacion y Reglas</li>
                </ol>
              </div>


              <div id="em_content">
                <center>
                  <img src="/assets/img/about_game.png" width="606" height="150"/>
                  </center>
                <span style={{
                  color: '#ffffff;',
                }}>
                  <h1 style={{
                    'text-align' : 'center;',
                  }}>
                    <strong>Informacion General Del Servidor</strong>
                  </h1>
                  <p>
                    <strong>Silkroad Latino&nbsp;</strong>es una comunidad, no tan solo un servidor. Somos la comunidad mas grande latino americana de Silkroad Online. Sin embargo, aceptamos el ingreso de cualquier persona alrededor del mundo.
                  </p>
                  <p>
                    A continuacion se presentan las caracteristicas principales del servidor Alfa de Silkroad Latino
                  </p>

                  <ul>
                    <li>Experiencia: 35x + 1x en Party</li>
                    <li>Skill Points: 35x + 1x en Party</li>
                    <li>Drop/Oro: 15x</li>
                    <li>Alchemy: 2x</li>
                    <li>Magic POP: Personalizado.</li>
                    <li>Level Cap: 135</li>
                    <li>Skill Cap: 135</li>
                    <li>Mastery Cap: 270 EU / 405 CH</li>
                    <li>Gear Cap: Degree 15</li>
                    <li>Weapon Cap: Degree 15</li>
                    <li>Razas: China / Europa</li>
                    <li>Forgotten World: Si</li>
                    <li>CTF: Si</li>
                    <li>Fortress War: Jangan || Hotan / Bandit</li>
                    <li>Battle Arena: Random</li>
                    <li>Survival Arena: Si</li>
                    <li>Eventos De Uniques Automatico: Si</li>
                    <li>Arabia: Habilitado</li>
                    <li>Mision Especiales: DG13, DG14 y DG15.</li>
                    <li>Servidor Estable.</li>
                    <li>Mas de 8 años online sin restarts ni tiempos offline.</li>
                  </ul>

                  <h1 style={{
                    'text-align' : 'center;',
                  }}>
                    <strong>Reglas Generales</strong>
                  </h1>
                  <p>
                    <strong>Cual es el numero maximo de cuentas de usuario por IP: </strong>En Silkroad Latino se tiene un limite de 8 cuentas por IP.
                  </p>
                  <p>
                    <strong><span className="fixed-color">Nota:</span></strong> Es por ip de módem si tienes mas de una computadora conectada al mismo Internet figurara una sola ip no dos, las cuentas de arena y ctf cuentan para las 8 cuentas maximas, significa que si tienen 7 boteando y 2 en ctf o stall etc.. son 9 así que puede ser motivo de ban.
                  </p>
                  <p>
                    <strong>Cuentas por IP (GENERAL)</strong>
                  </p>

                  <ul>
                    <li>9 a 10 cuentas conectadas por ip</li>
                    <li data-xf-list-type="ul">1 Advertencia = 7 Días</li>
                    <li data-xf-list-type="ul">2 Advertencia = 22 Días</li>
                    <li data-xf-list-type="ul">3 Advertencia = 100 años</li>
                  </ul>

                  <p>
                    <strong>Mas de 10 cuentas conectadas en una IP</strong>
                  </p>

                  <ul>
                    <li data-xf-list-type="ul">1 Advertencia = 20 Dias</li>
                    <li data-xf-list-type="ul">2 Advertencia = 60 Dias</li>
                    <li data-xf-list-type="ul">3 Advertencia = 100 Años</li>
                  </ul>

                  <p>
                    <strong>Abuso de bugs, cual sea: 100 Años.</strong>
                  </p>
                  <p>
                    <strong>Romper Reglas De Eventos</strong>
                  </p>

                  <ul>
                    <li data-xf-list-type="ul">2 Dias de baneo.</li>
                  </ul>

                  <p>
                    <strong>Robo de cuentas y/o Items (CON PRUEBAS)</strong>
                  </p>

                  <p>
                    El staff no se hace responsable de los items robados si no se hace la compra o venta de los mismos con mediador.
                  </p>

                  <ul>
                    <li data-xf-list-type="ul">Baneo permanente de 100 Años</li>
                  </ul>

                  <p>
                    Por insulto generalizado a un usuario, raza o etnia.
                  </p>

                  <ul>
                    <li data-xf-list-type="ul">Se tomara el tiempo según el tipo de insulto a un usuario en particular.</li>
                  </ul>

                  <p>
                    Para denunciar a alguien por insultos tienen que haber algunos requisitos
                  </p>

                  <ul>
                    <li data-xf-list-type="ul">Que el agravante este insultando incluso luego de haberle advertido que lo denunciara si sigue haciéndolo</li>
                    <li data-xf-list-type="ul">En el caso de que sea por PM, agregar al player que lo este insultando a la lista de "Block" en "Community" y aun así siga haciéndolo por "General" o "Global"</li>
                  </ul>

                  <p>
                    En los casos que se cumplan esos requisitos es posible hacer la denuncia, obviamente tomar foto de cuando le ha advertido y de los insultos. Cabe mencionar que muchos países tienen su propia forma de hablar y eso se tomara en cuenta a la hora de tomar una decisión, ¿que quiere decir eso? que posiblemente no se tomaran como "prueba" algunas palabras que la persona crea que son insultos.
                  </p>

                  <p>
                    <strong>Por Insulto Al Staff</strong>
                  </p>

                  <ul>
                    <li data-xf-list-type="ul">1 advertencia : 12 Horas.</li>
                    <li data-xf-list-type="ul">2 advertencia : 3 días.</li>
                    <li data-xf-list-type="ul">3 advertencia : 7 dias.</li>
                    <li>4 advertencia : 1 Mes.</li>
                    <li>5 advertencia : 1 Año.</li>
                    <li>6 advertencia : 100 Años.</li>
                  </ul>

                  <p>
                    <strong>Publicidad</strong> de otros server, PTC, Paginas web etc.. esta prohibido y tiene una sanción a la cuenta afectada y su cuenta principal
                  </p>

                  <ul>
                    <li data-xf-list-type="ul">1 Advertencia = 15 Días.</li>
                    <li data-xf-list-type="ul">2 Advertencia = 1 mes.</li>
                    <li data-xf-list-type="ul">3 Advertencia = 100 años.</li>
                  </ul>

                  <p>
                    Cuentas con el propósito de hacer publicidad serán baneadas permanente.
                  </p>
                  <p>
                    El farmeo de Battle Points (BP) esta prohibido y tiene sanciones de
                  </p>

                  <ul>
                    <li data-xf-list-type="ul">1 Advertencia = 7 Días.</li>
                    <li data-xf-list-type="ul">2 Advertencia = 21 Días.</li>
                    <li data-xf-list-type="ul">3 Advertencia = 100 años.</li>
                  </ul>

                  <p>
                    Atacar a los usuarios / players de safe zone en arena o ctf
                  </p>

                  <ul>
                    <li data-xf-list-type="ul">1 Advertencia = 7 Días.</li>
                    <li data-xf-list-type="ul">2 Advertencia = 21 Días.</li>
                    <li data-xf-list-type="ul">3 Advertencia = 100 años.</li>
                  </ul>

                  <p>
                    Agarrar la llave del equipo contrario en CTF (Segun advertencias)
                  </p>

                  <ul>
                    <li data-xf-list-type="ul">1 Advertencia = 1 Días.</li>
                    <li data-xf-list-type="ul">2 Advertencia = 7 Días.</li>
                    <li data-xf-list-type="ul">3 Advertencia = 30 Dias.</li>
                  </ul>

                  <p>
                    <strong>La venta o compra de silks por dinero real a otros usuarios no esta permitida y conllevara un ban según lo amerite.</strong> Cabe aclarar que cualquier Global texto etc, que contenga el texto <strong>''compro silk'</strong>', sin especificar si es por oro, sera tomado como intencion de compra o venta de silk por dinero real, por regla general se aplicaran las siguientes sanciones, pero podran aplicarse segun lo amerite, segun la gravedad de la falta.
                  </p>

                  <ul>
                    <li data-xf-list-type="ul">1 Advertencia = 7 Días.</li>
                    <li data-xf-list-type="ul">2 Advertencia = 15 Días.</li>
                    <li data-xf-list-type="ul">3 Advertencia = 30 Dias.</li>
                    <li data-xf-list-type="ul">4 Advertencia = 100 Años.</li>
                  </ul>

                  <h2 style={{
                      'text-align' : 'center;',
                    }}>
                    Reglas Para Eventos
                  </h2>

                  <p>
                    <strong>Eventos:</strong>
                  </p>

                  <ul>
                    <li
                      data-xf-list-type="ul">No se permite dar party ni ningún tipo de buff a un usuario del equipo contrario tanto en <strong>CTF</strong> o <strong>Battle Arena.</strong>
                    </li>
                    <li
                      data-xf-list-type="ul">No es permitido! atacar a los usuarios de safe zone desde fuera de la misma.
                    </li>
                  </ul>

                  <p>
                    <strong>Maximo Por IP En Eventos:</strong>
                  </p>

                  <ul>
                    <li data-xf-list-type="ul">Máximo de 8 cuentas por IP.</li>
                    <li data-xf-list-type="ul">Maximo de 1 cuenta por IP para Eventos custom o realizados por el staff.</li>
                    <li data-xf-list-type="ul">Capture the Flag - se tiene permitido un máximo de 1 cuenta por IP.</li>
                    <li data-xf-list-type="ul">Batle Arena - se tiene permitido un máximo de 1 cuenta por IP.</li>
                    <li data-xf-list-type="ul">Roc Evento - se tiene permitido un máximo de 1 cuenta por IP.</li>
                    <li data-xf-list-type="ul">BeakYung the White Viper - se tiene permitido un máximo de 1 cuenta por IP.</li>
                  </ul>

                  <p
                    style={{
                      'text-align' : 'center;',
                    }}>
                    <strong>La violación de cualquiera de estas reglas llevara a un baneo inmediato.</strong>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <ListGroup/>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  )
}