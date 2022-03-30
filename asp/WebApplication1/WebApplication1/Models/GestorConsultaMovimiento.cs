using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace WebApplication1.Models
{
    public class GestorConsultaMovimiento
    {
        string conexionString = ConfigurationManager.ConnectionStrings["myDB"].ToString();
        // consultar MovimientosporId
        public List<ConsultaMovimiento> ConsultarMovimientos(int idCuenta)
        {
            List<ConsultaMovimiento> verMovimientos = new List<ConsultaMovimiento>();
            using (SqlConnection connection = new SqlConnection(this.conexionString))
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = "movimientosPorId";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@idCuenta", idCuenta));

                // se usa datareader solo para el select

                SqlDataReader dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    ConsultaMovimiento movimientos = new ConsultaMovimiento();
                    movimientos.IdCuenta = idCuenta;
                    movimientos.Fecha = dataReader.GetDateTime(0);
                    movimientos.Cotizacion = dataReader.GetDecimal(1);        
                    movimientos.ImpoOrigen = dataReader.GetDecimal(2);
                    movimientos.MonedaOrigen = dataReader.GetString(3);
                    movimientos.ImpoDestino = dataReader.GetDecimal(4);
                    movimientos.MonedaDest = dataReader.GetString(5);
                    verMovimientos.Add(movimientos);
                }
            }
            return verMovimientos;
        }





    }
}