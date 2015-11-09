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
    public class MicroRegioesWebAPIController : ApiController
    {
        private SensorMedEntities db = new SensorMedEntities();

        // GET: api/MicroRegioesWebAPI
        public IQueryable<MicroRegiao> GetMicroRegiao()
        {
            return db.MicroRegiao;
        }

        // GET: api/MicroRegioesWebAPI/5
        [ResponseType(typeof(MicroRegiao))]
        public IHttpActionResult GetMicroRegiao(int id)
        {
            MicroRegiao microRegiao = db.MicroRegiao.Find(id);
            if (microRegiao == null)
            {
                return NotFound();
            }

            return Ok(microRegiao);
        }

        // PUT: api/MicroRegioesWebAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutMicroRegiao(int id, MicroRegiao microRegiao)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != microRegiao.cd_microregiao)
            {
                return BadRequest();
            }

            db.Entry(microRegiao).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MicroRegiaoExists(id))
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

        // POST: api/MicroRegioesWebAPI
        [ResponseType(typeof(MicroRegiao))]
        public IHttpActionResult PostMicroRegiao(MicroRegiao microRegiao)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.MicroRegiao.Add(microRegiao);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = microRegiao.cd_microregiao }, microRegiao);
        }

        // DELETE: api/MicroRegioesWebAPI/5
        [ResponseType(typeof(MicroRegiao))]
        public IHttpActionResult DeleteMicroRegiao(int id)
        {
            MicroRegiao microRegiao = db.MicroRegiao.Find(id);
            if (microRegiao == null)
            {
                return NotFound();
            }

            db.MicroRegiao.Remove(microRegiao);
            db.SaveChanges();

            return Ok(microRegiao);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MicroRegiaoExists(int id)
        {
            return db.MicroRegiao.Count(e => e.cd_microregiao == id) > 0;
        }
    }
}