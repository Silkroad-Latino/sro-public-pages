import React from "react";

import FooterComponent from "../../components/footer";
import NavbarComponent from "../../components/navbar";
import ListGroup from "../../components/list_group";
import NewsComponent from "../../components/news";
import ListNewsComponent from "../../components/list_news";

import styles from './styles.module.css'
import LoginComponent from "../../components/login";

export default  function  news(){
  return(
    <div>
      <NavbarComponent/>
      <div className="container">
        <div className={styles.titleNews}>
          <h2>REGISTRO</h2>
        </div>
        <div className={`container ${styles.newsContainer}`}>
          <div className="col-md-9 register-content">
            <div className={`row ${styles.regSteps}`}>
              <div className={`col-xs-4 ${styles.regStep} ${styles.rs1} ${styles.active}`}/>
              <div className={`col-xs-4 ${styles.regStep} ${styles.rs2} `}/>
              <div className={`col-xs-4 ${styles.regStep} ${styles.rs3} `}/>
            </div>
            <form role="form" action="https://www.alfa.srolatino-servers.com/register/step/2" method="POST">
              <div className="form-group col-md-6">
                <label htmlFor="regID">ID</label>
                <input
                  type="text"
                  required=""
                  className={`form-control ${styles.grunge} popovers`}
                  id="regID"
                  name="regID"
                  placeholder="ID"
                  data-trigger="hover"
                  data-container="body"
                  data-toggle="popover"
                  data-placement="right"
                  data-content="ID de usuario"
                  data-original-title=""
                  title=""
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="regEmail">Email</label>
                <input
                  type="email"
                  required=""
                  className={`form-control ${styles.grunge} popovers`}
                  id="regEmail"
                  name="regEmail"
                  placeholder="Email"
                  data-trigger="hover"
                  data-container="body"
                  data-toggle="popover"
                  data-placement="right"
                  data-content="Email"
                  data-original-title=""
                  title=""
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="regPassword">Clave</label>
                <input
                  type="password"
                  required=""
                  className={`form-control ${styles.grunge} popovers`}
                  id="regPassword"
                  name="regPassword"
                  placeholder="Clave"
                  data-container="body"
                  data-trigger="hover"
                  data-toggle="popover"
                  data-placement="right"
                  data-content="Clave"
                  data-original-title=""
                  title=""
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="regCPassword">Repeat Password</label>
                <input
                  type="password"
                  required=""
                  className={`form-control ${styles.grunge} popovers`}
                  id="regCPassword"
                  name="regCPassword"
                  placeholder="Clave"
                  data-container="body"
                  data-trigger="hover"
                  data-toggle="popover"
                  data-placement="right"
                  data-content="Clave"
                  data-original-title=""
                  title=""
                />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="terms">TOS</label>
                <div className="terms">
                  TÃ©rminos de servicio <br/>
                  <br/>
                    Â¡IMPORTANTE! Â¡POR FAVOR, LEA ESTE DOCUMENTO DETENIDAMENTE! <br/>
                    <br/>
                      Toda persona que se registre dentro de nuestro sitio y accede al servidor de "SRO Latino Servers",
                      esta sujeta a los siguientes tÃ©rminos sin excepciÃ³n, cualquier termino contrario al aqui
                      presentado queda expresamente prohibido. Usted declara ser una persona fisica, aceptando las
                      presentes condiciones de uso. <br/>
                      <br/>
                        1. Acceso al servicio:<br/>
                        Usted debe registrarse y acceder con una cuenta creada en nuestro sitio oficial
                        http://srolatino-servers.com para jugar "SRO Latino Servers" o alguno de nuestros servidores
                        alternativos, la descarga del cliente se realizara en el mismo sitio en la seccion de descarga y
                        de manera periodica se colocaran las actualizaciones necesarias para jugar. <br/>
                        "SRO Latino Servers" se deslinda de cualquier descarga ajena a nuestro sitio oficial
                        http://srolatino-servers.com<br/>
                        <br/>
                          2. Normas de conducta de "SRO Latino Servers":<br/>
                          Como muchas cosas en el mundo "SRO Latino Servers" se rige por normas de conducta que todos
                          los usuarios de "SRO Latino Servers" deben observar. Usted tiene la obligacion de conocer,
                          comprender y cumplir dichas normas de conducta. "SRO Latino Servers" se reserva el derecho a
                          determinar que conducta se considera contraria al espiritu de juego y a emprender medidas
                          disciplinarias. "SRO Latino Servers" se reserva el derecho de modificar dichas normas en
                          cualquier momento. <br/>
                          <br/>
                            a. Normas de conducta relativa al nombre del personaje:<br/>
                            Dentro de "SRO Latino Servers" todo usuario elegira un nombre para su personaje asi como
                            para su propio gremio. Cuando se seleccione el nombre de un personaje, guild o cualquier
                            otro signo que pueda ser visto por otros jugadores de "SRO Latino Servers" se deberan tener
                            en cuenta los siguientes criterios. En caso de que "SRO Latino Servers" considere que dicho
                            signo es ofensivo o inadecuado dispondra de las medidas disciplinarias
                            correspondientes. <br/>
                            <br/>
                              En particular no podran utilizarse nombres: <br/>
                              <br/>
                                -Que pertenezcan a otra persona con el intento de hacerse pasar por ella, eso incluye al
                                staff de "SRO Latino Servers". <br/>
                                <br/>
                                  -Que incorporen insultos o lenguaje ofensivo, difamatorio, vulgar, obsceno, que
                                  induzca al odio o que sea reprobable por asuntos raciales o etnicos. <br/>
                                  <br/>
                                    -Relacionados con las drogas, el sexo, el alcohol o actividades delictivas. <br/>
                                    <br/>
                                      b. Normas de conducta relativa al uso del "Chat":<br/>
                                      Transmitir o publicar contenido que "SRO Latino Servers" a su sola discrecion
                                      considere ofensivo, ilegal, perjudicial, amenazante, insultante, acosador,
                                      difamatorio, vulgar, obsceno, que incite al odio, sexualmente explicito o que sea
                                      racial o etnicamente reprobable, asi mismo usted no podra utilizar ortografia
                                      incorrecta o alternativa para burlar las restricciones citadas anteriormente.<br/>
                                      Llevar acabo cualquier accion susceptible de causar un mal funcionamiento como por
                                      ejemplo, provocar que el chat se deslize demasiado rapido (flood), impidiendo que
                                      otros usuarios puedan leer. <br/>
                                      <br/>
                                        Comunicar o publicar informacion personal de cualquier jugador de "SRO Latino
                                        Servers" en sitios web o foros relacionados con este ultimo. No obstante, los
                                        usuarios de "SRO Latino Servers" podran compartir informacion personal en un
                                        mensaje personal dirigido a un solo usuario. <br/>
                                        <br/>
                                          3. Normas de conducta general:<br/>
                                          Acosar, amenazar, molestar avergonzar, provocar molestar o incomodidad a
                                          cualquier usuario y/o staff de "SRO Latino Servers" o hacer que se convierta
                                          en el centro de atencion sin quererlo. <br/>
                                          <br/>
                                            Participar en accion alguna que a juicio de "SRO Latino Servers", suponga o
                                            pueda suponer que un usuario sea vicitima de un "timo" o que le sustraiga
                                            oro, armas, armaduras o cualquier otro objeto adquirido legitimamente por
                                            dicho usuario. <br/>
                                            El usuario que ponga en venta cualquier objeto sera bajo su propia
                                            responsabilidad dicha transaccion. <br/>
                                            <br/>
                                              Queda prohibido utilizar herramientas que interfieran o de otro modo
                                              alteren el servidor de "SRO Latino Servers", en caso del cliente del juego
                                              queda bajo la responsabilidad de quien lo modifique y/o utilice. <br/>
                                              <br/>
                                                Programas de "auto-traning" como "bots" son permitidos siempre y cuando
                                                sean publicados por el sitio oficial de "SRO Latino Servers", el uso de
                                                algun programa externo sera bajo la responsabilidad del usuario. <br/>
                                                <br/>
                                                  4. Consecuencias de la infraccion de las normas de conducta:<br/>
                                                  "SRO Latino Servers" podra a su entera discrecion, adoptar cuantas
                                                  medidas considere necesarias para preservar la integridad de "SRO
                                                  Latino Servers" cualquier infraccion de las normas presentadas
                                                  anteriormente podra comportar la adopcion de medidas de disciplina,
                                                  con efecto inmediato o en el momento que se determine, estas medidas
                                                  podran ser como por ejemplo: <br/>
                                                  <br/>
                                                    -La suspension temporal de su acceso a "SRO Latino Servers"<br/>
                                                    -La cancelacion definitiva de su acceso a "SRO Latino Servers" <br/>
                                                    <br/>
                                                      -La modificacion de un personaje o cuenta, incluyendo la reduccion
                                                      o eliminacion de puntos de experiencia, habilidades, niveles,
                                                      objetos u oro del juego. <br/>
                                                      <br/>
                                                        -La suspension temporal o permanente o la anulacion del acceso
                                                        de una cuenta que utilice para entrar a nuestro servidor. <br/>
                                                        <br/>
                                                          5. Venta de objetos y cuentas:<br/>
                                                          Cualquier transaccion de productos dentro de "SRO Latino
                                                          Servers" como lo son los "Creditos" que son utilizados para
                                                          cambiarlos en nuestro "Item Mall" quedara a cargo de nuestros
                                                          resellers oficiales mencionados dentro de nuestro sitio
                                                          http://srolatino-servers.com Todo el dinero que sea enviado
                                                          por los jugadores sera por su propia voluntad y sera manejado
                                                          como una "Donacion" al staff que se encarga del funcionamiento
                                                          del servidor.<br/>
                                                          La venta de objetos del juego como armas, oro o productos del
                                                          item mall entre jugadores quedaran a su entera
                                                          responsabilidad, "SRO Latino Servers" no se hace responsable
                                                          de robos por descuido de algun jugador, aunque de igual manera
                                                          tratara de preservar el espiritu de juego para que este tipo
                                                          de hecho no sucedan.<br/>
                                                          La venta de cuentas quedara a cargo de los jugadores que las
                                                          posean, mediante publicaciones en paginas web, en foros o por
                                                          trato directo, "SRO Latino Servers" no se hace responsable de
                                                          robos causados por descuido de los usuarios que traten de
                                                          vender su cuenta. Aun asi ningun jugador sera dueÃ±o legitimo
                                                          de ninguna cuenta, ya que son propiedad de "SRO Latino
                                                          Servers". <br/>
                                                          6. Prestacion del servicio online:<br/>
                                                          "SRO Latino Servers" al ser un juego en constante cambio y
                                                          evolucion realizara tareas de mantenimiento programado o de
                                                          emergencia en caso de ser necesario, durante este tiempo el
                                                          servidor permanecera cerrado por un periodo de tiempo
                                                          indefinido. Todo esto con la intencion de prestar un mejor
                                                          servicio a nuestros usuarios.<br/>
                                                          7. El staff de SRO Latino Servers no se hace responsable por
                                                          el hack, robo, timo, ocasionado por terceros programas o
                                                          personas, y tampoco se hara responsable de las compras /
                                                          ventas que se hagan sin un mediador oficial de sro latino
                                                          servers. <br/>
                </div>
              </div>

              <div className="form-group col-md-12">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" required="" title="Aceptar los Terminos y Condiciones"/>
                      Aceptar los Terminos y Condiciones
                    </label>
                </div>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="regCPassword">Eres humano? (8+7 = ?)</label>
                <input
                  type="number"
                  required=""
                  className={`form-control ${styles.grunge} popovers`}
                  id="captcha"
                  name="captcha"
                  placeholder="8+7 = ?"
                  data-container="body"
                  data-trigger="hover"
                  data-toggle="popover"
                  data-placement="right"
                  data-content="Eres humano?"
                  data-original-title=""
                  title=""
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="regCPassword">Sigue el siguiente paso</label>
                <button type="submit" className={`btn btn-block ${styles.btnGrunge}`}>Siguiente</button>
              </div>
              <div className="clearfix"/>
              <br/>
            </form>
          </div>

           <div className="col-md-3">

             <LoginComponent/>
             <br/>
             <ListGroup/>
           </div>
        </div>

      </div>
      <FooterComponent/>
    </div>
  )
}