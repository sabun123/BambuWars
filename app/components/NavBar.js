import React from 'react';
import { Nav, Navbar, NavItem} from 'react-bootstrap';

class NavBar extends React.Component{

    constructor(props){
        super(props)
    }

    handlePeopleClick = () => {
        // Redirect to People component
        this.props.history.push({
            pathname:'/people'
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
                        <NavItem onClick={this.handlePeopleClick}>
                            People
                        </NavItem>
                        <NavItem>
                            About
                        </NavItem>
                    </Nav>
                </Navbar>
        )
    }
}

export default NavBar;