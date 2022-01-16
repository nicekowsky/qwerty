using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Kolokwium.Api.Models;
using System;

namespace Kolokwium.Api.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class AutorzyController : ControllerBase {
        private ApplicationDbContext dbContext;

        public AutorzyController(ApplicationDbContext dbContext) {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public async Task<IActionResult> wyswietlAutorow() {
            var list = await this.dbContext.Autorzy.ToListAsync();
            return Ok(list);
        }

        [HttpGet("{id}", Name ="wyswietlAutora")]
        public async Task<IActionResult> wyswietlAutora(int id) {
            var author = await dbContext.Autorzy.SingleOrDefaultAsync(a => a.Id == id);
            if(author == null) {
                return NotFound($"Nie znalazłem autora o id = {id}");
            } else {
                return Ok(author);
            }
        }

        [HttpPost]
        public async Task<IActionResult> dodajAutora([FromBody] Autor autor) {
            if(!ModelState.IsValid) {
                return BadRequest();
            }
            try {
                dbContext.Autorzy.Add(autor);
                await dbContext.SaveChangesAsync();
                return CreatedAtAction("wyswietlAutora", new {id = autor.Id}, autor);
            }
            catch(Exception e) {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}", Name ="edytujAutora")]
        public async Task<IActionResult> edytujAutora(int id, [FromBody] Autor autor) {
            if(!ModelState.IsValid) return BadRequest();
            try {
                int count = await dbContext.Autorzy.CountAsync(a=>a.Id == id);
                if(count == 0) return NotFound($"Nie znalazłem autora o id = {id}");
                var entity = dbContext.Attach(autor);
                entity.State = EntityState.Modified;
                await dbContext.SaveChangesAsync();
                return StatusCode(200);
            }
            catch(Exception e) {
                return BadRequest(e);
            }
        }
    }

}