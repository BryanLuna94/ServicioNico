if (!String.format) {
    String.format = function (format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ?
                args[number] :
                match;
        });
    };
}

const PrimeraLetraMayusculas = (cadena) => {
    if (!cadena) {
        return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    } else {
        return '';
    }
};




module.exports = { 
    PrimeraLetraMayusculas
};