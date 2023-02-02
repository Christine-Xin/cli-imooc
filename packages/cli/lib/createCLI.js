import {program} from 'commander'
import {log} from '@imooc.com/utils'
import semver from 'semver'
import chalk from 'chalk'

let pkg=global.loadJSON("../package.json",import.meta.url);
const LOWEST_NODE_VERSION='14.0.0';

function checkNodeVersion(){
    if(!semver.gte(process.version,LOWEST_NODE_VERSION)){
        throw new Error(chalk.red(`cli-imooc需要安装${LOWEST_NODE_VERSION}以上版本的Nodejs`))
    }
}
// 执行命令前的钩子函数
function preAction(){
    // 检查Node版本
    checkNodeVersion()
}

export default function createCLI(){
     log.success('version',pkg.version)
     // 注册脚手架
     program
         .name(Object.keys(pkg.bin)[0])
         .usage('<command> [options]')
         .version(pkg.version)
         .option('-d, --debug', '是否开启调试模式', false)
         .hook('preAction',preAction);
 
     // program
     //     .command('init [name]')
     //     .description('init project')
     //     .option('-f, --force','是否强制更新',false)
     //     .action(()=>{
     //         console.log('init...')
     //     });
    //  监听未知命令
     program.on('command:*',function(obj){
        log.error('未知命令：'+obj[0])
     })
    //  监听是否是debug模式
    program.on('option:debug',function(){
        if(program.opts().debug){
            log.verbose('debug','launch debug mode')
        }
    })
     return program
}