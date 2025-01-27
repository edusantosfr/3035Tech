//PROMISES

//simular uma leitura de arquivo
function lerArquivo() {

    return new Promise((resolve, reject) => {
        //simular o tempo de resposta de leitura
        setTimeout(() => {
            const arquivo = 'Conteúdo do arquivo lido'
            const erro = false

            if (!erro) {
                resolve(arquivo)
            } else {
                reject("Arquivo não compatível")
            }

        }, 2000)
    })
}

lerArquivo().then(resposta => {
    console.log('Arquivo lido com sucesso: ', resposta)
})
.catch(erro => {
    console.error('Erro ao ler o arquivo: ', erro)
})