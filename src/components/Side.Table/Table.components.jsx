import React from 'react'
import styled from 'styled-components';

const TableContainer = styled.div`
  overflow-y: scroll;
  height: 50vh;
  margin-top:1rem;
  color:#6a5d5d;
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
      {countries.map(({country, cases}) => (
        <TR key={country}>
          <td>{country}</td>
          <td>
            <strong>
              {cases}
            </strong>
          </td>
        </TR>
      ))}
    </TableContainer>
  )
}

export default Table
