// Crie um programa que receba a quantidade total de alunos e a quantidade dos que estão presentes e mostre a quantidade de alunos faltantes

function ControleFinanceiro() {
  const alunosTotal = Number(prompt("Qual a quantidade total de aluno? "));
  const alunosPresentes = Number(prompt("Quantos alunos estão presentes? "));

  const alunosFaltantes = alunosTotal - alunosPresentes;
  alert(`${alunosFaltantes} Essa foram a quantidade de alunos faltanttes`);
}

ControleFinanceiro();
