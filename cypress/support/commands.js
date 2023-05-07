require('cypress-iframe');

const baseUrl = Cypress.env('BASE_URL')

Cypress.Commands.add('ensureMnAdminSession', () => {
	console.log('--> baseUrl', baseUrl)
})
