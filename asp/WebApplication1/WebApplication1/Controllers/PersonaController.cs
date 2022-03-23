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
    public class PersonaController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Persona> Get()
        {
            GestorPersona gestor = new GestorPersona();
            return gestor.ListarPersonas();
        }

        // GET api/<controller>/5
        public Persona Get(string mail, string pass)
        {
            GestorPersona gestor = new GestorPersona();
            return gestor.ListarPersonasPorId(mail, pass);
        }


        // POST api/<controller>
        public void Post([FromBody] Persona value)
        {
            GestorPersona gestor = new GestorPersona();
            gestor.CrearPersona(value);
        }

        // PUT api/<controller>/5
        public void Put(long Id, [FromBody] Persona persona)
        {
            GestorPersona gestor = new GestorPersona();
            gestor.EditarPersona(persona);

            /*Persona usuario = new Persona();
            if (usuario.Id == id)
            {
                GestorPersona gestor = new GestorPersona();
                gestor.EditarPersona(persona);
            } else {
                Ok(new { message = "no encontrado" });
            }*/


            //gestor.EditarPersona(value);
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            GestorPersona gestor = new GestorPersona();
            //gestor.EliminarPersona();
        }
    }

}