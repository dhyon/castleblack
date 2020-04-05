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

// reactstrap components
import {Container} from "reactstrap";

class PageHeader extends React.Component {
    state = {
        squares1to6: "",
        squares7and8: ""
    };

    componentDidMount() {
        document.body.classList.toggle("register-page");
        document.documentElement.addEventListener("mousemove", this.followCursor);
    }

    componentWillUnmount() {
        document.body.classList.toggle("register-page");
        document.documentElement.removeEventListener("mousemove", this.followCursor);
    }

    followCursor = event => {
        let posX = event.clientX - window.innerWidth / 2;
        let posY = event.clientY - window.innerWidth / 6;
        this.setState({
            squares1to6:
                "perspective(500px) rotateY(" +
                posX * 0.10 +
                "deg) rotateX(" +
                posY * -0.10 +
                "deg)",
            squares7and8:
                "perspective(500px) rotateY(" +
                posX * 0.06 +
                "deg) rotateX(" +
                posY * -0.06 +
                "deg)"
        });
    };

    render() {
        return (
            <div className="page-header header-filter">
                <div
                    className="square square-7"
                    id="square7"
                    style={{transform: this.state.squares7and8}}
                />
                <div
                    className="square square-8"
                    id="square8"
                    style={{transform: this.state.squares7and8}}
                />
                <div
                    className="square square-1"
                    id="square1"
                    style={{transform: this.state.squares1to6}}
                />
                <div
                    className="square square-2"
                    id="square2"
                    style={{transform: this.state.squares1to6}}
                />
                <div
                    className="square square-3"
                    id="square3"
                    style={{transform: this.state.squares1to6}}
                />
                <div
                    className="square square-4"
                    id="square4"
                    style={{transform: this.state.squares1to6}}
                />
                <div
                    className="square square-5"
                    id="square5"
                    style={{transform: this.state.squares1to6}}
                />
                <div
                    className="square square-6"
                    id="square6"
                    style={{transform: this.state.squares1to6}}
                />
                <div className="squares square1"/>
                <div className="squares square2"/>
                <div className="squares square3"/>
                <div className="squares square5"/>
                <div className="squares square6"/>
                <div className="squares square7"/>
                <Container>
                    <div className="content-center brand">
                        <h1 className="display-1">turn a square</h1>
                        <h4 className="title">
                            if there's a bustle<br></br>
                            in your hedgerow<br></br>
                            don't be alarmed now<br></br>
                            just scroll down
                        </h4>
                    </div>
                </Container>
            </div>
        );
    }
}

export default PageHeader;
