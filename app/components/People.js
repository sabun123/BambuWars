import React from 'react';
import { Panel, Button, ListGroup, ListGroupItem, Modal, Grid, Row, Col } from 'react-bootstrap';
import { ScaleLoader, BarLoader } from 'react-spinners';

class People extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            selectedPerson: {}
        }
    }

    componentDidMount() {
        // on first mount, go ahead and load first page of people from SWAPI
        if (this.props.data && Object.keys(this.props.data).length <= 0) {
            this.props.fetchAllPeople();
        }
    }

    okClicked = () => {
        this.setState({ showModal: false })
    }

    personClicked = (person) => {
        this.props.fetchPersonDetails(person);
        this.setState({ showModal: true, selectedPerson: person })
    }

    renderList = () => {
        // Draw the list of people's names OR show loading depending on scenario
        if (this.props.data && this.props.data.results && !this.props.loading) {
            let people = this.props.data.results;

            let listItems = [];

            people.forEach((person, index) => {
                listItems.push(
                    <ListGroupItem key={index} onClick={() => { this.personClicked(person) }}>
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

    renderTable = () => {

        let dataGrid = [];

        Object.keys(this.state.selectedPerson).forEach((key, index) => {
            dataGrid.push(
                <tr key={index}>
                    <th>{key}</th>
                    <td>{this.state.selectedPerson[key]} </td>
                </tr>
            )
        })



        return dataGrid;
    }

    renderCheck = () => {
        if (this.props.personData && Object.keys(this.props.personData).length > 0 && !this.props.loadingDetails) {
            return this.renderTable();
        } else if (this.props.loadingDetails) {
            return <tr style={{ textAlign: '-webkit-center' }}>
                <td>
                    <BarLoader
                        color={'#000000'}
                        loading={true}
                    />
                    <p style={{marginTop:'5%'}}>{this.props.loadingStatus}</p>
                </td>
            </tr>
        } else {
            return null;
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
                <Modal show={this.state.showModal}>
                    <Modal.Header>
                        <Modal.Title>{this.state.selectedPerson.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className='container-fluid' style={{ overflowX: 'auto' }}>
                            <table className='table'>
                                <tbody>
                                    {this.renderCheck()}
                                </tbody>
                            </table>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.okClicked} disabled={this.props.loadingDetails}>OK</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}

export default People;