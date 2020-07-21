import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';


function InfoBox({ title,cases,total }) {
  return (
    <Card>
      <CardContent>
        <Typography className="info-title" color="textPrimary">{title}</Typography>
        <h2 className="info-cases">{cases}</h2>
        <Typography className="info-total" color="textSecondary">{total}</Typography>
      </CardContent>
    </Card>
  )
}

export default InfoBox;
