const caracteristicas = [
    {
        imagem: "imagens2.jpg",
        titulo: "Hobbys",
        descricao: "Croche, leituras e assistir filmes."
    },
    {
        imagem: "imagens3.jpg",
        titulo: "Livros em que ela já leu",
        descricao: "Uma mulher no escuro, a mulher na janela, jantar secreto, a metade sombria etc."
    },
    {
        imagem: "caminho/para/imagem3.jpg",
        titulo: "Proatividade",
        descricao: "Antecipo problemas e busco soluções antes que se tornem críticas."
    },
    {
        imagem: "caminho/para/imagem4.jpg",
        titulo: "Organização",
        descricao: "Metódico e cuidadoso com prazos e detalhes importantes."
    },
    {
        imagem: "caminho/para/imagem5.jpg",
        titulo: "Adaptabilidade",
        descricao: "Flexível e capaz de me ajustar rapidamente a novas situações."
    }
];

// Elementos do DOM
const carrosselTrack = document.getElementById('carrossel-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Função para criar os itens do carrossel
function criarCarrossel() {
    carrosselTrack.innerHTML = '';
    
    caracteristicas.forEach((caracteristica, index) => {
        const item = document.createElement('div');
        item.className = 'caracteristica-item';
        item.innerHTML = `
            <img src="${caracteristica.imagem}" alt="${caracteristica.titulo}">
            <h3>${caracteristica.titulo}</h3>
            <p>${caracteristica.descricao}</p>
        `;
        carrosselTrack.appendChild(item);
    });
    
    atualizarCarrossel();
}

// Função para atualizar a posição do carrossel
function atualizarCarrossel() {
    const itemWidth = document.querySelector('.caracteristica-item').offsetWidth + 20; // + gap
    carrosselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Event listeners para os botões
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        atualizarCarrossel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < caracteristicas.length - 1) {
        currentIndex++;
        atualizarCarrossel();
    }
});

// Inicializar o carrossel quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    criarCarrossel();
    
    // Atualizar carrossel quando a janela for redimensionada
    window.addEventListener('resize', atualizarCarrossel);
});

// Funções para personalização fácil (opcional)
function atualizarPerfil(novoNome, novaProfissao, novaDescricao, novaFoto) {
    if (novoNome) document.getElementById('nome').textContent = novoNome;
    if (novaProfissao) document.getElementById('profissao').textContent = novaProfissao;
    if (novaDescricao) document.getElementById('descricao').textContent = novaDescricao;
    if (novaFoto) document.getElementById('foto-perfil').src = novaFoto;
}

// Exemplo de uso para personalizar facilmente:
// atualizarPerfil("João Silva", "Desenvolvedor Full Stack", "Novo texto sobre mim...", "nova-foto.jpg");