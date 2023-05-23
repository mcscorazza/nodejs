import Sequelize from 'sequelize'

export const conn = new Sequelize('nodesequelize', 'root', '.$Corz2607$.', {
        host: 'localhost',
        dialect: 'mysql'
    })
