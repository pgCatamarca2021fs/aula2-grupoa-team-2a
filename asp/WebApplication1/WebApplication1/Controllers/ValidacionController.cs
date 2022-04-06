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
    public class ValidacionController : ApiController
    {
        // GET: api/Validacion
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Validacion/5
        public Persona Get(string cuil, string mail)
        {
            GestorPersona gestor = new GestorPersona();
            return gestor.validarPersona(cuil, mail);
        }


        // POST: api/Validacion
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Validacion/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Validacion/5
        public void Delete(int id)
        {
        }
    }
}
