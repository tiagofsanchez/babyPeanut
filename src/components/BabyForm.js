import React from 'react';
import { Form, Segment, Radio, Card } from 'semantic-ui-react';


const options = [
    { key: 'mr', text: 'Mr.', value: 'Mr.' },
    { key: 'miss', text: 'Miss.', value: 'Miss.' },
    { key: 'ms', text: 'Ms.', value: 'Ms.' },
    { key: 'mrs', text: 'Mrs.', value: 'Mrs.' }, 
];

const initialState = {
    breast: '',
    text: '',
    title: ''
};

class BabyForm extends React.Component {

    state = initialState;

    /* This handleChange takes care of all the events, input, textarea, checkbox, select */
    handleChange = (event, name = null, value = null) => {
        name ? console.log(name) : console.log(event.target.name);
        this.setState({ [name ? name : event.target.name]: value ? value : event.target.value })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState(initialState);
    }

    render() {

        const { breast , text , title } = this.state

        return (
            <Segment raised>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <label>Breast</label>
     
                        <Form.Field
                            name = 'breast'
                            control={Radio}
                            label='Right'
                            value='right'
                            checked={breast === 'right'}
                            onChange={(e, {name , value }) => this.handleChange(e, name, value)}
                        />
                        <Form.Field
                            name = 'breast'
                            control={Radio}
                            label='Left'
                            value='left'
                            checked={breast === 'left'}
                            onChange={(e, {name , value }) => this.handleChange(e, name, value)}
                        />

                        <Form.Dropdown
                            name='title'
                            label = 'title'
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='Mr.,Miss.,Ms. or Mrs'
                            fluid
                            selection
                            options={options}
                            value={title}
                        />
                    </Form.Group>
                    
                  
                        <Form.TextArea
                            name='text'
                            value={text}
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='Any notes that you want...'
                        />
                  
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Segment>
        )
    }
}

export default BabyForm;