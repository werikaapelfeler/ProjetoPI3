using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web;
using System.Web.Http.Description;
using SensorMed.Models;
using System.IO;
using System.Data.Entity.Validation;
using System.Diagnostics;
using copySensor = SensorMed.Models.Sensor;


namespace FileUploader.Controllers.Sensor
{


    public class FileUploaderController : ApiController
    {
        private SensorMedEntities db = new SensorMedEntities();
        String valor;
        int codigoSensor;
        int SensorDado;
        String dtDado;


        [HttpPost]
        public HttpResponseMessage AttachFile()
        {
            HttpResponseMessage result = null;
            var httpRequest = HttpContext.Current.Request;
            if (httpRequest.Files.Count > 0)
            {
                var docfiles = new List<string>();
                foreach (string file in httpRequest.Files)
                {
                    var postedFile = httpRequest.Files[file];
                    string filePath = Path.GetFullPath(Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.InternetCache), postedFile.FileName));
                    postedFile.SaveAs(filePath);

                    docfiles.Add(filePath);
                }
                result = Request.CreateResponse(HttpStatusCode.Created, docfiles);
            }
            else
            {
                result = Request.CreateResponse(HttpStatusCode.BadRequest);
            }



            return result;
        }

        [HttpGet]
        public HttpResponseMessage DownLoadFile(string FileName, string fileType)
        {
            List<String> valores = new List<string>();

            Byte[] bytes = null;
            if (FileName != null)
            {
                string filePath = Path.GetFullPath(Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.InternetCache), FileName));
                FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read);
                BinaryReader br = new BinaryReader(fs);
                bytes = br.ReadBytes((Int32)fs.Length);

                br.Close();
                fs.Close();
            }

            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            System.IO.MemoryStream stream = new MemoryStream(bytes);
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentType = new MediaTypeHeaderValue(fileType);
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
            {
                FileName = FileName
            };

            return (result);
        }

        [HttpGet]
        public void GravarDados(string FileName)
        {

            StreamReader arquivo;

            if (FileName != null)
            {
                string filePath = Path.GetFullPath(Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.InternetCache), FileName));
                FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read);
                arquivo = File.OpenText(filePath);
                while (arquivo.EndOfStream != true)
                {
                    string linha = arquivo.ReadLine();
                    string[] campos = linha.Split(';');

                    string valor1 = campos[0];
                    string valor2 = campos[1];
                    string valor3 = campos[2];

                    Dados dados = new Dados();

                    DateTime dt = Convert.ToDateTime(retornaData(valor2));
                    Double d = Convert.ToDouble(valor3);
                    dados.dt_medicao_dados = dt;
                    dados.vl_medicao_dados = d;

                    GetTag(valor1);

                    if ((valor == null) && (codigoSensor == 0))
                    { 
                        copySensor addSensor = new copySensor();

                        addSensor.tag_sensor = valor1;
                        //addSensor.cd_unida = 1;
                        //addSensor.cd_tpsensor = 1;
                        //addSensor.cd_ender = 10;

                        PostSensor(addSensor);
                        GetTag(valor1);

                    }

                    dados.cd_sensor = codigoSensor;
                    GetnaoRepetir(codigoSensor, dt);

                    if ((SensorDado == 0) && (dtDado == null))
                    {
                        PostDados(dados);

                    }
                }
                arquivo.Close();
                filePath = null;
            }

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
                if (DadosExists(dados.id_dados))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = dados.id_dados }, dados);
        } 

        private bool DadosExists(int id)
        {
            return db.Dados.Count(e => e.id_dados == id) > 0;
        }

    public String retornaData(String data)
        {
            //if (data.Length== 14)
            // {
            data = string.Format("{0}/{1}/{2}",
            data.Substring(0, 4),
            data.Substring(4, 2),
            data.Substring(6));
            //}

            return data;
        }

        // GET: api/SensorWebAPI
        public IQueryable<copySensor> GetDadosSensor()
        {
            return db.Sensor;
        }

        // GET: api/SensorWebAPI/5
        [ResponseType(typeof(copySensor))]
        public IHttpActionResult GetSensor(string tag)
        {
            copySensor sensor = db.Sensor.Find(tag);
            if (sensor == null)
            {
                return NotFound();
            }

            return Ok(sensor);
        }


        public IHttpActionResult GetTag(string id)
        {
            var tagSensor = db.Sensor.FirstOrDefault((p) => p.tag_sensor == id);
            if (tagSensor == null)
            {
                valor = null;
                codigoSensor = 0;
                return NotFound();
            }

            valor = tagSensor.tag_sensor;
            codigoSensor = tagSensor.cd_sensor;
            return Ok(tagSensor);
        }

        public IHttpActionResult GetnaoRepetir(int id, DateTime dt)
        {
            var tagSensor = db.Dados.FirstOrDefault((p) => p.cd_sensor == id);
            var data = db.Dados.FirstOrDefault((p) => p.dt_medicao_dados == dt);

            if ((tagSensor == null) || (data == null))
            {

                SensorDado = 0;
                dtDado = null;
                return NotFound();
            }

            SensorDado = tagSensor.cd_sensor;
            dtDado = Convert.ToString(data.dt_medicao_dados);
            return Ok(tagSensor);
        }

        // POST: api/SensorWebAPI
        [ResponseType(typeof(copySensor))]
        public IHttpActionResult PostSensor(copySensor sensor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Sensor.Add(sensor);
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException) 
            {
                if (SensorExists(sensor.cd_sensor))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = sensor.cd_sensor }, sensor);
        }

        private bool SensorExists(int id)
        {
            return db.Sensor.Count(e => e.cd_sensor == id) > 0;
        }


    }
}