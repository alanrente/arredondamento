var http = require('http')
    ,app = require('./config/express');

const port = process.env.PORT || 8080

http.createServer(app).listen(port, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});