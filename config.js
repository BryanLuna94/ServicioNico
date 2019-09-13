const config = {
    app: {
        port: 5000,
        endpoint: {
            oferta: '/oferta',
            evento: '/evento',
            nivel: '/nivel',
            autenticacion: '/autenticacion',
            recomendacion: '/recomendaciones',
            ventaIncremental: '/ventaincremental',
            promocion: '/promociones'
        },
        newrelic_license_key: '694adcc764c2db2bd666f7872e0614f95278a20b',
        newrelic_app_name: 'ServicioNico_PRD'
    },
    sql: {

    },
    mongodb: {
        PE: {
            connectionString: 'mongodb+srv://bryan:Nick092@nico-jzflf.mongodb.net/test?retryWrites=true&w=majority&authSource=test',
            database: 'NicoPeru',
        },
    },
    constantes: {
        paises: ['BO', 'CL', 'CO', 'CR', 'DO', 'EC', 'GT', 'MX', 'PA', 'PE', 'PR', 'SV'],
        CategoriasPum: ['Accesorios', 'Moda', 'Bijouterie', 'Apoyo'],
        marcas: {
            1: "L'Bel",
            2: "Ésika",
            3: "Cyzone",
            4: "Finart"
        },
    },
    elasticLogging: {
        endpoint: 'https://search-qas-atd-f5uoi2tmrjd2i7rtdhfglnr7le.us-west-2.es.amazonaws.com/',
        pattern: 'pl20-consultoras-ws-sbm-node-search-',
        type: '/LogEvent',
        application: 'WebService',
        enabled: true,
        logAllResponse: false
    },
    buscador: {
        endpoint: 'http://localhost:7777/',
        pattern: 'pl20-consultoras-ws-sbm-node-search-',
        type: '/LogEvent',
        application: 'WebService',
        enabled: true,
        logAllResponse: false
    },
    imagenes: {
        rutaAppCatalogo: 'https://s3-sa-east-1.amazonaws.com/appcatalogo/{0}/{1}/{2}/productos/{3}',
        rutaAppCatalogoBulk: 'https://s3-sa-east-1.amazonaws.com/appcatalogo/{0}/{1}/{2}/productos/bulk/{3}',
        appCatalogo: {
            DO: 'CO',
            GT: 'CO',
            PA: 'CR',
            PR: 'CR',
            SV: 'CO'
        },
        urlSinImagenTiposyTonos: 'https://somosbelcorpqa.s3.amazonaws.com/ImagenesPortal/SinImagenTonosyTipos.jpg'
    },
    paises: {
        Esika: ['EC', 'PE', 'CO', 'CL', 'BO', 'GT', 'SV', 'DO', 'VE'],
        LBel: ['CR', 'PA', 'MX', 'PR']
    },
    componentes: {
        orden: {
            fichaEsika: [2, 1, 3],
            fichaLBel: [1, 2, 3]
        }
    },
    KeyPaisFormatDecimal: 'CO,CR,CL',
    repositorioImg: {
        RutaCDN: 'https://d1y60eoca8fkyl.cloudfront.net',
        Matriz: 'Matriz'
    },
    papi: {
        amazonCognitoIdentity: {
            poolData: {
                UserPoolId: 'us-east-1_l63jnIlgd',
                ClientId: '4cgrjplsjesv478pn6uc4r43tf'
            },
            authenticationDetails: {
                Username: 'ganamas',
                Password: 'B3lc0rp18$'
            }
        },
        productAPI: {
            porSap: {
                url: 'https://4jbjy3bizd.execute-api.us-east-1.amazonaws.com/qas/products/codsap?',
                parametrosIn: 'query={list(codsap:[ParamSap])',
                parametrosOut: '{codsap,destallamedidacatalogo,id,contenidoneto,umcontenido,largo,ancho,alto,unidadlongitud,destallamedidacatalogo,destitulopaso001,despaso001,destitulopaso002,despaso002,destitulopaso003,despaso003,destitulopaso004,despaso004,destitulodescubremas001,desdescubremas001,destitulodescubremas002,desdescubremas002,destitulodescubremas003,desdescubremas003,destitulotip001,destip001,destitulotip002,destip002,destitulotip003,destip003,destitulotip004,destip004,deslinkvideoId001,destextovideo001,deslinkvideoId002,destextovideo002,deslinkvideoId003,destextovideo003,deslinkvideoId004,destextovideo004,deslinkvideoId005,destextovideo005,codunidadnegocio,fotobulkwebredes,fotomodelowebredes,fotomontajewebredes,fotoproductofondoblancowebredes,fotoproductowebredes,fototips1webredes,fototips2webredes,fototips3webredes,fototips4webredes}}'
            }
        }
    },
    configuracionPais: [{
            paisIso: 'BO',
            configuracion: {
                CalculoPum: false
            }
        },
        {
            paisIso: 'CL',
            configuracion: {
                CalculoPum: false
            }
        },
        {
            paisIso: 'CO',
            configuracion: {
                CalculoPum: true
            }
        },
        {
            paisIso: 'CR',
            configuracion: {
                CalculoPum: false
            }
        },
        {
            paisIso: 'DO',
            configuracion: {
                CalculoPum: false
            }
        },
        {
            paisIso: 'EC',
            configuracion: {
                CalculoPum: false
            }
        },
        {
            paisIso: 'GT',
            configuracion: {
                CalculoPum: false
            }
        },
        {
            paisIso: 'MX',
            configuracion: {
                CalculoPum: false
            }
        },
        {
            paisIso: 'PA',
            configuracion: {
                CalculoPum: false
            }
        },
        {
            paisIso: 'PE',
            configuracion: {
                CalculoPum: true
            }
        },
        {
            paisIso: 'PR',
            configuracion: {
                CalculoPum: false
            }
        },
        {
            paisIso: 'SV',
            configuracion: {
                CalculoPum: false
            }
        }
    ],
    prol: {
        promociones: {
            url: 'http://qaielb-webprol-1875224445.us-east-1.elb.amazonaws.com/BelcorpSupport/api/Validacion/BuscarApoyados'
        },
        apoyados: {
            url: 'http://qaielb-webprol-1875224445.us-east-1.elb.amazonaws.com/BelcorpSupport/api/Validacion/BuscarPromocion'
        }
    }
};


module.exports = config;