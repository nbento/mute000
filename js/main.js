/*
GLOBLSPACE:
	HolderIds
	elemGlobalSpace
	
*/
//====================
//....................
function _cons ( messg ) { console.log( messg ); }
//====================
/*
$(document).ready( function()
{
		console.log("document).ready...  READY!!!");
		//....................
		//console.log("WIDTH:::" + window.innerWidth); 
		
		//....................
});
*/
//====================
document.addEventListener('DOMContentLoaded', onLoadDOM ) 

function onLoadDOM ( messg )
{
		console.log( "123on DOMContentLoaded!!!");	
		//.................... SUBSTITUTOS DO JQUERY
		//N:\E\www\Bonzo_JQueryLikeDomManipulation
		//.................... REMAP $ (qwery)
		//https://github.com/ded/qwery (SELECTOR)
			var $;
			if(qwery) { $ = qwery; }else{ $ = document; }
		//.................... REMAP bz (bonzo)
		//https://github.com/ded/bonzo  (METHODS)
			var bz;
			if(bonzo) { bz = bonzo; }else{ bz = document; }	
		//....................Ex:
		/*
		var div1 = $(".div1"); 		//[object HTMLDivElement]
		_cons("div1:::" + div1);
		bz(div1).css({'border': '5px red dotted'});
		//bz(div1).css('border', '5px red dotted'); 
		*/ 	

		for ( var i = 0; i < 10; i++ ) 
		{
			console.log( "iii:::" + i);
		}

		console.log( "........iii:::" + i);
		
}