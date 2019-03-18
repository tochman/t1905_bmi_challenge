import React, { Component } from 'react';
import { bmiCalculation } from './modules/BMICalculator';
import {
  Container,
  Message,
  Header,
  Input,
  Grid,
  GridColumn,
  GridRow,
  Button
} from 'semantic-ui-react';


class App extends Component {
  state = {
    weight: '',
    height: '',
    message: '',
    displayMessage: false
  }

  calculate(weight, height) {
    if (weight === '' || height === '') {
      return
    } else {
      let message = bmiCalculation(weight, height)
      this.setState({ displayMessage: true, message: message })
    }
  }

  render() {
    return (
      <>
        <Container>
          <Header size='huge' color='grey'>BMI Calculator</Header>
          <p>Built by Thomas, Gimmi, Jens & Marcus at Informator T1905 React Advanced Course.</p>
          <Grid>
            <GridRow columns={2}>
              <GridColumn>
                <Input
                  fluid
                  placeholder='Weight'
                  value={this.state.weight}
                  onChange={e => { this.setState({ weight: e.target.value }) }}
                />
              </GridColumn>

              <GridColumn>
                <Input
                  fluid
                  placeholder='Height'
                  value={this.state.height}
                  onChange={e => { this.setState({ height: e.target.value }) }}
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn>
                <Button
                  disabled={(this.state.weight && this.state.height ? false : true)}
                  onClick={this.calculate.bind(this, this.state.weight, this.state.height)}>
                  Calculate
                  </Button>
              </GridColumn>
            </GridRow>

            <GridRow>
              <GridColumn>
                {this.state.displayMessage && <Message size='large'>
                  {/* {this.calculate(this.state.weight, this.state.height)} */}
                  {this.state.message}
                </Message>}
              </GridColumn>
            </GridRow>
          </Grid>
        </Container>

      </>
    );
  }
}

export default App;
