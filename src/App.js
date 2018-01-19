import React, {Component} from 'react';
import './App.css';

import {
  Button, Container, Input,
  // Grid,
  Header,
  // Icon, Image, Item,
  Label,
  // Menu,
  Segment,
  // Step, Table
} from 'semantic-ui-react'

import Script from 'react-load-script'


const style = {
  h1: {
    marginTop: '1em'
  }
}
class App extends Component {

  handleScriptCreate(e) {
    console.log(this)
  }

  render() {
    return (
      <div className="App">

        <Header style={style.h1} as="h1">Template Auto-mailer</Header>
        <Container>
          <Segment.Group>
            <Segment>
            </Segment>
            <Segment>
              <p>
                Enter the <b>Spreadsheet ID</b> of the Google Sheet you wish to load
              </p>
              <Input label="Spreadsheet ID"/>
              <Button>Load</Button>
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    );
  }
}

export default App;
