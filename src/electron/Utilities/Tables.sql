USE POS
GO
CREATE TABLE dbo.Colors
(
    [Entry] INT NOT NULL,
    [Name] [NVARCHAR](50) NOT NULL,
    CONSTRAINT PK_Colors_Entry PRIMARY KEY ([Entry]),
    CONSTRAINT UQ_Colors_Name UNIQUE ([Name])
);
CREATE TABLE dbo.Tones
(
    [Entry] INT NOT NULL,
    [Name] [NVARCHAR](50) NOT NULL,
    CONSTRAINT PK_Tones_Entry PRIMARY KEY ([Entry]),
    CONSTRAINT UQ_Tones_Name UNIQUE ([Name])
);
GO
CREATE TABLE dbo.Material
(
    [Entry] INT NOT NULL,
    [Name] [NVARCHAR](50) NOT NULL,
    CONSTRAINT PK_Material_Entry PRIMARY KEY ([Entry]),
    CONSTRAINT UQ_Material_Name UNIQUE ([Name])
);
GO
CREATE TABLE dbo.Items
(
    [Entry] INT NOT NULL,
    [Name] [NVARCHAR](50) NOT NULL,
    Price DECIMAL(6,4) NOT NULL CONSTRAINT DF_Items_Price DEFAULT 0.00,
    CONSTRAINT PK_Items_Entry PRIMARY KEY ([Entry]),
    CONSTRAINT UQ_Items_Name UNIQUE ([Name]),
    CONSTRAINT CHK_Items_Price CHECK (Price >= 0)
);
GO
CREATE TABLE dbo.PaymentMethods
(
    [Entry] INT NOT NULL,
    [Code] [NVARCHAR](50) NOT NULL,
    [Name] [NVARCHAR](50) NOT NULL,
    CONSTRAINT PK_PaymentMethods_Entry PRIMARY KEY ([Entry]),
    CONSTRAINT UQ_PaymentMethods_Name UNIQUE ([Name]),
    CONSTRAINT UQ_PaymentMethods_Code UNIQUE (Code),
    CONSTRAINT UQ_PaymentMethods_CodeName UNIQUE (Code,[Name])
);
GO
CREATE TABLE dbo.Delieveries
(
    [Entry] INT NOT NULL,
    [Date] DATE NOT NULL,
    TotalAmount DECIMAL(6,4) CONSTRAINT DF_Delieveries_TotalAmount DEFAULT 0.00,
    AmountPaid DECIMAL(6,4) CONSTRAINT DF_Delieveries_AmountPaid DEFAULT 0.00,
    Paid [CHAR] NOT NULL CONSTRAINT DF_Deliveries_Paid DEFAULT 'N',
    CONSTRAINT PK_Delieveries_Entry PRIMARY KEY ([Entry]),
    CONSTRAINT CHK_Delieveries_AmountPaid CHECk(TotalAmount >= AmountPaid),
    CONSTRAINT CHK_Delieveries_Paid CHECK (Paid IN ('Y', 'N'))
);
GO
CREATE TABLE dbo.DeliveryDetail
(
    [Entry] INT NOT NULL,
    DeliveryEntry INT NOT NULL,
    LineNum SMALLINT NOT NULL,
    Price DECIMAL(6,4) NOT NULL CONSTRAINT DF_DeliveryDetail_Price DEFAULT 0.00,
    ItemEntry SMALLINT NOT NULL,
    ColorEntry SMALLINT NOT NULL,
    MaterialEntry SMALLINT NOT NULL,
    ToneEntry SMALLINT NOT NULL,
    Quanty DECIMAL(6,4) NOT NULL,
    LineTotal DECIMAL(6,4) NOT NULL,
    CONSTRAINT PK_DeliveryDetail_Entry PRIMARY KEY ([Entry]),
    CONSTRAINT UQ_DeliveryDetail_LineDetail UNIQUE (DeliveryEntry, ItemEntry, ColorEntry, MaterialEntry, ToneEntry),
    CONSTRAINT CHQ_DeliveryDetail_Price CHECK(LineTotal >= 0)
);
GO