USE POS
GO
CREATE TABLE dbo.Colores
(
    Entry INT NOT NULL,
    Nombre [NVARCHAR](50) NOT NULL,
    CONSTRAINT PK_Colores_Entry PRIMARY KEY (Entry),
    CONSTRAINT UQ_Colores_Name UNIQUE (Nombre)
);
CREATE TABLE dbo.Tonos
(
    Entry INT NOT NULL,
    Nombre [NVARCHAR](50) NOT NULL,
    CONSTRAINT PK_Tonos_Entry PRIMARY KEY (Entry),
    CONSTRAINT UQ_Tonos_Name UNIQUE (Nombre)
);
GO
CREATE TABLE dbo.Telas
(
    Entry INT NOT NULL,
    Nombre [NVARCHAR](50) NOT NULL,
    CONSTRAINT PK_Telas_Entry PRIMARY KEY (Entry),
    CONSTRAINT UQ_Telas_Name UNIQUE (Nombre)
);
GO
CREATE TABLE dbo.Articulos
(
    Entry INT NOT NULL,
    Nombre [NVARCHAR](50) NOT NULL,
    Precio DECIMAL(6,4) NOT NULL CONSTRAINT DF_Articulos_Precio DEFAULT 0.00,
    CONSTRAINT PK_Articulos_Entry PRIMARY KEY (Entry),
    CONSTRAINT UQ_Articulos_Name UNIQUE (Nombre)
);
GO
CREATE TABLE dbo.FormasPago
(
    Entry INT NOT NULL,
    Nombre [NVARCHAR](50) NOT NULL,
    CONSTRAINT PK_FormasPago_Entry PRIMARY KEY (Entry),
    CONSTRAINT UQ_FormasPago_Name UNIQUE (Nombre)
);
GO
CREATE TABLE dbo.Entregas
(
    Entry INT NOT NULL,
    Fecha DATE NOT NULL,
    TotalAPagar DECIMAL(6,4) CONSTRAINT DF_Entregas_TotalAPAgar DEFAULT 0.00,
    TotalACuenta DECIMAL(6,4) CONSTRAINT DF_Entregas_TotalACuenta DEFAULT 0.00,
    Pagado [CHAR] NOT NULL CONSTRAINT DF_Entrega_Pagado DEFAULT 'N',
    CONSTRAINT PK_Entregas_Entry PRIMARY KEY (Entry),
    CONSTRAINT CHK_Entregas_Pago CHECk(TotalAPagar >= TotalACuenta),
    CONSTRAINT CHK_Entrega_Pagado CHECK (Pagado IN ('Y', 'N'))
);
GO
CREATE TABLE dbo.EntregaDetalle
(
    Entry INT NOT NULL,
    EntryEntrega INT NOT NULL,
    NumPartida SMALLINT NOT NULL,
    Precio DECIMAL(6,4) NOT NULL CONSTRAINT DF_EntregaDetalle_Precio DEFAULT 0.00,
    IDArticulo SMALLINT NOT NULL,
    IDColor SMALLINT NOT NULL,
    IDTela SMALLINT NOT NULL,
    IDTono SMALLINT NOT NULL,
    Cantidad DECIMAL(6,4) NOT NULL,
    Total DECIMAL(6,4) NOT NULL,
    CONSTRAINT PK_EntregaDetalle_Entry PRIMARY KEY (Entry),
    CONSTRAINT UQ_EntregaDetalle_Articulos UNIQUE (EntryEntrega, IDArticulo, IDColor, IDTela, IDTono)
);
GO