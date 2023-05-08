import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';


export class AddNurseModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/nurse', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //TeamId:null,
                FullName: event.target.FullName.value, Email: event.target.Email.value, Password: event.target.Password.value, NrTel: event.target.NrTel.value, Role: event.target.Role.value

            })
        })
            .then(nurse => nurse.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                })
    }
    render() {
        return (
            <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header clooseButton>
                        <Modal.Title className='ms-auto' id="contained-modal-title-vcenter">
                            Add Nurse

                        </Modal.Title>

                        <Button variant="danger" className='ms-auto' onClick={this.props.onHide}>X</Button>

                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="FullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" name="FullName" required
                                            placeholder="Full Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" name="Email" required
                                            placeholder="Email" />
                                    </Form.Group>

                                    <Form.Group controlId="Password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="text" name="Password" required
                                            placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group controlId="NrTel">
                                        <Form.Label>Nr Tel</Form.Label>
                                        <Form.Control type="text" name="NrTel" required
                                            placeholder="Nr Tel" />
                                    </Form.Group>

                                    <Form.Group controlId="Role">
                                        <Form.Label>Role </Form.Label>
                                        <Form.Control as="select">
                                                <option>Nurse</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className='d-flex justify-content-center'>
                                        <Button variant="primary" className='rounded-5' type="submit">
                                            Done
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>


                </Modal>

            </div>
        )
    }

}