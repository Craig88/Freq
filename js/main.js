$( document ).ready(myMain);

/*****/

function flash(myElement) {

 $(myElement).toggleClass( "flash" );
 setTimeout(function(){$( myElement ).toggleClass('flash');},500);

}

/*****/

function myMain() {

jQuery("p.payload").fitText(0.88); 

setInterval(function(){flash("#one")},960);
setInterval(function(){flash("#two")},240);
setInterval(function(){flash("#three")},560);
setInterval(function(){flash("#four")},670);
setInterval(function(){flash("#five")},4730);

setInterval(function(){flash("#china")},1890);
setInterval(function(){flash("#japan")},4010);
setInterval(function(){flash("#germany")},5800);
setInterval(function(){flash("#us")},6950);
setInterval(function(){flash("#uk")},20888);

setInterval(function(){flash("#eq1")},2430);
setInterval(function(){flash("#eq2")},24260);
setInterval(function(){flash("#eq3")},242588);
setInterval(function(){flash("#eq4")},2432432);
setInterval(function(){flash("#toilet")},10060);

setInterval(function(){flash("#iphone")},930);
setInterval(function(){flash("#house")},6220);
setInterval(function(){flash("#domain")},640);
setInterval(function(){flash("#facebook")},4320);
setInterval(function(){flash("#star")},1400);


}