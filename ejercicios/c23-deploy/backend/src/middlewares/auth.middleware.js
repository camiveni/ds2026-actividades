const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("Falta JWT_SECRET en las variables de entorno");

function authenticate(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Falta el token" });
  }

  const token = header.slice(7);
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.usuario = { id: payload.id, rol: payload.rol };
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ error: "Token expirado" });
    }
    return res.status(401).json({ error: "Token inválido" });
  }
}

function authorize(...roles) {
  return (req, res, next) => {
    if (!req.usuario) return res.status(401).json({ error: "No autenticado" });
    if (!roles.includes(req.usuario.rol)) {
      return res.status(403).json({ error: "No tenés permiso para esta operación" });
    }
    next();
  };
}

module.exports = { authenticate, authorize };