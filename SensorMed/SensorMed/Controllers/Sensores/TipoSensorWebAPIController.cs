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
using SensorMed.Models;

namespace SensorMed.Controllers.Sensor
{
    public class TipoSensorWebAPIController : ApiController
    {
        private SensorMedEntities db = new SensorMedEntities();

        // GET: api/TipoSensorWebAPI/GetTipoSensor
        public IQueryable<TipoSensor> GetTipoSensor()
        {
            return db.TipoSensor;
        }

        // GET: api/TipoSensorWebAPI/5
        [ResponseType(typeof(TipoSensor))]
        public IHttpActionResult GetTipoSensor(int id)
        {
            TipoSensor tipoSensor = db.TipoSensor.Find(id);
            if (tipoSensor == null)
            {
                return NotFound();
            }

            return Ok(tipoSensor);
        }

        // PUT: api/TipoSensorWebAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTipoSensor(int id, TipoSensor tipoSensor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tipoSensor.cd_tpsensor)
            {
                return BadRequest();
            }

            db.Entry(tipoSensor).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoSensorExists(id))
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

        // POST: api/TipoSensorWebAPI
        [ResponseType(typeof(TipoSensor))]
        public IHttpActionResult PostTipoSensor(TipoSensor tipoSensor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TipoSensor.Add(tipoSensor);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tipoSensor.cd_tpsensor }, tipoSensor);
        }

        // DELETE: api/TipoSensorWebAPI/5
        [ResponseType(typeof(TipoSensor))]
        public IHttpActionResult DeleteTipoSensor(int id)
        {
            TipoSensor tipoSensor = db.TipoSensor.Find(id);
            if (tipoSensor == null)
            {
                return NotFound();
            }

            db.TipoSensor.Remove(tipoSensor);
            db.SaveChanges();

            return Ok(tipoSensor);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TipoSensorExists(int id)
        {
            return db.TipoSensor.Count(e => e.cd_tpsensor == id) > 0;
        }
    }
}