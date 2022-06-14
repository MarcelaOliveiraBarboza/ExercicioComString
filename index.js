const nome = prompt('Digite seu nome completo')


document.body.innerHTML = `O seu nome é: ${nome} <br / >`;

document.body.innerHTML += `O seu nome tem: ${nome.length} letras <br / >`;

document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br / >`;

document.body.innerHTML += `Qual o primeiro índice da letra "a" no seu nome? ${nome.indexOf('a')} <br / >`;

document.body.innerHTML += `Qual o ultimo índice da letra "a" no seu nome? ${nome.lastIndexOf("a")} <br / >`;

document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3)} <br / >`;

document.body.innerHTML += `As palavras do seu nome são? ${nome.split(' ')} <br / >`;

document.body.innerHTML += `Seu nome com letra maiúscula: ${nome.toUpperCase()} <br / >`;

document.body.innerHTML += `Seu nome com letra minúscula: ${nome.toLowerCase()} <br / >`;


