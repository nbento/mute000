var HolderIds = {};																//OBJECTO QUE GUARDA OS ID's
HolderIds.matches = document.querySelectorAll('*[id]');							//TODOS OS ELEMENTOS COM attr id

/*//console.log(	"HolderIds.matches::: " + HolderIds.matches  
				+ " | TOTAL::: " + HolderIds.matches.length  								
				+ " | TYPE::: " + typeof( HolderIds.matches )  							//object
				+ " | CONSTRUCTOR::: " + ( HolderIds.matches.constructor == NodeList ) 	//true
			);
*/
$(document).ready( function()
{
		//console.log( "IDHARVEST READY !!!" );
		//________________________________________________________
		for( var i=0; i < HolderIds.matches.length; i++ )
		{
				var id_ = $( HolderIds.matches[i] ).attr( "id" );			//OBTER ID	
				
				HolderIds[ id_ ] = $( ("#" + id_) );						//NO OBJECTO HolderIds, CRIAR UMA VAR COM O MESMO NOME DO ID ANTERIOR, E CRIAR REF. AO ELEMENTO
				
			/*	//console.log(	" »»» HolderIds.matches[i] id::: " + 	id_ 
							  + " »»» HolderIds.matches[i]::: "	+ 	HolderIds.matches[i]
							  + " »»» typeof::: " 		+ 	typeof( HolderIds.matches[i] )
							);	
			*/				
		}
		
//		//HolderIds.id_teste1.text("EX: ESTE TEXTO É ALT. E O BORDER DA IMG TAMBÉM, PASSA A VERDE DOTTED");	//EX: TROCAR O TEXTO DA DIV	
/*TESTES*/		//HolderIds.main_holder.css({"border" : "4px #FF0 solid"}); 	
});

