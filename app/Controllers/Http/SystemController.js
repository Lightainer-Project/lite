'use strict'

const sysinfo = require('systeminformation');

class SystemController {
    async info({ request, response }) {
        const data = {
            cpu: await sysinfo.cpu(),
            memory: await sysinfo.mem(),
            os: await sysinfo.osInfo(),
        }
        response.status(200).send(JSON.stringify(data))
    }

    async load({ request, response }) {
        response.status(200).send(JSON.stringify({
            load: await sysinfo.currentLoad()
        }))
    }

    async docker({ request, response }) {
        response.status(200).send(JSON.stringify({
            containers: await sysinfo.dockerContainers()
        }))
    }
}

module.exports = SystemController
