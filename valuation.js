function calculate(){
    let ia=document.getElementById("InputAmount").value;
    let ie=document.getElementById("InputEquity").value;

    let postmoney_valuation=Math.round((ia*100)/ie);
    let premoney_valuation=Math.round(postmoney_valuation-ia);

    document.getElementById("OutputPostMoney").innerHTML=postmoney_valuation;
    document.getElementById("OutputPreMoney").innerHTML=premoney_valuation;
    // alert(postmoney_valuation+" "+premoney_valuation);
    return false;
}



