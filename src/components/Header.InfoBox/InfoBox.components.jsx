import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components'


const CardContainer = styled(Card)`
  flex:1;
  cursor:pointer;

  &:not(:last-child){
    margin-right: 1rem;
  }

  &.infoBox--selected {
   border-top: 10px solid greenyellow 
  }
`

const CasesContainer = styled.h2`
  color: #cc1034;
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`

const TotalCases = styled(Typography)`
  color: #6c757d;
  font-weight: 700 !important;
  font-size: 0.8rem !important;
  margin-top: 1rem !important;
`

function InfoBox({ title, cases, active, total, ...props }) {
  return (
    <CardContainer onClick={props.onClick} className={active && 'infoBox--selected'}>
      <CardContent>
        <Typography className="info-title" color="textPrimary">{title}</Typography>
        <CasesContainer>{cases}</CasesContainer>
        <TotalCases color="textSecondary">{total} Total</TotalCases>
      </CardContent>
    </CardContainer>
  )
}

export default InfoBox;
