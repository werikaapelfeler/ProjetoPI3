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
    public class BairroswebAPIController : ApiController
    {
        private SensorMedEntities db = new SensorMedEntities();

        // GET: api/BairroswebAPI
        public IQueryable<Bairro> GetBairro()
        {
            return db.Bairro;
        }

        // GET: api/BairroswebAPI/5
        [ResponseType(typeof(Bairro))]
        public IHttpActionResult GetBairro(int id)
        {
            Bairro bairro = db.Bairro.Find(id);
            if (bairro == null)
            {
                return NotFound();
            }

            return Ok(bairro);
        }

        // PUT: api/BairroswebAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBairro(int id, Bairro bairro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bairro.cd_bairro)
            {
                return BadRequest();
            }

            db.Entry(bairro).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BairroExists(id))
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

        // POST: api/BairroswebAPI
        [ResponseType(typeof(Bairro))]
        public IHttpActionResult PostBairro(Bairro bairro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Bairro.Add(bairro);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = bairro.cd_bairro }, bairro);
        }

        // DELETE: api/BairroswebAPI/5
        [ResponseType(typeof(Bairro))]
        public IHttpActionResult DeleteBairro(int id)
        {
            Bairro bairro = db.Bairro.Find(id);
            if (bairro == null)
            {
                return NotFound();
            }

            db.Bairro.Remove(bairro);
            db.SaveChanges();

            return Ok(bairro);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BairroExists(int id)
        {
            return db.Bairro.Count(e => e.cd_bairro == id) > 0;
        }
    }
}