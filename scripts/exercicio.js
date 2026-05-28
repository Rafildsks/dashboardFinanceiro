// Crie um programa que receba a quantidade total de alunos e a quantidade dos que estão presentes e mostre a quantidade de alunos faltantes

function ControleFinanceiro() {
  const alunosTotal = Number(prompt("Qual a quantidade total de aluno? "));
  const alunosPresentes = Number(prompt("Quantos alunos estão presentes? "));

  const alunosFaltantes = alunosTotal - alunosPresentes;
  alert(`${alunosFaltantes} Essa foram a quantidade de alunos faltanttes`);
}

ControleFinanceiro();


// Crie uma função tabuada() que: Pede um número e mostra na tela a tabuada desse número de 1 a 10. Utilize a manipulação do DOM com getElementById() e innerHTML.
