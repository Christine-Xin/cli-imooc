import {log,isDebug,} from '@imooc.com/utils'
function printErrorLog(e,type){
    if(isDebug()){
        console.log(type,e)
    }else{
        console.log(type,e.message)
    }
}
// 打印报错信息
process.on('uncaughtException',(e)=>printErrorLog(e,'error'))
// 监听promise报错信息
process.on('unhandledRejection',(e)=>printErrorLog(e,'promise'))