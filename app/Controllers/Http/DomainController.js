'use strict'

const soap = require('soap');
const sha1 = require('sha1');

class DomainController {
    list({ request, response }) {
        const domains = [
            {
                name: 'Frozencloud.de',
                subdomains: [
                    {
                        name: 'jira.frozencloud.de',
                        application: 'Atlassian Jira'
                    }
                ]
            },
            {
                name: 'Niki2k1.de',
                subdomains: [
                    {
                        name: 'test.niki2k1.de',
                        application: 'Test Application'
                    }
                ]
            },
            {
                name: 'Lightainer.de',
                subdomains: [
                    {
                        name: 'marketplace.lightainer.de',
                        application: 'Lightainer Marketplace'
                    },
                    {
                        name: 'status.lightainer.de',
                        application: 'Lightainer Status Page'
                    }
                ]
            }
        ]
        response.status(200).send(JSON.stringify(domains))
    }
}

module.exports = DomainController
