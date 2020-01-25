'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/domain', 'DomainController.list')
Route.post('/subdomain', 'SubDomainController.create')

Route.get('/sysinfo', 'SystemController.info')
Route.get('/sysinfo/load', 'SystemController.load')
Route.get('/sysinfo/docker', 'SystemController.docker')
