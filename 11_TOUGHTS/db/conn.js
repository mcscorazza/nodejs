import Sequelize from 'sequelize'

export const conn = new Sequelize('toughts', 'root', '.$Corz2607$.', {
        host: 'localhost',
        dialect: 'mysql'
    })

    try {
        conn.authenticate()
        console.log("MySQL Conectado!")
    } catch {
        console.log("Erro ao conectar!")
    }