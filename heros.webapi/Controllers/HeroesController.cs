using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Heroes.Model;
using Microsoft.AspNetCore.Mvc;

namespace heros.webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeroesController : ControllerBase
    {
        private static List<Hero> _heroes { get; set; }
        public static List<Hero> Heroes {
            get
            {
                if(_heroes == null || _heroes.Count() == 0)
                {
                    Hero hero1 = new Hero();
                    hero1.Id = "1";
                    hero1.Name = "Kevin Sun";

                    Hero hero2 = new Hero();
                    hero2.Id = "2";
                    hero2.Name = "Kris K";

                    Hero hero3 = new Hero();
                    hero3.Id = "3";
                    hero3.Name = "Jon F";

                    _heroes = new List<Hero>();
                    _heroes.Add(hero1);
                    _heroes.Add(hero2);
                    _heroes.Add(hero3);
                }

                return _heroes;
            }
        }



        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Hero>> Get()
        {
            return Heroes;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Hero> Get(string id)
        {
            var hero = Heroes.FirstOrDefault(p => p.Id == id);
            if(hero != null)
            {
                return hero;
            }
            else
            {
                return null;
            }
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Hero value)
        {
            if(value != null && value.Id != null)
            {
                var hero = Heroes.FirstOrDefault(p => p.Id == value.Id);
                if (hero != null)
                {
                    hero.Name = value.Name;
                }
                else
                {
                    Heroes.Add(value);
                }
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            var hero = Heroes.FirstOrDefault(p => p.Id == id);
            if (hero != null)
            {
                Heroes.Remove(hero);
            }
        }
    }
}
