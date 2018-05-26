import React from 'react';
import { Panel, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { ScaleLoader } from 'react-spinners';

class People extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // on first mount, go ahead and load first page of people from SWAPI
        if (this.props.data && Object.keys(this.props.data).length <= 0) {
            this.props.fetchAllPeople();
        }
    }

    renderList = () => {
        // Draw the list of people's names OR show loading depending on scenario
        if (this.props.data && this.props.data.results && !this.props.loading) {
            let people = this.props.data.results;

            let listItems = [];

            people.forEach((person, index) => {
                listItems.push(
                    <ListGroupItem key={index}>
                        {person.name}
                    </ListGroupItem>
                )
            })

            return listItems;
        } else if (this.props.loading) {
            return <ScaleLoader
                color={'#000000'}
                loading={true}
            />
        } else {
            // fallback
            return null
        }
    }

    nextOrPrevClicked = (url) => {
        this.props.fetchAllPeople(url);
    }

    renderNext = () => {
        if (this.props.data && this.props.data.next) {
            return <Button onClick={() => { this.nextOrPrevClicked(this.props.data.next) }} >NEXT</Button>
        } else {
            return null
        }
    }

    renderPrev = () => {
        if (this.props.data && this.props.data.previous) {
            return <Button onClick={() => { this.nextOrPrevClicked(this.props.data.previous) }} >PREV</Button>
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="container" style={{ textAlign: "center" }}>
                <Panel >
                    <Panel.Heading>List of People</Panel.Heading>
                    <Panel.Body>
                        <ListGroup>
                            {this.renderList()}
                        </ListGroup>
                    </Panel.Body>
                </Panel>
                {this.renderPrev()}
                {this.renderNext()}
            </div>

        )
    }
}

export default People;