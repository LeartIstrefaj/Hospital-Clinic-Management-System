// import React, { Component } from "react";
// import { Table } from "react-bootstrap";

// import { Button, ButtonToolbar } from "react-bootstrap";
// import { AddDepartmentModal } from "./AddDepartmentModal";
// import { EditDepartmentModal } from "./EditDepartmentModal";
// import Navbar from './Navbar';

// export class Department extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { depp: [], addModalShow: false, editModalShow: false };
//     }

//     refreshList() {
//         fetch("http://localhost:36468/api/department")
//             .then((response) => response.json())
//             .then((data) => {
//                 this.setState({ depp: data });
//             });
//     }
//     componentDidMount() {
//         this.refreshList();
//         setInterval(() => {
//             this.refreshList();
//         }, 30000);

//     }
//     // componentDidUpdate() {
//     //     this.refreshList();
//     //     setInterval(() => {
//     //         this.refreshList();
//     //     }, 20000);
//     // }   
//     componentWillUnmount() {
//         clearInterval(this.interval);
//     }

//     deleteDep(did) {
//         if (window.confirm("Are you sure?")) {
//             fetch("http://localhost:36468/api/department/" + did, {
//                 method: "DELETE",
//                 header: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                 },
//             });
//         }
//     }

//     render() {
//         const {
//             depp,
//             depid,
//             depname,
//         } = this.state;
//         let addModalClose = () => this.setState({ addModalShow: false });
//         let editModalClose = () => this.setState({ editModalShow: false });
//         return (
//             <div>
//                 <Navbar />

//                 <div className="container">
//                     <br />
//                     <br />
//                     <ButtonToolbar>
//                         <Button
//                             variant="primary"
//                             className="rounded-5 btn-add"
//                             onClick={() => this.setState({ addModalShow: true })}
//                         >
//                             + Department
//                         </Button>

//                         <AddDepartmentModal
//                             show={this.state.addModalShow}
//                             onHide={addModalClose}
//                         />
//                     </ButtonToolbar>

//                     <Table className="mt-4" striped bordered hover size="sm" id="table-design">
//                         <thead className="table-head">
//                             <tr>
//                                 <th>#</th>
//                                 <th>Department Name</th>
//                                 <th>Opportunities</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {depp.map((dep) => (
//                                 <tr key={dep.DepID}>
//                                     <td>{dep.DepID}</td>
//                                     <td>{dep.DepName}</td>
//                                     <td>
//                                         <ButtonToolbar className="btn-action">
//                                             <Button
//                                                 className="mr-2 me-2 button-toolbar"
//                                                 variant="warning"
//                                                 onClick={() =>
//                                                     this.setState({
//                                                         editModalShow: true,
//                                                         depid: dep.DepID,
//                                                         depname: dep.DepName,
//                                                     })
//                                                 }
//                                             >
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
//                                                     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
//                                                     <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
//                                                 </svg>
//                                             </Button>

//                                             <Button
//                                                 className="mr-2 button-toolbar"
//                                                 variant="danger"
//                                                 onClick={() => this.deleteDep(dep.DepID)}
//                                             >
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
//                                                     <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
//                                                 </svg>
//                                             </Button>

//                                             <EditDepartmentModal
//                                                 show={this.state.editModalShow}
//                                                 onHide={editModalClose}
//                                                 depid={depid}
//                                                 depname={depname}
//                                             />
//                                         </ButtonToolbar>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </Table>

//                 </div>
//             </div>
//         );
//     }
// }

// export default Department;




// import React, { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
// import { Button, ButtonToolbar } from "react-bootstrap";
// import { AddDepartmentModal } from "./AddDepartmentModal";
// import { EditDepartmentModal } from "./EditDepartmentModal";
// import Navbar from "./Navbar";
// import {useNavigate}  from "react-router-dom";

// const Department = () => {
//   const [depp, setDepp] = useState([]);
//   const [addModalShow, setAddModalShow] = useState(false);
//   const [editModalShow, setEditModalShow] = useState(false);
//   const [depid, setDepId] = useState("");
//   const [depname, setDepName] = useState("");

//   const usenavigate = useNavigate();

//   useEffect(() => {
//     refreshList();
//     const interval = setInterval(() => {
//       refreshList();
//     }, 30000);

//     // let username = sessionStorage.getItem('username');
//     //     if (username === "" || username === null) {
//     //         usenavigate('/department');
//     //     }
//     let username = sessionStorage.getItem('username');
//     if (username === "" || username === null) {
//       usenavigate('/login'); // Redirect to login if not logged in
//     }

//     return () => clearInterval(interval);
//   }, [usenavigate]);

//   const refreshList = () => {
//     fetch("http://localhost:36468/api/department")
//       .then((response) => response.json())
//       .then((data) => {
//         setDepp(data);
//       });
//   };

