// modulos externos
import inquirer from 'inquirer'
import chalk from 'chalk'

//modulos internos
import fs from 'fs'
import { create } from 'domain'

operation()

function operation() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        mesage: 'O que você deseja fazer?',
        choices: ['Criar conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair']
    }).then((answer) => {
        const action = answer['action']
        
        if(action === 'Criar conta') { createAccount() }

    }).catch((err) => console.log(err))
}

// create an account
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
    builtAccount()
}

function builtAccount() {
    inquirer.prompt({
        name: 'accountName',
        message: 'Digite um nome para a sua conta:'
    }).then((answer)=>{
        const accountName = answer['accountName']
        console.log(accountName)
        
    }).catch((err)=>console.log(err))
}