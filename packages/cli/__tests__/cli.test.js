// test('run error command',()=>{
//     expect(1 + 1).toBe(2)
// })

import path from 'node:path'
const execa = require('execa');

const CLI = path.join(__dirname,'../bin/cli.js')
const bin=()=>(...args)=> execa(CLI,args)

test('run error command',async ()=>{
    const {stderr}=await bin()('iii')
    console.log(stderr)
})