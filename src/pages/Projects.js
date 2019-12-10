import React, { useState } from 'react';
import { Col, Row, Nav, Tab } from 'react-bootstrap'
import sampleData from '../data/projects.json'
import ProjectCard from '../components/ProjectCard'
import ProjectDetails from '../components/ProjectDetails/index.js';
// import image from '../images/myface.jpg'
const Projects = () => {
  const [data, setData] = useState({
    projectName: sampleData.data,
    eventKey: "",
    image: '',
    description: "",
    shortDescription: "",
    gitlink: "",
    weblink: "",
    selectedProject: null,
  });
  const { projectName, eventkey, image, description, gitlink, weblink, selectedProject } = data;

  // handleClick = event => {
  //   event.preventDefault();
  //   const eventkey = this.event.eventKey
  //   console.log("eventkey: ", eventkey);
  //   const description = event.description
  //   this.setState({
  //     eventKey: eventkey,
  //     description: description
  //   });
  //   console.log("this.state2: ", this.state);
  // };

  const setSelectedProject = event => {
    setData({
      ...data,
      selectedProject: event
    })
    console.log("dat:", data);
    console.log("event: ", event);
  };

  return (
    <div>
      <hr />
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
                <Col sm={3}>
                  {projectName.map(project => (
                    <ProjectCard
                    key={project.projectName}
                    projectName={project.projectName}
                      eventKey={project.projectName}
                      setSelectedProject={() => setSelectedProject(project)}
                      isActive={project === selectedProject}
                      id={project.projectName}
                      image={project.image}
                      shortDescription={project.shortDescription}
                      description={project.description}
                      gitlink={project.gitlink}
                      weblink={project.weblink}
                      >
                      console.log("project",project);
        
        
                  </ProjectCard>
                  ))
                }
                </Col >
          <Col sm={9}>

            {selectedProject ? (<ProjectDetails
              projectName={selectedProject.projectName}
              image={selectedProject.image}
              gitlink={selectedProject.gitlink}
              weblink={selectedProject.weblink}
              description={selectedProject.description}
              contributors={selectedProject.contributors}
              />) : (<h3>Click on project to see details.</h3>
              )}

          </Col>
                </Row>
      </Tab.Container>
    </div >
  );


}

export default Projects;