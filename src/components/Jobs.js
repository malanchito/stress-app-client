import * as React from 'react'
import styled from 'styled-components'
import { Grid, Cell } from "styled-css-grid"
import Card from './Card'
import { ShakeCrazy } from 'reshake'
import Footer from './Footer'
import VideoPlayer from './VideoPlayer'

export default function Jobs(props) {


  if(!props.jobs){
      return 'Loading Details'
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
  const buttons = props.jobs.jobs.jobs.map(job=>
    <Cell height={1}>
      <ChoiceButton 
        key={job._id}
        value={job.name}
        onClick={props.onSubmit}>
          {job.stress}. {job.name}
      </ChoiceButton>
    </Cell>
  )
  const currentJob = props.jobs.jobs.jobs.find(job=>
    job.name===props.jobSelected
  )

  const media = currentJob.video_url ?
    <VideoPlayer 
      className='Job-image'
      video={currentJob.video_url} 
      autoplay={1} 
      start={currentJob.start_time} 
      loop={1} 
      rel="0" 
      modest="1"
    />
    :
    <img
      className='Job-image'
      src={currentJob.image_url} 
      alt={currentJob.name}
    />
  const salaryWithCommas = currentJob.salary
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")  

    return  <Grid
              columns={"250px 400px 450px"}
              rows= {"50px 530px 30px"}
              areas={[
              "header header  header",
              "menu job-details  job-details",
              "footer footer  footer"
              ]}
            >
              <Cell area="header">
                <Wrapper>
                  <Title>The Most Stressful Jobs</Title>
                </Wrapper>
              </Cell>
              <Cell center area="menu">
                <Grid columns={1}>{ buttons }</Grid>
              </Cell>
              <Cell area="job-details">
                <Grid columns={2}>  
                  <Cell left={1}>
                    <Card
                      title={currentJob.name}
                      description={currentJob.description}
                      salary={salaryWithCommas}
                    />
                  </Cell>
                  <Cell className='Job-image-box' center middle left={2}>
                    {media}
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