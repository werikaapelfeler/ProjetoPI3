using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SensorMed.Controllers
{
    public class TipoSensorListagemController : Controller
    {
        // GET: TipoSensorListagem
        public ActionResult Index()
        {
            ViewBag.Title = "Tipos de Sensores";
            return View();
        }
    }
}