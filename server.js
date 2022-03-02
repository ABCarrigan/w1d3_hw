const express = require('express')
const app = express()
const port = 3000

app.get('/greeting/:name', (req, res) => {
  res.send('Hello, ' + req.params.name)
})

app.get('/tip/:total/:tipPercentage', (req,res) => {
  let tipPercentile = req.params.tipPercentage/100
  let tip = req.params.total * tipPercentile
  res.send('Tip: ' + tip)
})

const eightballAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

function randomAnswer(answer) {
  return answer[Math.floor(Math.random()*answer.length)]
}

app.get('/magic/:question', (req,res) => {
res.send('<h1>'+randomAnswer(eightballAnswers)+'</h1>')
})

app.listen(port,() => {
    console.log('listening on port' , port)
})