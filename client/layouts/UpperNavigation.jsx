import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

export default class UpperNavigation extends TrackerReact(React.Component) {
  constructor(){
    super();
    this.state = {
      logoUrl:'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/15940448_755619637925989_8003616840330847674_n.png?oh=a349ad01982bb62a32b2169c3525e024&oe=591F502C',
    }
  }

  render(){

    const styles = {
        ul:{
          listStyleType:'none',
          margin:0,
          padding:10,
          overflow:'hidden',
          background: '#9D2A34',
        },
        li:{
          float:'left',
        },
        liRight:{
          float:'right',
        },
        a:{
          display:'block',
          color:'white',
          textAlign:'center',
          padding:15,
          textDecoration:'none',
          fontFamily:'Roboto',
          fontSize:'20',
        },
        img:{
          width: '100',
          height: '100',
          padding:'10',
          borderRadius:'50%',
        },
        imgContainer:{
          display:'inline-block',
          left: '50%',
          top:-35,
          position:'absolute',
          backgroundColor:'white',
          borderRadius:'50%',
          webKitTransform: 'translate(-50%, 50%)',
          transform: 'translate(-50%, 50%)',
        }
    }

    return (
      <div style={styles.UpperNavigation}>
        <div style={styles.imgContainer}>
          <img style={styles.img} src={this.state.logoUrl} />
        </div>
        <ul style={styles.ul}>
          <li style={styles.li}><a style={styles.a} href="/">Home</a></li>
          <li style={styles.li}><a style={styles.a} href="#">News</a></li>
          <li style={styles.liRight}><a style={styles.a} href="#">Contact</a></li>
          <li style={styles.liRight}><a style={styles.a} href="#">Buy</a></li>
        </ul>
      </div>
    )
  }
}
