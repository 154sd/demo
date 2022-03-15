
// hljs.initHighlightingOnLoad();
//time
var now = new Date();
function createtime(){
    var grt = new Date(xb.ctime);
    now.setTime(now.getTime()+250);
    days = (now-grt)/1000/60/60/24;dnum = Math.floor(days);
    hours = (now-grt)/1000/60/60-(24*dnum);hnum = Math.floor(hours);
    if(String(hnum).length==1){hnum = '0'+hnum;}
    minutes = (now-grt)/1000/60-(24*60*dnum)-(60*hnum);mnum = Math.floor(minutes);
    if(String(mnum).length==1){mnum = '0'+mnum;}
    seconds = (now-grt)/1000-(24*60*60*dnum)-(60*60*hnum)-(60*mnum);snum = Math.round(seconds);
    if(String(snum).length==1){snum = '0'+snum;}
    document.getElementById('span_dt_dt').innerHTML = dnum+'天'+hnum+'小时'+mnum+'分'+snum+'秒';
}
setInterval('createtime()',250);
//copy
if(xb.copy) document.body.oncopy=function(){alert('已复制所选内容。请务必遵守本站条约！');}
//console
window.onload = function(){
    var now = new Date().getTime();
    var page_load_time = now-performance.timing.navigationStart;
    console.clear();
    window.console && console.log("%c\n                                   *********                           \n                             *******       *******                     \n                           ***                    ***                  \n                         **                         **                 \n                *****   **                           ***               \n             ****   *****                              **              \n           **                                           **             \n          *                                              *             \n         **              **                **            *             \n      ****               **        **      **           ******         \n    **                   **        **      **                 ****     \n  ***                              **                            ***   \n  *                                **                              **  \n *                               ****                               *  \n *                                                                  *  \n**                                                                  ** \n*                            **         **                           * \n**                            ***********                            * \n *                                ***                               ** \n  **                                                               **  \n   ***                                                            **   \n      ****                                                     ****    \n         ****                                               ****       \n            *************************************************          \n \n 哟，高人您好,祝您扒代码愉快~！ \n", "font-family: Menlo, monospace")
    console.log('你看起来很美味😊');
    console.log('%c页面加载完毕消耗了'+Math.round(performance.now()*100)/100+'ms','background:#fff;color:#333;text-shadow:0 0 2px #eee,0 0 3px #eee,0 0 3px #eee,0 0 2px #eee,0 0 3px #eee;');
};