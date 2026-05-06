## Atividade Full Stack Web 

# 🌸 Daily Check

Aplicação web para gerenciamento de tarefas e consulta de clima em tempo real.

Interface moderna com tema **rosa + laranja**, desenvolvida com foco em simplicidade e usabilidade.

---

## 🚀 Demonstração

📌 Funcionalidades principais:

- 📝 Cadastro de tarefas
- 📋 Listagem em cards
- 🌤️ Consulta de clima por cidade
- 📱 Layout responsivo

---

## 📸 Preview

### 🏠 Tela de Tarefas

(<img width="1905" height="522" alt="image" src="https://github.com/user-attachments/assets/8dda7326-cf37-4515-a2d2-81056c3af015" />
)

### 🌡️ Tela de Clima

(<img width="1906" height="605" alt="image" src="https://github.com/user-attachments/assets/6c58633d-a6ed-41a3-b338-25151217b6eb">)

---

## 🛠️ Tecnologias

- HTML
- CSS
- JavaScript 
- API Key
- OpenWeather API

---

## 📂 Estrutura do Projeto
📁 daily-check
│
├── index.html # Página principal (tarefas)
├── temperatura.html # Página de clima
├── style.css # Estilos do projeto
├── script.js # Lógica da aplicação


## ⚙️ Como rodar o projeto

### 1. Baixar o projeto

git clone https://github.com/Heloa15/DailyCheck_fullstack.git

---

### 2. Rodar o backend

A aplicação depende de uma API local rodando em:


http://localhost:3000/tarefas


### Rotas necessárias:

- `GET /listar` → listar tarefas
- `POST /cadastrar` → criar tarefa
- `DELETE /deletar/:id` → excluir tarefa

---

## 🌤️ Configuração da API de Clima

O projeto usa a API do OpenWeather.

### 🔑 Passos:

- > 1. Crie uma conta:
https://openweathermap.org/

- > 2. Gere sua API Key:
https://home.openweathermap.org/api_keys

- > 3. No arquivo `script.js`, adicione:

```js
const key = "SUA_API_KEY_AQUI";
```
