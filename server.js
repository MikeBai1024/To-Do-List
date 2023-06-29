const express=require('express')

const app=express()

app.engine('html',require('express-art-template'))


app.use(express.urlencoded({extended:false}))
app.use(express.json())

//开放node_modules,public两个文件夹的权限，允许用户查看
app.use('/bbb',express.static('node_modules'))


app.get('/',(req,res) =>{
    res.render('login.html')
})

let tasks = [];

app.post('/api/tasks', (req, res) => {
    const { name, date } = req.body;
    tasks.push({ name, date });
    res.send({ message: 'Task added successfully.' });
});

app.get('/api/tasks', (req, res) => {
    res.send(tasks);
});


app.listen(3002,()=>console.log('app listening on http://localhost:3002'))