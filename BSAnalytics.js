! function(thisWindow) {
    //1. 页面行为分为：进入、加载、点击、离开。
    //第一次进入访问：请求页面配置参数
    //进入：执行进入事件
    //加载：加载完成后执行事件
    //用户操作执行事件
    //用户离开事件捕捉（暂无）

    //【架构】
    //统一数据收集入口
    //统一数据发送路由
    var visitorParam = {
        baseUrl: '', //提交到目标服务器的基地址
        visitorIdentity: '',
        sessionParams: JSON.parse(sessionStorage.getItem('BSAnalyticsParams')),
        //userId, 
        localParams: JSON.parse(sessionStorage.getItem('BSAnalyticsLocalParams'))
    }

    if (visitorParam.sessionParams && visitorParam.localParams) {
        //TODO 不是第一次到访
    } else if (visitorParam.localParams) {
        //TODO 第一次到访
    } else {
        //TODO 其他情况都是异常，也许是因为还没从远程接口获取到配置信息
    }

    var visitorIdentification = function() {

    }
    if (visitorParam.localParams) {

    }
    var _thisDoc = thisWindow.document;

}(window)