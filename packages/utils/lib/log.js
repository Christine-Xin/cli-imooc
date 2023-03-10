import log from'npmlog'
import isDebug from './isDebug.js'
// 当是调试模式时，log等级改为调式；其他状态为Info
// if(process.argv.includes('--debug') || process.argv.includes('-d')){
if(isDebug()){
    log.level='verbose'
}else{
    log.level='info'
}

log.heading="imooc" //给log添加一个标题
log.addLevel('success',2000,{fg:'green',bold:true}) //定制新的log等级
export default log