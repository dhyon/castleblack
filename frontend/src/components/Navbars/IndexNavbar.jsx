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
import {Link} from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }

  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  scrollToBottom = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({behavior: "smooth"});
  };

  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              title="Designed and Coded by Creative Tim"
              tag={Link}
            >
              <span>Daniel Hyon • 현지훈 </span>
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1"/>
              <span className="navbar-toggler-bar bar2"/>
              <span className="navbar-toggler-bar bar3"/>
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove"/>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <UncontrolledDropdown nav>
                <DropdownItem tag={Link} to="/">
                  <i className="tim-icons icon-single-02"/>
                  Home
                </DropdownItem>
                <DropdownItem tag={Link} to="/interests">
                  <i className="tim-icons icon-image-02"/>
                  Interests
                </DropdownItem>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;
