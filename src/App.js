import React, {Component} from 'react';
import logo from './logo.svg';
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

const style = {
  h1: {
    marginTop: '1em'
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header style={style.h1} as="h1">Template Auto-mailer</Header>
        <Container>
          <Segment.Group>

            <Segment>
              <p>
                Enter the
                <b>Spreadsheet ID</b>
                of the Google Sheet you wish to load
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
