// 幣圈裡面，有一種暱稱叫做 韭菜 的生物，
// 如果你想要低價買入他們手上的比特幣，
// 放出一些恐慌訊息，他們馬上就會賣掉；
// 相反的，如果你想要高價賣出你手上的囤貨，
// 你只要放出利好消息，他們就會蜂蛹買入。

// 輸入說明
// 第一行有一個整數 N (N <= 999,999,999,999)，
// 代表有 n 個韭菜由左至右排成一排，這些韭菜手上都持有比特幣，
// 由最左邊的韭菜開始編號： 1, 2, 3, ..., N。
// 第二行有一整數 M (M <= 999999)，接下來會有 M 次割韭菜的行為。
// 接下來 M 行每行有兩個整數 [i, j]。表示對從 i 到 j 的這堆韭菜進行收割。

var N = 5;
var M = 3;
var I = [1, 3]; // [i, j]
var J = [3, 5]; // [i, j]
var K = [1, 5]; // [i, j]

function getCrypto(N, M, ...theArgs) {
    let result = [];
    var arrN = Array.from({ length: N }); //建立韭菜陣列
    arrN.forEach((person, index) => {   // 開始割韭菜
        person = 0;
        let no = index + 1;              //給韭菜編號
        theArgs.forEach((item) => {
            if (no >= item[0] && no <= item[1]) person += 1; //韭菜編號是否在割的範圍內，是的話 +1
        })
        if (person < M) result.push('has remain') //person=被割的次數，被割的次數小於M總次數就是還有剩餘的比特幣
    })
    return result.length; // 持有比特幣的韭菜數量
}
console.log('getCrypto', getCrypto(N, M, I, J, K))
