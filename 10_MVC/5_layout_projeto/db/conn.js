import Sequelize from 'sequelize'

export const db = new Sequelize('nodemvc', 'root', '.$Corz2607$.', {
        host: 'localhost',
        dialect: 'mysql'
    })

    try {
        db.authenticate()
        console.log("MySQL Conectado!")
    } catch {
        console.log("Erro ao conectar!")
    }