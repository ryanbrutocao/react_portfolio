import React from 'react';
import { Card } from 'reactstrap'
import styled from 'styled-components'


const ProjectWrapper = styled.article`
.card {
  border: ${props => props.isActive ? "2px solid teal" : "1px solid blue"};
  text-align:center
}
img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
`

const ProjectDetails = (props) => {
  return (
    <ProjectWrapper isActive={props.isActive}>

      <Card>
        <a target="_blank" rel="noopener noreferrer" href="https://www.msn.com">msn link</a>
        <p><strong> {props.projectName}</strong></p>
        <img src={`${process.env.PUBLIC_URL}/images/${props.image}`} alt={props.projectName} />

        <p>{props.description}</p>
        <a target="_blank" rel="noopener noreferrer" href={props.weblink}>web-link</a>

        {/* <a href={props.weblink} >weblink</a> */}
        <a href={props.gitlink}>gitlink</a>
        Contributors: {props.contributors}

      </Card>
    </ProjectWrapper>
  );
};

export default ProjectDetails;