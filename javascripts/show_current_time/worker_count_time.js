// 计时

var date = new Date();

function timedCount()
{
    postMessage(date.toString());
    setTimeout("timedCount()", 1000);
}

timedCount();