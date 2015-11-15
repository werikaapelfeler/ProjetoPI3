using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SensorMed.Controllers
{
    public class SensorListagemController : Controller
    {
        // GET: SensorListagem
        public ActionResult Index()
        {
            ViewBag.Title = "Sensores";
            return View();
        }
    }
}