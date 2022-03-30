using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace WebApplication1.Models
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GestorPersona
    {
        string conectionString = ConfigurationManager.ConnectionStrings["myDB"].ToString();

        public List<Persona> ListarPersonas()
        {
            List<Persona> lista = new List<Persona>();

            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "listarPersona";
                command.CommandType = CommandType.StoredProcedure;

                SqlDataReader dataReader = command.ExecuteReader();

                while (dataReader.Read())
                {
                    Persona persona = new Persona();
                    persona.Id = dataReader.GetInt64(0);
                    persona.Cuil = dataReader.GetString(1);
                    persona.Nombre = dataReader.GetString(2);
                    persona.Fnac = dataReader.GetDateTime(3);
                    persona.Domicilio = dataReader.GetString(4);
                    persona.IdProvincia = dataReader.GetInt32(5);
                    persona.Pais = dataReader.GetString(6);
                    persona.Tipo = dataReader.GetString(7);
                    persona.Estado = dataReader.GetString(8);
                    persona.FechaAlta = dataReader.GetDateTime(9);
                    persona.Cbu = dataReader.GetString(10);
                    persona.Banco = dataReader.GetString(11);
                    persona.DniFrente = dataReader.GetString(12);
                    persona.DniDorso = dataReader.GetString(13);
                    persona.Pass = dataReader.GetString(14);
                    persona.Mail = dataReader.GetString(15);
                    persona.Telefono = dataReader.GetString(16);

                    lista.Add(persona);
                }

            }
            return lista;
        }

        public Persona ListarPersonasPorId(string mail, string pass)
        {
            Persona persona = new Persona();
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "listarPersonaPorId";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@mail", mail));
                command.Parameters.Add(new SqlParameter("@pass", pass));


                Console.WriteLine(mail, pass);

                SqlDataReader dataReader = command.ExecuteReader();
                dataReader.Read();

                //Persona persona = new Persona();
                persona.Id = dataReader.GetInt64(0);
                persona.Cuil = dataReader.GetString(1);
                persona.Nombre = dataReader.GetString(2);
                persona.Fnac = dataReader.GetDateTime(3);
                persona.Domicilio = dataReader.GetString(4);
                //persona.Domicilio = dataReader.GetString(5);
                persona.IdProvincia = dataReader.GetInt32(5);
                persona.Pais = dataReader.GetString(6);
                persona.Tipo = dataReader.GetString(7);
                persona.Estado = dataReader.GetString(8);
                persona.FechaAlta = dataReader.GetDateTime(9);
                persona.Cbu = dataReader.GetString(10);
                persona.Banco = dataReader.GetString(11);
                persona.DniFrente = dataReader.GetString(12);
                persona.DniDorso = dataReader.GetString(13);
                persona.Pass = dataReader.GetString(14);
                persona.Mail = dataReader.GetString(15);
                persona.Telefono = dataReader.GetString(16);
                persona.IdCuenta = dataReader.GetInt64(17);

                //listaId.Add(persona);
                return persona;
            }

        }

        public void CrearPersona(Persona persona)
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "insertarPersona";
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add(new SqlParameter("@cuil", persona.Cuil));
                command.Parameters.Add(new SqlParameter("@nombre", persona.Nombre));
                command.Parameters.Add(new SqlParameter("@fnac", persona.Fnac));
                command.Parameters.Add(new SqlParameter("@domicilio", persona.Domicilio));
                //command.Parameters.Add(new SqlParameter("@domicilio2", persona.Domicilio2));
                command.Parameters.Add(new SqlParameter("@idProvincia", persona.IdProvincia));
                command.Parameters.Add(new SqlParameter("@pais", persona.Pais));
                command.Parameters.Add(new SqlParameter("@tipo", persona.Tipo));
                command.Parameters.Add(new SqlParameter("@estado", persona.Estado));
                command.Parameters.Add(new SqlParameter("@fechaAlta", persona.FechaAlta));
                command.Parameters.Add(new SqlParameter("@cbu", persona.Cbu));
                command.Parameters.Add(new SqlParameter("@banco", persona.Banco));
                command.Parameters.Add(new SqlParameter("@dniFrente", persona.DniFrente));
                command.Parameters.Add(new SqlParameter("@dniDorso", persona.DniDorso));
                command.Parameters.Add(new SqlParameter("@pass", persona.Pass));
                command.Parameters.Add(new SqlParameter("@mail", persona.Mail));
                command.Parameters.Add(new SqlParameter("@telefono", persona.Telefono));

                command.ExecuteNonQuery();

            }

        }

        public void EditarPersona(long IdUsuario, Persona persona)
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "editarPersona";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@idUsuario", IdUsuario));

                Console.WriteLine(IdUsuario);

                //command.Parameters.Add(new SqlParameter("@idUsuario", persona.Id));
                command.Parameters.Add(new SqlParameter("@cuil", persona.Cuil));
                command.Parameters.Add(new SqlParameter("@nombre", persona.Nombre));
                command.Parameters.Add(new SqlParameter("@fnac", persona.Fnac));
                command.Parameters.Add(new SqlParameter("@domicilio", persona.Domicilio));
                command.Parameters.Add(new SqlParameter("@idProvincia", persona.IdProvincia));
                command.Parameters.Add(new SqlParameter("@pais", persona.Pais));
                command.Parameters.Add(new SqlParameter("@tipo", persona.Tipo));
                command.Parameters.Add(new SqlParameter("@estado", persona.Estado));
                command.Parameters.Add(new SqlParameter("@fechaAlta", persona.FechaAlta));
                command.Parameters.Add(new SqlParameter("@cbu", persona.Cbu));
                command.Parameters.Add(new SqlParameter("@banco", persona.Banco));
                command.Parameters.Add(new SqlParameter("@dniFrente", persona.DniFrente));
                command.Parameters.Add(new SqlParameter("@dniDorso", persona.DniDorso));
                command.Parameters.Add(new SqlParameter("@pass", persona.Pass));
                command.Parameters.Add(new SqlParameter("@mail", persona.Mail));
                command.Parameters.Add(new SqlParameter("@telefono", persona.Telefono));

                command.ExecuteNonQuery();

            }

        }
        public void EliminarPersona(Persona persona)
        {
            using (SqlConnection connection = new SqlConnection(this.conectionString))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandText = "eliminarPersona";
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.Add(new SqlParameter("@idUsuario", persona.Id));
                command.ExecuteNonQuery();

            }

        }
    }
}