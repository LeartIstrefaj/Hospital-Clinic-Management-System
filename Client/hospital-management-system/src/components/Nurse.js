import React, { Component } from 'react';
import { Table, FormControl } from "react-bootstrap";


import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddNurseModal } from './AddNurseModal';
import { EditNurseModal } from './EditNurseModal';
import Navbar from './Navbar';

export class Nurse extends Component {

    constructor(props) {
        super(props);
        this.state = { nursee: [], addModalShow: false, editModalShow: false, searchQuery: "" }
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
        setInterval(() => {
            this.refreshList();
        }, 30000);
    }
    // componentDidUpdate() {
    //     this.refreshList();
    //     setInterval(() => {
    //         this.refreshList();
    //     }, 20000);
    // }   
    componentWillUnmount() {
        clearInterval(this.interval);
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

    handleSearch = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    filterNurse = () => {
        const { nursee, searchQuery } = this.state;
        return nursee.filter((nurse) =>
            nurse.FullName.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    render() {
        const { nursee, nurseid, nurseusername, nursefullname, nurseemail, nursepassword, nursenrtel, addModalShow, editModalShow, searchQuery } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        const filteredNurse = this.filterNurse();
        return (
            <div>
                <Navbar />
                <div className='container'>

                    <br />
                    <br />
                    <FormControl
                        type="text"
                        placeholder="Search by name"
                        value={searchQuery}
                        onChange={this.handleSearch}
                        className="mb-3 search"
                    />

                    <ButtonToolbar>
                        < Button variant='primary' className='rounded-5 btn-add'
                            onClick={() => this.setState({ addModalShow: true })}>
                            + Nurse</Button>

                        <AddNurseModal show={this.state.addModalShow}
                            onHide={addModalClose} />
                    </ButtonToolbar>

                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Nr.Tel</th>
                                <th>Opportunities</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredNurse.map(nurse =>
                                <tr key={nurse.UserId}>
                                    <td>{nurse.UserId}</td>
                                    <td>{nurse.Username}</td>
                                    <td>{nurse.FullName}</td>
                                    <td>{nurse.Email}</td>
                                    <td>{nurse.Password}</td>
                                    <td>{nurse.NrTel}</td>
                                    <td>
                                        <ButtonToolbar className='btn-action'>
                                            <Button className="mr-2 me-2 button-toolbar" variant="warning"
                                                onClick={() => this.setState({
                                                    editModalShow: true,
                                                    nurseid: nurse.UserId, nurseusername: nurse.Username, nursefullname: nurse.FullName, nurseemail: nurse.Email, nursepassword: nurse.Password, nursenrtel: nurse.NrTel
                                                })}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                </svg>
                                            </Button>

                                            <Button className="mr-2 button-toolbar" variant="danger"
                                                onClick={() => this.deleteTeams(nurse.UserId)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                </svg>
                                            </Button>

                                            <EditNurseModal show={this.state.editModalShow}
                                                onHide={editModalClose}
                                                nurseid={nurseid}
                                                nurseusername={nurseusername}
                                                nursefullname={nursefullname}
                                                nurseemail={nurseemail}
                                                nursepassword={nursepassword}
                                                nursenrtel={nursenrtel} />
                                        </ButtonToolbar>

                                    </td>

                                </tr>)}
                        </tbody>

                    </Table>


                </div>
            </div>
        )
    }
}

export default Nurse;