var elementoTabelaEquipe = document.getElementById('tabela-equipe');
var listaEquipes = [];

function exibirNaTela() {
    elementoTabelaEquipe.innerHTML = '';
    listaEquipes.forEach((equipe, indice) => {
        elementoTabelaEquipe.innerHTML +=
        `<tr>
            <td>${equipe.nome}</td>
            <td>${equipe.vitorias}</td>
            <td>${equipe.empates}</td>
            <td>${equipe.derrotas}</td>
            <td>${equipe.pontos}</td>
            <td id='areaButtons'><button class='actionsButtons' id='vitoriaButton' onClick="adicionarVitoria(${indice})">Vitória</button></td>
            <td id='areaButtons'><button class='actionsButtons' id='empateButton' onClick="adicionarEmpate(${indice})">Empate</button></td>
            <td id='areaButtons'><button class='actionsButtons' id='derrotaButton' onClick="adicionarDerrota(${indice})">Derrotar</button></td>
            <td id='areaButtons'><button class='actionsButtons' id='resetButton' onClick="resetarTime(${indice})">Resetar</button></td>
            <td id='areaButtons'><button class='actionsButtons' id='removeButton' onClick="removerTime(${indice})">X</button></td>
        </tr>
        `;
    });
}

function adicionarEquipe() {
    var nomeEquipe = document.getElementById('campoNomeNovaEquipe').value; //pega o nome da equipe
    listaEquipes.push({
        nome: nomeEquipe,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    });
    document.getElementById('campoNomeNovaEquipe').value = ''; //limpa caixa de texto
    exibirNaTela();
}

function adicionarVitoria(indice) {
    listaEquipes[indice].vitorias++;
    listaEquipes[indice].pontos += 3;
    exibirNaTela();
}

function adicionarEmpate(indice) {
    listaEquipes[indice].empates++;
    listaEquipes[indice].pontos += 1;
    exibirNaTela();
}

function adicionarDerrota(indice) {
    listaEquipes[indice].derrotas++;
    exibirNaTela();
}

function resetarTime(indice) {
    listaEquipes[indice].vitorias = 0;
    listaEquipes[indice].empates = 0;
    listaEquipes[indice].derrotas = 0;
    listaEquipes[indice].pontos = 0;
    exibirNaTela();
}

function removerTime(indice) {
    listaEquipes.splice(indice, 1);
    exibirNaTela();
}