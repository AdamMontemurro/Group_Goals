const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express()
const UserRouter = require('./routes/UserRouter')
const GroupRouter = require('./routes/GroupRouter')
const TaskRouter = require('./routes/TaskRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => res.json({ message: 'Group Goal' }))

app.use('/users', UserRouter)
app.use('/groups', GroupRouter)
app.use('/tasks', TaskRouter)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))