var elemGlobalSpace  =  {};

elemGlobalSpace._cons  =  function  ( messg )
{
		console.log( messg );	
}

//var intervalAltura  =  setInterval( alturaCalc, 500 )

elemGlobalSpace.alturaCalc  =  function()
{
				_cons("main.js »»» function alturaCalc ::: "  + window.innerHeight );
				_cons("main.js »»» function WIDTH ::: "  + window.innerWidth );
				//HolderIds.coordX.innerHTML  =  "*** "  +  window.innerHeight;
				
				return window.innerHeight;	
}
	
		


