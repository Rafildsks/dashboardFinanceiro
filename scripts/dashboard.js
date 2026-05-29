let transacoes = [];
const dados = document.getElementById("dados");
const cardEntradas = document.getElementById("entradas");
const cardSaidas = document.getElementById("saidas");
const cardSaldo = document.getElementById("saldo");

function renderizarTabela() {
  if (transacoes.length === 0) {
    dados.innerHTML = `<tr><td colspan='4' class='text-center py-4 px-6 text-lg border-b'>Nenhuma transação cadastrada</td></tr>`;
  }
  calcularTotais
}

renderizarTabela();

function adicionarTransacao(event) {
  event.preventDefault();
  const desc = document.getElementById("desc").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const tipo = document.getElementById("tipo").value;

  const transacao = {
    data: new Date().toLocaleDateString("pt-br"),
    desc,
    tipo,
    valor,
  };

  console.log(transacao);

  transacoes.push(transacao);

  dados.innerHTML = `${transacoes
    .map(
      (item, index) =>
        `<tr key=${index}>
      <td class="px-6 py-4 whitespace-nowrap">${item.data}</td>
      <td class="px-6 py-4 whitespace-nowrap">${item.desc}</td>
      <td class=${item.tipo === "entrada"? "bg-blue-500"} "px-6 py-4 whitespace-nowrap">${item.tipo}</td>
      <td class="px-6 py-4 whitespace-nowrap">${item.valor}</td>
    </tr>`
    )
    .join("")}
  `;

  renderizarTabela()
}

function calcularTotais() {
  const entradas = transacoes.filter((transacao)=> (
    transacao.tipo === "entrads"
  ))
  .reduce((acc, transacao)=> (acc + transacao.valor), 0)
  
  const saidas = transacoes.filter((transacao)=> (
    transacao.tipo === "saida"
  )).reduce((acc, transacao)=> (acc + transacao.valor), 0)

  const saldo = entradas - saidas
  console.log(saldo)

  cardSaldo.innerHTML = `R$ ${cardSaldo.toFixed(2)}`
  cardEntradas.innerHTML = `R$ ${cardEntradas.toFixed(2)}`;
  cardSaidas.innerHTML = `R$ ${cardSaidas.toFixed(2)}`;

  
  console.log("entradas:",entradas);
  console.log("saidas:", saidas);
}
