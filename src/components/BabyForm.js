import React from 'react';
import { Form, Segment, Radio, Label, Divider } from 'semantic-ui-react';
import './BabyForm.css';


const timeOptions = [
    { key: '5', text: '5 min', value: '5' },
    { key: '10', text: '10 min', value: '10' },
    { key: '15', text: '15 min', value: '15' },
    { key: '20', text: '20 min', value: '20' },
];

const quantityOptions = [
    { key: '5', text: '5 ml', value: '5' },
    { key: '10', text: '10 ml', value: '10' },
    { key: '15', text: '15 ml', value: '15' },
    { key: '20', text: '20 ml', value: '20' },
]

const initialState = {
    breast: '',
    duration: '',
    quantity: '',
    datetime: '',
    text: '',
};

class BabyForm extends React.Component {

    state = initialState;

    /* This handleChange takes care of all the events, input and textarea selected */
    handleChange = (event, name = null, value = null) => {
        name ? console.log(name) : console.log(event.target.name);
        this.setState({ [name ? name : event.target.name]: value ? value : event.target.value })
    };

    /* will pass the state of the form to the parent, App in a newly created array babyFood */
    handleSubmit = (event) => {
        const { breast, duration, quantity, datetime, text } = this.state
        event.preventDefault();
        const babyFood = {
            breast: breast,
            duration: duration,
            quantity: quantity,
            datetime: datetime,
            text: text,
        }
        this.props.babyFood(babyFood);
        this.setState(initialState);
    }

    render() {

        const { breast, text, duration, datetime, quantity } = this.state

        return (
            <div>
            <Segment>
                <Form className="form-wrap" onSubmit={this.handleSubmit}>

                    <Form.Group className="form-group-wrap" inline >
                        <Label inline>BREAST</Label>
                        <label >side:</label>
                        <Form.Field
                            name='breast'
                            control={Radio}
                            label='Right'
                            value='right'
                            checked={breast === 'right'}
                            onChange={(e, { name, value }) => this.handleChange(e, name, value)}
                        />
                        <Form.Field
                            name='breast'
                            control={Radio}
                            label='Left'
                            value='left'
                            checked={breast === 'left'}
                            onChange={(e, { name, value }) => this.handleChange(e, name, value)}
                        />
                        <label>duration:</label>
                        <Form.Dropdown
                            name='duration'
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='time of breastfeeding...'
                            selection
                            options={timeOptions}
                            value={duration}
                        />
                    </Form.Group>
                    <Form.Group className="form-group-wrap" inline>
                        <Label>FORMULA</Label>
                        <label>quantity:</label>
                        <Form.Dropdown
                            name='quantity'
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='quantity given..'
                            selection
                            options={quantityOptions}
                            value={quantity}
                        />
                    </Form.Group>

                    <Form.Group className="form-group-wrap" inline>
                        <Label>DATE & TIME </Label>
                        <Form.Input
                            name='datetime'
                            type="datetime-local"
                            value={datetime}
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                        />
                    </Form.Group>

                    <Form.TextArea
                        name='text'
                        value={text}
                        onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                        placeholder='Any notes that you want...'
                    />

                    <Form.Button color='blue' fluid basic >Submit</Form.Button>
                </Form>
            </Segment>
            <div>
                    <form className="flex-form">
                        <input type="search" placeholder="Where do you want to go?"></input>

                        <label for="from">From</label>
                        <input type="date" name="from"></input>

                        <label for="from">To</label>
                        <input type="date" name="to"></input>

                        <select name="" id="">
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guest</option>
                            <option value="3">3 Guest</option>
                            <option value="4">4 Guest</option>
                            <option value="5">5 Guest</option>
                        </select>
                    </form>


            </div>
            </div>


                            )
                        }
                    }
                    
export default BabyForm;