const form = document.getElementById('formAtividade');
const imgAprovado = '<img src="images/images/aprovado.png" alt="Emoji festejando" />'
const imgReprovado = '<img src="images/images/reprovado.png" alt="Emoji triste" />'
const atividades = []
const notas = []
const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class = "resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite uma nota mínima: "))

var linhas = ''

form.addEventListener('submit', function(e){
   e.preventDefault() //para não deixar que a página atualize sozinha.
   adicionaLinha()
   atulizaTabela()
   atualizaMediaFinal()
});

function adicionaLinha(){
   const inputNomeAtividade = document.getElementById('nAtividade');
   const inputNotaAtividade = document.getElementById('nNota');

   if(atividades.includes(inputNomeAtividade.value)){
      alert(`A atividade ${inputNomeAtividade.value} já foi inserida!`)
   }
   else{
      atividades.push(inputNomeAtividade.value)
      notas.push(parseFloat(inputNotaAtividade.value))

      var linha = '<tr>'
      linha += `<td>${inputNomeAtividade.value}</td>`
      linha += `<td>${inputNotaAtividade.value}</td>`
      linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
      linha += `<tr>`

      linhas += linha
   }
   inputNomeAtividade.value = ''
   inputNotaAtividade.value = ''
}

function atulizaTabela(){
   const corpoTabela = document.querySelector('tbody');
   corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal(){
   const mediaFinal = calculaMediaFinal()

   document.getElementById('mediaFinalValor').innerHTML = mediaFinal
   document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal(){
   var somaDasNotas = 0

   for (var i = 0; i < notas.length; i++){
      somaDasNotas += notas[i];
   }

   return somaDasNotas / notas.length
}