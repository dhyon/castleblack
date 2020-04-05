/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: ""
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: ""
  }
];

let ps = null;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">the best website ever</h1>
                  <h5 className="text-on-back">Simply</h5>
                  <p className="profile-description">
                    Just a tight little app I put together using Flask for server functionality and React for the frontend.
                    Credit to <a href='https://www.creative-tim.com/'>Creative Tim</a> for providing dope free React components for personal use.
                  </p>
                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color=""
                      href="https://www.linkedin.com/in/dhyon88"
                      id="tooltip982846144"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846144">
                      LinkedIn
                    </UncontrolledTooltip>

                    <Button
                      className="btn-icon btn-round"
                      color="github"
                      href="https://github.com/dhyon"
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-github" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Github
                    </UncontrolledTooltip>

                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      href="https://www.facebook.com/daniel.hyon"
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Facebook
                    </UncontrolledTooltip>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" lg="6" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/danny3.jpg")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 1)}
                            href="#pablo"
                          >
                            Professional
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 2
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 2)}
                            href="#pablo"
                          >
                            Hobbyist
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 3
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 3)}
                            href="#pablo"
                          >
                            Random Facts
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId="tab1">
                          I'm a <a href='https://www.linkedin.com/in/dhyon88'>backend software engineer</a> living in San Francisco.<br></br><br></br>
                          I'm currently building Scala applications that bring healthcare incentives to the consumer at <a href="https://www.rallyhealth.com/the-rally-experience#reward">Rally Health</a>.<br></br><br></br>
                          I'm big believer in writing concise, modular, and easy-to-read code.<br></br><br></br>
                          Anything to do with scale, decentralized apps, and blockchain - especially <a href="https://github.com/spacemeshos/go-spacemesh">spacemesh</a> - pique my interest nowadays.<br></br>
                        </TabPane>
                        <TabPane tabId="tab2">
                          I wrestled in high school and have been training combat sports like MMA, Brazilian Jiu Jitsu and boxing ever since, injuries permitting.<br></br><br></br>
                          I follow most sports, but I'm an especially huge UFC fan.<br></br><br></br>
                          <a href="https://store.steampowered.com/app/570/Dota_2/">Dota 2</a> is the greatest game ever created.<br></br><br></br>
                          I geek out on watches and horror films.<br></br><br></br>
                          I grew up playing classical clarinet. I'm taking jazz lessons and aim to join an ensemble one day.<br></br><br></br>
                        </TabPane>
                        <TabPane tabId="tab3">
                          I was born a lefty but was raised to be a righty. Nowadays I can't make up my mind.<br></br><br></br>
                          I used to build gaming PCs.<br></br><br></br>
                          Hyon is a Korean surname which translates to "black, dark".<br></br>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">projects</h1>
                  <h5 className="text-on-back">Secret</h5>
                  <p className="profile-description text-left">
                    Work in progress...
                  </p>
                  <div className="btn-wrapper pt-3">
                    <Button
                      className="btn-simple"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-book-bookmark" /> Bookmark
                    </Button>
                    <Button
                      className="btn-simple"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-bulb-63" /> Check it!
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <Footer />
        </div>
      </>
    );
  }
}

export default ProfilePage;
