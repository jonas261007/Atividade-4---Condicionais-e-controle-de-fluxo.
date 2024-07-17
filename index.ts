// 1. Verificar se um número é positivo, negativo ou zero.
const verificarNumero = (numero: number): string => {
    if (numero > 0) return "Positivo";
    if (numero < 0) return "Negativo";
    return "Zero";
}

// 2. Verificar se é maior ou menor de idade.
const verificarIdade = (idade: number): string => {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

// 3. Comparar dois números inteiros.
const compararNumeros = (num1: number, num2: number): string => {
    if (num1 > num2) return `${num1} é maior que ${num2}`;
    if (num1 < num2) return `${num2} é maior que ${num1}`;
    return `${num1} é igual a ${num2}`;
}

// 4. Verificar se um número é par ou ímpar.
const verificarParidade = (numero: number): string => {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

// 5. Calcular a média e verificar se o aluno está aprovado ou reprovado.
const calcularMedia = (notas: number[]): string => {
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    return media >= 7 ? "Aprovado" : "Reprovado";
}

// 6. Comparar o tamanho dos nomes.
const compararNomes = (nome1: string, nome2: string): string => {
    if (nome1.length > nome2.length) return `${nome1} tem mais caracteres`;
    if (nome1.length < nome2.length) return `${nome2} tem mais caracteres`;
    return "Ambos os nomes têm a mesma quantidade de caracteres";
}

// 7. Verificar se um caractere é vogal ou consoante.
const verificarCaractere = (caractere: string): string => {
    const vogais = 'aeiouAEIOU';
    return vogais.includes(caractere) ? "Vogal" : "Consoante";
}

// 8. Imprimir três números em ordem crescente.
const ordenarNumeros = (num1: number, num2: number, num3: number): number[] => {
    return [num1, num2, num3].sort((a, b) => a - b);
}

// 9. Calcular IMC e verificar a categoria.
const calcularIMC = (peso: number, altura: number): string => {
    const imc = peso / (altura * altura);
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    if (imc < 39.9) return "Obeso";
    return "Muito obeso";
}

// 10. Exibir o nome do mês.
const obterNomeDoMes = (mes: number): string => {
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return meses[mes - 1];
}

// 11. Calcular aumento de salário.
const calcularAumento = (salario: number): number => {
    return salario > 1500 ? salario * 1.1 : salario * 1.15;
}

// 12. Verificar divisibilidade por 3 e 5.
const verificarDivisibilidade = (numero: number): string => {
    return (numero % 3 === 0 && numero % 5 === 0) ? "Divisível por 3 e 5" : "Não é divisível por 3 e 5 ao mesmo tempo";
}

// 13. Verificar se é dia útil ou fim de semana.
const verificarDiaDaSemana = (dia: string): string => {
    const diasUteis = ["segunda-feira", "terca-feira", "quarta-feira", "quinta-feira", "sexta-feira"];
    const fimDeSemana = ["sabado", "domingo"];
    if (diasUteis.includes(dia.toLowerCase())) return "Dia útil";
    if (fimDeSemana.includes(dia.toLowerCase())) return "Fim de semana";
    return "Dia inválido";
}

// 14. Exibir mensagem conforme a nota.
const avaliarNota = (nota: number): string => {
    switch (nota) {
        case 1: return "Muito insuficiente";
        case 2: return "Insuficiente";
        case 3: return "Regular";
        case 4: return "Bom";
        case 5: return "Muito bom";
        default: return "Nota inválida";
    }
}

// 15. Exibir dia da semana correspondente.
const obterDiaDaSemana = (numero: number): string => {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return dias[numero - 1];
}

// 16. Arredondar número decimal.
const arredondarNumero = (numero: string): number | string => {
    try {
        const num = parseFloat(numero);
        if (isNaN(num)) throw new Error("Valor inválido");
        return Math.round(num);
    } catch (error) {
        return error.message;
    }
}

// 17. Verificar categoria da idade.
const verificarCategoriaIdade = (idade: number): string => {
    if (idade >= 0 && idade <= 1) return "Bebê";
    if (idade <= 12) return "Criança";
    if (idade <= 18) return "Adolescente";
    if (idade > 18) return "Adulto";
    return "Idade inválida";
}

// 18. Verificar estado civil.
const verificarEstadoCivil = (estado: string): string => {
    switch (estado.toLowerCase()) {
        case "solteiro": return "Solteiro";
        case "casado": return "Casado";
        case "divorciado": return "Divorciado";
        case "viuvo": return "Viúvo";
        default: return "Estado civil inválido";
    }
}

// 19. Realizar operação matemática.
const realizarOperacao = (num1: number, num2: number, operacao: number): number | string => {
    switch (operacao) {
        case 1: return num1 + num2;
        case 2: return num1 - num2;
        case 3: return num1 * num2;
        case 4: return num1 / num2;
        default: return "Operação inválida";
    }
}

// 20. Garantir que idade seja um valor inteiro.
const lerIdade = (idade: string): number | string => {
    try {
        const idadeInt = parseInt(idade);
        if (isNaN(idadeInt)) throw new Error("Valor inválido");
        return idadeInt;
    } catch (error) {
        return error.message;
    }
}

// 21. Converter metros para outras unidades.
const converterMetros = (metros: string): string => {
    try {
        const metrosNum = parseFloat(metros);
        if (isNaN(metrosNum)) throw new Error("Valor inválido");
        const cm = metrosNum * 100;
        const mm = metrosNum * 1000;
        const km = metrosNum / 1000;
        return `${metrosNum} metros são ${cm} centímetros, ${mm} milímetros e ${km} quilômetros`;
    } catch (error) {
        return error.message;
    }
}

// Funções de exemplo para testar a execução dos programas.
console.log(verificarNumero(10)); // Positivo
console.log(verificarIdade(20)); // Maior de idade
console.log(compararNumeros(10, 20)); // 20 é maior que 10
console.log(verificarParidade(4)); // Par
console.log(calcularMedia([7, 8, 9])); // Aprovado
console.log(compararNomes("Alice", "Bob")); // Alice tem mais caracteres
console.log(verificarCaractere("a")); // Vogal
console.log(ordenarNumeros(3, 1, 2)); // [1, 2, 3]
console.log(calcularIMC(70, 1.75)); // Peso normal
console.log(obterNomeDoMes(7)); // Julho
console.log(calcularAumento(1600)); // 1760
console.log(verificarDivisibilidade(15)); // Divisível por 3 e 5
console.log(verificarDiaDaSemana("Sábado")); // Fim de semana
console.log(avaliarNota(4)); // Bom
console.log(obterDiaDaSemana(3)); // Terça-feira
console.log(arredondarNumero("3.7")); // 4
console.log(verificarCategoriaIdade(15)); // Adolescente
console.log(verificarEstadoCivil("casado")); // Casado
console.log(realizarOperacao(10, 5, 1)); // 15
console.log(lerIdade("25")); // 25
console.log(converterMetros("1.5")); // 1.5 metros são 150 centímetros, 1500 milímetros e 0.0015 quilômetros
