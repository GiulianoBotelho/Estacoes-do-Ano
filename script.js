function mudarEstacao(estação){
let res = document.querySelector ('div#res')
let imagem = document.querySelector ('img#imagem')
let x = document.querySelector('h1#x')
if (estação === 'Primavera'){
    document.body.style.background = 'pink'
    imagem.src = 'Assets/primavera.jpg'
    imagem.className = 'img'
    res.innerHTML = `Primavera: temperaturas voltam a ficar amenas, flores florescem e os dias e noites têm a mesma duração. Aos poucos, os dias vão se tornando mais longos e as temperaturas aumentam, indicando a chegada do verão. `
    x.innerHTML = `${estação}`

} else if (estação == 'Verão') {

    document.body.style.background = 'rgb(246, 166, 17)'
    imagem.src ='Assets/verao.jpg'
    imagem.className = 'img'
    res.innerHTML = `Verão: período marcado pelas altas temperaturas e dias mais longos. O calor resulta em uma evaporação mais rápida da água acumulada nos solos, resultando em chuvas constantes em algumas regiões.`
    x.innerHTML = `${estação}`
    

} else if (estação === 'Outono'){
    document.body.style.background = 'brown'
    imagem.src = 'Assets/Outono.jpg'
    imagem.className = 'img'
    res.innerHTML = `Outono: temperatura amena, tempo mais fresco e queda das folhas das árvores. Os dias começam a ficar mais curtos e a temperatura começa a esfriar gradativamente.`
    x.innerHTML = `${estação}`
} else{
    estação == 'Inverno'
    document.body.style.background = 'rgb(147, 249, 249)'
    imagem.src = 'Assets/inverno.jpg'
    imagem.className = 'img'
    res.innerHTML = `Inverno: época mais fria do ano, com temperaturas baixas e presença de neve em algumas localidades. Os períodos de sol são mais curtos e as noites mais longas. É comum a migração de espécies de animais para regiões em que as temperaturas estão mais elevadas.`
    x.innerHTML = `${estação}`

}
}



