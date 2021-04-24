const express = require('express')
const app =express()
const port =3000

app.get('/hello', (req,res) => {
    res.send('I'm creating nodejs application');
})

app.listen(port, () => {
    console.log("Server started.....")
});
