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

const TR = styled.tr`
  display: flex;
  justify-content: space-between;

  &:nth-of-type(odd) {
    background-color: #f3f2f8
  }

  & > td {
    padding: 0.5rem;
  }
`

function Table({countries}) {
  return (
    <TableContainer>
      <tbody>
      {countries.map(({country, cases}) => (
        <TR key={country}>
          <td>{country}</td>
          <td>
            <strong>
              {numeral(cases).format("0,0")}
            </strong>
          </td>
        </TR>
      ))}
      </tbody>
    </TableContainer>
  )
}

export default Table
