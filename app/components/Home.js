import React from 'react';
import { Nav, Navbar, NavItem, Panel, Button, Label } from 'react-bootstrap';

class Home extends React.Component {
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
                    <Button>NEXT</Button>
                </div>
            </div>
        )
    }
}

export default Home;