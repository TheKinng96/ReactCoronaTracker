import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  overflow-y: scroll;
  height:40vh;
  width:30vw;
  border: 1px black solid;
  border-radius: 1rem;
  padding-left: 1.5rem;
  padding-top: 1rem;
  -ms-overflow-style: none;
  scrollbar-width: none; 

  &::-webkit-scrollbar {
  display: none;
  }
`

const CountryLine = styled.h3`
`

const NationList = data => {
  const countries = data.data;
  console.log(countries)

  return (
    <Container>
      {countries.map(country => (
        <CountryLine key={country.id}>{country.country}</CountryLine>
      ))}
    </Container>
  )
}

export default NationList;