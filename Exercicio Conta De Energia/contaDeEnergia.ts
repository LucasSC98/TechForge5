interface ConsumoEnergia {
    kwh: number;
    tarifa: number;
    imposto: number;
    bandeira: "verde" | "amarela" | "vermelha";
}

function calcularValorBase(consumo: number, tarifa: number): number {
    return consumo * tarifa;
}

function calcularAjusteBandeira(consumo: number, bandeira: string): number {
    const ajustes = {
        verde: 0,
        amarela: 0.02,
        vermelha: 0.05
    };
    return consumo * (ajustes[bandeira] ?? 0);
}

function calcularImposto(valor: number, percentualImposto: number): number {
    return valor * (percentualImposto / 100);
}
function calcularAjusteConsumo(kwh: number, valorTotal: number): number {
    if (kwh <= 100) {
        return -valorTotal * 0.05; 
    } else if (kwh > 300) {
        return valorTotal * 0.10;
    }
    return 0;
}

function calcularContaEnergia(consumo: ConsumoEnergia): number {
    const valorBase = calcularValorBase(consumo.kwh, consumo.tarifa);
    const ajusteBandeira = calcularAjusteBandeira(consumo.kwh, consumo.bandeira);
    const subtotal = valorBase + ajusteBandeira;
    const impostoValor = calcularImposto(subtotal, consumo.imposto);
    const subtotalComImposto = subtotal + impostoValor;
    const ajusteConsumo = calcularAjusteConsumo(consumo.kwh, subtotalComImposto);
    return subtotalComImposto + ajusteConsumo;
}

const contaVerde: ConsumoEnergia = {
    kwh: 100,
    tarifa: 0.50,
    imposto: 10,
    bandeira: "verde"
};

const contaAmarela: ConsumoEnergia = {
    kwh: 210,
    tarifa: 0.50,
    imposto: 10,
    bandeira: "amarela"
};

const contaVermelha: ConsumoEnergia = {
    kwh: 300,
    tarifa: 0.50,
    imposto: 10,
    bandeira: "vermelha"
};

console.log(calcularContaEnergia(contaVerde));
console.log(calcularContaEnergia(contaAmarela));
console.log(calcularContaEnergia(contaVermelha));