// import React, { Component } from 'react';
// import { Modal, Button, Row, Col, Form } from 'react-bootstrap';


// export class AddDoctorModal extends Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         fetch('http://localhost:36468/api/doctor', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 //TeamId:null,
//                 FullName: event.target.FullName.value, Email: event.target.Email.value, Password: event.target.Password.value, NrTel: event.target.NrTel.value, Role: event.target.Role.value

//             })
//         })
//             .then(doctor => doctor.json())
//             .then((result) => {
//                 alert(result);
//             },
//                 (error) => {
//                     alert('Failed');
//                 })
//     }
//     render() {
//         return (
//             <div className="container">

//                 <Modal
//                     {...this.props}
//                     size="md"
//                     aria-labelledby="contained-modal-title-vcenter"
//                     centered>
//                     <Modal.Header clooseButton>
//                         <Modal.Title className='ms-auto modal-title' id="contained-modal-title-vcenter">
//                             Add Doctor

//                         </Modal.Title>

//                         <Button variant="danger" className='ms-auto btn-exit' onClick={this.props.onHide}>X</Button>

//                     </Modal.Header>
//                     <Modal.Body>

//                         <Row>
//                             <Col sm={6} className="mx-auto">
//                                 <Form onSubmit={this.handleSubmit}>
//                                     <Form.Group controlId="FullName">
//                                         {/* <Form.Label>Full Name</Form.Label> */}
//                                         <Form.Control type="text" name="FullName" required
//                                             placeholder="Full Name" />
//                                     </Form.Group>

//                                     <Form.Group controlId="Email">
//                                         {/* <Form.Label>Email</Form.Label> */}
//                                         <Form.Control type="text" name="Email" required
//                                             placeholder="Email" />
//                                     </Form.Group>

//                                     <Form.Group controlId="Password">
//                                         {/* <Form.Label>Password</Form.Label> */}
//                                         <Form.Control type="text" name="Password" required
//                                             placeholder="Password" />
//                                     </Form.Group>

//                                     <Form.Group controlId="NrTel">
//                                         {/* <Form.Label>Nr Tel</Form.Label> */}
//                                         <Form.Control type="text" name="NrTel" required
//                                             placeholder="Nr Tel" />
//                                     </Form.Group>

//                                     {/* <Form.Group controlId="Role">
//                                         <Form.Label>Role</Form.Label>
//                                         <Form.Control type="text" name="Role" required
//                                             placeholder="Role" />
//                                     </Form.Group> */}

//                                     <Form.Group controlId="Role">
//                                         {/* <Form.Label>Role </Form.Label> */}
//                                         <Form.Control as="select">
//                                                 <option>Doctor</option>
//                                         </Form.Control>
//                                     </Form.Group>

//                                     <Form.Group className='d-flex justify-content-center'>
//                                         <Button variant="primary" className='rounded-5 mt-3 btn-add' type="submit">
//                                             Done
//                                         </Button>
//                                     </Form.Group>
//                                 </Form>
//                             </Col>
//                         </Row>
//                     </Modal.Body>


//                 </Modal>

//             </div>
//         )
//     }

// }


import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, InputGroup } from 'react-bootstrap';

export class AddDoctorModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roless: [],
            showPassword: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    togglePasswordVisibility = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword
        }));
    }

    componentDidMount() {
        fetch('http://localhost:36468/api/roles')
            .then(response => response.json())
            .then(data => {
                this.setState({ roless: data });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:36468/api/doctor', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //TeamId:null,
                Username: event.target.Username.value,
                FullName: event.target.FullName.value,
                Email: event.target.Email.value,
                Password: event.target.Password.value,
                NrTel: event.target.NrTel.value,
                Role: event.target.Role.value
            })
        })
            .then(doctor => doctor.json())
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
        const { showPassword } = this.state;

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
                            Add Doctor
                        </Modal.Title>
                        <Button variant="danger" className='ms-auto btn-exit' onClick={this.props.onHide}>X</Button>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6} className="mx-auto">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="Username">
                                        {/* <Form.Label>Full Name</Form.Label> */}
                                        <Form.Control type="text" name="Username" required placeholder="Username" />
                                    </Form.Group>

                                    <Form.Group controlId="FullName">
                                        {/* <Form.Label>Full Name</Form.Label> */}
                                        <Form.Control type="text" name="FullName" required placeholder="Full Name" />
                                    </Form.Group>

                                    <Form.Group controlId="Email">
                                        {/* <Form.Label>Email</Form.Label> */}
                                        <Form.Control type="text" name="Email" required placeholder="Email" />
                                    </Form.Group>

                                    <Form.Group controlId="Password">
                                        {/* <Form.Label>Password</Form.Label> */}
                                        <InputGroup>
                                            <Form.Control
                                                type={showPassword ? 'text' : 'password'}
                                                name="Password"
                                                required
                                                placeholder="Password"
                                            />
                                            <Button variant="outline-secondary" className='btn-toggle-password' onClick={this.togglePasswordVisibility}>

                                                {showPassword ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12Z" fill="currentColor" /><path d="M9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13Z" fill="currentColor" /><path d="M14 12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12Z" fill="currentColor" /><path d="M20 11H16V13H20V11Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C0.895431 6 0 6.89543 0 8V16C0 17.1046 0.89543 18 2 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H2ZM22 8H2L2 16H22V8Z" fill="currentColor" /></svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 6C20.4477 6 20 6.44771 20 7V17C20 17.5523 20.4477 18 21 18C21.5523 18 22 17.5523 22 17V7C22 6.44772 21.5523 6 21 6Z" fill="currentColor" /><path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" fill="currentColor" /><path d="M12 12C12 13.1046 11.1046 14 10 14C8.89543 14 8 13.1046 8 12C8 10.8954 8.89543 10 10 10C11.1046 10 12 10.8954 12 12Z" fill="currentColor" /><path d="M16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z" fill="currentColor" /></svg>}

                                            </Button>
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group controlId="NrTel">
                                        {/* <Form.Label>Nr Tel</Form.Label> */}
                                        <Form.Control type="text" name="NrTel" required placeholder="Nr Tel" />
                                    </Form.Group>

                                    {/* <Form.Group controlId="Role">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Control type="text" name="Role" required placeholder="Role" />
                                    </Form.Group> */}

                                    <Form.Group controlId="Role">
                                        {/* <Form.Label>Role </Form.Label> */}
                                        <Form.Control as="select">
                                            {this.state.roless.map(role =>
                                                <option key={role.RoleID}>{role.Role}</option>)}
                                        </Form.Control>
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
