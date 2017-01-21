import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

export default class CardColumn extends TrackerReact(React.Component) {
  constructor(){
    super();
    this.state = {
      shadow:2,
    }
  }

  onMouseOver(){
    this.state.shadow = 5;
    console.log(this.state.shadow);
  }
  onMouseOut(){
     this.state.shadow = 1;
     console.log(this.state.shadow);
  }

  render(){
    const styles = {}

    return (
      <MuiThemeProvider>
      <div>
        <Col sm={4} md={4} lg={4}>
          <div className="card">
            <Card>
              <CardMedia
                overlay={<CardTitle title="Become a Member" subtitle="Join the Todossantos Santos polo club" />}
              >
                <img height="200" src="data:image/jpeg;base64,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" />
              </CardMedia>
              <CardText>
                Wanted to play polo? Well now you can by becoming
                 part of this beutiful club.
              </CardText>
              <CardActions>
                <FlatButton label="More Information"  href="/members"/>
              </CardActions>
            </Card>
          </div>
        </Col>
        <Col sm={4} md={4} lg={4}>
          <div className="card">
          <Card>
            <CardMedia
              overlay={<CardTitle title="Events" subtitle="Come join us" />}
            >
              <img height="200" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSaNBQ1gegfmjQTDIulxmNpX631Ww8tGAzK4lSp8N3PdjbGZTYE7A" />
            </CardMedia>
            <CardText>
              View our calender of plan events, all inside to polo field!
            </CardText>
            <CardActions>
              <FlatButton label="Action1" />
            </CardActions>
          </Card>
          </div>
        </Col>
        <Col sm={4} md={4} lg={4}>
          <div className="card">
            <Card>
              <CardMedia
                overlay={<CardTitle title="Buy a Horse" subtitle="Get the best trained polo horses in the country" />}
              >
                <img height="200" src="http://img06.deviantart.net/b26c/i/2011/353/d/d/polo_horse_stock_by_theperfectequestrian-d4jm2c5.jpg" />
              </CardMedia>
              <CardText>
                Searching for the perfect horse, come search through our extent list of ponys.
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
              </CardActions>
            </Card>
          </div>
        </Col>
      </div>
      </MuiThemeProvider>
    )
  }
}
