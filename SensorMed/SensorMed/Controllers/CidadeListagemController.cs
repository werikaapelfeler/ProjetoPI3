using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SensorMed.Controllers
{
    public class CidadeListagemController : Controller
    {
        // GET: CidadeListagem
        public ActionResult Index()
        {
            ViewBag.Title = "Cidades";
            return View();
        }
    }
}