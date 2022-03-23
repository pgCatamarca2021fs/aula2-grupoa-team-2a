using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class CuentaCripto
    {
        private int idOperacion;
        private int idcuenta;
        private int tipo;
        private DateTime fecha;
        private double cotizacion;
        private double impoOrigen;
        private int idMonedaOrigen;
        private double impoDestino;
        private int idMonedaDestino;
        private int estado;
        private int nip ;

        

        public int IdOperacion { get => idOperacion; set => idOperacion = value; }
        public int Idcuenta { get => idcuenta; set => idcuenta = value; }
        public int Tipo { get => tipo; set => tipo = value; }
        public DateTime Fecha { get => fecha; set => fecha = value; }
        public double Cotizacion { get => cotizacion; set => cotizacion = value; }
        public double ImpoOrigen { get => impoOrigen; set => impoOrigen = value; }
        public int IdMonedaOrigen { get => idMonedaOrigen; set => idMonedaOrigen = value; }
        public double ImpoDestino { get => impoDestino; set => impoDestino = value; }
        public int IdMonedaDestino { get => idMonedaDestino; set => idMonedaDestino = value; }
        public int Estado { get => estado; set => estado = value; }
        public int Nip { get => nip; set => nip = value; }
        
        
        public CuentaCripto(int idOperacion, int idcuenta, int tipo, DateTime fecha, double cotizacion, double impoOrigen, int idMonedaOrigen, double impoDestino, int idMonedaDestino, int estado, int nip)
        {
            this.idOperacion = idOperacion;
            this.idcuenta = idcuenta;
            this.tipo = tipo;
            this.fecha = fecha;
            this.cotizacion = cotizacion;
            this.impoOrigen = impoOrigen;
            this.idMonedaOrigen = idMonedaOrigen;
            this.impoDestino = impoDestino;
            this.idMonedaDestino = idMonedaDestino;
            this.estado = estado;
            this.nip = nip;
        }

        public CuentaCripto()
        {
        }
    }
}