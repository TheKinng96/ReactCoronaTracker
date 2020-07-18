import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  overflow-y: scroll;
  height:40vh;
  width:40vw;
  border: 1px black solid;
  border-radius: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  -ms-overflow-style: none;
  scrollbar-width: none; 

  &::-webkit-scrollbar {
  display: none;
  }
`

const CountryLine = styled.h3`
  font-size: 1.25rem;
  padding: 0.5rem
`

const NationList = data => {
  const countries = data.data;

  return (
    <Container>
      {countries.map((country,index) => {
        return index % 2 == 0 ? 
          <CountryLine key={country.id} style={{ "background-color": "rgb(237, 237, 237)" }}>{country.country}</CountryLine> :
          <CountryLine key={country.id} >{country.country}</CountryLine>
      })}
    </Container>
  )
}

export default NationList;