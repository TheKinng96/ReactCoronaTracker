import styled from 'styled-components'

export const MapContainer = styled.div`
  height: 65vh;
  background-color: white;
  padding: 1rem;
  border-radius: 1.2rem;
  margin-top: 0.5rem;
  box-shadow: 0 0 8px -4px rgba(0,0,0,0.5);

  &> .leaflet-container {
    height: 100%
  }
`
export const InfoFlag = styled.div`
  height: 80px;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 8px;

  & img {
    width: 100%;
    border-radius:5px;
  }
`

export const CountryName = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #555;
  margin-top: 0.5rem;
`

export const BasicInfoDiv = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
`