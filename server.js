const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const objects = "little bugs"
const containers = "in the code"
const action = "patch"

app.get('/', (req, res) => {
    res.send(`<h1>99 ${objects} ${containers}</h1><br><h1>99 ${objects}</h1><br><a href="/98">take one down, ${action} it around</a>`)
})

app.get('/:number', (req, res) => {
    const {number} = req.params
    if (Number(number) > 0) {
    res.send(`<h1>${number} ${objects} ${containers}</h1><br><h1>${number} ${objects}</h1><br><a href="/${Math.random() < .9 ? Number(number) - 1 : Number(number) + Math.ceil(Math.random() * 10)}">take one down, ${action} it around</a>`)
    } else if (Number(number) === 0) {
        res.send(`<h1>${number} ${objects} ${containers}</h1><br>${number} ${objects}</h1><br><a href="/">None to take down, or ${action} around so start all over again!</a>`)
    } else {
        res.send(`<h1>That's a weird number of ${objects}. I suggest you start <a href='/'>here</a>`)
    }
})

app.listen(PORT, () => {
    console.log(`Getting busy with it on port ${PORT}`)
})