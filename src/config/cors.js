module.exports = (req, res, next) => {
   res.header ('Access-Controle-Allow-Origin', '*')
   res.header('Acess-Control-Allow-Mtehods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
   res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
   next()
}