import React from 'react'
import styled from 'styled-components';
import numeral from 'numeral'

const TableContainer = styled.div`
  height: 50vh;
  margin-top:1rem;
  color:#6a5d5d;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

`

const TR = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:nth-of-type(odd) {
    background-color: #f3f2f8;
  }

  & > span {
    padding: 0.5rem;
  }

  &:hover {
    background-color: royalblue;
    color: white
  }
`

function Table({countries}) {
  return (
    <TableContainer>
      <tbody>
      {countries.map(({country, cases}) => (
        <TR key={country}>
          <span>{country}</span>
          <span>
            <strong>
              {numeral(cases).format("0,0")}
            </strong>
          </span>
        </TR>
      ))}
      </tbody>
    </TableContainer>
  )
}

export default Table
