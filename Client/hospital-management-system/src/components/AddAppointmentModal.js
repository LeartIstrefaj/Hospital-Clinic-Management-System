import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, InputGroup } from "react-bootstrap";

export class AddAppointmentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:36468/api/appointment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patientName: event.target.patientName.value,
        date: event.target.date.value,
        email: event.target.email.value,
        doctorName: event.target.doctorName.value,
        roomNo: event.target.roomNo.value,
      }),
    })
      .then((appointment) => appointment.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title
              className="ms-auto modal-title"
              id="contained-modal-title-vcenter"
            >
              Add Appointment
            </Modal.Title>
            <Button
              variant="danger"
              className="ms-auto btn-exit"
              onClick={this.props.onHide}
            >
              X
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6} className="mx-auto">
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="patientName">
                    <Form.Control
                      type="text"
                      name="patientName"
                      required
                      placeholder="Patient Name"
                    />
                  </Form.Group>

                  <Form.Group controlId="date">
                    <Form.Control
                      type="text"
                      name="date"
                      required
                      placeholder="Date"
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Control
                      type="text"
                      name="email"
                      required
                      placeholder="Email"
                    />
                  </Form.Group>

                  <Form.Group controlId="roomNo">
                    <Form.Control
                      type="text"
                      name="roomNo"
                      required
                      placeholder="Room Number"
                    />
                  </Form.Group>
                  <Form.Group controlId="doctorName">
                    <Form.Control
                      type="text"
                      name="doctorName"
                      required
                      placeholder="Doctor Name"
                    />
                  </Form.Group>

                  <Form.Group className="d-flex justify-content-center">
                    <Button
                      variant="primary"
                      className="rounded-5 mt-3 btn-add"
                      type="submit"
                    >
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
