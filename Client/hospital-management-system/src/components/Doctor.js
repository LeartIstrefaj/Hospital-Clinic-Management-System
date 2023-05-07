import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddDoctorModal } from './AddDoctorModal';
import { EditDoctorModal } from './EditDoctorModal';

export class Doctor extends Component {

    constructor(props) {
        super(props);
        this.state = { doctorr: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('http://localhost:36468/api/doctor')
            .then(response => response.json())
            .then(data => {
                this.setState({ doctorr: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteTeams(did) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:36468/api/doctor/' + did, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { doctorr, doctorid, doctorfullname,doctoremail,doctorpassword,doctornrtel } = this.state;
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
                        {doctorr.map(doctor =>
                            <tr key={doctor.UserId }>
                                <td>{doctor.UserId }</td>
                                <td>{doctor.FullName }</td>
                                <td>{doctor.Email }</td>
                                <td>{doctor.Password}</td>
                                <td>{doctor.NrTel}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="warning"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                doctorid: doctor.UserId, doctorfullname: doctor.FullName,doctoremail: doctor.Email, doctorpassword: doctor.Password, doctornrtel: doctor.NrTel
                                            })}>
                                            Edit
        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteTeams(doctor.UserId)}>
                                            Delete
        </Button>

                                        <EditDoctorModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            doctorid={doctorid}
                                            doctorfullname={doctorfullname} 
                                            doctoremail={doctoremail} 
                                            doctorpassword={doctorpassword} 
                                            doctornrtel={doctornrtel} />
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    < Button variant='primary' className='rounded-5'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Doctor</Button>

                    <AddDoctorModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
                
            </div>
        )
    }
}

export default Doctor;