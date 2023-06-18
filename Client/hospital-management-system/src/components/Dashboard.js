// import { Navbar } from "react-bootstrap"
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export const Dashboard = () => {
    const [doctorCount, setDoctorCount] = useState(0);

    useEffect(() => {
        fetchCounts(); // Fetch data when the component mounts
    }, []);

    const fetchCounts = async () => {
        try {
            const response = await fetch('http://localhost:36468/api/doctor/GetAllCountDoctor');
            const data = await response.json();
            setDoctorCount(data.DoctorCount);
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
                                <p>{doctorCount}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h5>Nurse</h5>
                                <p>123</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h5>Patient</h5>
                                <p>123</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h5>Department</h5>
                                <p>123</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}