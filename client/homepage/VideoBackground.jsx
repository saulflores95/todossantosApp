import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class VideoBackground extends React.Component {
  constructor(){
    super();

    this.state = {
      videoUrl:'https://d1wst0behutosd.cloudfront.net/videos/13011902/38580378.mp4?Expires=1484000313&Signature=CeP4UjL7giZb5xxfyT2jIvpESHz7vgMcmP2WJ57qeTqbp3BR-lMyXssDa0p2ErWgGYQCbBmHgt0sCz1jKOhBPYBeJ8Gxm50q3iMhJvQWGHUYWBgH8czYkNAMinmFdjEg40TAxHNejb4~TrdCEdVh24LNwnQb8IrasjOXBAWC3Fo6HNv5KTJLatTL5BVvO6Ps2-UWav7JvfN~oiGNOLhOIr5T29Uf3uYUaP-VPY-E0DAlxEUBDZk8VgeeCYQhgMITB8E4rc2agQ2A32l57W7WTO1L7NHMG8jOWCBJ-bbWZHSXA1cAxLvn6tS4z5eEzOKOGsizvD7H8rJmaqfMyPoSEA__&Key-Pair-Id=APKAJJ6WELAPEP47UKWQ',
      imgUrl:'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/15747377_10205891492565845_2168378096320972787_n.jpg?oh=b8e2520699500a9902b2da2ff5ae316a&oe=5924A268',
    }
  }

  render(){
    const styles = {
      videoContainer:{
        position:'absolute',
        width:'100%',
        height:'400',
        zIndex:-100,
        top:100,
        right:0,
        bottom:0,
        left:0,
        overflow:'hidden',
      },
      video:{
        position:'absolute',
        top:0,
        left:0,
        width: '100%',
        transformOrigin: 'top left',
      }
    }

    return (
      <div style={styles.videoContainer}>
        <video style={styles.video} poster={this.state.imgUrl} loop autoPlay muted>
          <source src={this.state.videoUrl} />
        </video>
      </div>
    )
  }
}
