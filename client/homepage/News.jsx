import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class News extends React.Component {
  constructor(){
    super();

    this.state = {}
  }

  render(){
    const styles = {
      overlay:{
        zIndex:1,
        color:'white',
        fontFamily:'Roboto',
        textAlign:'center',
        paddingTop:130,
      },
      title:{
        fontSize:30
      }
    }

    return (
      <div style={styles.overlay}>
        <h1 style={styles.title}>Todossantos Polo Club</h1>
        <p>Baja California's polo</p>
      </div>
    )
  }
}
