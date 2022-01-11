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
          <h2>POLITICA DE PRIVACIDAD</h2>
        </div>
        <div className={`container ${styles.newsContainer}`}>
          <div className="col-md-8">
            <div className="col-md-12 normal-content rankings-content">
              <div className="row">
                <ol className={`${styles.breadcrumb} ${styles.grunge}`}>
                  <li>
                    <a href="https://www.alfa.srolatino-servers.com/">Inicio</a>
                  </li>
                  <li className="active">Politica de privacidad</li>
                </ol>
              </div>
              
              <div id="em_content">
                <center>
                  <img src="/assets/img/about_game.png" width="606" height="150"/>
                  </center>
                <h2 style={{
                  'text-align' : 'center;',
                }}>
                  <span style={{
                    color: '#ffffff;',
                  }}>Política de Privacidad</span>
                </h2>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>Esta Política de Privacidad fue modificada por última vez el 14 de enero de 2020. </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>
                    <strong>General </strong>
                  </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>
                    Como se utiliza en este documento,<strong>'Silkroad Latino'</strong> se refiere a la empresa
                    <a 
                      style={{
                    color: '#ffffff;',
                  }} 
                      href="http://www.srolatino-servers.com,">
                      www.srolatino-servers.com,
                    </a>&nbsp;
                  <a
                    style={{
                    color: '#ffffff;',
                  }} 
                    href="http://www.silkroadlatino.com,">
                    www.silkroadlatino.com,</a>&nbsp;o cualquiera de sus subdominios, incluyendo sin limitación por lo tanto a sus propietarios, directores, inversores, empleados u otras partes relacionadas.
                  </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}> Silkroad Latino y sus filiales (en adelante, '<strong>Silkroad Latino Servers</strong>', <strong>'nosotros', 'nos'</strong> o <strong>'nuestro')</strong> se compromete a proteger y respetar su privacidad. </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>La presente <strong>Política de Privacidad</strong> (en conjunto con nuestros Términos y Condiciones) rige nuestra recopilación, el procesamiento y el uso de su información personal. Definimos 'Información personal' como la información que lo identifica personalmente, por ejemplo, su nombre, dirección, dirección de correo electrónico, comercios, datos bancarios, Direccion IP, etc. </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>El propósito de esta Política de privacidad es informarle de:</span>
                </p>
                <ul>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Los tipos de información personal que podemos recopilar sobre usted y cómo puede ser utilizada;</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>El uso que hacemos de la información sobre las direcciones IP y el uso de cookies;</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Cualquier revelación de información personal a terceras partes;</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Su capacidad de corregir, actualizar y borrar su información personal;</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Las medidas de seguridad que tenemos en el lugar para evitar la pérdida, mal uso, o alteración de la información personal bajo nuestro control; y</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Retención de Información Personal.</span>
                  </li>
                </ul>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}><strong>Recolección y Uso de Información Personal </strong></span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>Podemos recopilar su información personal si usted utiliza nuestro Sitio web
                    <a style={{
                    color: '#ffffff;',
                  }} href="http://www.srolatino-servers.com">
                      www.srolatino-servers.com
                    </a>&nbsp;o cualquiera de nuestros subdominios, al abrir una cuenta para utilizar la plataforma o llevar a cabo cualesquiera transacciones en la plataforma. </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>Los tipos de información personal que recopilamos pueden incluir:</span>
                </p>
                <ul>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Su nombre.</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Su dirección.</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Su dirección de correo electrónico.</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Su IP.</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Su fecha de nacimiento.</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Sus operaciones en la plataforma.</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Al mismo tiempo podemos almacenar dentro del juego, el tiempo que ha jugado, cuando ha jugado y todas las acciones que usted realiza dentro del mismo.</span>
                  </li>
                </ul>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>Podemos utilizar su información personal para los siguientes fines:</span>
                </p>
                <ul>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Para personalizar su experiencia (su información nos ayuda a responder mejor a sus necesidades individuales).</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Para mejorar nuestro sitio web (Nos esforzamos continuamente para mejorar nuestra oferta de sitio web basado en la información y la retroalimentación que recibimos de usted).</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Para analizar el uso de nuestro sitio.</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Para mejorar el servicio al cliente (su información nos ayuda a responder más eficazmente a sus solicitudes de servicio al cliente y las necesidades de soporte).</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Para procesar las transacciones. Su información, ya sea pública o privada, no será vendida, intercambiada, o dada a ninguna otra empresa por cualquier motivo, sin su consentimiento, excepto con el expreso propósito de entregar el producto adquirido o servicio solicitado por el cliente.</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Para enviar correos electrónicos periódicos. La dirección de correo electrónico que usted proporciona para el procesamiento de pedidos, se puede utilizar para enviar información y las actualizaciones correspondientes a su solicitud o petición, además de recibir de vez en cuando la compañía noticias, actualizaciones, promociones, productos o servicios relacionados con la información, etc;</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Para administrar un concurso, promoción, encuesta u otras características del sitio.</span>
                  </li>
                </ul>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>Nosotros procesaremos su información personal sólo con el o los propósito(s) para el cual se ha previsto para nosotros.</span>
                </p>
                <ul>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}><strong>Direcciones IP </strong>Podemos recabar información sobre su ordenador, incluyendo según el caso, su dirección de IP, sistema operativo y tipo de navegador, para la administración del sistema. Estos son datos estadísticos sobre las acciones y patrones de navegación de nuestros usuarios y no identifica a ningún individuo.</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}><strong>Cookies </strong>El sitio www.srolatino-servers.com utiliza cookies. Las cookies son pequeños archivos de texto que se almacenan en su equipo por los sitios web que usted visita. Son ampliamente utilizados con el fin de hacer que los sitios web funcionen, o trabajen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.</span>
                  </li>
                  <li>
                    <span style={{
                    color: '#ffffff;',
                  }}>Las cookies se almacenan normalmente en el disco duro de su ordenador. La información recopilada por las cookies se utiliza por nosotros para evaluar la eficacia de nuestro sitio, analizar tendencias, y administrar la Plataforma. La información recopilada por las cookies nos permite determinar cosas tales como qué partes de nuestro sitio son las más visitadas y las dificultades que nuestros visitantes pueden experimentar en el acceso a nuestro sitio. Con este conocimiento, podemos mejorar la calidad de su experiencia en la plataforma mediante el reconocimiento y la entrega de más de las características y la información más deseada, así como por la resolución de las dificultades de acceso. También utilizamos cookies y/o una tecnología conocida como web bugs o gifs transparentes, que normalmente se almacena en correos electrónicos para ayudar a confirmar el recibo de, y la respuesta a nuestros mensajes de correo electrónico y ofrecerle una experiencia más personalizada al usar nuestro sitio. Utilizamos proveedores de servicios de terceros, para que nos ayuden a comprender mejor el uso de nuestro sitio. Nuestro proveedor de servicio(s) colocará cookies en el disco duro de su ordenador y recibirá información que seleccionamos que nos educará en cosas tales como cómo los visitantes navegan por nuestro sitio, qué productos se buscan, y la información de transacciones en general. Nuestro proveedor de servicio(s) analiza esta información y nos proporciona informes agregados. La información y el análisis proporcionado por nuestro proveedor(es) de servicio será utilizada para que nos ayuden a comprender mejor los intereses de nuestros visitantes en nuestro Sitio y cómo servir mejor a esos intereses. La información recogida por nuestro proveedor de servicio(s) puede estar relacionada con y se combina con la información que recopilamos sobre usted mientras usted está usando la Plataforma. Nuestro proveedor(es) de servicio está/están contractualmente restringidos a usar la información que reciben de nuestro Sitio que no sea para que nos ayuden.</span>
                  </li>
                </ul>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>
                    <strong>Al utilizar nuestro sitio, usted acepta que podemos utilizar cookies para los fines arriba indicados. </strong>
                  </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>
                    <strong>Divulgación de Información Personal </strong>
                  </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>Utilizamos la información personal para los fines indicados en el momento que nos proporcione dicha información, y/o de otra forma para los fines establecidos en esta Política de Privacidad y/o según lo permitido por la ley. Usted reconoce que al utilizar nuestros servicios y su aceptación de esta Política de Privacidad nos estará proporcionando información personal. Usted da su consentimiento para la divulgación de esa información cuando se nos exija por ley a terceros con fines de identificación electrónica como se indicó anteriormente. Información de visitantes no personalmente identificable se puede proporcionar a terceros para la comercialización, publicidad, u otros usos. Cualquier tercero que reciba o tenga acceso a la información personal se exigirá por nosotros para proteger dicha información personal y utilizarla sólo para llevar a cabo los servicios que están realizando para usted o para Silkroad Latino, a menos que sea requerido o permitido por la ley. Nos aseguraremos de que cualquier tercero esté al tanto de nuestras obligaciones en virtud de esta Política de Privacidad y vamos a celebrar contratos con esos terceros para que estén obligados por los términos no menos restrictivos de cualquier información personal revelada a ellos que las obligaciones que llevamos a cabo para que en virtud de esta política de privacidad, o que se nos imponen por las leyes de protección de datos. </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}><strong>Enlaces a Terceros </strong></span></p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>De vez en cuando, a nuestra discreción, podemos incluir u ofrecer productos o servicios de terceros en nuestro sitio web. Por ejemplo, los servicios utilizados como pasarelas de pago en la seccion de donaciones. Estos sitios de terceros tienen políticas de privacidad separadas e independientes. Le recomendamos que revise todas las políticas, reglas, términos y regulaciones, incluyendo las políticas de privacidad de cada sitio que visite. Sin embargo, buscamos proteger la integridad de nuestro sitio y agradecemos cualquier comentario sobre estos sitios. No tenemos control sobre estos sitios de terceros o cualquiera de los contenidos incluidos en los mismos y está de acuerdo en que no somos de ninguna manera responsables de cualquiera de los sitios de terceros, incluyendo, sin limitación, su contenido, políticas, fracasos, promociones, productos, servicios o acciones y/o los daños, pérdidas, averías o problemas provocados por, relacionados con o derivados de esos sitios. </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>
                    <strong>Corrección / Actualización / Eliminación de la Información Personal </strong>
                  </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>Usted tiene el derecho a acceder a su información personal y a requerir la corrección, actualización y bloqueo de los datos inexactos y/o incorrectos, enviando un correo electrónico a la dirección:&nbsp;
                  <strong>srolatino.soporte@gmail.com.</strong> Silkroad Latino ejecutará su solicitud sólo cuando ello no sea incompatible con las Condiciones Generales, las obligaciones legales y reglamentarias. Al recibir su solicitud por escrito, nosotros le proporcionaremos la información personal relacionada con usted que tenemos y el uso y la divulgación general de su Información Personal. </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>
                    <strong>Seguridad </strong>
                  </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>Hemos implementado medidas de seguridad para garantizar la confidencialidad de su información personal y para proteger su información personal de la pérdida, mal uso, alteración o destrucción. Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal al momento de enviar una solicitud, hacer un pedido o acceder a su información personal. Estas medidas de seguridad incluyen: directorios protegidos con contraseña y bases de datos para salvaguardar su información y SSL, la tecnología para garantizar que su información esté totalmente encriptada y enviada a través de Internet de forma segura. Ofrecemos el uso de un servidor seguro. Toda información sensible/de crédito suministrada se transmite a través de Secure Socket Layer (SSL) y se encripta en nuestra base de datos para ser visitada sólo por las personas autorizadas con los derechos especiales de acceso a nuestros sistemas, y están obligadas a mantener la información confidencial. Sólo personal autorizado de Silkroad Latino tendrá acceso a su información personal, y se le requiere a este personal tratar la información de manera confidencial. Las medidas de seguridad establecidas serán de vez en cuando, revisadas de acuerdo con los desarrollos legales y técnicos. </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>
                    <strong>Retención de Información Personal </strong>
                  </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>Guardaremos su información personal sólo por el tiempo que sea necesario para nosotros, teniendo en cuenta los fines descritos en esta Política de Privacidad y nuestras propias obligaciones legales y reglamentarias. De acuerdo con nuestras obligaciones de mantenimiento de registros retendremos cuentas e información personal para, por lo menos un período de cinco años después de que sean cerradas por los Usuarios. </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>
                    <strong>Cambios </strong>
                  </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>Las políticas de nuestro sitio, el contenido, la información, promociones, divulgaciones, descargos de responsabilidad y funciones pueden ser revisadas, modificadas, actualizadas, y/o completarse en cualquier momento y sin previo aviso, a discreción única y absoluta de Silkroad Latino. Si cambiamos esta política de privacidad, tomaremos las medidas necesarias para notificar a todos los usuarios mediante un aviso en nuestro sitio y se publicará la Política de privacidad enmendada en el Sitio. </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>
                    <strong>Contáctenos </strong>
                  </span>
                </p>
                <p>
                  <span style={{
                    color: '#ffffff;',
                  }}>Si usted tiene alguna pregunta, comentario o inquietud sobre nuestra Política y/o las prácticas de privacidad, y que se relacione con la Plataforma, por favor póngase en contacto con nosotros en la siguiente dirección de correo electrónico: srolatino.soporte@gmail.com</span>
                </p>
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