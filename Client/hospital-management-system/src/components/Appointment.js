import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { AddAppointmentModal } from "./AddAppointmentModal";
import { EditAppointmentModal } from "./EditAppointmentModal";
import Navbar from "./Navbar";

export class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = { appointment: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    fetch("http://localhost:36468/api/appointment")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ appointment: data });
      });
  }

  componentDidMount() {
    this.refreshList();
    setInterval(() => {
      this.refreshList();
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.setInterval);
  }
  deleteTeams(aid) {
    if (window.confirm("Are you sure?")) {
      fetch(`http://localhost:36468/api/appointment/${aid}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log("Item deleted successfully.");
          } else {
            console.error("Failed to delete item.");
          }
        })
        .catch((error) => {
          // Network or fetch error
          console.error("Error occurred during the deletion:", error);
          // You can handle the error or display an error message here
        });
    }
  }

  render() {
    const {
      appointmentt,
      appointmentId,
      appointmentPatientName,
      appointmentDate,
      appointmentEmail,
      appointmentDoctorName,
      appointmentRoomNo,
    } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div>
        <Navbar />
        <div className="container">
          <br />
          <br />
          <ButtonToolbar>
            <Button
              variant="primary"
              className="rounded-6 btn-add"
              onClick={() => this.setState({ addModalShow: true })}
            >
              + Appointment
            </Button>

            <AddAppointmentModal
              show={this.state.addModalShow}
              onHide={addModalClose}
            />
          </ButtonToolbar>

          <Table
            className="mt-4"
            striped
            bordered
            hover
            size="sm"
            id="table-design"
          >
            <thead className="table-head">
              <tr>
                <th>#</th>
                <th>Patient Name</th>
                <th>Date</th>
                <th>Email</th>
                <th>Doctor Name</th>
                <th>Room no</th>
              </tr>
            </thead>
            <tbody>
              {this.state.appointment.map((appointment) => (
                <tr key={appointment.Id}>
                  <td>{appointment.PatientName}</td>
                  <td>{appointment.Date}</td>
                  <td>{appointment.Email}</td>
                  <td>{appointment.DoctorName}</td>
                  <td>{appointment.RoomNo}</td>
                  <td>
                    <ButtonToolbar className="btn-action">
                      <Button
                        className="mr-2 me-2 button-toolbar"
                        variant="warning"
                        onClick={() =>
                          this.setState({
                            editModalShow: true,
                            appointmentId: appointment.Id,
                            appointmentPatientName: appointment.PatientName,
                            appointmentDate: appointment.Date,
                            appointmentEmail: appointment.Email,
                            appointmentDoctorName: appointment.DoctorName,
                            appointmentRoomNo: appointment.RoomNo,
                          })
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Button>

                      <Button
                        className="mr-2 button-toolbar"
                        variant="danger"
                        onClick={() => this.deleteTeams(appointment.Id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash3-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                      </Button>

                      <EditAppointmentModal
                        show={this.state.editModalShow}
                        onHide={editModalClose}
                        appointmentId={appointmentId}
                        appointmentPatientName={appointmentPatientName}
                        appointmentDate={appointmentDate}
                        appointmentEmail={appointmentEmail}
                        appointmentDoctorName={appointmentDoctorName}
                        appointmentRoomNo={appointmentRoomNo}
                      />
                    </ButtonToolbar>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Appointment;
