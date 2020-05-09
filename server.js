const express = require('express')
const app =express()
const port =3000

app.get('/hello', (req,res) => {
    res.send('iam creating nodejs ready application');
})

app.listen(port, () => {
    console.log("started server.....")
});