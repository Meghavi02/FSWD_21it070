const express = require('express');
const joi = require('joi');
const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(express.static('public'));

app.post('/submit', (req,res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    const schema = joi.object({
        name:joi.string().required(),
        email:joi.string().required().email(),
        password:joi.string().min(8).required()
    });

    const {error} = schema.validate(req.body);

    if(error){
      const errorDetails = error.details.map(d => d.message).join('<br>');
        res.send(`<h2> Validation error: </h2> ${errorDetails}`);
        return;
    }
    res.send("<h2> form submitted successfully</h2>");
});
app.listen(3001,() => {
    console.log("server started on port 3001");
});
