using HMS.Models;
using HMS.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly IAppointmentService appointmentService;

        public AppointmentController(IAppointmentService appointmentService)
        {
            this.appointmentService = appointmentService;
        }
        // GET: api/<AppointmentController>
        [HttpGet]
        public ActionResult<List<Appointment>> Get()
        {
            return appointmentService.Get();
        }

        // GET api/<AppointmentController>/5
        [HttpGet("{id}")]
        public ActionResult<Appointment> Get(string id)
        {
            var appointment = appointmentService.Get(id);

            if (appointment == null)
            {
                return NotFound($"Appointment with Id = {id} not found!");
            }
            return appointment;
        }

        // POST api/<AppointmentController>
        [HttpPost]
        public ActionResult<Appointment> Post([FromBody] Appointment appointment)
        {
            appointmentService.Create(appointment);

            return CreatedAtAction(nameof(Get), new { id = appointment.Id }, appointment);
        }

        // PUT api/<AppointmentController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Appointment appointment)
        {
            var existingAppointment = appointmentService.Get(id);
            if (existingAppointment == null)
            {
                return NotFound($"Appointment with Id = {id} not found");
            }

            appointmentService.Update(id, appointment);
            return NoContent();
        }

        // DELETE api/<AppointmentController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var appointment = appointmentService.Get(id);
            if(appointment == null)
            {
                return NotFound($"Appointment with Id = {id} not found");
            }

            appointmentService.Remove(id);

            return Ok($"Appoint with Id = {id} has been deleted");
        }
    }
}
