﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SensorMed.Controllers
{
    public class EstadoListagemController : Controller
    {
        // GET: EstadoListagem
        public ActionResult Index()
        {
            ViewBag.Title = "Estados";
            return View();
        }
    }
}