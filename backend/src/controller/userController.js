import urls from "../models/urls.js";


export const getUrlsByUid = async (req, res) => {
    try {
        const { uid } = req.params;

        const url = await urls.find({ uid });


        if (!url || url.length === 0) {
            return res.status(404).json({ message: 'No se encontraron URLs para este usuario' });
        }

        res.status(200).json(url);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener URLs', error: err.message });
    }
};