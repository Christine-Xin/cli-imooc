const commander=require('commander')
const createInitCommand=require('@imooc.com/init')
const {log,isDebug}=require('@imooc.com/utils')
const semver=require('semver')
const chalk=require('chalk')

const {program}= commander
const pkg = require('../package.json')
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
// 打印报错信息
process.on('uncaughtException',(e)=>{
    if(isDebug()){
        console.log(e)
    }else{
        console.log(e.message)
    }
    
})
module.exports=function(args){
    // console.log(args)
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
    createInitCommand(program)
    program.parse(process.argv);
};