import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import auth from './routes/auth.js'

const app = express()
const port = process.env.PORT || 9000

app.use(express.json())
app.use(cors())

const dbUrl = 'mongodb+srv://admin:TseSR8aHQG77cJOi@cluster0.nmavp.mongodb.net/toDoApp?retryWrites=true&w=majority'
mongoose.connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log('mongoose connected')
})

app.use(auth)


app.listen(port,() => console.log(`listening on port${port}`))