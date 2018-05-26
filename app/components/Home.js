import React from 'react';
import { Nav, Navbar, NavItem, Panel, Button, Label } from 'react-bootstrap';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    nextClicked = () => {
        // test actions
        this.props.fetchStarship();
        this.props.startApp();
    }

    render() {
        return (
            <div>
                <div className="container" style={{ textAlign: "center" }}>
                    <Panel >
                        <Panel.Heading>PLACEHOLDER</Panel.Heading>
                        <Panel.Body>PLACEHOLDER</Panel.Body>
                    </Panel>
                    <Button onClick={this.nextClicked} >NEXT</Button>
                </div>
            </div>
        )
    }
}

export default Home;