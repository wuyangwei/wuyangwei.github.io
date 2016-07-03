// 计时


function timedCount()
{
    var date = new Date();
    postMessage(date.toString());
    setTimeout("timedCount()", 1000);
}

timedCount();