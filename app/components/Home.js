import React from 'react';
import { Nav, Navbar, NavItem, Panel, Button, Label } from 'react-bootstrap';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    startClicked = () => {
        this.props.history.push({
            pathname:'/people'
        })
    }

    render() {
        return (
            <div>
                <div className="container" style={{ textAlign: "center" }}>
                    <Panel >
                        <Panel.Heading>How to use Bambu Wars</Panel.Heading>
                        <Panel.Body>
                            <p>Pretty straightforward SPA. 
                                Click on "People" in the Navbar above to access all the people from SWAPI.co</p>
                            <p>Data is paginated, so you will need to click "NEXT" or "PREV" to view all the people from the Star Wars Universe.</p>
                            <p>Each name listed is clickable. Clicking a name will open a modal that will display the information of that person from the Star Wars Universe.</p>
                        </Panel.Body>
                    </Panel>
                    <Button onClick={this.startClicked} >START</Button>
                </div>
            </div>
        )
    }
}

export default Home;