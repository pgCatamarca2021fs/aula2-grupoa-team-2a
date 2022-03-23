using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Persona
    {  // atributos (campo de bd)
        int id;
        string nombre;
        string apellido;
        int dni;
        DateTime fechaNacimiento;

        // propiedades getter y setter 
        public int Id { get => id; set => id = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellido { get => apellido; set => apellido = value; }
        public int Dni { get => dni; set => dni = value; }
        public DateTime FechaNacimiento { get => fechaNacimiento; set => fechaNacimiento = value; }

        // contructores

        public Persona(int id, string nombre, string apellido, int dni, DateTime fechaNacimiento)
        {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.dni = dni;
            this.fechaNacimiento = fechaNacimiento;
        }

        // metodos (comportamientos)
         public Persona()
        {

        }
        
    }
}