var http = require('http')
    ,app = require('./config/express');

const port = 8080

http.createServer(app).listen(port, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});