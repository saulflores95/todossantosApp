import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Welcome extends React.Component {
  constructor(){
    super();

    this.state = {}
  }

  render(){
    const styles = {
      welcomeContainer:{
        textAlign:'center',
        marginTop:'250px',
        color:'#9D2A34',
        fontFamily:'Roboto',
      },
      text:{
        fontWeight:200,
        color:'gray',
      },
    }

    return (
      <div style={styles.welcomeContainer}>
        <h1>Welcome</h1>
        <p style={styles.text}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor
        (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y
        los mezcló de tal manera que logró hacer un
        libro de textos especimen.</p>
      </div>
    )
  }
}
