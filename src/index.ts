
import express from 'express'
import statusRoute from './routes/status.route'
import usersRoute from './routes/users.route'


const app = express()


// Configurações da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configurações da rota
app.use(usersRoute)

app.use(statusRoute)


app.listen(3000, () => {
    console.log('Executando na porta 3000')
})