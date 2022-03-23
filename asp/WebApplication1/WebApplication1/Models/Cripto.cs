using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Cripto
    {
        private int idMoneda;
        private string nombre;
        private string descripcion;

        

        public int IdMoneda { get => idMoneda; set => idMoneda = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Descripcion { get => descripcion; set => descripcion = value; }
        
        
        public Cripto(int idMoneda, string nombre, string descripcion)
        {
            this.idMoneda = idMoneda;
            this.nombre = nombre;
            this.descripcion = descripcion;
        }

        public Cripto()
        {
        }
    }
}