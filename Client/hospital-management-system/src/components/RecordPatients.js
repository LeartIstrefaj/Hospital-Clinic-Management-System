import React, { Component } from "react";
import { Table } from "react-bootstrap";

import Navbar from "./Navbar";

export class RecordPatients extends Component {
    constructor(props) {
        super(props);
        this.state = { doctorr: [], addModalShow: false, editModalShow: false };
    }

    refreshList() {
        fetch("http://localhost:36468/api/patient")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ doctorr: data });
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


    render() {
        const {
            doctorr,
            doctorid,
            doctorfullname,
            doctoremail,
            doctorpassword,
            doctornrtel,
        } = this.state;
        return (
            <div>
                <Navbar />
                <div className="container">
                    <br />
                    <br />
                   
                    <Table className="mt-4" striped bordered hover size="sm" id="table-design">
                        <thead className="table-head">
                            <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>Nr.Tel</th>
                                <th>Email</th>
                                <th>Date Join</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctorr.map((doctor) => (
                                <tr key={doctor.UserId}>
                                    <td>{doctor.UserId}</td>
                                    <td>{doctor.FullName}</td>
                                    <td>{doctor.NrTel}</td>
                                    <td>{doctor.Email}</td>
                                    <td>null</td>
                                    <td>

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

export default RecordPatients;
