const express =  require('express');

const hbs = require('hbs');

const app = express();

app.listen(3000,()=>{
    console.log('server started on port 5000');
});

app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
    next();
});

app.set('view-engine','hbs');
hbs.registerPartials(__dirname+'/views/partial');
hbs.registerHelper('getday',()=>{
    return new Date().getMilliseconds()
});

app.get('/',(req,res)=>{
res.render('home.hbs',{
    date : new Date(),
    data : 'this is the first app '
});
});

app.get('/hi',(req,res)=>{
    res.send({
            name : 'harley',
            price :'45,0000'
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        date :  new Date()
    });
});