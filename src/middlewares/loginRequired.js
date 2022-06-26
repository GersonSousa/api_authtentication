const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {
  const token = req.cookies.userToken;
  if (!token) {
    return res.redirect('/v1');
  }
  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userId = data.id;
    req.userEmail = data.email;
    return next();
  } catch {
    return res.redirect('/v1');
  }
};

module.exports = {
  authorization,
};
