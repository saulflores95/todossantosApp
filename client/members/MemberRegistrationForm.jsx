import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SignaturePad from 'react-signature-pad';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Rules from './Rules.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
export default class MemberRegistrationForm extends React.Component {
  constructor(){
    super();

    this.state = {
      value:null,
      open:false,
    }
  }
  handleChange(event, index, value){
    this.setState({value: value});
  }
  handleOpen(){
    this.setState({open: true});
  }
  handleClose(){
    this.setState({open:false});
  }
  render(){
    const styles = {
      form:{
        marginTop:100,
      },
      signaturePad:{
      },
      textCenter:{
        textAlign:'center',
      }
    }

    return (
      <MuiThemeProvider>
      <div style={styles.form}>
        <Col sm={6} md={6} lg={6}>
          <TextField
            hintText="First Name"
            fullWidth={true}
          />
        </Col>
        <Col sm={6} md={6} lg={6}>
          <TextField
            hintText="Last Name"
            fullWidth={true}
          />
        </Col>
        <Col sm={12} md={12} lg={12}>
          <TextField
            hintText="E-mail"
            fullWidth={true}
          />
        </Col>
        <Col sm={6} md={6} lg={4}>
            <SelectField
                  floatingLabelText="Blood Type"
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                  disabled={false}
            >
                  <MenuItem value={'O -'} primaryText="O -" />
                  <MenuItem value={'A +'} primaryText="A + " />
                  <MenuItem value={'A -'} primaryText="A -  " />
                  <MenuItem value={'B +'} primaryText="B + " />
                  <MenuItem value={'B -'} primaryText="B - " />
                  <MenuItem value={'AB +'} primaryText="AB + " />
                  <MenuItem value={'AB -'} primaryText="AB - " />
            </SelectField>
          </Col>
          <Col sm={6} md={6} lg={4}>
            <TextField
              hintText="Phone Number"
              fullWidth={true}
            />
          </Col>
          <Col sm={6} md={6} lg={4}>
            <TextField
              hintText="Image"
              fullWidth={true}
            />
          </Col>
          <Col sm={12} md={12} lg={12}>
            <TextField
              hintText="Emergency Contact Number"
              fullWidth={true}
            />
          </Col>
          <Col sm={12} md={12} lg={12}>
            <Dialog
            title="Terms and Conditions of the Todossantos Polo Club"
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
            >
              <Rules></Rules>
              <RaisedButton label="Close" onTouchTap={this.handleClose.bind(this)} fullWidth={true}/>
            </Dialog>
          </Col>
          <Col sm={12} md={12} lg={12}>
            <p style={styles.textCenter}>By Providing your signature,
             you read and agree to follow
             the terms and coditions of being
            a member of Todossantos Polo Club</p>
          </Col>
            <Col sm={12} md={12} lg={12}>
                <SignaturePad clearButton="true" />,
            </Col>
            <Col sm={12} md={6} lg={6}>
              <RaisedButton label="Submit" color={'white'} backgroundColor={'#9D2A34'} fullWidth={true}/>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <RaisedButton label="Terms and Conditions" onTouchTap={this.handleOpen.bind(this)} fullWidth={true}/>
            </Col>

          </div>
      </MuiThemeProvider>
    )
  }
}
