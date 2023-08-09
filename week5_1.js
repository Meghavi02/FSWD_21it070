const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    { id:4, name:'courses4'},
    { id:5, name:'courses5'},
    { id:6, name:'courses6'}
];

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

//create
app.post('/api/courses/:id',(req,res)=>{
    const course ={
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

//read
app.get('/api/courses/:id',(req,res)=>{
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("not found");
    res.send(course);
});

//update
app.put('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("not found");

    course.name = req.body.name;
    res.send(course);
});

//delete
app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("not found");

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);
});
app.listen(5000);
