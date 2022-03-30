using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class ConsultaMovimiento
    {
        private int idCuenta;
        private DateTime fecha;
        private decimal cotizacion;
        private decimal impoOrigen;
        private string monedaOrigen;
        private decimal impoDestino;
        private string monedaDest;


        public ConsultaMovimiento()
        {
        }

        public ConsultaMovimiento(int idCuenta, DateTime fecha, decimal cotizacion, decimal impoOrigen, string monedaOrigen, decimal impoDestino, string monedaDest)
        {
            this.idCuenta = idCuenta;
            this.fecha = fecha;
            this.cotizacion = cotizacion;
            this.impoOrigen = impoOrigen;
            this.monedaOrigen = monedaOrigen;
            this.impoDestino = impoDestino;
            this.monedaDest = monedaDest;
        }

        public int IdCuenta { get => idCuenta; set => idCuenta = value; }
        public DateTime Fecha { get => fecha; set => fecha = value; }
        public decimal Cotizacion { get => cotizacion; set => cotizacion = value; }
        public decimal ImpoOrigen { get => impoOrigen; set => impoOrigen = value; }
        public string MonedaOrigen { get => monedaOrigen; set => monedaOrigen = value; }
        public decimal ImpoDestino { get => impoDestino; set => impoDestino = value; }
        public string MonedaDest { get => monedaDest; set => monedaDest = value; }
    }
}