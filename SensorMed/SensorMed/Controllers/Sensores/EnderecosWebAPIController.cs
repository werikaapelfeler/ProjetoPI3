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
    public class EnderecosWebAPIController : ApiController
    {
        private SensorMedEntities db = new SensorMedEntities();

        // GET: api/EnderecosWebAPI
        public IQueryable<Endereco> GetEndereco()
        {
            return db.Endereco;
        }

        // GET: api/EnderecosWebAPI/5
        [ResponseType(typeof(Endereco))]
        public IHttpActionResult GetEndereco(int id)
        {
            Endereco endereco = db.Endereco.Find(id);
            if (endereco == null)
            {
                return NotFound();
            }

            return Ok(endereco);
        }

        // PUT: api/EnderecosWebAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEndereco(int id, Endereco endereco)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != endereco.cd_ender)
            {
                return BadRequest();
            }

            db.Entry(endereco).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EnderecoExists(id))
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

        // POST: api/EnderecosWebAPI
        [ResponseType(typeof(Endereco))]
        public IHttpActionResult PostEndereco(Endereco endereco)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Endereco.Add(endereco);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = endereco.cd_ender }, endereco);
        }

        // DELETE: api/EnderecosWebAPI/5
        [ResponseType(typeof(Endereco))]
        public IHttpActionResult DeleteEndereco(int id)
        {
            Endereco endereco = db.Endereco.Find(id);
            if (endereco == null)
            {
                return NotFound();
            }

            db.Endereco.Remove(endereco);
            db.SaveChanges();

            return Ok(endereco);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EnderecoExists(int id)
        {
            return db.Endereco.Count(e => e.cd_ender == id) > 0;
        }
    }
}