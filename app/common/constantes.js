const constantes = {
    claveToken: 'bRy@n5493;',
    codigoConsultoraGenerica: 'XXXXXXXXX',
    codigoConsultoraForzada: 'YYYYYYYYY',
    tipoPersonalizacion: {
        SR: 'SR',
        LAN: 'LAN',
        GND: 'GND',
        ODD: 'ODD',
        OPM: 'OPM',
        OPT: 'OPT',
        PAD: 'PAD',
        HV: 'HV',
        RD: 'RD',
        MG: 'MG',
        ATP: 'ATP',
        CAT: 'CAT',
        LMG: 'LMG'
    },
    codigoTipoEstrategia: {
        ODD: '009',
        OPM: '007',
        PAD: '008',
        SR: '030',
        OPT: '001',
        LAN: '005',
        HV: '011',
        GND: '010',
        ATP: '004',
        LMG: 'LMG'
    },
    textoProductoAgotado: 'AGOTADO',
    flagMaterialGanancia: {
        obtenerTodo: 0,
        obtenerSinForzadas: 1,
        obtenerSoloForzadas: 2
    },
    materialGanancia: {
        inactivo: 0,
        activo: 1
    },
    marca: {
        LBel: 1,
        Esika: 2,
        Cyzone: 3
    },
    tipoEstrategiaSet: {
        individualConTonos: 2001,
        compuestaFija: 2002,
        compuestaVariable: 2003,
        promocion : [2005,2006,2007]    
    },
    simbolo: {
        PE: 'S/.',
        CL: '$',
        GT: 'Q.',
        PA: 'B/.',
        CO: '$',
        BO: 'Bs',
        SV: '$',
        PR: '$',
        MX: '$',
        EC: '$',
        DO: 'RD$',
        CR: '¢'
    },
    codigoCatalogo: {
        LBel: '9',
        Cyzone: '10',
        Esika: '13'
    },
    tipoCuvPromocion: {
        promocion : 1,
        condicion : 2,
        top : 10
    }
};

module.exports = {
    constantes
};