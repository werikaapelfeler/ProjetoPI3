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
using System.Data.Entity.Validation;
using System.Diagnostics;

namespace SensorMed.Controllers.Sensor
{
    public class PaisWebAPIController : ApiController
    {
        private SensorMedEntities db = new SensorMedEntities();

        // GET: api/PaisWebAPI/GetPais
        public IQueryable<Pais> GetPais()
        {
            return db.Pais;
        }

        // GET: api/PaisWebAPI/5
        [ResponseType(typeof(Pais))]
        public IHttpActionResult GetPais(int id)
        {
            Pais pais = db.Pais.Find(id);
            if (pais == null)
            {
                return NotFound();
            }

            return Ok(pais);
        }

        // PUT: api/PaisWebAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPais(int id, Pais pais)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pais.cd_pais)
            {
                return BadRequest();
            }

            db.Entry(pais).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaisExists(id))
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

        // POST: api/PaisWebAPI
        [ResponseType(typeof(Pais))]
        public IHttpActionResult PostPais(Pais pais)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Pais.Add(pais);
            try
            {
                db.SaveChanges();
            }
            catch (DbEntityValidationException db)
            {
                foreach (var validationErrors in db.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        Trace.TraceInformation("Property: {0} Error: {1}",
                                                validationError.PropertyName,
                                                validationError.ErrorMessage);
                    }
                }
            } 

            return CreatedAtRoute("DefaultApi", new { id = pais.cd_pais }, pais);
        }

        // DELETE: api/PaisWebAPI/5
        [ResponseType(typeof(Pais))]
        public IHttpActionResult DeletePais(int id)
        {
            Pais pais = db.Pais.Find(id);
            if (pais == null)
            {
                return NotFound();
            }

            db.Pais.Remove(pais);
            try
            {
                db.SaveChanges();
            }
            catch (DbEntityValidationException db)
            {
                foreach (var validationErrors in db.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        Trace.TraceInformation("Property: {0} Error: {1}",
                                                validationError.PropertyName,
                                                validationError.ErrorMessage);
                    }
                }
            }

            return Ok(pais);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PaisExists(int id)
        {
            return db.Pais.Count(e => e.cd_pais == id) > 0;
        }
    }
}