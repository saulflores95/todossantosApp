import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import VideoBackground from './VideoBackground.jsx';
import OverlayText from './OverlayText.jsx';
import Welcome from './Welcome.jsx';
import CardColumn from './CardColumn.jsx';

export default class HomepageWrapper extends TrackerReact(React.Component) {
  constructor(){
    super();

    this.state = {}
  }

  render(){
    const styles = {
      cardContainer:{
        paddingTop:150,
        }
    }
    return (
      <div>
          <VideoBackground></VideoBackground>
          <OverlayText></OverlayText>
          <Container>
            <Row>
              <Col>
                <Welcome></Welcome>
              </Col>
            </Row>
            <div style={styles.cardContainer}>
              <Row>
                <CardColumn></CardColumn>
              </Row>
            </div>
          </Container>
      </div>
    )
  }
}
