using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NurseController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public NurseController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select NurseId, Username, Email, Password, FullName, PhoneNumber, Role, DataCreated from dbo.Nurse";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SMSCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);

        }

        [HttpPost]
        public JsonResult Post(Nurse nurse)
        {
            string query = @"
                insert into dbo.Nurse
                (Username, Email, Password, FullName, PhoneNumber, Role, DataCreated)
                values
                ('" + nurse.Username + @"'
                ,'" + nurse.Email + @"'
                ,'" + nurse.Password + @"'
                ,'" + nurse.FullName + @"'
                ,'" + nurse.PhoneNumber + @"'
                ,'" + nurse.Role + @"'
                ,'" + nurse.DataCreated + @"')
                ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SMSCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }

                return new JsonResult("Added Successfully");
            }
        }

        [HttpPut]
        public JsonResult Put(Nurse nurse)
        {
            string query = @"
               update dbo.Nurse set 
               Username  = '" + nurse.Username + @"'
               ,Email  = '" + nurse.Email + @"'
               ,Password  = '" + nurse.Password + @"'
               ,FullName  = '" + nurse.FullName + @"'
               ,PhoneNumber  = '" + nurse.PhoneNumber + @"'
               ,Role  = '" + nurse.Role + @"'
               ,DataCreated  = '" + nurse.DataCreated + @"