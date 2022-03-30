using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Persona
    {
        //atributos (Caraterísticas)
        private long id;
        private string cuil;
        private string nombre;
        private DateTime fnac;
        private string domicilio;
        //private string domicilio2;
        private int idProvincia;
        private string pais;
        private string tipo;
        private string estado;
        private DateTime fechaAlta;
        private string cbu;
        private string banco;
        private string dniFrente;
        private string dniDorso;
        private string pass;
        private string mail;
        private string telefono;
        private long idCuenta;

        //Propiedades Getters y Setters
        public long Id { get => id; set => id = value; }
        public string Cuil { get => cuil; set => cuil = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public DateTime Fnac { get => fnac; set => fnac = value; }
        public string Domicilio { get => domicilio; set => domicilio = value; }
        public int IdProvincia { get => idProvincia; set => idProvincia = value; }
        public string Pais { get => pais; set => pais = value; }
        public string Tipo { get => tipo; set => tipo = value; }
        public string Estado { get => estado; set => estado = value; }
        public DateTime FechaAlta { get => fechaAlta; set => fechaAlta = value; }
        public string Cbu { get => cbu; set => cbu = value; }
        public string Banco { get => banco; set => banco = value; }
        public string DniFrente { get => dniFrente; set => dniFrente = value; }
        public string DniDorso { get => dniDorso; set => dniDorso = value; }
        public string Pass { get => pass; set => pass = value; }
        public string Mail { get => mail; set => mail = value; }
        public string Telefono { get => telefono; set => telefono = value; }
        public long IdCuenta{ get => idCuenta; set => idCuenta = value; }

        // Constructores
        public Persona(long id, string nombre, string cuil, DateTime fnac, string domicilio, int idProvincia
        , string pais, string tipo, string estado, DateTime fechaAlta, string cbu, string banco, string dniFrente
        , string dniDorso, string pass, string mail, string telefono, long idCuenta)
        {
            this.id = id;
            this.cuil = cuil;
            this.nombre = nombre;
            this.fnac = fnac;
            this.domicilio = domicilio;
            this.idProvincia = idProvincia;
            this.pais = pais;
            this.tipo = tipo;
            this.estado = estado;
            this.fechaAlta = fechaAlta;
            this.cbu = cbu;
            this.banco = banco;
            this.dniFrente = dniFrente;
            this.dniDorso = dniDorso;
            this.pass = pass;
            this.mail = mail;
            this.telefono = telefono; ;
            this.idCuenta = idCuenta;
        }

        // Métodos
        public Persona()
        {

        }

        public void saludar()
        {

        }
    }
}