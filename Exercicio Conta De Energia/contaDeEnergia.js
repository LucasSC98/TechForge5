function calcularValorBase(consumo, tarifa) {
    return consumo * tarifa;
}
function calcularAjusteBandeira(consumo, bandeira) {
    var _a;
    var ajustes = {
        verde: 0,
        amarela: 0.02,
        vermelha: 0.05
    };
    return consumo * ((_a = ajustes[bandeira]) !== null && _a !== void 0 ? _a : 0);
}
function calcularImposto(valor, percentualImposto) {
    return valor * (percentualImposto / 100);
}
function calcularAjusteConsumo(kwh, valorTotal) {
    if (kwh <= 100) {
        return -valorTotal * 0.05;
    }
    else if (kwh > 300) {
        return valorTotal * 0.10;
    }
    return 0;
}
function calcularContaEnergia(consumo) {
    var valorBase = calcularValorBase(consumo.kwh, consumo.tarifa);
    var ajusteBandeira = calcularAjusteBandeira(consumo.kwh, consumo.bandeira);
    var subtotal = valorBase + ajusteBandeira;
    var impostoValor = calcularImposto(subtotal, consumo.imposto);
    var subtotalComImposto = subtotal + impostoValor;
    var ajusteConsumo = calcularAjusteConsumo(consumo.kwh, subtotalComImposto);
    return subtotalComImposto + ajusteConsumo;
}
var contaVerde = {
    kwh: 100,
    tarifa: 0.50,
    imposto: 10,
    bandeira: "verde"
};
var contaAmarela = {
    kwh: 210,
    tarifa: 0.50,
    imposto: 10,
    bandeira: "amarela"
};
var contaVermelha = {
    kwh: 300,
    tarifa: 0.50,
    imposto: 10,
    bandeira: "vermelha"
};
console.log(calcularContaEnergia(contaVerde));
console.log(calcularContaEnergia(contaAmarela));
console.log(calcularContaEnergia(contaVermelha));
