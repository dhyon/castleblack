import React from "react";
import Container from "reactstrap/es/Container";
import {Button, Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import APIClient from "../../apiClient";

class Basketball extends React.Component {
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

    const promise1 = this.apiClient.getTopRedditPosts('nba');
    const promise2 = this.apiClient.getTopRedditPosts('fantasybball');
    //const promise3 = this.apiClient.getTopRedditPosts('movies');

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
          <h2 className="title">Basketball</h2>
          <div className="mb-3">
            <p>
              Basketball is so fun.
            </p>
          </div>
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
                    2019-2020 Fantasy Lineup
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
                        return <><Button color={this.colors[i%4]} key={i} href={value[0]}>{value[1].slice(0,100)}...</Button> r/{value[2]}<br></br></>
                      })
                    }
                  </div>
                </TabPane>
                <TabPane tabId="link5">
                 <div>
                  WIP
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

export default Basketball
