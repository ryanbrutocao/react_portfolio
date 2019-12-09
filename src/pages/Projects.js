import React from 'react';
import { Col, Row, Nav, Tab } from 'react-bootstrap'


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventKey: "",
      image: "",
      description: "",
      gitlink: "",
      weblink: "",
    };
    // this.handleClick = this.handleClick.bind(this)
    console.log("this.state : ", this.state);
  }

  handleClick = event => {
    event.preventDefault();
    const eventkey = this.event.eventKey
    console.log("eventkey: ", eventkey);
    const description = event.description
    this.setState({
      eventKey: eventkey,
      description: description
    });
    console.log("this.state2: ", this.state);
  };

  render() {
    return (
      <div>
        <hr />
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link
                    eventKey="hiking"
                    id="hiking"
                    image=""
                    description="a hiking application"
                    gitlink=""
                    weblink=""
                    onClick={this.handleClick}
                  >Hike Finder</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="vinotory"
                    image=""
                    description="a hiking application"
                    gitlink=""
                    weblink="">Vinotory</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="friendFinder">Friend Finder</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="rps">Rock Paper Scissors</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="webScraper">Web Scraper</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bamazon">Bamazon</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="crystalCollector">Crystal Collector</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="scheduler">React Scheduler</Nav.Link>
                </Nav.Item> */}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="hiking">
                  {/* <Sonnet /> */}this
                </Tab.Pane>
                <Tab.Pane eventKey="vinotory">
                  {/* <Sonnet /> */} Vinotory is a cms application
                </Tab.Pane>
                <Tab.Pane eventKey="scheduler">
                  {/* <Sonnet /> */}project 3 scheduler
                </Tab.Pane>
                <Tab.Pane eventKey="friendFinder">
                  {/* <Sonnet /> */}friend finder app
                </Tab.Pane>
                <Tab.Pane eventKey="rps">
                  {/* <Sonnet /> */}rock paper scissors Firebase
                </Tab.Pane>
                <Tab.Pane eventKey="webScraper">
                  {/* <Sonnet /> */}web scraper mongodb
                </Tab.Pane>
                <Tab.Pane eventKey="bamazon">
                  {/* <Sonnet /> */}bamazon
                </Tab.Pane>
                <Tab.Pane eventKey="crystalCollector">
                  {/* <Sonnet /> */}crystal collector
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div >
    );
  }
}

export default Projects;