let addTransacao = [];

function adicionarTransacao(event) {
  event.preventDefault();
  const desc = document.getElementById("desc").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const tipo = document.getElementById("tipo").value;
  const dados = document.getElementById("dados");

  const trasacao = {
    data: new Date().toLocaleDateString("pt-br"),
    desc,
    tipo,
    valor,
  };

  console.log(trasacao);

  addTransacao.push(trasacao);

  dados.innerHTML = `${addTransacao.map(
    (item, index) =>
      `<tr hey=${index}>
      <td>${item.data}</td>
      <td>${item.desc}</td>
      <td>${item.tipo}</td>
      <td>${item.valor}</td>
    </tr>`
  )}
  `;
}

console.log(addTransacao);
