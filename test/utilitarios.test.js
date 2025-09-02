const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {

    test("Somar dois valores válidos", () => {
        expect(new Utilitarios().somar(5, 10)).toBe(15);
        expect(new Utilitarios().somar(2, 12)).toBe(14);

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
        expect(() => new Utilitarios().dividir(10, 0).toThrowError('Divisão por zero'));
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
        expect(() => new Utilitarios().dividir(10, 0)).toThrow("Divisão por zero");
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

    test("Converter string para maiúsculas", () => {
        expect(new Utilitarios().paraMaiusculas("olá")).toBe("OLÁ");
    });

    test("Converter string para minúsculas", () => {
        expect(new Utilitarios().paraMinusculas("OLÁ")).toBe("olá");
    });

    test("Primeira letra maiúscula", () => {
        expect(new Utilitarios().primeiraLetraMaiuscula("olá")).toBe("Olá");
    });

    test("Repetir texto", () => {
        expect(new Utilitarios().repetirTexto("abc", 3)).toBe("abcabcabc");
    });

    test("Remover espaços de uma string", () => {
        expect(new Utilitarios().removerEspacos("  Teste de espaço  ")).toBe("Teste de espaço");
    });

    test("Juntar array com separador", () => {
        expect(new Utilitarios().juntarArray([1, 2, 3], "-")).toBe("1-2-3");
    });

    test("Gerar número aleatório", () => {
        const num = new Utilitarios().gerarNumeroAleatorio(50);
        expect(num).toBeGreaterThanOrEqual(0);
        expect(num).toBeLessThan(50);
        const numMax = new Utilitarios().gerarNumeroAleatorio();
        expect(numMax).toBeGreaterThanOrEqual(0);
        expect(numMax).toBeLessThan(100);
    });

    test("Remover duplicados do array", () => {
        expect(new Utilitarios().removerDuplicados([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test("Verificar se uma string é um palíndromo", () => {
        expect(new Utilitarios().ehPalindromo("arara")).toBe(true);
        expect(new Utilitarios().ehPalindromo("olá")).toBe(false);
    });

    test("Mesclar dois objetos", () => {
        const obj1 = { nome: "João", idade: 30 };
        const obj2 = { cidade: "São Paulo", pais: "Brasil" };
        const resultado = new Utilitarios().mesclarObjetos(obj1, obj2);
        expect(resultado).toEqual({ nome: "João", idade: 30, cidade: "São Paulo", pais: "Brasil" });
    });

    test("Ordenar array de números", () => {
        expect(new Utilitarios().ordenarArray([3, 1, 4, 2])).toEqual([1, 2, 3, 4]);
    });

    test("Inverter array", () => {
        expect(new Utilitarios().inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
    });

    test("Inverter string", () => {
        expect(new Utilitarios().inverterString("abcd")).toBe("dcba");
    });

    test("Verificar se é número", () => {
        expect(new Utilitarios().ehNumero(10)).toBe(true);
        expect(new Utilitarios().ehNumero("teste")).toBe(false);
    });
    test("Retornar o tamanho de uma String", () => {
        expect(new Utilitarios().tamanhoArray([0,1,2,3,4])).toBe(5);
    })
    test("Retorna a media do array",() =>{
        expect(new Utilitarios().mediaArray([2,2,2,2,2,2])).toBe(2);
        expect(new Utilitarios().mediaArray(1)).toBe(0);
    })
});


