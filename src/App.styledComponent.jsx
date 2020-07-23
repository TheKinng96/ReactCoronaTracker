import styled from 'styled-components'
import { Card, CardContent } from '@material-ui/core';


export const AppContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
`

export const HeaderCard = styled(Card)`
  height: 10vh;
  overflow: hidden;
  border-radius: 1rem !important;
`

export const HeaderCardContent = styled(CardContent)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 {
    font-size: 3rem;
  }

  &>.country-list {
    margin-top: 0.5rem !important;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0.5rem 0;
  height: 19vh !important;
`

export const SideContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  bottom: 1rem;
`