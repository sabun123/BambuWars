import React from 'react';
import { Nav, Navbar, NavItem} from 'react-bootstrap';

class NavBar extends React.Component{

    constructor(props){
        super(props)
    }

    handleClick = (path) => {
        // Redirect to People component
        this.props.history.push({
            pathname:path
        })
    }

    render(){
        return (
            <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Bambu Wars
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem onClick={() => {this.handleClick('/people')}}>
                            People
                        </NavItem>
                        <NavItem onClick={() => {this.handleClick('/about')}}>
                            About
                        </NavItem>
                    </Nav>
                </Navbar>
        )
    }
}

export default NavBar;