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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

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
    </TableContainer>
  )
}

export default Table
