import {Sequelize} from 'sequelize'

function Conn() {
    const sequelize = new Sequelize('nodesequelize', 'root', '.$Corz2607$.', {
        host: 'localhost',
        dialect: 'mysql'
    })

    try {
        sequelize.authenticate()
        console.log('Conectamos com sucesso com o Sequelize!')
    } catch(err) {
        console.log('Não foi possível conectar: ', err)
    }
}

exports Conn as default from Conn.mjs
