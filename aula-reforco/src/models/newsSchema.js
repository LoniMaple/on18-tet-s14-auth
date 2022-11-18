const mongoose = require('mongoose');

const noticiasSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    titulo: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    },
    fonte: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('noticias', noticiasSchema);
