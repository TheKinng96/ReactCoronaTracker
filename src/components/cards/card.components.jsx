import React, { useState } from 'react'

const Card = ({ title, data }) => {
  const countries = data.data;
  const [death, setDeath] = useState(0)
  
  // countries.map(country => {
  //   setDeath(death + country.todayDeath)
  // })

  return (
    <div>
      <h2>{title}</h2>
      {'+'+death}
      
    </div>
  )
}

export default Card;