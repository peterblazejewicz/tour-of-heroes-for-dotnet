using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using TourOfHeroes.Service.Model.Heroes;

namespace TourOfHeroes.Service.Controllers
{
    [Route("api/heroes")]
    public class HeroesController : Controller
    {
        public HeroesController(IHostingEnvironment env)
        {
            HostingEnvironment = env;
        }
        // GET api/heroes
        [HttpGet]
        public IActionResult Get()
        {
            string path = Path.Combine(HostingEnvironment.WebRootPath, "data", "heroes.json");
            if (System.IO.File.Exists(path) == false)
            {
                return this.NotFound("Can't find backing data file");
            }
            IEnumerable<Hero> heroes = JsonConvert.DeserializeObject<IEnumerable<Hero>>(System.IO.File.ReadAllText(path));
            return this.Ok(heroes);
        }

        // GET api/heroes/5
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            string path = Path.Combine(HostingEnvironment.WebRootPath, "data", "heroes.json");
            if (System.IO.File.Exists(path) == false)
            {
                return this.NotFound("Can't find backing data file");
            }
            IEnumerable<Hero> heroes = JsonConvert.DeserializeObject<IEnumerable<Hero>>(System.IO.File.ReadAllText(path));
            Hero hero = heroes.Where(h => h.Id == id)
                .FirstOrDefault<Hero>();
            if (hero == null)
            {
                return this.NotFound($"Can't find Hero with id: {id}");
            }
            return this.Ok(hero);
        }

        private IHostingEnvironment HostingEnvironment { get; set; }

    }
}
