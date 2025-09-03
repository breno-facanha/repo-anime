function validateMessage(req, res, next){
    const { content, groupId } = req.body;
    const user = req.user;

    if(!content || !groupId) {
        return res.status(400).json({ error: "Content e groupId são obrigatorios" });
    }

    if(typeof content !== 'string' || typeof groupId !== 'number') {
        return res.status(400).json({ error: "Content deve ser uma string e groupId deve ser um número" });
    }

    if(!user) {
        return res.status(401).json({ error: "Usuário não autenticado" });
    }

    req.body.senderId = user.id;
    next();
}

module.exports = {
    validateMessage
};