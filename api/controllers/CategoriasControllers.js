class CategoriasControllers{
    //get
    static async pegarTodosAsCategorias(req, res) {
        try {
            const categorias = await database.categorias.findAll();
            return res.status(200).json(categorias);
        } catch (error) {
            return res.status(500).json(error.massage);
        }
    }

    //delete
    static async deletarCategoria(req, res){
        const { id } = req.params
        try{
            await database.categorias.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ mensagem: 'Categoria deletado com sucesso' })
        } catch (error) {
            return res.status(500).jason(error.message)
        }
    }

    //put
    static async editaCategoria(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.categorias.update(novasInfos, { where: { id: Number(id) } })
            const categoriaAtualizado = await database.categorias.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(categoriaAtualizado)
        } catch (error) {
            return res.status(500).json(error.massage)
        }
    }
}

module.exports = CategoriasControllers