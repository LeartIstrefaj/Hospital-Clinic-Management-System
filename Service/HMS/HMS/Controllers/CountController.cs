using HMS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;

namespace HMS.Controllers
{
    [Route("api/count")]
    [ApiController]
    public class CountController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public CountController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("GetAllCountDoctor")]
        public IActionResult GetAllCountDoctor()
        {
            string query = @"SELECT COUNT(*) FROM dbo.users where Role = 'Doctor'";
            int doctorCount = 0;
            string sqlDataSource = _configuration.GetConnectionString("HMSCon");

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    doctorCount = (int)myCommand.ExecuteScalar();
                }
            }

           var countData = new CountData
            {
                DoctorCount = doctorCount
            };

            return Ok(countData);
        }

        [HttpGet("GetAllCountNurse")]
        public IActionResult GetAllCountNurse()
        {
            string query = @"SELECT COUNT(*) FROM dbo.users where Role = 'Nurse'";
            int nurseCount = 0;
            string sqlDataSource = _configuration.GetConnectionString("HMSCon");

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    nurseCount = (int)myCommand.ExecuteScalar();
                }
            }

            var countData = new CountData
            {
                NurseCount = nurseCount
            };

            return Ok(countData);
        }

        [HttpGet("GetAllCountPatient")]
        public IActionResult GetAllCountPatient()
        {
            string query = @"SELECT COUNT(*) FROM dbo.users where Role = 'Patient'";
            int patientCount = 0;
            string sqlDataSource = _configuration.GetConnectionString("HMSCon");

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    patientCount = (int)myCommand.ExecuteScalar();
                }
            }

            var countData = new CountData
            {
                PatientCount = patientCount
            };

            return Ok(countData);
        }

        [HttpGet("GetAllCountDepartment")]
        public IActionResult GetAllCountDepartment()
        {
            string query = @"SELECT COUNT(*) FROM dbo.Departments";
            int departmentCount = 0;
            string sqlDataSource = _configuration.GetConnectionString("HMSCon");

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    departmentCount = (int)myCommand.ExecuteScalar();
                }
            }

            var countData = new CountData
            {
                DepartmentCount = departmentCount
            };

            return Ok(countData);
        }
    }
}
