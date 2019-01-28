import React, { Component } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import Card from './Card'
import Title from './Title'
import VerticalMenu from './Menu';
import BabyForm from './BabyForm';


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
        <div> 
        <VerticalMenu menu={this.changeFormMenu}/>
        </div>

        <div>
          {type === 'Food' ? (
            <Card>
              <Title title={food.title} />
              <BabyForm />
            </Card>
          ) : type === 'Output' ? (
            <Card>
              <Title title={output.title} />
            </Card>
          ) : type === 'Sleep' ? (
            <Card>
              <Title title={sleep.title} />
            </Card>
          ) :
                null
          }
        </div>

      </div>
    );
  }
}

export default App;