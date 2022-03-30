export interface MovimientosTodos {
    IdCuenta:     number;
    Fecha:        Date;
    Cotizacion:   number;
    ImpoOrigen:   number;
    MonedaOrigen: MonedaOrigen;
    ImpoDestino:  number;
    MonedaDest:   MonedaDest;
}

export enum MonedaDest {
    Ars = "ARS",
    Bnb = "BNB",
    Eth = "ETH",
    Ltc = "LTC",
}

export enum MonedaOrigen {
    Ars = "ARS",
    Bnb = "BNB",
    Eth = "ETH",
    Ltc = "LTC",
}
