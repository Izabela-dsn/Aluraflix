class CategoriasControllers{
    static async pegarTodosAsCategorias(req, res) {
        try {
            const categorias = await database.categorias.findAll();
            return res.status(200).json(categorias);
        } catch (error) {
            return res.status(500).json(error.massage);
        }
    }
}

module.exports = CategoriasControllers