
// id封装
function id(a) {
    return document.getElementById(a)
}

// 构造函数
function Fn() {
}

// 原型
Fn.prototype.nav = function () {
    var str = '';
    for (var i = 0; i < nav.length; i++) {
        str += '<dl class="box">';
        str += '<dt id="header" class="header">' + nav[i][0] + '</dt>';
        str += '<dl class="body">';
        str += '<p>';
        for (var j = 0; j < nav[i][1].length; j++) {
            str += '<dt>';
            str += '<a target="_blank" href = "' + nav[i][1][j][0].link + '" > ' + nav[i][1][j][1].name + ' </a>';
            str += '</dt>';
        }
        str += '</p>';
        str += '</dl>';
        str += '</dl>';
    };
    id('nav').innerHTML = str;
}

// 实例化
var obj = new Fn()
obj.nav(nav)


// 设置鼠标经过
var bodybg = document.getElementById('body');
var height = window.innerHeight;
var width = window.innerWidth;
document.getElementById('body').style.height = height + 'px';
var a = document.getElementsByTagName('a')

var s = 3;
var x = 0.05;
for (var i = 0; i < a.length; i++) {
    a[i].onmouseover = function () {
        bodybg.style.background = "url('" + this.href + "favicon.ico') no-repeat center center";
        // bodybg.style.backgroundColor = '#eee';
        // bodybg.style.backgroundSize = '100%';
        bodybg.style.backgroundSize = height / 2 + 'px';
        bodybg.style.backgroundPosition = '50% 50%';
        bodybg.style.opacity = 0;
        // console.log(min)
        // setTimeout(time,s)
        // console.log(setTimeout(time,s))
        var min = 0;
        var max = 1;
        function time() {
            min += x;
            var step = (Math.floor(min*100))/100
            bodybg.style.opacity = step;
            // console.log('over:' + min)
            if(min < max) {
                setTimeout(time,s)
            }
        }
        setTimeout(time,s)
    };
    a[i].onmouseout = function () {
        // bodybg.style.background = "none";
        var min = 1;
        var max = 0;
        function time() {
            min -= x
            var step = (Math.floor(min*100))/100
            bodybg.style.opacity = step;
            // console.log('out:' +step)
            if(min > max) {
                setTimeout(time,s)
            }
        }
        setTimeout(time,s)
    };
};





















