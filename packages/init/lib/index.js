'use strict';
// 命令初始化
const Command= require('@imooc.com/command')
const {log}=require('@imooc.com/utils')
class InitCommand extends Command{
    get command(){
        return 'init [name]'
    }
    get description(){
        return 'init description';
    }
    get options(){
        return [
            ['-f, --force','是否强制更新',false]
        ]
    }
    action([name,opts]){
        log.verbose('init',name,opts)
    }
    // 执行命令前的钩子函数
    preAction(){
        console.log('pre')
    }
    // 执行命令后的钩子函数
    postAction(){
        console.log('post')
    }
}
function Init(instance){
    return new InitCommand(instance);
}
// 返回initcommand实例
module.exports=Init;
