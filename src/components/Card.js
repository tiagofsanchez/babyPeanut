import React from 'react'
import { Segment, SegmentGroup } from 'semantic-ui-react'


const Card = ({ children }) => {
  
  return (
    <SegmentGroup >
      <Segment > {children} </Segment>
    </SegmentGroup>
  )
}

export default Card