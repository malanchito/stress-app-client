import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  border: 1px solid
  padding: 25px 12px 18px;
  background: linear-gradient(0.25turn, #e66465, #9198e5);
`

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Salary = styled.div`
  color: #ccc;
  font-weight: 300;
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
    <Salary>Salary: ${salary}</Salary>
  </StyledContainer>
)

export default Card