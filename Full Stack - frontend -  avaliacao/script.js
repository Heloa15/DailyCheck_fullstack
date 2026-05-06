const API_URL = "http://localhost:3000/tarefas";
const WEATHER_KEY = "7735f535500f7ecb5506fe68a0145dc5";

function openForm() {
    document.getElementById('task-form-container').classList.remove('hidden');
}

function closeForm() {
    document.getElementById('task-form-container').classList.add('hidden');
}

function formatDate(date) {
    if (!date) return "";
    return new Date(date).toLocaleDateString('pt-BR');
}

async function renderHome() {
    const container = document.getElementById('tasks-container');
    if (!container) return;

    try {
        const res = await fetch(`${API_URL}/listar`);
        const tasks = await res.json();

        if (!tasks.length) {
            container.innerHTML = "<p>Nenhuma tarefa cadastrada.</p>";
            return;
        }

        container.innerHTML = tasks.map(task => `
            <div class="card">
                <img src="${task.imagem || 'https://picsum.photos/400/250'}">
                <h3>${task.nome}</h3>
                <p><strong>Início:</strong> ${formatDate(task.dataInicio)}</p>
                <p><strong>Fim:</strong> ${formatDate(task.dataFim)}</p>
                <p>${task.descricao}</p>
            </div>
        `).join('');

    } catch {
        container.innerHTML = "<p>Erro ao carregar tarefas.</p>";
    }
}

async function getWeather() {
    const city = document.getElementById('cityInput')?.value;
    const resultDiv = document.getElementById('weatherResult');

    if (!city || !resultDiv) return;

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${WEATHER_KEY}`
        );

        const data = await res.json();

        if (data.cod !== 200) throw new Error(data.message);

        resultDiv.classList.remove('hidden');
        resultDiv.innerHTML = `
            <div class="weather-box">
                <h3>${data.name}</h3>
                <p class="temp">${Math.round(data.main.temp)}°C</p>
                <p>${data.weather[0].description}</p>
            </div>
        `;
    } catch (err) {
        alert("Erro ao buscar clima: " + err.message);
    }
}

document.getElementById('taskForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const taskData = {
        nome: document.getElementById('nome').value,
        dataInicio: document.getElementById('inicio').value,
        dataFim: document.getElementById('fim').value,
        descricao: document.getElementById('descricao').value
    };

    try {
        const res = await fetch(`${API_URL}/cadastrar`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(taskData)
        });

        if (res.ok) {
            closeForm();
            this.reset();
            renderHome();
        } else {
            alert("Erro ao cadastrar.");
        }

    } catch {
        alert("Erro de conexão.");
    }
});

window.onload = renderHome;