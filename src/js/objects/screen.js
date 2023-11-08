const screen =
{
    userProfile: document.querySelector('.profile-data'),
    renderUser(user)
    {
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do Perfil do Usuário" />
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 🤦‍♂️'}</h1>
                                                <h2>${user.login}</h2>
                                                <p>${user.bio ?? 'Não possui BIO cadastrada 😢'}</p>
                                                <p>👥 ${user.followers} Seguidores</p>
                                                <p>👤 ${user.following} Seguindo</p>
                                            </div>
                                      </div>`

        let repositoriesItens = '';
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if(user.repositories.length > 0)
        {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        };

        let eventsItens = '';
        user.events.forEach(event => eventsItens += `<li><span>${event.repo.name}</span> - ${event.payload.commits ? event.payload.commits[0].message : 'Não possui commits'}</li>`);

        if(user.events.length > 0)
        {
            this.userProfile.innerHTML += `<div class="events">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                           </div>`
        };
    },

    renderNotFound()
    {
        this.userProfile.innerHTML = '<h3>Usuário não encontrado!</h3>';
    }
};

export { screen };