import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  border: 1px solid
  border-radius: 20px;
  padding: 25px 12px 18px;
  background: #333333;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #dd1818, #333333);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #dd1818, #333333); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Description = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
  text-align: justify
`





 const CountryList = ({
  title,
  list
}) => (
  <StyledContainer>
    <Title>{title}</Title>
    <Description>{list}</Description>
  </StyledContainer>
)

export default CountryList