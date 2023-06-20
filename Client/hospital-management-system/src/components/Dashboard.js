// import { Navbar } from "react-bootstrap"
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export const Dashboard = () => {
    const [doctorCount, setDoctorCount] = useState(0);
    const [nurseCount, setNurseCount] = useState(0);
    const [patientCount, setPatientCount] = useState(0);
    const [departmentCount, setDepartmentCount] = useState(0);

    useEffect(() => {
        fetchCounts(); // Fetch data when the component mounts
    }, []);

    const fetchCounts = async () => {
        try {
            const response = await fetch('http://localhost:36468/api/count/GetAllCountDoctor');
            const data = await response.json();
            setDoctorCount(data.DoctorCount);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
        try {
            const response = await fetch('http://localhost:36468/api/count/GetAllCountNurse');
            const data = await response.json();
            setNurseCount(data.NurseCount);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
        try {
            const response = await fetch('http://localhost:36468/api/count/GetAllCountPatient');
            const data = await response.json();
            setPatientCount(data.PatientCount);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
        try {
            const response = await fetch('http://localhost:36468/api/count/GetAllCountDepartment');
            const data = await response.json();
            setDepartmentCount(data.DepartmentCount);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    

    return (
        <div>
            <Navbar />


            <div class="container">
                <br />
                <br />
                <div class="row">
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h5>Doctor</h5>
                                <h1 className='count-dashboard'>{doctorCount}<span className="text-dashboard"> items</span></h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h5>Nurse</h5>
                                <h1 className='count-dashboard'>{nurseCount}<span className="text-dashboard"> items</span></h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h5>Patient</h5>
                                <h1 className='count-dashboard'>{patientCount}<span className="text-dashboard"> items</span></h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h5>Department</h5>
                                <h1 className='count-dashboard'>{departmentCount}<span className="text-dashboard"> items</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}