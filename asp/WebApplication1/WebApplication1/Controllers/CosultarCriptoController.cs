using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CosultarCriptoController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Cripto> Get()
        {
            GestorCripto gestorCripto = new GestorCripto();
            return gestorCripto.ConsultarCripto();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody] Cripto value)
        {
            GestorCripto gestorCripto = new GestorCripto();
            gestorCripto.AltaCripto(value);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] Cripto value)
        {
            GestorCripto gestorCripto = new GestorCripto();
            gestorCripto.ModificaCripto(id,value);
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}