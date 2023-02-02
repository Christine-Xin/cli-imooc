// 脚手架命令类
class Command{
    constructor(instance){
        // 当实例为空时抛出异常
        if(!instance){
            throw new Error('command instance must not be null!');
        }
        this.program= instance
        const cmd= this.program.command(this.command)
        cmd.description(this.description)
        cmd.hook('preAction',()=>{
            this.preAction();
        })
        cmd.hook('postAction',()=>{
            this.postAction()
        })
        if(this.options?.length>0){
            this.options.forEach(option=>{
                cmd.option(...option)
            })
        }
        
        cmd.action((...params)=>{
            this.action(params)
        })
    }
    // 命令
    get command(){
        throw new Error('command must be implements');
    }
    // 描述
    get description(){
        throw new Error('description must be implements');
    }
    // 选项
    get options(){
        return []
    }
    // 输出
    get action(){
        throw new Error('action must be implements');
    }
    // 执行命令前的钩子函数
    preAction(){

    }
    // 执行命令后的钩子函数
    postAction(){

    }
}

export default Command;
