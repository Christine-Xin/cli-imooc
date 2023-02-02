'use strict';
// 命令初始化
import Command from '@imooc.com/command'
import {log} from '@imooc.com/utils'
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
        // new Promise(resolve=>{
        //     resolve();
        // }).then(()=>{
        //     throw new Error('error from promise')
        // })
        // throw new Error('111')
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
export default Init;
