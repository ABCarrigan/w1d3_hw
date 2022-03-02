const express = require('express');
const app = express();
const port = 3000;

app.get('/greeting/:name', (req, res) => {
  res.send('Hello, ' + req.params.name);
});

app.get('/tip/:total/:tipPercentage', (req,res) => {
  let tipPercentile = req.params.tipPercentage/100
  let tip = req.params.total * tipPercentile
  res.send('Tip: ' + tip)
})
    

app.listen(port,() => {
    console.log('listening on port' , port);
});