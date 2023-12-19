import { getUser } from './services/user.js';
import { getRepositories } from './services/repositories.js';
import { user } from './objects/user.js';
import { screen } from './objects/screen.js';
import { getEvents } from './services/events.js';
import { eventsQuantity } from './services/variables.js';

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;

    if(validateEmptyInput(userName)) return;

    getUserData(userName);
});

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;

    if (isEnterKeyPressed) {

        if(validateEmptyInput(userName)) return;

        getUserData(userName);
    };
});

async function getUserData(userName) {
    
    const userReponse = await getUser(userName);

    if(userReponse.message === "Not Found")
    {
        screen.renderNotFound();
        return;
    };

    const repositoriesResponse = await getRepositories(userName);
    const eventsResponse = await getEvents(userName);
    const filtredEvents = eventsResponse.filter(e => e.type === "CreateEvent" ||
                                                e.type === "PushEvent").slice(0, eventsQuantity);

    user.setInfo(userReponse);
    user.setRepositories(repositoriesResponse);
    user.setEvents(filtredEvents);

    screen.renderUser(user);

};

function validateEmptyInput(userName) {
    if(userName.length === 0)
    {
        alert('Preencha o campo com o nome do usuário do GitHub!');
        return true;
    };
};