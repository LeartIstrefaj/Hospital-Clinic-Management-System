import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddNurseModal } from './AddNurseModal';
import { EditNurseModal } from './EditNurseModal';

export class Nurse extends Component {

    constructor(props) {
        super(props);
        this.state = { nursee: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch('http://localhost:36468/api/nurse')
            .then(response => response.json())
            .then(data => {
                this.setState({ nursee: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteTeams(nid) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:36468/api/nurse/' + nid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { nursee, nurseid, nursefullname,nurseemail,nursepassword,nursenrtel } = this.state;
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
                        {nursee.map(nurse =>
                            <tr key={nurse.UserId }>
                                <td>{nurse.UserId }</td>
                                <td>{nurse.FullName }</td>
                                <td>{nurse.Email }</td>
                                <td>{nurse.Password}</td>
                                <td>{nurse.NrTel}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="warning"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                nurseid: nurse.UserId, nursefullname: nurse.FullName,nurseemail: nurse.Email, nursepassword: nurse.Password, nursenrtel: nurse.NrTel
                                            })}>
                                            Edit
        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteTeams(nurse.UserId)}>
                                            Delete
        </Button>

                                        <EditNurseModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            nurseid={nurseid}
                                            nursefullname={nursefullname} 
                                            nurseemail={nurseemail} 
                                            nursepassword={nursepassword} 
                                            nursenrtel={nursenrtel} />
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    < Button variant='primary' className='rounded-5'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Doctor</Button>

                    <AddNurseModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
                
            </div>
        )
    }
}

export default Nurse;