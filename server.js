const express = require('express');
const app = express();

const mockUserdata = [
{name : 'Mark'},
{name : 'Jill'}
]

app.get('/users', function(req.res){
    res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserdata
    })
})

app.listen(8000,function(){
console.log('Server is running');
});