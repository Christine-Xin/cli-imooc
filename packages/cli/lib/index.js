const commander=require('commander')
const createInitCommand=require('@imooc.com/init')
const {log}=require('@imooc.com/utils')

const {program}= commander
const pkg = require('../package.json')
module.exports=function(args){
    // console.log(args)
    log.success('version',pkg.version)
    // 注册脚手架
    program
        .name(Object.keys(pkg.bin)[0])
        .usage('<command> [options]')
        .version(pkg.version)
        .option('-d, --debug', '是否开启调试模式', false);

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