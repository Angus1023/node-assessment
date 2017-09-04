const express = require('express'),
        bodyParser = require('body-parser'),
        userCtrl = require('./usersCtrl'),
        PORT = 3000,
        app = express();

app.use(bodyParser.json());

app.get('/api/users', userCtrl.getAll);
app.get('/api/users/:id', userCtrl.userId);
app.get('/api/admins', userCtrl.getAdmin);
app.get('/api/nonadmins', userCtrl.nonAdmin);
app.get('/api/user_type/:type', userCtrl.getByType);
app.put('/api/users/:id', userCtrl.updateUser);
app.post('/api/users', userCtrl.addUser);
app.delete('/api/users/:id', userCtrl.deleteUser);

app.listen(PORT, function(){
    console.log('listening on port ' + PORT)
});