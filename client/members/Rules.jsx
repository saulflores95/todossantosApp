import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

export default class MemberWrapper extends TrackerReact(React.Component) {
  constructor(){
    super();

    this.state = {
      demoPlayerImg:'http://thewinebird.files.wordpress.com/2010/06/03polo-650-1.jpg',
    }
  }

  render(){
    const styles = {
      container:{
        position:'relative',
        marginTop:'100',
        fontFamily:'Roboto',
        align:'justify',

      },
      textCenter:{
        textAlign:'center',
      }
    }
    return (
      <div style={styles.container}>
            <Col sm={12} md={12} lg={12}>
              <h1 style={styles.textCenter}>Reglamiento</h1>
              <h2 style={styles.textCenter}>Club Hipico y Polo Todossantos</h2>
              <h4>CAPITULO I.- DEFINICIONES.</h4>
              <p>
                ARTÍCULO 1.- Según se utilizan en el presente Reglamento, los términos que a continuación se definen tendrán los significados que a cada uno de ellos
                se atribuye a continuación:
              </p>
              <ul>
                <li>“Administración” significará La Asociación Civil del club, Todos Santos A.C. la responsable de administrar el Club.</li>
                <li>”Casa Club” significará la Casa Club de Club de de Polo.</li>
                <li>“Club Hípico” significará el conjunto de instalaciones propiedades de Club Hípico y de Polo, destinadas a la práctica de los diferentes
                deportes ecuestres, incluyendo todas aquellas instalaciones destinadas a la capacitación, custodia y Supervivencia de caballos.</li>
                <li>“Equipo” significarán los diferentes accesorios y/o artículos con que cuenta cada miembro del Club.</li>
                <li>“Instructor” significará la persona contratada por el Administrador y/o el Club, para impartir clases, clínicas y/o cualquier tipo de capacitación
                para la práctica del deporte ecuestre dentro de las instalaciones del Club, así como para prestar servicios de apoyo, vigilancia y disciplina
                dentro del Club Hípico y sus respectivas instalaciones.</li>
                <li>“Reglamento” significará el presente Reglamento del Club Hípico y de Polo Todos Santos, así como cualquier otra disposición y/o norma
                complementaria que al efecto emita la Administración y/o el Club.</li>
                <li>“Usuario” significará el socio, cualesquiera de sus familiares registrados como socios, los invitados de los socios y, en general, cualquier
                persona que, previo el otorgamiento de la correspondiente autorización, ingrese a y/o haga uso de, el Club Hípico y/o de las instalaciones
                con que cuenta éste.</li>
              </ul>

              <h4>CAPITULO II.- Disposiciones Generales.</h4>


              <p>
                ARTÍCULO 2.- Toda actividad física conlleva riesgos generados por la misma ya sean de carácter endógeno o exógeno al socio y/o al usuario, razón por
                la cual la práctica de cualquier deporte y el uso del Club Hípico y/o de las instalaciones con que cuenta éste serán por cuenta y riesgo del mismo usuario
                y/o de sus padres, tutores y/o representantes legales.
                En virtud de lo anterior, ni el Club, ni la Administración ni los empleados y/o funcionarios de uno y de otra, asumen responsabilidad alguna por los daños,
                pérdidas, accidentes y/o lesiones (inclusive muerte) que pudiere sufrir determinado usuario o persona por el ingreso al Club Hípico y/o por el uso de las
                instalaciones con que cuenta éste.
              </p>
              <p>
                ARTÍCULO 3.- El presente Reglamento del Club Hípico es de estricta observancia para los propietarios de caballos, alumnos de la escuela, jinetes en
                general y visitantes autorizados por la Administración y/o por el Club, sin excepción e independientemente de su categoría de socios o no del Club,
                quienes por el sólo hecho de hacer uso de las instalaciones del Club hípico y de Polo, se considera que otorgan su íntegra y más absoluta aceptación a
                este Reglamento.
              </p>
              <p>
                ARTÍCULO 4.- Los integrantes del Club Hípico y de Polo, deberán cumplir, respetar y se someten, independientemente de su categoría, al Reglamento
                General del Club de Polo y demás Reglamentos aplicables tales como El Reglamento del Fraccionamiento MISION SAN ANTONIO, Propietario del
                predio donde se Ubica el club Hípico y de Polo, sin excepción alguna.
              </p>
              <p>
                ARTÍCULO 5.- En lo concerniente a la práctica del deporte Ecuestre dentro de las Instalaciones del Club, el club Hípico y de Polo se regirá en lo general,
                por las disposiciones dictadas por la Federación Ecuestre Mexicana A.C. y La Federación Mexicana de Polo y sus reglamentos vigentes y, en lo
                particular, por las disposiciones del presente Reglamento.
              </p>
              <p>
                ARTÍCULO 6.- La violación de este Reglamento en cualquiera de sus artículos será motivo de sanción, en los términos que al efecto se establecen en el
                Capítulo VIII. Del mismo.
              </p>
              <p>
                ARTÍCULO 7.- Toda persona que desee pertenecer al Club Hípico, ya sea como propietario de caballos o como alumno de la Escuela del Club Hípico,
                deberá presentar, sin excepción, una solicitud por escrito a la Gerencia del Club Hípico. Esta solicitud será evaluada por el Comité de Admisión del Club
                Hípico, dándosele respuesta en un término no mayor a tres días hábiles. En caso afirmativo, el interesado deberá cumplir con lo estipulado en el
                presente Reglamento y será informado, además, del Programa de Trabajo del Club, del Manual Operativo y del monto de las cuotas en vigor. El Comité
                de Admisión del Club Hípico se reserva el derecho de rechazar discrecionalmente y en cualquier tiempo, la admisión de
                Cualesquier personas que hubieren solicitado su ingreso al Club Hípico.
              </p>
              <p>
                ARTÍCULO 8.- Es obligación de los socios, usuarios, jinetes y visitantes autorizados por la Administración, el dar a los funcionarios y empleados del Club
                Hípico y del Club, así como a los demás socios, usuarios y/o visitantes, un trato cortés y respetuoso, así como observar, dentro de las instalaciones del
                Club, una conducta apegada en todo momento a las buenas costumbres.
              </p>

              <h4>CAPITULO III.- Reglas de Acceso y de Operacion del Club Hipico de Polo.</h4>
              <p>
              ARTÍCULO 9.- El Club Hípico y de polo, además de todas sus instalaciones tendrá los horarios de funcionamiento que al efecto determine la Gerencia
              del Club Hípico y de Polo, con el visto bueno de la Administración, en el entendido de que todos los socios, usuarios, jinetes y visitantes autorizados por
              la Administración deberán observar y cumplir dichos horarios. Los horarios de práctica de los jinetes que no pertenezcan a la Escuela de Equitación del
              Club Hípico deberán ser convenidos con el Instructor.
              </p>
              <p>
              ARTÍCULO 10.- La Gerencia del Club Hípico y de polo en coordinación con la Administración, determinarán las cuotas que deberán pagar las personas
              que sean aceptadas como miembros del Club Hípico, así como las demás cuotas que por los diversos servicios que presta éste, deban pagar todos
              aquellos socios, usuarios, jinetes y visitantes autorizados por la Administración, por el ingreso a y/o por el uso de, las instalaciones del Club Hípico.
              Todas las cuotas deberán ser pagadas, sin excepción, dentro de los primeros siete días de cada mes en la Caja Principal del Club. La falta de pago de
              las cuotas en la forma y términos convenidos obligará al socio y/o usuario de que se trate a pagar una penalidad equivalente al 15% sobre el saldo
              insoluto hasta la fecha en la que dicho pago sea efectivamente realizado y los intereses moratorio Respectivos, sean pagados en su totalidad. La falta
              de pago de cuotas durante dos meses consecutivos será motivo de Suspensión de servicios por parte del Club y la Administración, debiendo el socio y/o
              usuario de que se trate retirar del Club el o los caballos que tuviere dentro de las instalaciones del Club Hípico en un plazo máximo de siete días
              contados a Partir de la fecha en la que la administración le notifique el requerimiento de retiro respectivo, en el entendido de que a partir del día siguiente
              al vencimiento del plazo antes referido, ni el Club Hípico, ni la Administración del Club ni el Club será responsables de la custodia, cuidado y/o
              alimentación del o los caballos de que se trate. En este supuesto y a partir de la fecha de vencimiento del plazo antes referido, el Club no será
              responsable por los daños, lesiones o incluso por la Pérdida y/o muerte que pudiere sufrir el o los caballos en cuestión, así como tampoco por la
              afectación, los daños y/o los perjuicios que pudieren causarse al propietario de los caballos con motivo de los daños, lesiones, pérdida y/o la muerte Que
              pudieren sufrir éstos.
              En caso de que la cuota que se encuentre en mora corresponda a la Escuela de Equitación del Club Hípico, el alumno de que se trate será dado de baja
              de la misma en forma inmediata, a partir del día siguiente al del vencimiento del plazo de
              Siete días anteriormente establecidos.
              </p>
              <p>
              ARTÍCULO 11.- Los socios y/o usuarios del Club Hípico y/o de sus instalaciones, deberán usar ropa apropiada para la práctica de deportes ecuestres,
              debiendo usar en todo momento casco protector y cualquier otro aditamento y/o accesorio de seguridad que en su momento requiera o indique el
              Instructor; en tal razón, está prohibido montar con zapato tenis. De igual forma, los caballos deberán contar con el equipo idóneo para la práctica de la
              equitación, el cual será supervisado y en su caso aprobado por el Instructor.
              </p>
              <p>
              ARTÍCULO 12.- Está estrictamente prohibido que personas no autorizadas por la Administración, impartan clases de Equitación sin excepción,
              independientemente de que cobren o no honorarios por sus servicios. Asimismo está prohibido que los caballos sean montados por entrenadores ajenos
              al Club. En caso de que el propietario del caballo desee que este sea montado por alguna otra persona sin fines de adiestramiento del caballo, deberá
              comunicarlo por escrito al instructor y a la gerencia del Club.
              </p>
              <p>
              ARTÍCULO 13.- Dentro de las instalaciones del Club, solo está autorizado el manejo de caballos por parte del personal contratado para tales efectos por
              la administración. En tal virtud, el socio y/o usuario del Club Hípico y/o de sus instalaciones se obliga a respetar y cumplir cualquier indicación que para
              el manejo de los caballos reciba de parte del personal designado para tal efecto por la Administración.
              </p>
              <p>
              ARTÍCULO 14.- Cualquier daño a las instalaciones del Club Hípico y/o del Club, incluyendo obstáculos, barras y demás aditamentos, accesorios y/o
              equipo con que cuentan éstas, ocasionados por negligencia, uso indebido y/o por inobservancia del presente Reglamento, será reparado por la
              Administración a cargo y por cuenta del socio y/o usuario responsable de dicho daño.
              </p>
              <p>
              ARTÍCULO 15.- La participación en Concursos Hípicos (Salto, Polo) tanto en las instalaciones del Club como las que se realicen en otras agrupaciones o
              instalaciones, deberá contar con la autorización del Instructor, a fin de garantizar Un mejor desempeño en la competencia. En caso de que algún jinete
              salga a competir fuera de las instalaciones del Club y Se haga acompañar por el Instructor, previo visto bueno de la Administración del Club y/o de la
              Gerencia del Club Hípico, cubrirá íntegramente los gastos que por este motivo se generen, así como los gastos del caballerango que le hubiere sido
              asignado para tales fines, más la gratificación y/o retribución que en su caso y en su momento hubiere convenido con el Instructor.
              </p>
              <h4>CAPITULO IV.- DEL CUIDADO Y CUSTODIA DE LOS CABALLOS.</h4>
              <p>
              ARTÍCULO 16.- El Club Hípico y de Polo, podrá prestar a los socios y/o usuarios del Club el servicio de caballerizas, a través del cual el Club Hípico se
              encarga de guardar, custodiar y alimentar a los caballos de los socios y/o usuarios del mismo. Para tales efectos, el socio y/o usuario deberá presentar
              ante la Gerencia del Club Hípico la solicitud respectiva, en la cual deberá precisar, entre otros requisitos, la ficha técnica, médica y/o el historial de cada
              uno de los caballos cuya guarda y custodia solicite al Club Hípico, en el entendido de que éste último se reserva el derecho de rechazar,
              discrecionalmente y en cualquier tiempo, cualquier solicitud que para tales fines le sea presentada. En caso de que la solicitud presentada por algún
              socio y/o usuario del Club Hípico sea aceptada por la Gerencia del Club Hípico, el socio y/o usuario en cuestión Deberá suscribir con la Administración,
              el contrato respectivo y pagar, en la Caja Principal del Club, las cuotas que por tales servicios tenga vigentes la Administración. En caso de que el socio
              y/o usuario incurriese en mora en el pago De las cuotas antes referidas, se estará a lo dispuesto en el artículo 10 de éste Reglamento.
              </p>
              <p>
              ARTÍCULO 17.- Los propietarios de los caballos cuya admisión hubiese sido aprobada para los efectos a que se refiere el artículo 16 de este
              Reglamento, serán responsables de suministrar al Club Hípico los utensilios de limpieza de sus Caballos y del equipo de su propiedad.
              </p>
              <p>
              ARTÍCULO 18.- Los servicios de guarda, custodia y alimentación objeto del presente capítulo serán prestados por el Club Hípico y de Polo con la más
              alta calidad integral y con el mínimo de riesgos. Estos servicios incluyen : alimento de inmejorable calidad, revisión por Médico Veterinario especialista
              en equinos cada mes o cuando sea necesario con csto al propietario dele caballo, y manejo de caballos por caballerangos capacitados. En el caso de
              que algún propietario desee proporcionar a su caballo servicios de herraje, veterinario y/o alimentos diferentes a los aprobados por la Administración y/o
              por la Gerencia del Club Hípico, será bajo su estricta y única responsabilidad y costo. En estos casos, la Administración no deducirá esos costos de la
              cuota pagada por el propietario del caballo por la guarda, custodia y/o alimentación del mismo.
              </p>
              <p>
              ARTÍCULO 19.- El Club Hípico, la Administración y/o el Club no asumen responsabilidad alguna por los daños, enfermedades, lesiones o incluso por la
              pérdida y/o muerte que pudiere sufrir el o los caballos cuya guarda y custodia les Hubiese sido encomendada en términos del presente capítulo, así
              como tampoco por la afectación, los daños y/o los perjuicios que pudieren causarse al propietario de los caballos con motivo de los daños, lesiones,
              pérdida y/o la muerte que Pudieren sufrir éstos, a menos de que los mismos sean causados por dolo o negligencia de parte del Club Hípico y/o de su
              personal.
              </p>
              <h4>CAPITULO V.- DE LA ESCUELA DE EQUITACION.</h4>
              <p>
              ARTÍCULO 20.- El Club Hípico, a través de su Escuela de Equitación, podrá prestar a los socios y/o usuarios del mismo, servicios de capacitación y
              entrenamiento para jinetes, así como de adiestramiento de los caballos. Para tales efectos, el socio y/o usuario deberá solicitar tal servicio en la
              Gerencia del Club Hípico y pagar en la Caja Principal del Club las cuotas que la Administración hubiere determinado para tales fines. Tratándose del
              adiestramiento de los caballos, el propietario de los mismos deberá convenir con el Instructor la duración y frecuencia de la misma, así como el costo
              que el propietario deberá cubrir por dicho servicio.
              </p>
              <p>
              ARTÍCULO 21.- Para la prestación de los servicios de capacitación y entrenamiento de jinetes, se formarán grupos integrados en tres categorías:
              Principiantes, Medios y Avanzados; esta clasificación será realizada por el Instructor designado por la Administración o la Gerencia del Club Hípico, en
              función a las facultades del jinete, siendo definitiva la decisión que éste tome. Los horarios de las clases serán convenidos por el socio o usuario con el
              Instructor, de acuerdo al Programa de Trabajo a que se refiere el artículo siguiente. Para todos los alumnos de la Escuela de Equitación es obligatorio el
              uso de casco protector.
              </p>
              <p>
              ARTÍCULO 22.- El instructor, con el visto bueno de la Administración y de la Gerencia del Club Hípico y de Polo, elaborará el Programa de Trabajo
              general y particular de jinetes y caballos, el cual deberá ser observado y respetado sin excepción, ya que se formulará con fundamentos técnicos
              estrictos teniendo en cuenta el bienestar integral de jinetes y caballos, sus necesidades, minimización de riesgos y la mejor superación de ambos. Este
              Programa de Trabajo incluirá el uso de pistas de salto, cancha de polo, picaderos, corredor elíptico y corrales; la utilización de estas instalaciones
              requerirá, sin excepción, la autorización previa del Instructor.
              </p>
              <h4>CAPITULO VI.- DE LAS NORMAS DE CONTROL Y SEGURIDAD.</h4>
              <p>ARTÍCULO 23.- Todo caballo que ingrese a las instalaciones del Club Hípico para su guarda y custodia en términos del artículo 16 de este Reglamento, deberá contar con todas las vacunas recomendadas por la Federación Ecuestre Mexicana Y haber sido desparasitado durante los últimos seis meses anteriores a su ingreso, debiendo su propietario presentar el certificado que acredite tales situaciones, el cual deberá ser expedido por un médico veterinario. En caso contrario, se Procederá a su vacunación y desparasitación inmediata, a costo y bajo la responsabilidad del Propietario.</p>
              <p>ARTÍCULO 24.- El Médico Veterinario contratado por la Administración y/o Gerencia del Club Hípico y de Polo, realizará un examen clínico del caballo a su ingreso a las instalaciones del Club, a fin de determinar su estado de salud. No serán admitidos En las instalaciones del Club aquéllos caballos que presenten alguna patología que pueda poner en riesgo de contagio al resto de los caballos que se encuentren en el Club.</p>
              <p>ARTÍCULO 25.- Los instructores, los socios, cualesquiera de sus familiares registrados como socios, los invitados de los socios y, en general, cualquier persona que, previo el otorgamiento de la correspondiente autorización, ingrese a y/o haga uso de, el Club Hípico y/o de las instalaciones con que cuenta éste se obligan a respetar, en adición a las demás reglas y normas de carácter general que se contienen en éste Reglamento, las siguientes:</p>
              <ul>
                <li>Los caballerangos no podrán montar caballos sin la expresa autorización del propietario de los mismos y con el visto bueno previo del instructor.</li>
                <li>Todos los jinetes que vayan a hacer uso de las instalaciones del Club Hípico y de Polo, así como los alumnos de la Escuela de Equitación y el personal destinado por el Club al Club Hípico, deberán contar con protección antitetánica reciente.</li>
                <li>Está prohibido introducir mascotas de cualquier especie a las instalaciones del Club Hípico y de Polo.</li>
                <li>Con objeto de evitar accidentes, no se permite el uso de bicicletas, patines y similares, en las instalaciones del Club Hípico; de igual forma, no se podrán introducir y/o usar en dichas instalaciones ningún tipo de pelotas y/o balones.</li>
                <li>Los menores de siete años sólo podrán ingresar a y permanecer en las instalaciones del Club Hípico, cuando se encuentren acompañados por un adult</li>
                <li>Está estrictamente prohibido introducir bebidas alcohólicas a las instalaciones del Club Hípico.</li>
                <li>No se permitirá montar o practicar deporte ecuestre alguno dentro de las instalaciones del Club Hípico a persona alguna que se encuentre bajo el efecto de bebidas alcohólicas y/o de drogas.</li>
                <li>Algunos medicamentos producen pérdidas de equilibrio, somnolencia o alteraciones visuales; por lo anterior, ninguna persona podrá usar las instalaciones del Club Hípico cuando esté consumiendo medicamentos que pudieren provocar este tipo de reacciones y/o efectos. Por lo anterior, se recomienda a los socios y/o usuarios del Club Hípico que se encuentren bajo cualquier tipo de tratamiento médico, el que se consulte con el Médico tratante la conveniencia o contraindicación de Montar a caballo.</li>
                <li> Dentro de las instalaciones del Club Hípico, está estrictamente prohibido el maltrato de cualquier índole a los caballos.</li>
                <li>El Club Hípico no se hace responsable por accidentes o enfermedades que pudieren sufrir los caballos y/o jinetes durante la práctica del deporte Hípico, incluyendo períodos de estabulación del caballo; asimismo, no se hace responsable de accidentes ocurridos a los visitantes dentro de las instalaciones del Club.</li>
                <li>El Club no es responsable de los daños que puedan sufrir los vehículos y/o los equipos propiedad de los jinetes y/o visitantes autorizados dentro de las instalaciones del Clu</li>
                <li>El Club Hípico deberá contar con un Servicio Médico Veterinario disponible. El costo por atención veterinaria derivada de cualquier patología equina y por vacunación y desparasitación de acuerdo a esquemas epizootiológicos,  correrá a cargo del propietario del caballo, quien deberá pagar a la Administración y/o a la Gerencia del Club Hípico, los costos y/o gastos
                Respectivos dentro de los cinco días hábiles siguientes al requerimiento que en tal sentido realice la Administración</li>
              </ul>
              <h4>CAPITULO VII.- DEL CODIGO DE CONDUCTA.</h4>
              <p>ARTÍCULO 26.- Los instructores, los socios, cualesquiera de sus familiares registrados como socios, los invitados de los socios y, en general, cualquier persona que, previo el otorgamiento de la correspondiente autorización, ingrese a y/o haga uso de, el Club Hípico y/o de las instalaciones con que cuenta éste se obligan a observar y respetar el Código de Conducta de la Federación Ecuestre Internacional y de la Liga Internacional para la Protección de los caballos, el cual a continuación se transcribe:</p>
              <h3 style={styles.textCenter}>Codigo de etica</h3>
              <ol>
                <li>En todos los deportes ecuestres, lo más importante debe ser el bienestar del caballo</li>
                <li>El bienestar del caballo debe pasar sobre las exigencias de todas las partes concernientes, incluyendo los intereses comerciales.</li>
                <li>Todos los cuidados y los tratamientos veterinarios prodigados a los caballos deben garantizar su salud y bienestar.</li>
                <li>Un nivel óptimo debe ser fomentado y mantenido en todo momento en los dominios de la alimentación, la salud, la Higiene y la seguridad.</li>
                <li> Durante el transporte de los caballos, deben ser tomadas medidas adecuadas para mantener un entorno sano, Asegurarles una aireación adecuada, así como también el forraje y la bebida regularmente.</li>
                <li>El mejoramiento de la instrucción deberá acentuarse en la práctica de los deportes ecuestres, así como sobre la Promoción de los estudios científicos sobre la medicina equina.</li>
                <li>En el interés del caballo, la forma física y la capacidad del jinete son consideradas como esenciales.</li>
                <li>Cada tipo de Equitación y cada método de entrenamiento deben tener en cuenta al caballo como ser viviente y excluir toda técnica considerada abusiva por la Federación Ecuestre Internacional.</li>
                <li>Las Federaciones Nacionales deben instaurar los controles adecuados con la finalidad de que toda persona y todo órgano bajo su jurisdicción respeten el bienestar del caballo.</li>
                <li>Los Reglamentos Nacionales e Internacionales concernientes a la salud y el bienestar de los caballos deben ser estrictamente respetados, no solamente durante las competencias, sino también durante los entrenamientos. Estos reglamentos serán regularmente puestos al día.</li>
              </ol>
              <h4>CAPITULO VIII.- DE LAS SANCIONES.</h4>
              <p>ARTÍCULO 27.- La Administración se encuentra facultada para fijar las sanciones correspondientes en caso de incumplimiento a cualesquiera de las normas contenidas en el presente Reglamento, en función de la gravedad de la falta cometida por el socio.</p>
              <p>ARTÍCULO 28.- La Administración impondrá una sanción consistente en la suspensión temporal de 30 a 180 días naturales en el uso de las instalaciones del Club Hípico y del Club, a los socios que incurran en las siguientes conductas:</p>
              <ul>
              <li>A aquél socio que viole las disposiciones de los reglamentos internos de alguna de las áreas o instalaciones del Club y del Club Hípico;</li>
              <li> A aquél socio que, a juicio de la Administración, observe mala conducta, deportiva o socialmente, que desprestigie al Club y/o al Club Hípico, dentro o fuera de éstos;</li>
              <li> A aquél socio que no cumpla con las disposiciones de este reglamento.</li>
              </ul>
              <p>ARTÍCULO 29.- La Administración suspenderá de manera definitiva al socio o usuario que se coloque en cualquiera de los siguientes supuestos:</p>
              <ul>
                <li>Que haya sido sujeto de suspensión temporal por más de dos ocasiones; o </li>
                <li>Al que cometa una falta cuya gravedad, a juicio de la Administración, amerite la suspensión definitiva, habiendo escuchado previamente al infractor.</li>
              </ul>
              <p>ARTÍCULO 30.- Las sanciones previstas en los dos artículos precedentes serán determinadas por la Administración en función de la gravedad de la falta así como en la reincidencia de la misma por parte del socio de que se trate, en entendido de que dicha Administración estará facultada para revocar, en cualquier tiempo cualquier sanción que hubiere impuesto, sea en forma parcial o total.</p>
              <h4>CAPITULO IX.- DISPOSICIONES FINALES.</h4>
              <p>ARTÍCULO 31.- El presente Reglamento podrá ser modificado en cualquier tiempo por la Administración, quien tendrá igualmente la facultad de interpretar cualquier disposición contenida en el mismo.</p>
              <p>ARTÍCULO 32.- Cualquier supuesto no previsto en el presente Reglamento que verse sobre las instalaciones del Club Hípico será resuelto por la Administración, en la forma que mejor convenga a los intereses del Club, del Club Hípico y de la generalidad de los socios.</p>
              <p>ARTÍCULO 33.- El presente Reglamento se aplicará a cualquier persona que haga uso de las instalaciones del Club Hípico, sea ésta invitada, competidor interno, externo o socio.</p>
              <h3>Atte: Lic. Saul Flores Guerrero </h3>
              <h4>Administrador</h4>

            </Col>
      </div>
    )
  }
}
