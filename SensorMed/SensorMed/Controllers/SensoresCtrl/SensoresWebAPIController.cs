using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using copysensor = SensorMed.Models;

namespace SensorMed.Controllers.SensoresCtrl
{
    public class SensoresWebAPIController : ApiController
    {
        private copysensor.SensorMedEntities db = new copysensor.SensorMedEntities();


        // GET: api/Sensores
        public IQueryable<copysensor.Sensor> GetSensor()
        {
            return db.Sensor;
        }

        // GET: api/Sensores/5
        [ResponseType(typeof(copysensor.Sensor))]
        public IHttpActionResult GetSensor(int id)
        {
            copysensor.Sensor sensor = db.Sensor.Find(id);
            if (sensor == null)
            {
                return NotFound();
            }

            return Ok(sensor);
        }

        // PUT: api/Sensores/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSensor(int id, copysensor.Sensor sensor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sensor.cd_sensor)
            {
                return BadRequest();
            }

            db.Entry(sensor).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SensorExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Sensores
        [ResponseType(typeof(copysensor.Sensor))]
        public IHttpActionResult PostSensor(copysensor.Sensor sensor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Sensor.Add(sensor);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = sensor.cd_sensor }, sensor);
        }

        // DELETE: api/Sensores/5
        [ResponseType(typeof(copysensor.Sensor))]
        public IHttpActionResult DeleteSensor(int id)
        {
            copysensor.Sensor sensor = db.Sensor.Find(id);
            if (sensor == null)
            {
                return NotFound();
            }

            db.Sensor.Remove(sensor);
            db.SaveChanges();

            return Ok(sensor);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SensorExists(int id)
        {
            return db.Sensor.Count(e => e.cd_sensor == id) > 0;
        }
    }
}