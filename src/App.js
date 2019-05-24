import React from 'react';
import './App.css';
import InputComponent from './Input'
import OutputComponent from './Output'
import { Grid, GridCell } from "@rmwc/grid";
import "@material/layout-grid/dist/mdc.layout-grid.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputData: ''};
  }

  generateInApp = (args) => {
    console.log('generate in App', args)
    this.setState({inputData: args})
  }

  render () {
    return (
      <Grid>
        <GridCell span={6}>
          <InputComponent parentFunc={this.generateInApp} />
        </GridCell>
        <GridCell span={6}>
          <OutputComponent data={this.state.inputData} />
        </GridCell>
      </Grid>
    );
  }
}

export default App;
