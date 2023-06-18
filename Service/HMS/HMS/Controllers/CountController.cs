using HMS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;

namespace HMS.Controllers
{
    [Route("api/doctor")]
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
    }
}
