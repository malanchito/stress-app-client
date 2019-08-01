import * as React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Cell } from "styled-css-grid"
import styled from 'styled-components'

export default function Footer() {

  const Footer = styled.p`
    font-size: 1em;
    font-weight: bold;
    color: white;
    :hover {
      color: grey;
    }
  `
  return  <Grid columns={2}>
            <Cell center middle>
              <Link to={"/"}>
                <Footer>Jobs</Footer>
              </Link>
            </Cell>
            <Cell left={2}>
              <Link to={"/countries"}>
                <Footer>Smoking and Medication</Footer>
              </Link>
            </Cell>
          </Grid>
  
}