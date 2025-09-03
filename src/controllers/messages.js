const { get } = require('../app');
const { Messages } = require('../models');

async function createMessage(req, res) {
   try {
    await Messages.create(req.body);
    res.status(201).json({ message: "Mensagem criada com sucesso" });
   } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar mensagem" });
   } 
   
}

async function getMessages(req, res) {
  const { groupId } = req.params;
  try {
    const messages = await Messages.findAll({
      where: { 
        groupId: groupId
      },
    });
    res.send(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar mensagens" });
  }
}

module.exports = {
  createMessage,
  getMessages
};