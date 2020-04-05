import React from "react";
import Container from "reactstrap/es/Container";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  UncontrolledTooltip
} from "reactstrap";
import classnames from "classnames";
import APIClient from "../../apiClient";
import {default as UUID} from "node-uuid";

class MMA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textTabs: 4,
      mmaRedditPosts: []
    };
    this.colors = ['primary','info','success','warning'];
  }

  async componentDidMount() {
    this.apiClient = new APIClient();

    const promise1 = this.apiClient.getTopRedditPosts('mma');
    const promise2 = this.apiClient.getTopRedditPosts('bjj');
    const promise3 = this.apiClient.getTopRedditPosts('wrestling');

    // similar to Future.sequence in that all promises are run at the same time
    Promise.all([promise1, promise2, promise3]).then((data) => {
      let allPosts = [];
      data.forEach((postsArray) => allPosts = allPosts.concat(postsArray));
      this.setState({...this.state, mmaRedditPosts: allPosts});
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
      <div className="section section-basic" id="mma">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <h2 className="title">MMA & Grappling</h2>
          <div className="mb-3">
            <p>
              I'm a nerd for this stuff.
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
                    Tweets
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
                      this.state.mmaRedditPosts.map((value, i) => {
                        const randomId = UUID.v4()
                        return <>
                          <Button color={this.colors[i%4]} id={'a'+randomId} key={i} href={value[0]}>{value[1].slice(0,100)}...</Button>
                          <UncontrolledTooltip placement="left" target={'a'+randomId} delay={0}>
                              from r/{value[2]}
                          </UncontrolledTooltip>
                          <br></br></>
                      })
                    }
                  </div>
                </TabPane>
                <TabPane tabId="link5">
                 <div>
                   <a className="twitter-timeline" data-width="700" data-height="700" data-theme="dark"
                      href="https://twitter.com/jntkflow/lists/mma?ref_src=twsrc%5Etfw">A Twitter List by jntkflow</a>
                   <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
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

export default MMA
