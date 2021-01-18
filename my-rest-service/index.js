const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 11000

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.get('/person', (request, response) => {
	if (request.method === 'GET') {
					const person = require('./person/index')
					response.status(200).jsonp(person())
	}
})

server.get('/facility', (request, response) => {
	if (request.method === 'GET') {
					const facility = require('./facility/index')
					response.status(200).jsonp(facility())
	}
})

server.get('/exposure', (request, response) => {
	if (request.method === 'GET') {
					const exposure = require('./exposure/index')
					response.status(200).jsonp(exposure())
	}
})

server.listen(port, () => {
    console.log('JSON Server is running')
})