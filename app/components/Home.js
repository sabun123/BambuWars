import React from 'react';
import { Nav, Navbar, NavItem, Panel, Button, Label } from 'react-bootstrap';

class Home extends React.Component {

    constructor(props) {
        super(props);
        console.log("whats props? ", props)
    }

    nextClicked = () => {
        console.log("NEXT CLICKED")
        //console.log("this.props.fetchStarship ", this.props.fetchStarship)
        this.props.onfetchStarship;
    }

    render() {
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Bambu Wars
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem >
                            Characters
                        </NavItem>
                        <NavItem>
                            About
                        </NavItem>
                    </Nav>
                </Navbar>

                <div className="container" style={{ textAlign: "center" }}>
                    <Panel >
                        <Panel.Heading>Character NAME HERE</Panel.Heading>
                        <Panel.Body>Character BIO HERE</Panel.Body>
                    </Panel>
                    <Button onClick={this.nextClicked} >NEXT</Button>
                </div>
            </div>
        )
    }
}

export default Home;