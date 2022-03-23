USE [Criptocatamarca]
GO
/****** Object:  Table [dbo].[Cuenta]    Script Date: 23/03/2022 1:22:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cuenta](
	[idCuenta] [bigint] IDENTITY(1,1) NOT NULL,
	[idUsuario] [bigint] NOT NULL,
	[idMoneda] [int] NOT NULL,
	[fecha] [datetime] NOT NULL,
	[estado] [int] NOT NULL,
 CONSTRAINT [PK_Cuenta] PRIMARY KEY CLUSTERED 
(
	[idCuenta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Moneda]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Moneda](
	[idMoneda] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](3) NOT NULL,
	[descripcion] [varchar](40) NOT NULL,
	[fecha] [datetime] NOT NULL,
	[estado] [varchar](1) NOT NULL,
 CONSTRAINT [PK_Moneda] PRIMARY KEY CLUSTERED 
(
	[idMoneda] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Movimientos]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Movimientos](
	[idMov] [bigint] IDENTITY(1,1) NOT NULL,
	[idCuenta] [bigint] NOT NULL,
	[cbu] [varchar](30) NOT NULL,
	[fecha] [datetime] NOT NULL,
	[tipo] [varchar](1) NOT NULL,
	[importe] [decimal](10, 2) NOT NULL,
	[estado] [varchar](1) NOT NULL,
 CONSTRAINT [PK_Movimientos] PRIMARY KEY CLUSTERED 
(
	[idMov] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Operaciones]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Operaciones](
	[idOperacion] [bigint] IDENTITY(1,1) NOT NULL,
	[idCuenta] [bigint] NOT NULL,
	[tipo] [varchar](1) NOT NULL,
	[fecha] [datetime] NOT NULL,
	[cotizacion] [decimal](20, 6) NOT NULL,
	[impoOrigen] [decimal](20, 6) NOT NULL,
	[idMonedaOrigen] [int] NOT NULL,
	[impoDestino] [decimal](20, 6) NOT NULL,
	[idMonedaDest] [int] NOT NULL,
	[estado] [varchar](1) NOT NULL,
	[nip] [bigint] NOT NULL,
 CONSTRAINT [PK_Operaciones] PRIMARY KEY CLUSTERED 
(
	[idOperacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Provincia]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Provincia](
	[idProvincia] [int] NOT NULL,
	[nombre] [varchar](30) NOT NULL,
 CONSTRAINT [PK_Provincia] PRIMARY KEY CLUSTERED 
(
	[idProvincia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoMovimiento]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoMovimiento](
	[idMovimiento] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](30) NOT NULL,
 CONSTRAINT [PK_TipoMovimiento] PRIMARY KEY CLUSTERED 
(
	[idMovimiento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[idUsuario] [bigint] IDENTITY(1,1) NOT NULL,
	[cuil] [varchar](11) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[fnac] [date] NOT NULL,
	[domicilio] [varchar](40) NOT NULL,
	[idProvincia] [int] NOT NULL,
	[pais] [varchar](50) NOT NULL,
	[tipo] [varchar](1) NOT NULL,
	[estado] [varchar](1) NOT NULL,
	[fechaAlta] [datetime] NOT NULL,
	[cbu] [varchar](40) NOT NULL,
	[Banco] [varchar](40) NOT NULL,
	[dniFrente] [varchar](50) NOT NULL,
	[dniDorso] [varchar](50) NOT NULL,
	[pass] [varchar](200) NOT NULL,
	[mail] [varchar](100) NOT NULL,
	[telefono] [varchar](30) NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[idUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Cuenta]  WITH CHECK ADD  CONSTRAINT [FK_Cuenta_Moneda] FOREIGN KEY([idMoneda])
REFERENCES [dbo].[Moneda] ([idMoneda])
GO
ALTER TABLE [dbo].[Cuenta] CHECK CONSTRAINT [FK_Cuenta_Moneda]
GO
ALTER TABLE [dbo].[Cuenta]  WITH CHECK ADD  CONSTRAINT [FK_Cuenta_Usuario] FOREIGN KEY([idUsuario])
REFERENCES [dbo].[Usuario] ([idUsuario])
GO
ALTER TABLE [dbo].[Cuenta] CHECK CONSTRAINT [FK_Cuenta_Usuario]
GO
ALTER TABLE [dbo].[Movimientos]  WITH CHECK ADD  CONSTRAINT [FK_Movimientos_Cuenta] FOREIGN KEY([idCuenta])
REFERENCES [dbo].[Cuenta] ([idCuenta])
GO
ALTER TABLE [dbo].[Movimientos] CHECK CONSTRAINT [FK_Movimientos_Cuenta]
GO
ALTER TABLE [dbo].[Movimientos]  WITH CHECK ADD  CONSTRAINT [FK_Movimientos_TipoMovimiento] FOREIGN KEY([idMov])
REFERENCES [dbo].[TipoMovimiento] ([idMovimiento])
GO
ALTER TABLE [dbo].[Movimientos] CHECK CONSTRAINT [FK_Movimientos_TipoMovimiento]
GO
ALTER TABLE [dbo].[Operaciones]  WITH CHECK ADD  CONSTRAINT [FK_Operaciones_Cuenta] FOREIGN KEY([idCuenta])
REFERENCES [dbo].[Cuenta] ([idCuenta])
GO
ALTER TABLE [dbo].[Operaciones] CHECK CONSTRAINT [FK_Operaciones_Cuenta]
GO
ALTER TABLE [dbo].[Operaciones]  WITH CHECK ADD  CONSTRAINT [FK_Operaciones_Moneda] FOREIGN KEY([idMonedaOrigen])
REFERENCES [dbo].[Moneda] ([idMoneda])
GO
ALTER TABLE [dbo].[Operaciones] CHECK CONSTRAINT [FK_Operaciones_Moneda]
GO
ALTER TABLE [dbo].[Operaciones]  WITH CHECK ADD  CONSTRAINT [FK_Operaciones_Moneda1] FOREIGN KEY([idMonedaDest])
REFERENCES [dbo].[Moneda] ([idMoneda])
GO
ALTER TABLE [dbo].[Operaciones] CHECK CONSTRAINT [FK_Operaciones_Moneda1]
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Usuario_Provincia] FOREIGN KEY([idProvincia])
REFERENCES [dbo].[Provincia] ([idProvincia])
GO
ALTER TABLE [dbo].[Usuario] CHECK CONSTRAINT [FK_Usuario_Provincia]
GO
/****** Object:  StoredProcedure [dbo].[altaCripto]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[altaCripto]
	-- Add the parameters for the stored procedure here
	@nombre varchar(3), 
	@descripcion varchar (40)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	INSERT INTO [dbo].[Moneda]
           ([nombre]
           ,[descripcion]
           ,[fecha]
           ,[estado])
     VALUES
           (@nombre,@descripcion,GETDATE(),'1')


END
GO
/****** Object:  StoredProcedure [dbo].[altaMovimiento]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[altaMovimiento]
	-- Add the parameters for the stored procedure here
	@idCuenta bigint,@tipo varchar(1),@fecha datetime, @cotizacion decimal(20,6), @impoOrigen decimal(20,6),
	@idMonedaOrigen int, @impoDestino decimal (20,6), @idMonedaDest int, @estado varchar(1),@nip bigint
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	INSERT INTO [dbo].[Operaciones]
           ([idCuenta]
           ,[tipo]
           ,[fecha]
           ,[cotizacion]
           ,[impoOrigen]
           ,[idMonedaOrigen]
           ,[impoDestino]
           ,[idMonedaDest]
           ,[estado]
           ,[nip])
     VALUES
           (@idCuenta
           ,@tipo
           ,@fecha
           ,@cotizacion
           ,@impoOrigen
           ,@idMonedaOrigen
           ,@impoDestino
           ,@idMonedaDest
           ,@estado
           ,@nip)
END
GO
/****** Object:  StoredProcedure [dbo].[consultaCripto]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[consultaCripto]
	-- Add the parameters for the stored procedure here
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT [idMoneda]
      ,[nombre]
      ,[descripcion]
     
  FROM [dbo].[Moneda]
END
GO
/****** Object:  StoredProcedure [dbo].[consultaMovimiento]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[consultaMovimiento]
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT idOperacion,idCuenta,tipo,fecha,cotizacion,impoOrigen,idMonedaOrigen,impoDestino,idMonedaDest,estado,nip from dbo.Operaciones
END
GO
/****** Object:  StoredProcedure [dbo].[consultaSaldo]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[consultaSaldo]
	-- Add the parameters for the stored procedure here
	@idCuenta bigint, @moneda varchar(3)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT isNull(sum(T.salida),0) from (
(SELECT sum(a.impoDestino)  as salida
from dbo.Operaciones a, dbo.Moneda b 
where a.idMonedaDest=b.idMoneda and a.idCuenta=@idCuenta and a.estado=1 and b.nombre=@moneda) 
UNION
(SELECT sum(a.impoOrigen)*-1 as salida 
from dbo.Operaciones a, dbo.Moneda b 
where a.idMonedaOrigen=b.idMoneda and a.idCuenta=@idCuenta and a.estado=1 and b.nombre=@moneda)) T
 

END
GO
/****** Object:  StoredProcedure [dbo].[editarPersona]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Horacio Hernández>
-- Create date: <Create Date,,14/03/2022>
-- Description:	<Description,,Edicion de Usuarios>
-- =============================================
CREATE PROCEDURE [dbo].[editarPersona] 
    @idUsuario bigint,
	@cuil varchar(11),
	@nombre varchar(50),
	@fnac date,
	@domicilio varchar(40),
    @idProvincia int,
    @pais varchar(50),
    @tipo varchar(1),
    @estado varchar(1),
    @fechaAlta date,
    @cbu varchar(40),
    @Banco varchar(40),
    @dniFrente varchar(50),
    @dniDorso varchar(50),
    @pass varchar(200),
    @mail varchar(100),
    @telefono varchar(30)
AS
BEGIN
   UPDATE [dbo].[Usuario]
   SET [cuil] = @cuil
      ,[nombre] = @nombre
      ,[fnac] = @fnac
      ,[domicilio] = @domicilio
      ,[idProvincia] = @idProvincia
      ,[pais] = @pais
      ,[tipo] = @tipo
      ,[estado] = @estado
      ,[fechaAlta] = @fechaAlta
      ,[cbu] = @cbu
      ,[Banco] = @Banco
      ,[dniFrente] = @dniFrente
      ,[dniDorso] = @dniDorso
      ,[pass] = @pass
      ,[mail] = @mail
      ,[telefono] = @telefono
 WHERE idUsuario = @idUsuario 
END
GO
/****** Object:  StoredProcedure [dbo].[eliminarPersona]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Horacio Hernández>
-- Create date: <Create Date,,14/03/2022>
-- Description:	<Description,,Eliminar usuarios>
-- =============================================
CREATE PROCEDURE [dbo].[eliminarPersona] 
   @idUsuario bigint
AS
BEGIN

DELETE FROM [dbo].[Usuario]
      WHERE idUsuario = @idUsuario

END
GO
/****** Object:  StoredProcedure [dbo].[insertarPersona]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Author,,Horacio Hernandez>
-- Create date: <Create Date,,10/03/2022>
-- Description:	<Description,,Insertar Usuarios>
-- =============================================
CREATE PROCEDURE [dbo].[insertarPersona] 
	@cuil varchar(11),
	@nombre varchar(50),
	@fnac date,
	@domicilio varchar(40),
    @idProvincia int,
    @pais varchar(50),
    @tipo varchar(1),
    @estado varchar(1),
    @fechaAlta date,
    @cbu varchar(40),
    @Banco varchar(40),
    @dniFrente varchar(50),
    @dniDorso varchar(50),
    @pass varchar(200),
    @mail varchar(100),
    @telefono varchar(30)
AS
BEGIN
	INSERT INTO [dbo].[Usuario]
           ([cuil]
           ,[nombre]
           ,[fnac]
		   ,[domicilio]
		   ,[idProvincia]
		   ,[pais]
		   ,[tipo]
		   ,[estado]
		   ,[fechaAlta]
		   ,[cbu]
		   ,[Banco]
		   ,[dniFrente]
		   ,[dniDorso]
		   ,[pass]
		   ,[mail]
		   ,[telefono])           
     VALUES
           (@cuil,
           @nombre,
           @fnac,
		   @domicilio,
           @idProvincia,
           @pais,
           @tipo,
           @estado,
           @fechaAlta,
           @cbu,
           @Banco,
           @dniFrente,
           @dniDorso,
           @pass,
           @mail,
           @telefono)           
END
GO
/****** Object:  StoredProcedure [dbo].[listarPersona]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



-- =============================================
-- Author:		<Author,,Horacio Hernández>
-- Create date: <Create Date,, 10/03/2022>
-- Description:	<Description,,Listado de Personas>
-- =============================================
CREATE PROCEDURE [dbo].[listarPersona] 
	--@cuil varchar(11)
AS
BEGIN
	SET NOCOUNT ON;

    SELECT *
	FROM Usuario
	--WHERE cuil = @cuil	
END
GO
/****** Object:  StoredProcedure [dbo].[listarPersonaPorId]    Script Date: 23/03/2022 1:22:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Author,,Horacio Hernández>
-- Create date: <Create Date,, 10/03/2022>
-- Description:	<Description,,Listado de Personas>
-- =============================================
CREATE PROCEDURE [dbo].[listarPersonaPorId] 
	-- Add the parameters for the stored procedure here
	@pass varchar(200),
    @mail varchar(100)
AS
BEGIN
    SELECT *
	FROM Usuario
	WHERE mail = @mail and pass = @pass	
END
GO
