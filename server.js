const express =  require('express');

const hbs = require('hbs');

const app = express();

const PORT = process.env.PORT ||3000;

app.listen(PORT,()=>{
    console.log(`Server is upon port ${PORT} `);
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