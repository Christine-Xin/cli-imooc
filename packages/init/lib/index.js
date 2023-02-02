'use strict';

const Command= require('@imooc.com/command')
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
        console.log('init',name,opts)
    }
}
function Init(instance){
    return new InitCommand(instance);
}
// 返回initcommand实例
module.exports=Init;
