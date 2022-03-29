using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class SaldosTodos
    {

        private int idCuenta;
        private string nombre;
        private decimal saldo;

        public SaldosTodos()
        {
        }

        public SaldosTodos(int idCuenta, string nombre, decimal saldo)
        {
            this.idCuenta = idCuenta;
            this.nombre = nombre;
            this.saldo = saldo;
        }

        public int IdCuenta { get => idCuenta; set => idCuenta = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public decimal Saldo { get => saldo; set => saldo = value; }
    }
}