using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace Journal.Controllers
{
    public class NewEntry : Controller
    {
        // every public method is capable of being an endpoint
        // GET: /newentry/

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Add()
        {
            return View();
        }
        // 
        // GET: /newentry/Welcome/ 

        public string Welcome()
        {
            return "This is the Welcome action method...";
        }
    }
}