import React, { Component } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'

import Title from './Title'
import VerticalMenu from './Menu';
import BabyForm from './BabyForm';
import { Grid, GridColumn, Segment } from 'semantic-ui-react';

class App extends Component {
  
  //state of the app that will be for (1)Food intake; (2)Output of the baby; (3)Sleep time of the baby. All states will have a different structre
  state = {
    food: {
      title: 'Food',
      data: [{
        date: new Date(Date.parse('2019/01/10')),
        bb: {
          side: 'left',
          duration: 200,
          time: new Date()
        },
        bt: {
          ml: 100,
          time: new Date()
        }
      }]
    },
    output: {
      title: 'Output'
    },
    sleep: {
      title: 'Sleep'
    },
    type: 'Food', 
  }
  
  changeFormMenu= (menu) => {
    this.setState({
      type: menu
    })
  }
  
  render() {  
    const { type, food, output, sleep } = this.state

    return (
      <div className="App">
        <Grid >
          <Grid.Column container width={3}>
            <VerticalMenu className="App-Menu" menu={this.changeFormMenu} />
          </Grid.Column>
          <Grid.Column container width={12}>
            {type === 'Food' ? (
              <div className="App-Form">
                <Title title={food.title} />
                <BabyForm />
              </div>
            )
              : type === 'Output' ? (
                <div className="App-Form">
                  <Title title={output.title} />
                  {/* <BabyForm /> */}
                </div>
              ) : type === 'Sleep' ? (
                <div className="App-Form">
                  <Title title={sleep.title} />
                  {/* <BabyForm/> */}
                </div>
              ) :
                  null
            }
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
