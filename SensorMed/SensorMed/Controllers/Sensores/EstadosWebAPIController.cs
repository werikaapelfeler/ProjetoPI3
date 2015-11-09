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
    public class EstadosWebAPIController : ApiController
    {
        private SensorMedEntities db = new SensorMedEntities();

        // GET: api/EstadosWebAPI
        public IQueryable<Estado> GetEstado()
        {
            return db.Estado;
        }

        // GET: api/EstadosWebAPI/5
        [ResponseType(typeof(Estado))]
        public IHttpActionResult GetEstado(int id)
        {
            Estado estado = db.Estado.Find(id);
            if (estado == null)
            {
                return NotFound();
            }

            return Ok(estado);
        }

        // PUT: api/EstadosWebAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEstado(int id, Estado estado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != estado.cd_estado)
            {
                return BadRequest();
            }

            db.Entry(estado).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EstadoExists(id))
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

        // POST: api/EstadosWebAPI
        [ResponseType(typeof(Estado))]
        public IHttpActionResult PostEstado(Estado estado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Estado.Add(estado);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = estado.cd_estado }, estado);
        }

        // DELETE: api/EstadosWebAPI/5
        [ResponseType(typeof(Estado))]
        public IHttpActionResult DeleteEstado(int id)
        {
            Estado estado = db.Estado.Find(id);
            if (estado == null)
            {
                return NotFound();
            }

            db.Estado.Remove(estado);
            db.SaveChanges();

            return Ok(estado);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EstadoExists(int id)
        {
            return db.Estado.Count(e => e.cd_estado == id) > 0;
        }
    }
}