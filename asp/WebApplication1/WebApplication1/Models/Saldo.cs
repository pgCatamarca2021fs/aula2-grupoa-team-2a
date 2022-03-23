using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Saldo
    {
        
             private int idCuenta ;
             private string moneda;
             private double importe;
             

        public int Idcuenta { get => idCuenta; set => idCuenta = value; }
        public string Moneda { get => moneda; set => moneda = value; }
        public double Importe { get => importe; set => importe = value; }
        


        public Saldo(int idCuenta, string moneda, double importe, int idMoneda)
        {
            this.idCuenta = idCuenta;
            this.moneda = moneda;
            this.importe = importe;
            
        }
        
        public Saldo()
        {
        }
    }
}