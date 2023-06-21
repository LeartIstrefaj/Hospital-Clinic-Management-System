using HMS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace HMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListSurgeryController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ListSurgeryController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select SurgeryID,Patient, SurgeryName,Department,Zone,Hall,Doctor,Nurse,DateCreated from dbo.ListSurgery";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("HMSCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(ListSurgery d)
        {
            //string q = @"
            //    insert into dbo.users values
            //    ('" + d.FullName + @"'
            //    ,'" + d.Email + @"'
            //    ,'" + d.Password + @"'
            //    ,'" + d.NrTel + @"')
            //    ";

            string query = @"
                insert into dbo.ListSurgery (Patient, SurgeryName, Department, Zone, Hall, Doctor, Nurse, DateCreated)
                values ('" + d.Patient + @"', '" + d.SurgeryName + @"', '" + d.Department + @"', '" + d.Zone + @"', '" + d.Hall + @"', '" + d.Doctor + @"', '" + d.Nurse + @"', '" + d.DateCreated + @"')
            ";


            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("HMSCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }

                return new JsonResult("Added Successfully");
            }
        }

        [HttpPut]
        public JsonResult Put(ListSurgery d)
        {
            string query = @"
               update dbo.ListSurgery set 
                Patient = '" + d.Patient + @"'
               ,SurgeryName = '" + d.SurgeryName + @"'
               ,Department = '" + d.Department + @"'
                ,Zone = '" + d.Zone + @"'
                ,Hall = '" + d.Hall + @"'
                ,Doctor = '" + d.Doctor + @"'
                ,Nurse = '" + d.Nurse + @"'
               where SurgeryID = " + d.SurgeryID + @"
               ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("HMSCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }

                return new JsonResult("Update Successfully");
            }
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
               delete from dbo.ListSurgery
               where SurgeryID = " + id + @"
               ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("HMSCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }

                return new JsonResult("Deleted Successfully");
            }
        }
    }
}
