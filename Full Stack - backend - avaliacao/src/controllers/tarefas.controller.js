const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    try {
        const { nome, dataInicio, dataFim, descricao } = req.body;


        const item = await prisma.tarefas.create({
            data: {
                nome,
                dataInicio: new Date(dataInicio), 
                dataFim: new Date(dataFim),      
                descricao,
            }
        });

        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar tarefa." });
    }
};

const listar = async (req, res) => {
    try {
        const lista = await prisma.tarefas.findMany({
            orderBy: { id: 'desc' } 
        });
        res.status(200).json(lista);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar tarefas." });
    }
};

const buscar = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await prisma.tarefas.findUnique({
            where: { id: Number(id) }
        });

        if (!item) return res.status(404).json({ error: "Tarefa não encontrada." });

        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ error: "ID inválido." });
    }
};

const atualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, dataInicio, dataFim, descricao } = req.body;

        const item = await prisma.tarefas.update({
            where: { id: Number(id) },
            data: {
                nome,
                dataInicio: dataInicio ? new Date(dataInicio) : undefined,
                dataFim: dataFim ? new Date(dataFim) : undefined,
                descricao
            }
        });

        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar tarefa." });
    }
};

const excluir = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.tarefas.delete({
            where: { id: Number(id) }
        });

        res.status(200).json({ message: "Tarefa excluída com sucesso." });
    } catch (error) {
        res.status(400).json({ error: "Erro ao excluir tarefa." });
    }
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
};