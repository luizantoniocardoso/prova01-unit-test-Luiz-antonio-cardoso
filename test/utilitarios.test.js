const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {

  test("Somar dois valores válidos", () => {
    expect(new Utilitarios().somar(5, 10)).toBe(15);
  });

  test("Subtrair dois valores válidos", () => {
    expect(new Utilitarios().subtrair(10, 5)).toBe(5);
  });

  test("Multiplicar dois valores válidos", () => {
    expect(new Utilitarios().multiplicar(3, 4)).toBe(12);
  });

  test("Dividir dois valores válidos", () => {
    expect(new Utilitarios().dividir(10, 2)).toBe(5);
  });

  test("Divisão por zero", () => {
    expect(() => new Utilitarios().dividir(10, 0));
  });

  test("Verificar se um número é par", () => {
    expect(new Utilitarios().ehPar(4)).toBe(true);
    expect(new Utilitarios().ehPar(7)).toBe(false);
  });

  test("Primeiro elemento do array", () => {
    expect(new Utilitarios().primeiroElemento([1, 2, 3])).toBe(1);
  });

  test("Último elemento do array", () => {
    expect(new Utilitarios().ultimoElemento([1, 2, 3])).toBe(3);
  });

  test("Contar caracteres de uma string", () => {
    expect(new Utilitarios().contarCaracteres("Teste")).toBe(5);
  });

  test("Contar palavras de uma string", () => {
    expect(new Utilitarios().contarPalavras("Olá, como vai você?")).toBe(4);
  });

});
