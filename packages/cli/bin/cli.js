#! /usr/bin/env node

const importLocal = require('import-local')
const log =require('npmlog')
const entry = require('../lib/index')
if(importLocal(__filename)){
    log.info('cli','使用本地 cli-imooc 版本')
}else{
    entry(process.argv.slice(2)) // 通过 process.argv 可以获取传入的命令行参数，返回值是一个数组
}