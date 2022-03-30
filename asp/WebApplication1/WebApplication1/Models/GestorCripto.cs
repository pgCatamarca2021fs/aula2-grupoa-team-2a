using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace WebApplication1.Models
{
    public class GestorCripto
    {

        string conexionString = ConfigurationManager.ConnectionStrings["myDB"].ToString();

        // consultar Cripto
        public List<Cripto> ConsultarCripto()
        {
            List<Cripto> verCripto = new List<Cripto>();
            using (SqlConnection connection = new SqlConnection(this.conexionString))
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = "consultaCripto";
                command.CommandType = CommandType.StoredProcedure;
                //command.Parameters.Add(new SqlParameter("@idCuenta", saldo.Idcuenta));
                //command.Parameters.Add(new SqlParameter("@monea", saldo.Moneda));

                // se usa datareader solo para el select

                SqlDataReader dataReader = command.ExecuteReader();
                //dataReader.Read();
                while (dataReader.Read())
                {
                    Cripto cripto = new Cripto();
                    cripto.IdMoneda = dataReader.GetInt32(0);
                    cripto.Nombre = dataReader.GetString(1);
                    cripto.Descripcion = dataReader.GetString(2);


                    verCripto.Add(cripto);
                }


            }
            return verCripto;

        }

        // Alta Cripto
        public void AltaCripto(Cripto cripto)
        {
            
            using (SqlConnection connection = new SqlConnection(this.conexionString))
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = "altaCripto";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@nombre", cripto.Nombre));
                command.Parameters.Add(new SqlParameter("@descripcion", cripto.Descripcion));
                
                command.ExecuteReader();
                

            }
            

        }

        // Modifica Cripto

        public void ModificaCripto(int id ,Cripto cripto)
        {

            using (SqlConnection connection = new SqlConnection(this.conexionString))
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandText = "modificaCripto";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@idmoneda", id));
                command.Parameters.Add(new SqlParameter("@nombre", cripto.Nombre));
                command.Parameters.Add(new SqlParameter("@descripcion", cripto.Descripcion));

                command.ExecuteReader();


            }


        }

        // Baja Cripto


    }
}