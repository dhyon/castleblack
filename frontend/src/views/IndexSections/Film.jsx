import React from "react";
import Container from "reactstrap/es/Container";
import {Button, Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledTooltip} from "reactstrap";
import classnames from "classnames";
import {default as UUID} from "node-uuid";
import APIClient from "../../apiClient";

/* Film and books! */
class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textTabs: 4,
      redditPosts: []
    };
    this.colors = ['primary','info','success','warning'];
  }

  async componentDidMount() {
    this.apiClient = new APIClient();

    const promise1 = this.apiClient.getTopRedditPosts('movies');
    const promise2 = this.apiClient.getTopRedditPosts('books');

    // similar to Future.sequence in that all promises are run at the same time
    Promise.all([promise1, promise2]).then((data) => {
      let allPosts = [];
      data.forEach((postsArray) => allPosts = allPosts.concat(postsArray));
      this.setState({...this.state, redditPosts: allPosts});
    })

  }

  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };


  render() {
    return (
      <div className="section section-basic" id="film">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <h2 id="filmTitle" className="title">Film & Literature</h2>
          <Card>
            <CardHeader>
              <Nav className="nav-tabs-info" role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.textTabs === 4
                    })}
                    onClick={e => this.toggleTabs(e, "textTabs", 4)}
                    href="#pablo"
                  >
                    Today's Top Reddit Posts
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.textTabs === 5
                    })}
                    onClick={e => this.toggleTabs(e, "textTabs", 5)}
                    href="#pablo"
                  >
                    Recommendations
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <TabContent
                className="tab-space"
                activeTab={"link" + this.state.textTabs}
              >
                <TabPane tabId="link4">
                  <div>
                    {
                      this.state.redditPosts.map((value, i) => {
                        const randomId = UUID.v4()
                        return <>
                          <Button color={this.colors[i%4]} id={'a'+randomId} key={i} href={value[0]}>{value[1].slice(0,100)}...</Button>
                          <UncontrolledTooltip placement="left" target={'a'+randomId} delay={0}>
                              from r/{value[2]}
                          </UncontrolledTooltip>
                          <br></br>
                        </>
                      })
                    }
                  </div>
                </TabPane>
                <TabPane tabId="link5">
                 <div>
                   <p class="text-warning">The Wailing - 2016 - Na Hong Jin</p>
                   <p className="text-info">
                     My favorite horror movie of the decade. It combines western and eastern religious themes with zombie
                     elements in an expertly-paced atmospheric masterpiece. Turn off the lights and enjoy in the dead quiet of the night.
                   </p><br></br>
                   <p className="text-warning">Sirens of Titan - 1959 - Kurt Vonnegut</p>
                   <p className="text-info">
                     A science fiction novel by the late great KVJ. I'm a big fan of his comedic, sarcastic wit. The story
                     revolves around a man who seemingly has everything, loses everything, then again develops to a point where
                     he seems to have life figured out. In the meantime there's interplanetary war, life on strange worlds, and
                     the concept of free will. The implicit insights the book offers transcend the plot of this novel.
                   </p>
                 </div>
                </TabPane>
                <TabPane tabId="link6">

                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Container>
      </div>
    )
  }
}

export default Film
