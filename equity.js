function calculate(){
    let post_money=document.getElementById("InputPostMoney").value;
    let pre_money=document.getElementById("InputPreMoney").value;

    let ia=Math.round(post_money-pre_money);
    let ie=Math.round(((post_money-pre_money)*100)/post_money);

    document.getElementById("OutputAmount").innerHTML=ia;
    document.getElementById("OutputEquity").innerHTML=ie;

    return false;
}