import { Typography, Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';

export const CardContainer = styled(Card)`
  flex:1;
  cursor:pointer;
  border-radius: 1rem !important;

  &:not(:last-child){
    margin-right: 1rem;
  }

  &.infoBox--selected {
    border-top: 10px solid greenyellow; 
  }

  &.redBox {
    border-color: red; 
  }

  &.blueBox {
    border-color: royalblue; 
  }
`

export const InfoContent = styled(CardContent)`
  padding: 0.5rem 1.5rem !important;
`

export const CasesContainer = styled.h2`
  color: #cc1034;
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;

  &.greenWord {
    color: lightgreen !important;
  }
`

export const TotalCases = styled(Typography)`
  color: #6c757d;
  font-weight: 700 !important;
  font-size: 0.8rem !important;
  margin-top: 1rem !important;
`

export const InfoHeader = styled(Typography)`
  font-size: 1.5rem !important;
  font-weight: bold !important;
`