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
    public class UnidadesWebAPIController : ApiController
    {
        private SensorMedEntities db = new SensorMedEntities();

        // GET: api/UnidadesWebAPI/GetUnidade
        public IQueryable<Unidade> GetUnidade()
        {
            return db.Unidade;
        }

        // GET: api/UnidadesWebAPI/5
        [ResponseType(typeof(Unidade))]
        public IHttpActionResult GetUnidade(int id)
        {
            Unidade unidade = db.Unidade.Find(id);
            if (unidade == null)
            {
                return NotFound();
            }

            return Ok(unidade);
        }

        // PUT: api/UnidadesWebAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUnidade(int id, Unidade unidade)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != unidade.cd_unida)
            {
                return BadRequest();
            }

            db.Entry(unidade).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UnidadeExists(id))
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

        // POST: api/UnidadesWebAPI
        [ResponseType(typeof(Unidade))]
        public IHttpActionResult PostUnidade(Unidade unidade)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Unidade.Add(unidade);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = unidade.cd_unida }, unidade);
        }

        // DELETE: api/UnidadesWebAPI/5
        [ResponseType(typeof(Unidade))]
        public IHttpActionResult DeleteUnidade(int id)
        {
            Unidade unidade = db.Unidade.Find(id);
            if (unidade == null)
            {
                return NotFound();
            }

            db.Unidade.Remove(unidade);
            db.SaveChanges();

            return Ok(unidade);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UnidadeExists(int id)
        {
            return db.Unidade.Count(e => e.cd_unida == id) > 0;
        }
    }
}