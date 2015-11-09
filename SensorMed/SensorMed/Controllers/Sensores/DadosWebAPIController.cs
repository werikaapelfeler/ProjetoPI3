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
    public class DadosWebAPIController : ApiController
    {
        private SensorMedEntities db = new SensorMedEntities();

        // GET: api/DadosWebAPI
        public IQueryable<Dados> GetDados()
        {
            return db.Dados;
        }

        // GET: api/DadosWebAPI/5
        [ResponseType(typeof(Dados))]
        public IHttpActionResult GetDados(DateTime id)
        {
            Dados dados = db.Dados.Find(id);
            if (dados == null)
            {
                return NotFound();
            }

            return Ok(dados);
        }

        // PUT: api/DadosWebAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDados(DateTime id, Dados dados)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != dados.dt_medicao_dados)
            {
                return BadRequest();
            }

            db.Entry(dados).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DadosExists(id))
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

        // POST: api/DadosWebAPI
        [ResponseType(typeof(Dados))]
        public IHttpActionResult PostDados(Dados dados)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Dados.Add(dados);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (DadosExists(dados.dt_medicao_dados))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = dados.dt_medicao_dados }, dados);
        }

        // DELETE: api/DadosWebAPI/5
        [ResponseType(typeof(Dados))]
        public IHttpActionResult DeleteDados(DateTime id)
        {
            Dados dados = db.Dados.Find(id);
            if (dados == null)
            {
                return NotFound();
            }

            db.Dados.Remove(dados);
            db.SaveChanges();

            return Ok(dados);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DadosExists(DateTime id)
        {
            return db.Dados.Count(e => e.dt_medicao_dados == id) > 0;
        }
    }
}