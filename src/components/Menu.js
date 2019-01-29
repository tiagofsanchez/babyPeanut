import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class VerticalMenu extends Component {
  state = { 
      activeItem: 'Food' 
    }

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
      this.props.menu(name) 
    }

  render() {
    const { activeItem } = this.state; 
  
        return (
            <Menu pointing secondary vertical>
                <Menu.Item
                    name='Food'
                    active={activeItem === 'Food' }
                    onClick={this.handleItemClick} />
                <Menu.Item
                    name='Output'
                    active={activeItem === 'Output'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Sleep'
                    active={activeItem === 'Sleep' }
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}