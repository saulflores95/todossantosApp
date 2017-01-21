import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import Rules from './Rules.jsx';
import MemberRegistrationForm from './MemberRegistrationForm.jsx';


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
        fontFamily:'Roboto'
      }
    }
    return (
      <div style={styles.container}>
        <Container>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <img width="100%" height="400" src={this.state.demoPlayerImg}></img>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <h1>Become a member</h1>
              <h2>Horse Pension</h2>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos
                de texto. Lorem Ipsum ha sido el texto de relleno estándar de las
                industrias desde el año 1500, cuando un impresor (N. del T.
                persona que se dedica a la imprenta) desconocido usó una galería de
                textos y los mezcló de tal manera que logró hacer un libro de textos
                especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
                texto de relleno en documentos electrónicos, quedando esencialmente
                igual al original. Fue popularizado en los 60s con la creación de las
                 hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y
                 más recientemente con software de autoedición, como por ejemplo Aldus
                PageMaker, el cual incluye versiones de Lorem Ipsum.
              </p>
            </Col>
          </Row>
          <Row>
            <MemberRegistrationForm></MemberRegistrationForm>
          </Row>
        </Container>
      </div>
    )
  }
}
