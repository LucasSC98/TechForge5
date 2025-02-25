"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidarCPF = void 0;
var ValidarCPF = /** @class */ (function () {
    function ValidarCPF() {
    }
    ValidarCPF.cpf = function (cpf) {
        if (cpf === null || cpf.length !== 11 || !this.apenasNumeros(cpf) || this.todosCaracteresIguais(cpf)) {
            return false;
        }
        var j = 10;
        var somatorio = 0;
        var cpfAux = cpf.substring(0, 9);
        for (var i = 0; i < 9; i++) {
            somatorio = somatorio + (+cpfAux.charAt(i) * j);
            j--;
        }
        var resto = somatorio % 11;
        var digito1 = 11 - resto;
        if (digito1 > 9) {
            digito1 = 0;
        }
        j = 11;
        somatorio = 0;
        cpfAux = cpfAux + digito1.toString();
        for (var i = 0; i < 10; i++) {
            somatorio = somatorio + (+cpfAux.charAt(i) * j);
            j--;
        }
        resto = somatorio % 11;
        var digito2 = 11 - resto;
        if (digito2 > 9) {
            digito2 = 0;
        }
        cpfAux = cpfAux + digito2.toString();
        if (cpf !== cpfAux) {
            return false;
        }
        return true;
    };
    ValidarCPF.apenasNumeros = function (cpf) {
        for (var i = 0; i < cpf.length; i++) {
            if (!(+cpf.charAt(i) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])) {
                return false;
            }
        }
        return true;
    };
    ValidarCPF.todosCaracteresIguais = function (cpf) {
        return cpf.split('').every(function (char) { return char === cpf[0]; });
    };
    return ValidarCPF;
}());
exports.ValidarCPF = ValidarCPF;
