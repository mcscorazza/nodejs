import fs from 'fs'

console.log('Inicio')

fs.writeFile('arquivo.txt', 'oi', (err) => {
    setTimeout(()=> {
        console.log('Arquivo criado!')
    }, 2000)
})

console.log('Fim')