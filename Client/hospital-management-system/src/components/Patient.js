import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddPatientModal } from './AddPatientModal';
import { EditPatientModal } from './EditPatientModal';

export class Patient extends Component {

    constructor(props) {
        super(props);
        this.state = { patientt: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('http://localhost:36468/api/patient')
            .then(response => response.json())
            .then(data => {
                this.setState({ patientt: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteTeams(pid) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:36468/api/patient/' + pid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { patientt, patientid, patientfullname,patientemail,patientpassword,patientnrtel } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className='container'>
               
                <br />
                <b />
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Nr.Tel</th>
                            <th>Opportunities</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientt.map(patient =>
                            <tr key={patient.UserId }>
                                <td>{patient.UserId }</td>
                                <td>{patient.FullName }</td>
                                <td>{patient.Email }</td>
                                <td>{patient.Password}</td>
                                <td>{patient.NrTel}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="warning"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                patientid: patient.UserId, patientfullname: patient.FullName,patientemail: patient.Email, patientpassword: patient.Password, patientnrtel: patient.NrTel
                                            })}>
                                            Edit
        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteTeams(patient.UserId)}>
                                            Delete
        </Button>

                                        <EditPatientModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            patientid={patientid}
                                            patientfullname={patientfullname} 
                                            patientemail={patientemail} 
                                            patientpassword={patientpassword} 
                                            patientnrtel={patientnrtel} />
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    < Button variant='primary' className='rounded-5'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Patient</Button>

                    <AddPatientModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
                
            </div>
        )
    }
}

export default Patient;