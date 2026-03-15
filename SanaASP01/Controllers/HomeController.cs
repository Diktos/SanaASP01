using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SanaASP01.Models;

namespace SanaASP01.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;


        // 1 стор≥нка
        public IActionResult Index()
        {
            return View();
        }
        // 2 стор≥нка
        public IActionResult Privacy()
        {
            return View();
        }
        // 3 стор≥нка
        public IActionResult Info()
        {
            return View();
        }
        // 4 стор≥нка (‘орма реЇстрац≥њ у клуб)
        [HttpGet]
        public IActionResult JoinClub()
        {
            return View();
        }

        [HttpPost]
        public IActionResult JoinClub(Fisherman model)
        {
            if (!ModelState.IsValid)
            {
                // якщо помилка - залишаЇмо на стор≥нц≥, дан≥ збер≥гаютьс€
                return View(model);
            }
            // якщо все ч≥тко - перекидаЇмо на стор≥нку усп≥ху
            return View("Info", model);
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
