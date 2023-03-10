'use strict'

const viaCepApi = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const res = await fetch(url)

    const infosCep = await res.json()
    return infosCep
}

const addInfosLocal = async() => {

    var cepNumber = document.getElementById('cep').value

console.log(cepNumber)

var cepInfos = await viaCepApi(cepNumber)
console.log(cepInfos)


document.getElementById('cidade').value = `${cepInfos.localidade}`
document.getElementById('estado').value = `${cepInfos.uf}`
document.getElementById('bairro').value = `${cepInfos.bairro}`
document.getElementById('rua').value = `${cepInfos.logradouro}`
document.getElementById('cep').value = `${cepInfos.cep}`
document.getElementById('complemento').value = `${cepInfos.complemento}`
}

document.querySelector('#buscar').addEventListener('click', addInfosLocal)

// ✅ Check if element exists before calling addEventListener()