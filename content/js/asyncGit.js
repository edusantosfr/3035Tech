const githubUsername = 'torvalds'

//função para fazer a solicitacao a API e retornar promise

function fetchGithubUserData(username){
    const apiUrl = `https://api.github.com/users/${username}`

    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok){
                throw new Error(`Erro ao buscar dados do usuário ${username}`)
            }
            return response.json()
        })
        .catch((error) => {
            console.error(error)
        })
}

//Chamar a função e tratar a Promise
fetchGithubUserData(githubUsername)
.then((userData) => {
    console.log('Dados do usuário:', userData)
})
.catch((error) => {
    console.error('Erro ao buscar os dados', error)
})