//   const deleteDep = (did) => {
//     if (window.confirm("Are you sure?")) {
//       fetch(`http://localhost:36468/api/department/${did}`, {
//         method: "DELETE",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       });
//     }
//   };

//   const addModalClose = () => setAddModalShow(false);
//   const editModalClose = () => setEditModalShow(false);

//   return (
//     <div>
//       <Navbar />

//       <div className="container">
//         <br />
//         <br />
//         <ButtonToolbar>
//           <Button
//             variant="primary"
//             className="rounded-5 btn-add"
//             onClick={() => setAddModalShow(true)}
//           >
//             + Department
//           </Button>

//           <AddDepartmentModal show={addModalShow} onHide={addModalClose} />
//         </ButtonToolbar>

//         <Table className="mt-4" striped bordered hover size="sm" id="table-design">
//           <thead className="table-head">
//             <tr>
//               <th>#</th>
//               <th>Department Name</th>
//               <th>Opportunities</th>
//             </tr>
//           </thead>
//           <tbody>
//             {depp.map((dep) => (
//               <tr key={dep.DepID}>
//                 <td>{dep.DepID}</td>
//                 <td>{dep.DepName}</td>
//                 <td>
//                   <ButtonToolbar className="btn-action">
//                     <Button
//                       className="mr-2 me-2 button-toolbar"
//                       variant="warning"
//                       onClick={() => {
//                         setEditModalShow(true);
//                         setDepId(dep.DepID);
//                         setDepName(dep.DepName);
//                       }}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         fill="currentColor"
//                         className="bi bi-pencil-square"
//                         viewBox="0 0 16 16"
//                       >
//                         <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
//                         <path
//                           fillRule="evenodd"
//                           d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
//                         />
//                       </svg>
//                     </Button>

//                     <Button
//                       className="mr-2 button-toolbar"
//                       variant="danger"
//                       onClick={() => deleteDep(dep.DepID)}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         fill="currentColor"
//                         className="bi bi-trash3-fill"
//                         viewBox="0 0 16 16"
//                       >
//                         <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
//                       </svg>
//                     </Button>

//                     <EditDepartmentModal
//                       show={editModalShow}
//                       onHide={editModalClose}
//                       depid={depid}
//                       depname={depname}
//                     />
//                   </ButtonToolbar>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default Department;










import React, { useEffect, useState } from "react";
import { Table, Form } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { AddDepartmentModal } from "./AddDepartmentModal";
import { EditDepartmentModal } from "./EditDepartmentModal";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Department = () => {
  const [depp, setDepp] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [depid, setDepId] = useState("");
  const [depname, setDepName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const usenavigate = useNavigate();

  useEffect(() => {
    refreshList();
    const interval = setInterval(() => {
      refreshList();
    }, 30000);

    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/login"); // Redirect to login if not logged in
    }

    return () => clearInterval(interval);
  }, [usenavigate]);

  const refreshList = () => {
    const url = `http://localhost:36468/api/department?search=${searchTerm}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDepp(data);
      });
  };

  const deleteDep = (did) => {
    if (window.confirm("Are you sure?")) {
      fetch(`http://localhost:36468/api/department/${did}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  };

  const addModalClose = () => setAddModalShow(false);
  const editModalClose = () => setEditModalShow(false);

  return (
    <div>
      <Navbar />

      <div className="container">
        <br />
        <br />
        <Form.Control
          type="text"
          placeholder="Search department..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-3 search"
        />
        
        <ButtonToolbar>
          <Button
            variant="primary"
            className="rounded-5 btn-add"
            onClick={() => setAddModalShow(true)}
          >
            + Department
          </Button>

          <AddDepartmentModal show={addModalShow} onHide={addModalClose} />
        </ButtonToolbar>

        

        <Table className="mt-4" striped bordered hover size="sm" id="table-design">
          <thead className="table-head">
            <tr>
              <th>#</th>
              <th>Department Name</th>
              <th>Opportunities</th>
            </tr>
          </thead>
          <tbody>
            {depp
              .filter((dep) =>
                dep.DepName.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((dep) => (
                <tr key={dep.DepID}>
                  <td>{dep.DepID}</td>
                  <td>{dep.DepName}</td>
                  <td>
                    <ButtonToolbar className="btn-action">
                      <Button
                        className="mr-2 me-2 button-toolbar"
                        variant="warning"
                        onClick={() => {
                          setEditModalShow(true);
                          setDepId(dep.DepID);
                          setDepName(dep.DepName);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Button>

                      <Button
                        className="mr-2 button-toolbar"
                        variant="danger"
                        onClick={() => deleteDep(dep.DepID)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash3-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                      </Button>

                      <EditDepartmentModal
                        show={editModalShow}
                        onHide={editModalClose}
                        depid={depid}
                        depname={depname}
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
};

export default Department;

