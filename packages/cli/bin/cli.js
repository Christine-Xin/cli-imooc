#! /usr/bin/env node

import importLocal from 'import-local' //优先加载本地脚手架版本
import entry from '../lib/index.js'
// import { expandGlobal } from '@imooc.com/utils'
const __filename=global.getFileName(import.meta.url)
if(importLocal(__filename)){
    log.info('cli','使用本地 cli-imooc 版本')
}else{
    entry(process.argv.slice(2)) // 通过 process.argv 可以获取传入的命令行参数，返回值是一个数组
}