import urls from "../models/urls.js";

export const getUrlStats = async (req, res) => {
    try {
        const { _id } = req.params;
        const urlData = await urls.findOne({ _id });

        if (!urlData) {
            return res.status(404).json({ message: 'URL no encontrada' });
        }

        res.status(200).json({
            urlData
        });
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener estadísticas', error: err.message });
    }
};

