// const capacidadeTurma = 30;
// const alunos = [];

// const form = document.getElementById('formCadastro');
// const listaAlunos = document.getElementById('listaAlunos');
// const mensagem = document.getElementById('mensagem');

// form.addEventListener('submit', function (event) {
//     event.preventDefault(); 

//     const nome = document.getElementById('nome').value.trim();

//     if (alunos.length < capacidadeTurma) {
//         alunos.push(nome);
//         atualizarLista();
//         document.getElementById('nome').value = ''; 
//     } else {
//         mensagem.textContent = 'A turma já atingiu a capacidade máxima de 30 alunos.';
//         mensagem.style.color = 'red';
//     }
// });

// function atualizarLista() {
//     listaAlunos.innerHTML = ''; 
//     alunos.forEach(aluno => {
//         const li = document.createElement('li');
//         li.textContent = aluno;
//         listaAlunos.appendChild(li);
//     });
//     mensagem.textContent = ''; 
// }


let alunos = []

function createAluno() {
    if(alunos.length <= 30){
        let nome = document.getElementById("nome").value

        alunos.push(nome)

        console.log(alunos)
    }
        else{
            document.getElementById("cadastrarAluno").disabled = true
            document.getElementById("msg").innerText =  "Turma lotada!"
        }
}

function readAlunos(){
    for (i = 0; i < alunos.length; i++) {
        document.getElementById("alunosCadastrados").innerHTML += `<p>${alunos[i]}</p>`
    }
}