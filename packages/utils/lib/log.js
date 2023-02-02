const log=require('npmlog')
// 当是调试模式时，log等级改为调式；其他状态为Info
if(process.argv.includes('--debug') || process.argv.includes('-d')){
    log.level='verbose'
}else{
    log.level='info'
}

log.heading="imooc" //给log添加一个标题
log.addLevel('success',2000,{fg:'green',bold:true}) //定制新的log等级
module.exports=log