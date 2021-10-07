const playerController = require('../controller/TeamManager.controller'); 
module.exports=function(app){

    app.get('/api/players/',playerController.getAll),
    app.post('/api/players/',playerController.create),
    app.delete('/api/players/:id',playerController.delete)

}