import React from 'react'
import Card from './card.components'
import styled from 'styled-components'

const Container =styled.div`
  display: flex; 
  width: 50vw;
  justify-content: space-around;
  margin: 1.5rem;
`

const CardRow = (data) => {
  return (
    <Container>
      <Card title="Corona Cases" data={data}/>
      <Card title="Recovered" data={data}/>
      <Card title="Death" data={data}/>
    </Container>
  )
}

export default CardRow;