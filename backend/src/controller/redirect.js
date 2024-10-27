import urls from '../models/urls.js';

export const redirect = async (req, res) => {
  const codeRegex = /^([a-z0-9]){5}$/;
  const { code } = req.params;
  const { password } = req.body;
  //const ip = req.ip;

  if (!codeRegex.test(code)) {
    return res.status(404).json({ msj: "URL not valid" });
  } else {

    const linkObj = await urls.findOne({ code });
    if (!linkObj) {
      return res.status(404).json({ msj: "URL not found" });

    } else {


      if (linkObj.expiresAt && new Date() > linkObj.expiresAt) {
        return res.status(410).json({ message: 'La URL ha expirado' });
      }

      if (linkObj.clickLimit && linkObj.countClick >= linkObj.clickLimit) {
        return res.status(403).json({ message: 'Límite de clics alcanzado' });
      }


      if (linkObj.passwordUrl && password) {
        const isPasswordCorrect = await bcrypt.compare(password, linkObj.passwordUrl);
        if (!isPasswordCorrect) {
          return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
      }

      linkObj.countClick = (linkObj.countClick || 0) + 1;
      //urlData.ipAddresses.push(ip);

      await linkObj.save();

      res.redirect(linkObj.url);
    }
  }
};
