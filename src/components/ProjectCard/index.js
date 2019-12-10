import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap'
import styled from 'styled-components'


const ProjectWrapper = styled.article`
.card {
  border: ${props => props.isActive ? "2px solid teal" : "1px solid blue"};
  text-align:center;
  max-width: 200px
}
img{
  width:100%;
}
`
const ProjectCard = (props) => {
  console.log("props: ", props);
  return (
    <Col onClick={props.setSelectedProject}>
      <ProjectWrapper isActive={props.isActive}>
        <Card>
          <CardHeader><h3>
            {props.projectName}
          </h3>
          </CardHeader>
          <CardBody>

            {/* <img src={`${process.env.PUBLIC_URL}/images/${props.image}`} alt={props.projectName} /> */}

            <p>{props.shortDescription}</p>
            {/* <h5>weblink: {props.weblink}</h5>
            <h5>gitlink: {props.gitlink}</h5> */}

          </CardBody>
        </Card>
      </ProjectWrapper>
    </Col >
  );
};

export default ProjectCard;