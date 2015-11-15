using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SensorMed.Controllers
{
    public class PaisListagemController : Controller
    {
        // GET: PaisListagem
        public ActionResult Index()
        {
            ViewBag.Title = "Pais";
            return View();
        }
    }
}