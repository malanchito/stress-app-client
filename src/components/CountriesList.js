import * as React from 'react'
import styled, {keyframes} from 'styled-components'
import { Grid, Cell } from "styled-css-grid"

export default function CountriesList(props) {
    if(!props.countries){
        return 'Loading list'
    }
    const ChoiceButton = styled.button`
      color: blue;

      ::before {
        content: '🍉 ';
      }

      :hover {
        color: purple;
      }
    `
    const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
`

    const listType = props.choice.split("Smoking").length === 2 ?
    'cigarette_consumption' : 'antidepressant_consumption'

    const list=props.countries.countries.countries.map(country =>
      <Grid key={country._id} flow="column" columns={3}>
  <Cell left={1} top={2}>{country.name}</Cell>
  <Cell left={2} top={2}><Rotate><img src={country.image_url} alt="flag"></img></Rotate></Cell>
  <Cell left={3} top={2}>{country[listType]}</Cell>
  </Grid>
)

    return <Grid flow="row dense" columns={4}>
  <Cell width={1} height={3}>
    <Grid flow="column" columns={3}>
            <Cell left={2} top={2}>
            <ChoiceButton 
            value='mostSmoking'
            onClick={props.onSubmit}>
              Most smokers in the World</ChoiceButton>
            </Cell>
            <Cell left={2} top={3}>
            <ChoiceButton value='mostSmokingEurope'
            onClick={props.onSubmit}>
            Most smokers in Europe</ChoiceButton>
            </Cell>
            <Cell left={2} top={4}>
            <ChoiceButton value='leastSmoking'
                        onClick={props.onSubmit}>
            Least smokers in the World</ChoiceButton>
            </Cell>
            <Cell left={2} top={5}>
            <ChoiceButton value='leastSmokingEurope'
                        onClick={props.onSubmit}>
              Least smokers in Europe</ChoiceButton>
            </Cell>
            <Cell left={2} top={6}>
            <ChoiceButton value='mostMedication'
                        onClick={props.onSubmit}>
              Most medication used in the World</ChoiceButton>
            </Cell>
            <Cell left={2} top={7}>
            <ChoiceButton value='mostMedicationEurope'
            onClick={props.onSubmit}>
            Most medication used in Europe</ChoiceButton>
            </Cell>
            <Cell left={2} top={8}>
            <ChoiceButton value='leastMedication'
            onClick={props.onSubmit}>
            Least medication used in the World</ChoiceButton>
            </Cell>
            <Cell left={2} top={9}>
            <ChoiceButton value='leastMedicationEurope'
            onClick={props.onSubmit}>
            Least medication used in Europe</ChoiceButton>
            </Cell>
            </Grid>
            </Cell>
            <Cell width={1} height={3}>
            {list
            }
            </Cell>
        </Grid>
    
        
    
}