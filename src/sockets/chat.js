module.exports = (io, socket) => {
    socket.on('joinGroup', (groupId) => {
        socket.join(groupId)
        console.log(`Usuário ${socket.id} entrou no grupo: ${groupId}`);
    })

    socket.on('sendMessage', ({groupId, message, sender}) => {
        const payload = {
            sender,
            message,
            timestamp: new Date()
        }

        socket.to(groupId).emit('receiveMessage', payload);

        socket.emit('receiveMessage', payload);
    })



}