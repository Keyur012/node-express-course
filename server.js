const express = require('express');
const app = express();

const mockUserdata = [
{name : 'Mark'},
{name : 'Jill'}
]

app.get('/users/:id', function(req,res){
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: req.params.id
    })
})

app.listen(8000,function(){
console.log('Server is running');
});