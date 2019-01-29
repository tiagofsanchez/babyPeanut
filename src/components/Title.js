import React from 'react'
import { Header } from 'semantic-ui-react'

const Title = ({ title }) => {

  return (
    <Header as='h1' textAlign='left'>
      {title} 
    </Header>
  )
}

export default Title
