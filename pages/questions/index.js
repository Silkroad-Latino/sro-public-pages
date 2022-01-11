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
          <h2>PREGUNTAS FRECUENTES</h2>
        </div>
        <div className={`container ${styles.newsContainer}`}>
          <div className="col-md-8">
            <div className="col-md-12 normal-content rankings-content">
              <div className="row">
                <ol className={`${styles.breadcrumb} ${styles.grunge}`}>
                  <li>
                    <a href="https://www.alfa.srolatino-servers.com/">Inicio</a>
                  </li>
                  <li className="active">Preguntas frecuentes</li>
                </ol>
              </div>

              <div className="post-comp">
                <div id="em_content">
                  <span style={{
                    color: '#ffffff;',
                  }}>
                    <center>
                      <img src="/assets/img/support.png" width="606" height="150"/>
                      </center>
			                  <h2 style={{
                          'text-align' : 'center;',
                        }}>
                          <span style={{
                            color: '#ffffff;',
                          }}>Preguntas Frecuentes</span>
                        </h2>
			                  <p>
                          A continuacion procederemos a detallar una serie de preguntas y problemas frecuentes. Esperamos poder resolver tus dudas para que tu estadia en Silkroad Latino sea mas placentera.
                        </p>
			                  <ul>
                          <li>El juego no inicia: <strong>Silkroad.exe ha dejado de funcionar</strong>&nbsp;¿Que sucede?</li>
                        </ul>

                        <ul>
                          Por favor visita el siguiente link:
                          <a
                            href="http://wiki.srolatino-servers.com/faq/silkroad-online-launcher-dejo-de-funcionar/"
                            target="_blank"
                          >
                            Problema Silkroad.exe ha dejado de funcionar.
                          </a>
                          Seras redirigido a la Wiki de Silkroad Latino, podras observar un tutorial detallado de como arreglar el problema en tu Windows.
                        </ul>

                        <ul>
                          <li>
                            No puedo <strong>comprar</strong> un item en <strong>Item Mall</strong>. ¿Por qué? (F10)
                          </li>
                          Para comprar en el Item Mall, es necesario poseer suficientes créditos (silks), que sólo puede ser comprado a los resellers oficiales de cada país o mediante la pagina web oficial. Para ver un tutorial de como comprar créditos en Silkroad Latino:
                          <a href="#" target="_blank">Haz Click Aqui</a>.
                        </ul>
                        <ul>
                          <li>
                            ¿Por qué mi <strong>cuenta</strong> fué <strong>baneada</strong>?
                          </li>
                        </ul>
                        <ul>
                          Hay distintas razones para el baneo de una cuenta dentro de la comunidad generalmente son las siguientes: exceder el límite de cuentas por ip (8), realizar un reporte falso de algún tema relacionado con Silkroad Latino o algún contenido del juego, aprovechamiento de bugs, insultos públicamente, entre otras. Para ver los terminos y condiciones:
                          <a href="https://www.alfa.srolatino-servers.com/support/tos" target="_blank">Haz Click Aqui</a>
                          y para ver las reglas:
                          <a href="#" target="_blank">Haz Click Aqui</a>.
                        </ul>

                        <ul>
                          <li>
                            ¿<strong>Cómo recupero mi contraseña</strong> de Silkroad Latino?
                          </li>
                        </ul>

                        <ul>
                          Le proporcionamos un sistema para recuperar su contraseña correspondiente a su cuenta de Silkroad Latino, simplemente deberá hacer
                          <a href="http://wiki.srolatino-servers.com/faq/como-recuperar-contrasena-o-id/" target="_blank">"click aquí"</a>
                          y seguir los pasos correspondientes para la recuperación de la misma. En caso de querer recuperar la respuesta secreta, puede seguir los pasos expuestos indicados en esta guia:
                          <a href="http://wiki.srolatino-servers.com/faq/srolatino-serversrecuperacion-de-respuesta-secreta/" target="_blank">Haz Click Aqui</a>.
                        </ul>

                          <ul>
                            <li>¿Cómo reconozco al <strong>equipo de Silkroad Latino</strong>?</li>
                          </ul>
                          <ul>
                            El equipo de Silkroad Latino está identificado con las siglas "[GA]" y "[GM]" dentro del juego. De color "Verde" o "Rojo" en Discord. El equipo de Silkroad Latino no tiene paginas de Facebook o WhatsApp. El equipo de Silkroad Latino nunca te pedira tus datos de acceso, ni tampoco te ofrecera items o ventajas por dinero.
                          </ul>

                          <ul>
                            <li>¿Es ilegal comprar, vender o cambiar <strong>oro</strong>?</li>
                          </ul>

                          <ul>
                            La política de Silkroad Latino permite a sus usuarios comprar, vender o cambiar oro, pero no se hace responsable por perdidas, robos o estafas.
                          </ul>

                          <ul>
                            <li>¿Es ilegal vender o cambiar <strong>silk por dinero real</strong>?</li>
                          </ul>

                          <ul>
                            La política de Silkroad Latino permite a sus usuarios comprar, vender o cambiar silk por oro, mas no es permitida la compra o venta de silk por dinero real ENTRE USUARIOS solo el personal del staff esta autorizado a la venta de silk por dinero real.
                          </ul>

                          <ul>
                            <li>¿Es permitido el uso de programas externos como <strong>bots</strong>?</li>
                          </ul>

                          <ul>
                            La respuesta es sí, siempre y cuando no se exceda el limite del número de conexiones por ip (8), cabe resaltar que Silkroad Latino no se hace responsable por el uso de los mismos, por ejemplo si poseen keyloggers / troyanos / entre otros.
                          </ul>

                          <ul>
                            <li>¿Mi cuenta puede ser <strong>desbaneada</strong> por alguna razón?</li>
                          </ul>

                          <ul>
                            Sí, siempre y cuando sea un error por parte del equipo de Silkroad Latino o reconsideramos una reducción posible de la sanción.
                          </ul>

                          <ul>
                            <li>¿Cuanto <strong>cuesta el credito (Silk)</strong>?</li>
                          </ul>

                          <ul>
                            <ul>El precio del silk se puede observar en la seccion de compra de ePins (
                              <a
                                href="https://www.alfa.srolatino-servers.com/profile/buyEpin"
                                target="_blank">https://www.alfa.srolatino-servers.com/profile/buyEpin
                              </a>
                              ). Para poder comprar en la seccion de ePins, previamente debes tener saldo en tu cuenta, para recargar saldo podes ir a la seccion de Carga de Saldo y elegir cualquier pasarela de pago (
                              <a
                              href="https://www.alfa.srolatino-servers.com/profile/charge"
                              target="_blank">https://www.alfa.srolatino-servers.com/profile/charge
                              </a>)
                              .
                            </ul>
                            <ul>
                              Tambien contamos reseller para distintos paises:
                            </ul>
                            <ul>
                              <a href="https://srolatino.com/wearg" target="_blank">WeArGamers</a>
                              &gt; Argentina/Uruguay/Western Union/Bitcoin
                            </ul>
                            <ul>
                              <a href="https://srolatino.com/easyg" target="_blank">EasyGames</a>
                              &gt; Colombia
                            </ul>
                            <ul>
                              <a href="https://srolatino.com/snet" target="_blank">Servivenet</a>
                              &gt; Venezuela/Chile/Mexico/Europa
                            </ul>
                            <ul>
                              <a href="https://srolatino.com/knightr" target="_blank">Knight_Rogue</a>
                              &gt; Peru
                            </ul>
                          </ul>

                          <ul>
                            <li>¿Qué se considera un <strong>nombre ilegal</strong>?</li>
                          </ul>

                          <ul>
                            Los nombres de los jugadores dentro de la comunidad no pueden contener palabras ofensivas o suplantando al equipo de trabajo de Silkroad Latino, o criaturas del juego y NPCs.
                          </ul>

                          <ul>
                            <li>¿Quién obtiene la derrota de un mounstro "Unique"?</li>
                          </ul>

                          <ul>
                            El jugador que realizó la mayor cantidad de daño (dmg) al mounstro "Unique" será quien se lleve la derrota del mismo. Su nombre será indicado en el juego.
                          </ul>

                          <ul>
                            <li>¿Como le coloco <strong>brillos especiales a las armas</strong>?</li>
                          </ul>

                          <ul>Para poder cambiar el brillo de las armas, debes bloquearlas. Tienen que ser armas DG14 o DG15 SoX. Guia:
                            <a
                            href="https://sro-latino.com/threads/guia-como-colocar-brillos-glow-a-las-armas-d14-15.3125/"
                            target="_blank">
                              https://sro-latino.com/threads/guia-como-colocar-brillos-glow-a-las-armas-d14-15.3125/
                            </a>.
                          </ul>

                          <ul>
                            <li>¿En donde puedo encontrar guias para hacer las <strong>misiones especiales DG13, DG14 y DG15</strong>?</li>
                          </ul>

                          <ul>En la Wiki de Silkroad Latino podras encontrar la ayuda que necesites. Especificamente en esta seccion
                            <a
                            href="http://wiki.srolatino-servers.com/categorias/quest-especiales/"
                            target="_blank">http://wiki.srolatino-servers.com/categorias/quest-especiales/
                            </a>
                            .
                          </ul>

                          <ul>
                            <li>¿Como puedo <strong>traducir el cliente a castellano</strong>?</li>
                          </ul>

                          <ul>Debes seguir esta guia:
                            <a
                              href="http://wiki.srolatino-servers.com/faq/silkroad-latino-traduccion-espanol/"
                              target="_blank">http://wiki.srolatino-servers.com/faq/silkroad-latino-traduccion-espanol/
                            </a>
                            .
                          </ul>

                          <ul>
                            <li>¿En donde puedo descargar los bots de forma gratuita?</li>
                          </ul>

			                    <ul>
                            En la Wiki de Silkroad Latino podras encontrar la ayuda que necesites. Especificamente en esta seccion. No brindamos soporte personalizado para el uso de bots. Tambien hay bots pagos como pueden ser el sBot, mBot, phBot, etc.
                          </ul>
                  </span>
                </div>
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