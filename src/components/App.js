import React, { Component } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'

import Title from './Title'
import VerticalMenu from './Menu';
import BabyForm from './BabyForm';
import { Grid  } from 'semantic-ui-react';

class App extends Component {
  
  //state of the app that will be for (1)Food intake; (2)Output of the baby; (3)Sleep time of the baby. All states will have a different structre
  state = {
    food: {
      title: 'Food',
      data:[],
    },
    output: {
      title: 'Output',
      data:[],
    },
    sleep:  {
      title: 'Sleep',
      data:[]
    },
    type: 'Food', 
  }
  
  /* Changes the type to whatever the user chooses in the menu and it will return the needed form*/
  changeBabyForm= (menu) => {
    this.setState({
      type: menu
    })
  }

  /* gets the data from food form and keeps it in the state of the app */
  babyFood = (babyFood) => {
    console.log(babyFood);
    this.setState({
      food: {
        ...this.state.food,
        data: [...this.state.food.data, babyFood]
      }
      })
    console.log(this.state);
  }
  
  render() {  
    const { type, food, output, sleep } = this.state

    return (
      <div className="App">
        <Grid >
          <Grid.Column container width={3}>
            <VerticalMenu menu={this.changeBabyForm} />
          </Grid.Column>
          <Grid.Column container width={12}>
            {type === 'Food' ? (
              <div className="App-Form">
                <Title title={food.title} />
                <BabyForm babyFood={this.babyFood}/>
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
          </Grid.Column >
        </Grid>
      </div>
    );
  }
}

export default App;
