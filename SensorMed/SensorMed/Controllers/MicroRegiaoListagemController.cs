using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SensorMed.Controllers
{
    public class MicroRegiaoListagemController : Controller
    {
        // GET: MicroRegiaoListagem
        public ActionResult Index()
        {
            ViewBag.Title = "Micros Regiões";
            return View();
        }
    }
}