var S="*";
var K=" ";

 console.log("就先...强行只输5行吧");
var n:number =5;

for(var i=1;i<=n;i++)
{
    var C="";
    for(var j=1;j<=(n+i-1);j++)
    {
        if((n-i+1)<=j&&j<=(n+i-1))
        {
            C=C+S;
        }else
        {
            C=C+K;
        }
    }
    console.log(C);
}