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
    public class GrunisWebAPIController : ApiController
    {
        private SensorMedEntities db = new SensorMedEntities();

        // GET: api/GrunisWebAPI/GetGruni
        public IQueryable<Gruni> GetGruni()
        {
            return db.Gruni;
        }

        // GET: api/GrunisWebAPI/5
        [ResponseType(typeof(Gruni))]
        public IHttpActionResult GetGruni(int id)
        {
            Gruni gruni = db.Gruni.Find(id);
            if (gruni == null)
            {
                return NotFound();
            }

            return Ok(gruni);
        }

        // PUT: api/GrunisWebAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutGruni(int id, Gruni gruni)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != gruni.cd_gruni)
            {
                return BadRequest();
            }

            db.Entry(gruni).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GruniExists(id))
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

        // POST: api/GrunisWebAPI
        [ResponseType(typeof(Gruni))]
        public IHttpActionResult PostGruni(Gruni gruni)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Gruni.Add(gruni);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = gruni.cd_gruni }, gruni);
        }

        // DELETE: api/GrunisWebAPI/5
        [ResponseType(typeof(Gruni))]
        public IHttpActionResult DeleteGruni(int id)
        {
            Gruni gruni = db.Gruni.Find(id);
            if (gruni == null)
            {
                return NotFound();
            }

            db.Gruni.Remove(gruni);
            db.SaveChanges();

            return Ok(gruni);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GruniExists(int id)
        {
            return db.Gruni.Count(e => e.cd_gruni == id) > 0;
        }
    }
}