using Microsoft.AspNetCore.Mvc;

namespace YourAppNamespace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet("welcome")]
        public IActionResult GetWelcome()
        {
            return Ok("Running the backend API!");
        }
    }
}
