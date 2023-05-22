import Sequelize from 'sequelize'

export const sequelize = new Sequelize('nodesequelize', 'corz', 'corz123', {
        host: 'localhost',
        dialect: 'mysql'
    })

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso com o Sequelize!')
} catch(err) {
    console.log('Não foi possível conectar: ', err)
}

