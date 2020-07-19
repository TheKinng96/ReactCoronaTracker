import React, { useState, useEffect } from 'react'

const Card = ({ title, data }) => {
  const countries = data.data;  
  const deaths = 0;
  
  useEffect(() => {
    countries.map(country => {
      deaths += country.todayCases
    })
    
  },[])

  return (
    <div>
      <h2>{title}</h2>
      {'+'+ deaths}
      
    </div>
  )
}

export default Card;