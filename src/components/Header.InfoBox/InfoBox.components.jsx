import React from 'react'
import { CardContainer, CasesContainer, TotalCases, InfoHeader, InfoContent } from './InfoBox.styledComponent'

function InfoBox({ title, cases, active, isRed, isBlue, total, ...props }) {
  return (
    <CardContainer onClick={props.onClick} className={`${active && 'infoBox--selected'} ${isRed && 'redBox'} ${isBlue && 'blueBox'}`}>
      <InfoContent>
        <InfoHeader color="textPrimary">{title}</InfoHeader>
        <CasesContainer className={`${!isRed & !isBlue && 'greenWord'}`} >{cases}</CasesContainer>
        <TotalCases color="textSecondary">{total} Total</TotalCases>
      </InfoContent>
    </CardContainer>
  )
}

export default InfoBox;
