import { ValidarCPF } from '../ValidarCPF';
import { expect, test } from '@jest/globals';

test('CPF válido', () => {
    expect(ValidarCPF.cpf('12345678909')).toBe(true);
});

test('CPF inválido pois o dígito verificador está errado', () => { 
    expect(ValidarCPF.cpf('12345678900')).toBe(false);
});

test('CPF com formato inválido', () => {
    expect(ValidarCPF.cpf('123456789')).toBe(false);
});

test('CPF com caracteres inválidos', () => {
    expect(ValidarCPF.cpf('1234567890a')).toBe(false);
});

test('CPF vazio', () => {
    expect(ValidarCPF.cpf('')).toBe(false);
});