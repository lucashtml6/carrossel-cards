const setaDireita = document.getElementById("seta-direita")
const setaEsquerda = document.getElementById("seta-esquerda")
const imagemSetas = document.getElementsByClassName("imagem-seta")
const imagensCarrossel = document.querySelector(".imagens-carrossel")
const conteudo = document.getElementsByClassName("conteudo")

console.log(conteudo)

let indiceImagem = 0

const classes = ['imagem-1', 'imagem-2', 'imagem-3', 'imagem-4']


setaDireita.addEventListener('click', () => {
  indiceImagem++
  setaEsquerda.disabled = false

  console.log(indiceImagem)
  
  imagensCarrossel.classList.remove(classes[indiceImagem-1])
  imagensCarrossel.classList.add(classes[indiceImagem])

  conteudo[indiceImagem-1].classList.remove("mostrar")
  conteudo[indiceImagem].classList.add("mostrar")

  if(indiceImagem > 0) {
    imagemSetas[0].classList.remove("opacidade")
  }

  if(indiceImagem === 3) {
    imagemSetas[1].classList.add("opacidade")
    setaDireita.disabled = true
  }    
})

setaEsquerda.addEventListener('click', () => {
  indiceImagem--
  setaDireita.disabled = false

  if(indiceImagem < 0) {
    indiceImagem = 0
  } else if (indiceImagem > 3) {
    indiceImagem = 3
  } 

  console.log(indiceImagem)
  conteudo[indiceImagem+1].classList.remove("mostrar")
  conteudo[indiceImagem].classList.add("mostrar")

  imagensCarrossel.classList.remove(classes[indiceImagem+1])
  imagensCarrossel.classList.add(classes[indiceImagem])

  if(indiceImagem < 3) {
    imagemSetas[1].classList.remove("opacidade")
  }

  if(indiceImagem === 0) {
    imagemSetas[0].classList.add("opacidade")
    setaEsquerda.disabled = true
  } else {
    setaEsquerda.disabled = false
  }
})
