const EncuestaModel = require('../models/encuesta');

class EncuestaController{
    async index(req, res){
        const data = await EncuestaModel.find();
        res.json({data});
    }

    async get(req, res){
        const { id } = req.params;
        const data = await EncuestaModel.findById(id);
        res.json({data});
    }

    async create(req, res){
        const data = await EncuestaModel.create(req.body);
        res.json({data});
    }

    async update(req, res){
        const {id} = req.params;
        const data = await EncuestaModel.findByIdAndUpdate(id, req.body);
        res.json({data});
    }

    async delete(req, res){
        const {id} = req.params;
        const data = await EncuestaModel.findByIdAndDelete(id);
        res.json({data});
    }
}

module.exports = new EncuestaController();