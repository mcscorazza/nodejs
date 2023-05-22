import Sequelize from 'sequelize'

export const conn = new Sequelize('nodesequelize', 'corz', 'corz123', {
        host: 'localhost',
        dialect: 'mysql'
    })
