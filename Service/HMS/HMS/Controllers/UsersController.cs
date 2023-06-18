using HMS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace HMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public UsersController(IConfiguration configuration)
        {
            _configuration = configuration;    
        }

        [HttpPost]
        [Route("registration")]
        public string registration(Users registration)
        {
            SqlConnection con = new(_configuration.GetConnectionString("HMSCon").ToString());
            SqlCommand cmd = new("INSERT INTO users(Username,Email,Password,NrTel,Role) VALUES('" +registration.Username+ "','" + registration.Email + "', '" + registration.Password + "', '" + registration.NrTel + "', '" + registration.Role + "' )", con);
            con.Open();
            int i = cmd.ExecuteNonQuery();
            con.Close();
            if(i > 0)
            {
                return "Data inserted";
            }
            else
            {
                return "Error";
            }
            
        }

        [HttpPost]
        [Route("login")]
        public string login(Users registration)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("HMSCon").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM users WHERE Username = '" + registration.Username + "'  AND Password = '" + registration.Password + "' ",con);
            DataTable dt = new DataTable(); 
            da.Fill(dt);
            if(dt.Rows.Count > 0)
            {
                return "Valid user";
            }
            else
            {
                return "Invalid user";
            }
        }
    }
}
