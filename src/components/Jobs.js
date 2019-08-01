import * as React from 'react'
import styled from 'styled-components'
import { Grid, Cell } from "styled-css-grid"
import { MdAttachMoney} from 'react-icons/md'
import Card from './Card'


export default function Jobs(props) {
    if(!props.jobs){
        return 'Loading Details'
    }
    const ChoiceButton = styled.button`
    background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.1em 1em;
      ::before {
        content: '✨ ';
      }
      :hover {
        color: purple;
      }
    `
    const Wrapper = styled.section`
    background: cornflowerblue;
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
              {job.stress}. {job.name}</ChoiceButton></Cell>
        )
    const currentJob = props.jobs.jobs.jobs.find(job=>
        job.name===props.jobSelected
        )

        const salaryWithCommas = currentJob.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

        const StyledRoot = styled.div`
        padding: 50px 12px;
      `
      
      const StyledContainer = styled.div`
        max-width: 550px;
        width: 100%;
        margin: auto;
      `

    return <Grid
        columns={"250px 400px 400px"}
        rows={"50px 530px 30px"}
        areas={[
            "menu header  header",
            "menu job-details  content",
            "footer footer  footer"
          ]}>
          <Cell area="header"><Wrapper>
              <Title>The Most Stressful Jobs</Title>
              </Wrapper></Cell>
        
        <Cell area="menu">
        <Grid columns={1}>
        {buttons}
        </Grid>
        </Cell>
        <Cell area="job-details">
        <StyledRoot>
      <StyledContainer>
        <Card
          title={currentJob.name}
          description={currentJob.description}
          salary={salaryWithCommas}
        />
      </StyledContainer>
    </StyledRoot>
        </Cell>
        <Cell area="content">            <img className='Job-image' src={currentJob.image_url} alt={currentJob.name}/>
</Cell>
        <Cell area="footer">Footer</Cell>
      </Grid>
    
        
    
}