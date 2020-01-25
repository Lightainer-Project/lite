'use strict'

const fs = require('fs')

class SubDomainController {
    create({ request, response }) {
        response.implicitEnd = false
        const data = request.all()
        console.log(data)
        const template = `server{
            server_name ${data.prefix}.${data.domain} www.${data.prefix}.${data.domain};
            location / {
                proxy_pass ${data.proxy_pass};
            }
            error_page   502 /502.html;
                location = /502.html {
                root   /var/www/error_pages;
            }
        }`;
    
        fs.writeFile(`./nginx/sites-avaiable/${data.prefix}.${data.domain}.conf`, template, (err) => {
            if (err) {
                response
                    .status(500)
                    .send(`Error while creating config: ${err.message}`);
            } else {
                response
                    .status(200)
                    .send(`Successfully created Config!`);
            }
        });
    }
}

module.exports = SubDomainController
