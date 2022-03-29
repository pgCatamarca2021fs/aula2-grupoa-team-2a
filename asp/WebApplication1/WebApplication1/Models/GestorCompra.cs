using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace WebApplication1.Models
{
    public class GestorCompra
    {
        string conexionString = ConfigurationManager.ConnectionStrings["myDB"].ToString();

        // consultar Movimientos
        public List<CuentaCripto> ConsultarMovimientos()
        {
            List<CuentaCripto> verMovimientos = new List<CuentaCripto>();
            using (SqlConnection connection = new SqlConnection(this.conexionString)) 
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = "consultaMovimiento";
                command.CommandType = CommandType.StoredProcedure;
                //command.Parameters.Add(new SqlParameter("@idCuenta", saldo.Idcuenta));
                //command.Parameters.Add(new SqlParameter("@monea", saldo.Moneda));

                // se usa datareader solo para el select

                SqlDataReader dataReader = command.ExecuteReader();
                //dataReader.Read();
                while (dataReader.Read())
                {
                    CuentaCripto cuenta = new CuentaCripto();
                    cuenta.IdOperacion = dataReader.GetInt32(0);
                    cuenta.Idcuenta = dataReader.GetInt32(1);
                    cuenta.Tipo = dataReader.GetInt32(2);
                    cuenta.Fecha = dataReader.GetDateTime(3);
                    cuenta.Cotizacion = dataReader.GetInt32(4);
                    cuenta.ImpoOrigen = dataReader.GetInt32(5);
                    cuenta.IdMonedaOrigen = dataReader.GetInt32(6);
                    cuenta.ImpoDestino = dataReader.GetInt32(7);
                    cuenta.IdMonedaDestino = dataReader.GetInt32(8);
                    cuenta.Estado = dataReader.GetInt32(9);
                    cuenta.Nip = dataReader.GetInt32(10);


                    verMovimientos.Add(cuenta); 
                }
                

            }
            return verMovimientos;
                            
        }

        // consulta de saldo

        public Saldo ConsultarSaldo(int idCuenta, string moneda)
        { 
            Saldo verSaldo = new Saldo();
            using (SqlConnection connection = new SqlConnection(this.conexionString))
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = "consultaSaldo";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@idCuenta", idCuenta));
                command.Parameters.Add(new SqlParameter("@moneda", moneda));

                // se usa datareader solo para el select

                SqlDataReader dataReader = command.ExecuteReader();
                dataReader.Read();
               
                    Saldo cuenta = new Saldo();
                    cuenta.Importe = (double)dataReader.GetDecimal(0);
                    cuenta.Idcuenta = idCuenta;
                    cuenta.Moneda = moneda;
                    
                //verSaldo.Add(cuenta);

                return cuenta ;


            }
            

        }

        // consultar Saldos
        public List<SaldosTodos> ConsultarSaldos( int idCuenta)
        {
            List<SaldosTodos> verSaldos = new List<SaldosTodos>();
            using (SqlConnection connection = new SqlConnection(this.conexionString))
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = "consultaTodosSaldos";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@idCuenta", idCuenta));

                // se usa datareader solo para el select

                SqlDataReader dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    SaldosTodos saldoTotal = new SaldosTodos();
                    saldoTotal.IdCuenta = idCuenta;
                    saldoTotal.Nombre = dataReader.GetString(0);
                    saldoTotal.Saldo = dataReader.GetDecimal(1);
                    verSaldos.Add(saldoTotal);
                }
            }
            return verSaldos;
        }


        // alta de movimiento

        public void AltaMovimiento(CuentaCripto cuentaCripto)
        {
            
            using (SqlConnection connection = new SqlConnection(this.conexionString))
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = "altaMovimiento";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@idCuenta", cuentaCripto.Idcuenta));
                command.Parameters.Add(new SqlParameter("@tipo", cuentaCripto.Tipo));
                command.Parameters.Add(new SqlParameter("@fecha", cuentaCripto.Fecha));
                command.Parameters.Add(new SqlParameter("@cotizacion", cuentaCripto.Cotizacion));
                command.Parameters.Add(new SqlParameter("@impoOrigen", cuentaCripto.ImpoOrigen));
                command.Parameters.Add(new SqlParameter("@idMonedaOrigen", cuentaCripto.IdMonedaOrigen));
                command.Parameters.Add(new SqlParameter("@impoDestino", cuentaCripto.ImpoDestino));
                command.Parameters.Add(new SqlParameter("@idMonedaDest", cuentaCripto.IdMonedaDestino));
                command.Parameters.Add(new SqlParameter("@estado", cuentaCripto.Estado));
                command.Parameters.Add(new SqlParameter("@nip", cuentaCripto.Nip));


                command.ExecuteNonQuery();
                //dataReader.Read();
               

            }
            

        }




    }
}