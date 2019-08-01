import * as React from 'react'
import styled, {keyframes} from 'styled-components'
import { Grid, Cell } from "styled-css-grid"
import CountryList from './List'
import VideoPlayer from './VideoPlayer'
import { ShakeCrazy } from 'reshake'
import Footer from './Footer'

export default function CountriesList(props) {

    if(!props.countries){
        return 'Loading list'
    }

    const ChoiceButton = styled.button`
      --x: 50%;
      --y: 50%;
      position: relative;
      appearance: none;
      padding: 0.1em 0.5em;
      color: white;
      cursor: pointer;
      outline: none;
      border-radius: 100px;
      border: 2px solid transparent;
      background: 
        linear-gradient(#000, #000) 
          padding-box, 
        radial-gradient(farthest-corner at var(--x) var(--y), #00C9A7, #845EC2) 
          border-box;
      ::before {
        content: '✨ ';
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

    const Wrapper = styled.section`
      background: #1a2a6c;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      border-radius: 100px;
    `

    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: white;
    `

    const listType = props.choice.split("Smoking").length === 2 ?
    'cigarette_consumption' : 'antidepressant_consumption'

    const listTitle = listType === 'cigarette_consumption' ?
    'Cigarette consumption per year per person' 
    : 
    'Daily dosage per 1000 inhabitants per day'

    const videoUrl = listType === 'cigarette_consumption' ?
    ['davDCJn6LgI',5]:['ClfMadoXvQY',9]

    const list=props.countries.countries.countries.map(country =>
      <Grid key={country._id} flow="column" columns={6}>
        <Cell left={1} >{country.name}</Cell>
        <Cell left={4}>
          <Rotate>
            <img src={country.image_url} alt="flag"></img>
          </Rotate></Cell>
        <Cell left={5} >{country[listType]}</Cell>
      </Grid>
    )

    return <Grid
              columns={"250px 425px 428px"}
              rows= {"50px 500px 30px"}
              areas={[
              "header header  header",
              "menu countries-list  countries-list",
              "footer footer  footer"
              ]}
            >
              <Cell area="header">
                <Wrapper>
                  <Title>Smoking and Stress Medication</Title>
                </Wrapper>
              </Cell>
              <Cell area="menu">
                <Grid columns={1}>
                  <Cell center>
                    <Grid columns={1}>
                      <Cell center top={1}>
                        <ChoiceButton 
                          value='mostSmoking'
                          onClick={props.onSubmit}
                        >
                          Most smokers in the World
                        </ChoiceButton>
                      </Cell>
                      <Cell center top={2}>
                        <ChoiceButton 
                          value='mostSmokingEurope'
                          onClick={props.onSubmit}
                        >
                          Most smokers in Europe
                        </ChoiceButton>
                      </Cell>
                      <Cell center top={3}>
                        <ChoiceButton 
                          value='leastSmoking'
                          onClick={props.onSubmit}
                        >
                          Least smokers in the World
                        </ChoiceButton>
                      </Cell>
                      <Cell center top={4}>
                        <ChoiceButton 
                          value='leastSmokingEurope'
                          onClick={props.onSubmit}
                        >
                          Least smokers in Europe
                        </ChoiceButton>
                      </Cell>
                      <Cell center top={5}>
                        <ChoiceButton 
                          value='mostMedication'
                          onClick={props.onSubmit}
                        >
                          Most medication used in the World</ChoiceButton>
                      </Cell>
                      <Cell center top={6}>
                        <ChoiceButton 
                          value='mostMedicationEurope'
                          onClick={props.onSubmit}
                        >
                          Most medication used in Europe
                        </ChoiceButton>
                      </Cell>
                      <Cell center top={7}>
                        <ChoiceButton 
                          value='leastMedication'
                          onClick={props.onSubmit}
                        >
                          Least medication used in the World
                        </ChoiceButton>
                      </Cell>
                      <Cell center top={8}>
                        <ChoiceButton 
                          value='leastMedicationEurope'
                          onClick={props.onSubmit}
                        >
                          Least medication used in Europe
                        </ChoiceButton>
                      </Cell>
                    </Grid>
                  </Cell>
                </Grid>
              </Cell>
              <Cell area="countries-list">
                <Grid columns={2}>  
                  <Cell left={1}>
                    <CountryList
                      title={listTitle}
                      list={list}
                    />
                  </Cell>
                  <Cell className='Job-image-box' center middle left={2}>
                    <ShakeCrazy>
                      <VideoPlayer 
                        className='Job-image'
                        video={videoUrl[0]} 
                        autoplay={1} 
                        start={videoUrl[1]} 
                        loop={1} 
                        rel="0" 
                        modest="1"
                      />
                    </ShakeCrazy>
                  </Cell>
                </Grid>
              </Cell>
              <Cell area="footer"> 
                <Wrapper>               
                  <Footer/>
                </Wrapper>
              </Cell>
            </Grid>   
}