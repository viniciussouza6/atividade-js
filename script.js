function adicionarItem() {
    const itemDigitado = document.querySelector('#item').value
    const lista = document.querySelector('#lista')
    lista.innerHTML += `<li>${itemDigitado}</li>`
}

const input = document.querySelector('#item')
input.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        adicionarItem()

    }
})