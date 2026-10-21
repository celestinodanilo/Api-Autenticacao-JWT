const jwt = require("jsonwebtoken");


const users = [
 { email: 'admin@example.com', password: 'admin123', role: "admin"},
 { email: 'studant@exaple.com', password: 'user123@', role: "student"},
 { email: 'teacher@example.com', password: 'teacher123',role: "teacher"}
];


const login = (req, res) => {
 const { email, password } = req.body;
 const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
   return res.status(401).json({ error: 'Credenciais inválidas' });
 }
  const token = jwt.sign({ email: user.email, role:user.role }, 'secreta', { 
    expiresIn: '30m',
   });
 res.json({ token, email: user.email  });
};


module.exports = { login };