const axios = require('axios').default;

class EncuestaController{
    async index(req, res){
        let data1 = await axios.get('http://localhost:5000/api/encuesta');
        const data = data1.data.data;
        res.render('home',{data})
    }

    async get(req, res){
        const {id} = req.params;
        const data = await axios.get(`http://localhost:5000/api/encuesta/${id}`);
        console.log(data.data);
    }

    async create(req, res){
        const data = await axios.post(`http://localhost:5000/api/encuesta`, req.body);
        res.redirect('/');
    }

    async edit(req, res){
        const {id} = req.params;
        const data = await axios.patch(`http://localhost:5000/api/encuesta/${id}`, req.body);
        res.redirect('/');
    }

    async delete(req, res){
        const {id} = req.params;
        const data = await axios.delete(`http://localhost:5000/api/encuesta/${id}`);
        res.redirect('/');
    }

    async vistaAgregar(req, res){
        res.render('add');
    }

    async vistaEditar(req, res){
        const {id} = req.params;
        const data = await axios.get(`http://localhost:5000/api/encuesta/${id}`);
        res.render('edit',{data: data.data.data});
    }
    
}

module.exports = new EncuestaController();