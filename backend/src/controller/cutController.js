import urls from '../models/urls.js';
import bcrypt from "bcrypt"
import crypto from 'crypto';

export const cut = async (req, res) => {
  try {
    const { url, uid, passwordUrl, clickLimit, expiresAt } = req.body;

    if (!url) {
      return res.status(400).json({ msj: "Bad request" });
    } else {

      const hashedPassword = passwordUrl ? await bcrypt.hash(passwordUrl, 10) : null;

      const code = crypto.randomBytes(3).toString('hex').slice(0, 5);

      const newUrl = new urls({
        url,
        uid,
        code,
        passwordUrl: hashedPassword,
        clickLimit,
        expiresAt
      });


      await newUrl.save();
      return res.status(200).json({ newUrl, code });
    };
  } catch (e) {
    console.error(e)
  }
};


export const updateUrl = async (req, res) => {
  try {
    const { _id, uid, passwordUrl, clickLimit, expiresAt } = req.body;

    console.log(_id, uid, passwordUrl, clickLimit, expiresAt)

    if (!_id) {
      return res.status(400).json({ msj: "id not found" });
    }

    const hashedPassword = passwordUrl ? await bcrypt.hash(passwordUrl, 10) : null;

    const existingUrl = await urls.findById(_id);

    if (!existingUrl) {
      return res.status(404).json({ message: "No se encontró la URL con el _id proporcionado" });
    }


    existingUrl.uid = uid || existingUrl.uid;
    existingUrl.passwordUrl = hashedPassword;
    existingUrl.clickLimit = clickLimit || existingUrl.clickLimit;
    existingUrl.expiresAt = expiresAt || existingUrl.expiresAt;


    const updatedUrl = await existingUrl.save();


    return res.status(200).json(updatedUrl);

  } catch {
    res.status(400).json({ msj: "Bad request" })
  }
}

export const deleteUrl = async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    return res.status(400).json({ msj: "need id" });
  }

  if (await urls.findByIdAndDelete(_id)) {
    return res.status(200).json({ msj: "Url eliminada exitosamente" });
  } else {
    return res.status(400).json({ msj: "no se pudo eliminar la url" });
  }
}