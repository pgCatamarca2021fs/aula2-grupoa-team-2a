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
    public class ConsultarSaldoCriptoController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<CuentaCripto> Get()
        {
            GestorCompra gestorCompra = new GestorCompra();
            return gestorCompra.ConsultarMovimientos();
        }

        


        // GET api/<controller>/5
        public Saldo Get(int idCuenta, string moneda)
        {
            GestorCompra gestorCompra = new GestorCompra();
            
            return gestorCompra.ConsultarSaldo(idCuenta,  moneda);
            
        }

        // POST api/<controller>
        public void Post([FromBody] CuentaCripto cuentaCripto)
        {
            GestorCompra gestorCompra = new GestorCompra();
            gestorCompra.AltaMovimiento(cuentaCripto);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}