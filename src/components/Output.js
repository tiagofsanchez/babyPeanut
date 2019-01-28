import React from 'react'
import { List, Label } from 'semantic-ui-react'


const Output = ({ info }) => {

  return (
    <List>
      {info && Object.keys(info.data[0]).map(key => {

        const obj = info.data[0]

        return (
          <List.Item>
            <Label color="blue">{key}</Label>
            {' : '}
            {JSON.stringify(obj[key])}
          </List.Item>
        )
      })}
    </List>
  )


}

export default Output
