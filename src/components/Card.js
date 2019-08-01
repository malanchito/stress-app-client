import React from 'react'
import styled from 'styled-components'
import { ShakeCrazy } from 'reshake'

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

const Salary = styled.div`
  color: #fff;
  font-weight: bold;
  margin: 6px 0;
  :hover {
    opacity: 0.8;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
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



const Card = ({
  title,
  description,
  salary
}) => (
  <StyledContainer>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ShakeCrazy>
    <Salary>Salary: ${salary}</Salary>
    </ShakeCrazy>
  </StyledContainer>
)

 

export default Card