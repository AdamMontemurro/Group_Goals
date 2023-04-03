const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express()
const UserRouter = require('./routes/api/UserRouter')
const GroupRouter = require('./routes/api/GroupRouter')
const TaskRouter = require('./routes/api/TaskRouter')



const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => res.json({ message: 'Group Goal' }))



app.use('/api/users', UserRouter)
app.use('/api/groups', GroupRouter)
app.use('/api/tasks', TaskRouter)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))