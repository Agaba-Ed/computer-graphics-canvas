/* Code copied from : http://clockmaker.jp/blog/
* @author clockmaker
*/


var step = 0.0
var toRadian = Math.PI / 180
/**
 * 木を描きます
 * @param {Context} g
 * @param {Number} px
 * @param {Number} py
 * @param {Number} angle
 * @param {Number} len
 * @param {int} n
 */
function creatTree(g, px, py, angle, len, n){
    if (n > 0) {
        angle += 3 * Math.cos(step) - 2;
        
        // よく伸びる幹
        var x1 = px + 0.1 * len * Math.cos(angle * toRadian);
        var y1 = py - 0.1 * len * Math.sin(angle * toRadian);
        
        // あまり伸びない幹
        var x2 = px + len * Math.cos(angle * toRadian);
        var y2 = py - len * Math.sin(angle * toRadian);
        
        // 線を描く
        drawLine(g, n - 1, px, py, x2, y2);
        
        var angleLeft = angle + 30;
        var angleRight = angle - 30;
        
        // すこしずつ伸びなくする
        len = len * 2 / 3;
        creatTree(g, x2, y2, angle - 3 * Math.sin(step), len, n - 1); // 上方向の幹
        creatTree(g, x1, y1, angleLeft, len * 2 / 3, n - 1); // 左方向の幹
        creatTree(g, x1, y1, angleRight, len * 2 / 3, n - 1); // 右方向の幹
        creatTree(g, x2, y2, angleLeft, len * 2 / 3, n - 1); // 左方向の幹
        creatTree(g, x2, y2, angleRight, len * 2 / 3, n - 1); // 右方向の幹
    }
}

/**
 * 線を描きます
 * @param {Context} g
 * @param {int} n
 * @param {Number} x1
 * @param {Number} y1
 * @param {Number} x2
 * @param {Number} y2
 */
function drawLine(g, n, x1, y1, x2, y2){
    g.beginPath();
    g.lineWidth = n > 0 ? n : 1;
    g.strokeStyle = "rgb(0, 128, 32)";
    g.moveTo(x1, y1);
    g.lineTo(x2, y2);
    g.stroke();
}