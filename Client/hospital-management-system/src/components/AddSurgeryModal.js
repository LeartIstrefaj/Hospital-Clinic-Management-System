
import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export class AddSurgeryModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listsurgeryy: [],
            selectedDate: null 
            // showPassword: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(date) {
        this.setState({
          selectedDate: date // Update the selectedDate in the state
        });
      }

    togglePasswordVisibility = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword
        }));
    }

    componentDidMount() {
        fetch('http://localhost:36468/api/doctor')
            .then(response => response.json())
            .then(data => {
                this.setState({ listsurgeryy: data });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/listsurgery', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //TeamId:null,
                Patient: event.target.Patient.value,
                SurgeryName: event.target.SurgeryName.value,
                Department: event.target.Department.value,
                Zone: event.target.Zone.value,
                Hall: event.target.Hall.value,
                Doctor: event.target.Doctor.value,
                Nurse: event.target.Nurse.value,
                // DateCreated: event.target.Role.value
                DateCreated: this.state.selectedDate
            })
        })
            .then(list => list.json())
            .then(
                (result) => {
                    alert(result);
                },
                (error) => {
                    alert('Failed');
                }
            );
    }

    render() {
        // const { showPassword } = this.state;

        return (
            <div className="container">
                <Modal
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title className='ms-auto modal-title' id="contained-modal-title-vcenter">
                            Add Surgery
                        </Modal.Title>
                        <Button variant="danger" className='ms-auto btn-exit' onClick={this.props.onHide}>X</Button>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="Patient">
                                        {/* <Form.Label>Full Name</Form.Label> */}
                                        <Form.Control type="text" name="Patient" required placeholder="Patient" />
                                    </Form.Group>

                                    <Form.Group controlId="SurgeryName">
                                        {/* <Form.Label>Full Name</Form.Label> */}
                                        <Form.Control type="text" name="SurgeryName" required placeholder="Surgery Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Department">
                                        {/* <Form.Label>Email</Form.Label> */}
                                        <Form.Control type="text" name="Department" required placeholder="Department" />
                                    </Form.Group>

                                    <Form.Group controlId="Zone">
                                        {/* <Form.Label>Nr Tel</Form.Label> */}
                                        <Form.Control type="number" name="Zone" required placeholder="Zone" />
                                    </Form.Group>

                                    <Form.Group controlId="Hall">
                                        {/* <Form.Label>Nr Tel</Form.Label> */}
                                        <Form.Control type="text" name="Hall" required placeholder="Hall" />
                                    </Form.Group>

                                    <Form.Group controlId="Doctor">
                                        {/* <Form.Label>Role </Form.Label> */}
                                        <Form.Control as="select">
                                            {this.state.listsurgeryy.map(listsurgery =>
                                                <option key={listsurgery.UserID}>{listsurgery.FullName}</option>)}
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="Nurse">
                                        {/* <Form.Label>Nr Tel</Form.Label> */}
                                        <Form.Control type="text" name="Nurse" required placeholder="Nurse" />
                                    </Form.Group>
                                    <Form.Group controlId="DateCreated">
                                        {/* <Form.Label>Date</Form.Label> */}
                                        <DatePicker
                                            selected={this.state.selectedDate}
                                            onChange={this.handleDateChange}
                                            dateFormat="yyyy-MM-dd"
                                            className="form-control"
                                            placeholderText="Select Date"
                                        />
                                    </Form.Group>

                                    <Form.Group className='d-flex justify-content-center'>
                                        <Button variant="primary" className='rounded-5 mt-3 btn-add' type="submit">
                                            Done
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
