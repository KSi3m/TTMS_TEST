using Microsoft.AspNetCore.Mvc;
using TTMS.Dtos;
using TTMS.Entities;
using TTMS.Repositories;

namespace TTMS.Controllers
{
    [ApiController]
    [Route("/api/telephones/")]
    public class TelephoneController : ControllerBase
    {

        private readonly ITelephoneRepository _telephoneRepository;

        public TelephoneController(ITelephoneRepository telephoneRepository)
        {
            _telephoneRepository = telephoneRepository;
        }

        [HttpGet]
        public ActionResult<List<Telephone>> GetTelephones()
        {
            return Ok(_telephoneRepository.GetTelephones());
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<Telephone> GetTelephoneById(int id)
        {
            var tel = _telephoneRepository.GetTelephone(id);
            if (tel != null) return Ok(tel);
            return NotFound();
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult DeleteTelephone(int id)
        {
            var res = _telephoneRepository.DeleteTelephone(id);
            if (res) return NoContent();
            return BadRequest();
        }

        [HttpPost]
        public ActionResult CreateTelephone(CreateTelephoneDto telDto)
        {
            var res = _telephoneRepository.CreateTelephone(telDto);
            if (res) return StatusCode(201);
            return BadRequest();
        }

        [HttpPut]
        [Route("{id}")]
        public ActionResult UpdateTelephone(int id, CreateTelephoneDto telDto)
        {
            var res = _telephoneRepository.UpdateTelephone(id,telDto);
            if (res) return NoContent();
            return BadRequest();
        }

    }
}
