var Star = "*";
var Space = " ";
console.log("就先...强行只输5行吧");
var Line = 5;
hua(Line);
function hua(Line) {
    for (var i = 1; i <= Line; i++) {
        var Drawline = "";
        for (var j = 1; j <= (Line + i - 1); j++) {
            if ((Line - i + 1) <= j && j <= (Line + i - 1)) {
                Drawline = Drawline + Star;
            }
            else {
                Drawline = Drawline + Space;
            }
        }
        console.log(Drawline);
    }
}
console.log("END");
