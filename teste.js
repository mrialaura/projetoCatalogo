// Seleciona o container da lista
const minhaLista = document.getElementById('minhaLista')

// Armazena os filmes adicionados
const filmesNaLista = []

// Função para adicionar um filme à "Minha Lista"
function adicionarFilme(titulo, descricao, imagem, trailer) {
  if (filmesNaLista.includes(titulo)) {
    alert(`${titulo} já está na sua lista!`)
    return
  }

  filmesNaLista.push(titulo)

  const div = document.createElement('div')
  div.classList.add('filme')

  const img = document.createElement('img')
  img.src = imagem || 'img/placeholder.jpg'
  img.alt = titulo
  img.addEventListener('click', () => {
    window.open(trailer, '_blank');
  })

  const h3 = document.createElement('h3')
  h3.textContent = titulo

  const p = document.createElement('p')
  p.textContent = descricao

  const botaoRemover = document.createElement('button')
  botaoRemover.textContent = 'Remover da lista'
  botaoRemover.addEventListener('click', () => {
    minhaLista.removeChild(div)
    const index = filmesNaLista.indexOf(titulo)
    if (index !== -1) filmesNaLista.splice(index, 1)
  })

  div.appendChild(img)
  div.appendChild(h3)
  div.appendChild(p)
  div.appendChild(botaoRemover)

  minhaLista.appendChild(div)
}

// Função para verificar se o filme está na lista
function verificarCatalogo(titulo, idResposta) {
  const resposta = document.getElementById(idResposta)
  if (filmesNaLista.includes(titulo)) {
    resposta.textContent = `${titulo} está na sua lista!`
    resposta.style.color = 'limegreen'
  } else {
    resposta.textContent = `${titulo} ainda não está na lista.`
    resposta.style.color = 'red'
  }
}

// Conectando os botões aos filmes
document.getElementById('adicionaFilme01').addEventListener('click', () => {
  adicionarFilme(
    'Brilho eterno de uma mente sem lembranças',
    'Joel se surpreende ao saber que seu amor verdadeiro, Clementine, o apagou completamente da memória.',
    './img/brilhoEterno.jpeg',
    'https://youtu.be/0-sPkez7OqI'
  )
})

document.getElementById('verificaCatalago01').addEventListener('click', () => {
  verificarCatalogo('Brilho eterno de uma mente sem lembranças', 'respostaBotao01')
})

document.getElementById('adicionaFilme02').addEventListener('click', () => {
  adicionarFilme(
    'Harry Potter e a Pedra Filosofal',
    'Harry Potter é um garoto órfão que vive infeliz com seus tios, até que recebe uma carta para estudar em Hogwarts.',
    'img/harryPotter.jpeg',
    'https://youtu.be/9fIObnIGMlI?t=3'
  )
})

document.getElementById('verificaCatalago02').addEventListener('click', () => {
  verificarCatalogo('Harry Potter e a Pedra Filosofal', 'respostaBotao02')
})

document.getElementById('adicionaFilme03').addEventListener('click', () => {
  adicionarFilme(
    'Gênio Indomável',
    'Will é um jovem brilhante que trabalha como faxineiro em uma universidade, até que descobre seu talento e propósito com a ajuda de um psicólogo.',
    'img/genioIndomavel.jpeg',
    'https://youtu.be/2V_9MuHuSVc?t=1'
  )
})

document.getElementById('verificaCatalago03').addEventListener('click', () => {
  verificarCatalogo('Gênio Indomável', 'respostaBotao03')
})

document.getElementById('adicionaFilme04').addEventListener('click', () => {
  adicionarFilme(
    'Toy Story',
    'Woody, um boneco cowboy, lidera seus amigos brinquedos e enfrenta ciúmes quando Buzz Lightyear chega.',
    'img/toyStory.jpeg',
    'https://youtu.be/v-PjgYDrg70?t=1'
  )
})

document.getElementById('verificaCatalago04').addEventListener('click', () => {
  verificarCatalogo('Toy Story', 'respostaBotao04')
})

document.getElementById('adicionaFilme05').addEventListener('click', () => {
  adicionarFilme(
    'Os Incríveis',
    'Uma família de super-heróis tenta viver uma vida normal, mas precisa voltar à ação para salvar o mundo.',
    'img/osIncriveis.jpeg',
    'https://youtu.be/uz5nMVBGDjk?t=2'
  )
})

document.getElementById('verificaCatalago05').addEventListener('click', () => {
  verificarCatalogo('Os Incríveis', 'respostaBotao05')
})

document.getElementById('adicionaFilme06').addEventListener('click', () => {
  adicionarFilme(
    'O Predador',
    'Um grupo de soldados é caçado por uma criatura alienígena mortal na selva.',
    'img/oPredador.jpeg',
    'https://youtu.be/_1wDBNHYDv8?t=1'
  )
})

document.getElementById('verificaCatalago06').addEventListener('click', () => {
  verificarCatalogo('O Predador', 'respostaBotao06')
})

document.getElementById('adicionaFilme07').addEventListener('click', () => {
  adicionarFilme(
    'Pobres Criaturas',
    'Bella Baxter é trazida de volta à vida e embarca em uma jornada pelo mundo em busca de liberdade e igualdade.',
    'img/pobresCriaturas.jpeg',
    'https://youtu.be/9DEOJkmZLd8'
  )
})

document.getElementById('verificaCatalago07').addEventListener('click', () => {
  verificarCatalogo('Pobres Criaturas', 'respostaBotao07')
})

document.getElementById('adicionaFilme08').addEventListener('click', () => {
  adicionarFilme(
    'Velozes e Furiosos',
    'Brian O’Conner se infiltra no submundo dos rachas de rua e enfrenta desafios de lealdade e amizade.',
    'img/velozesFuriosos.jpeg',
    'https://youtu.be/DXc8tiB8TBI?t=1'
  )
})

document.getElementById('verificaCatalago08').addEventListener('click', () => {
  verificarCatalogo('Velozes e Furiosos', 'respostaBotao08')
})