
var user_ativo = "teste";

var nome_usuario = "";

var clicar_em  = "01";//15 á 01 , se o número for menor que 10 use "0" + valor => 02

var intervalo;

var clicado = "0";

var id_produto;

var time_lance; //ARMAZENA UMA VARIÁVEL PARA CORREÇÃO DO TEMPO

var urlsite = "";

jQuery(document).ready(function(){	

	var site_utilizado = jQuery(location).attr('href').substr(11).substr(0,1); //VERIFICA O SITE UTILIZADO
	
	if(site_utilizado == "m"){ //VERIFICA SE O SITE É MUKIRANA
	
		var detalhe = jQuery("#auction_bar_title").html();
	
		var altura_pg = jQuery(window).height() - 90;
		
		id_produto = detalhe.substr(20);
		
		time_lance = jQuery("#current_time_auction_"+id_produto).html(); //PEGA O TEMPO INICIAL PARA EFETUAR O CALCULO
	
	}else if(site_utilizado == "o"){ //VERIFICA SE O SITE É OFERTA FÁCIL
	
		urlsite = jQuery(".breadCrumb ul li:eq(3) a").attr("href");
	
		var detalhe = jQuery(".prodDetails div:first").attr("id");
	
		var altura_pg = jQuery(window).height() - 90;
		
		id_produto = detalhe.substr(9);
		
		if(jQuery("#Bid"+id_produto+" span").length){ //VERIFICA SE EXISTE SPAN DENTRO DA DIV TEMPO
		
			time_lance = jQuery("#Bid"+id_produto+" span").html().substr(6); //PEGA O TEMPO INICIAL PARA EFETUAR O CALCULO
			
		}else{
		
			time_lance = jQuery("#Bid"+id_produto).html().substr(6); //PEGA O TEMPO INICIAL PARA EFETUAR O CALCULO

		}
	
	}
		
	jQuery("body").prepend("<div style='position:fixed; z-index:9999; display:table; width:100%; font-size:12px; color:#FFF; bottom:0; left:0; background:#8B0000; padding:10px;'><div class='box_controle' style='float:left; display:table; padding:10px; border:1px solid #EE0000; background:#CD0000;'><div style='float:left;'>Clicar em <input type='text' style='width:30px; border:none; margin-left:20px; text-align:center' class='clicar_em_"+id_produto+"' value='01'/></div><div style='float:left; margin-left:24px;'>Login <input type='text' style='width:90px; border:none; margin-left:3px; text-align:center' class='campo_user_"+id_produto+"'/></div><div style='float:left; position:relative; width:75px;'><div style='position:absolute; display:block;'><a href='javascript:void(0);' class='iniciar_"+id_produto+"' style='display:block; font-size:12px; width:55px; padding:14px 0; text-align:center; text-decoration:none; color:#FFF; background:#8B0000; margin-left:20px'>Iniciar</a></div></div><div style='clear:both; height:10px;'></div><div class='ativar_estatistica_"+id_produto+"' style='float:left; width:105px; '>Ativar Estat&iacute;stica <input  type='checkbox' style='border:none; width:auto;'/></div><div style='float:left; margin-left:25px; width:150px; '>Lance dispon&iacute;vel <input type='text' style='width:30px; border:none; text-align:center' class='lance_disponivel_"+id_produto+"' value='0'/></div></div><div class='box_controle' style='position:absolute; right:0; bottom:0; display:table; padding:10px; background:#8B0000;'>Lances usu&aacute;rios <a href='javascript:void(0);' class='expandir' style='float:right;' title='Subir'><img src='http://www.tiagoleite.com.br/leilao/up.png' border='0'></a><div class='conteudo_estatistica_"+id_produto+"' style='font-size:12px;color:#FFF; width:200px; height:150px; overflow:auto; background:#FFF; margin-top:10px;'></div></div><div class='box_controle_2' style='position:absolute; right:230px; bottom:0; display:table; padding:10px; background:#8B0000;'>Total de lances por usu&aacute;rios <a href='javascript:void(0);' class='expandir' style='float:right;' title='Subir'><img src='http://www.tiagoleite.com.br/leilao/up.png' border='0'></a><div class='conteudo_lances_estatistica_"+id_produto+"' style='font-size:12px;color:#24314D; width:200px; height:150px; overflow:auto; background:#FFF; margin-top:10px;'></div></div></div>");
	
	//CRIA CRONOMETRO PARA O TEMPORIZADOR
	
	jQuery("body").prepend("<div style='position:fixed; z-index:9999; display:table; width:20%; font-size:12px; color:#FFF; top:0; left:40%; background:#8B0000; padding:10px;' align='center'><div class='area_tempo' style='display:inline-block; zoom:1; *display:inline; width:40px;'>0</div><div class='botao_tempo' style='display:inline-block; zoom:1; *display:inline; width:90px; margin-left:20px;'><a href='#topo' style='color:#FFFFFF; text-decoration:none; display:block; padding:2px 10px; border:1px solid #EE0000; background:#CD0000; text-align='center'>Pausar</a></div></div>");
	
	jQuery("body").prepend("<a href='#' name='topo' style='color:#FFF; background:#8B0000; padding: 0 10px; text-decoration:none; font-size:12px;'>topo</a>");
	
	jQuery("body").append("<a href='#' name='rodape' style='color:#FFF; background:#8B0000; padding: 0 10px; text-decoration:none;  font-size:12px;'>topo</a>");
	
	iniciarTemporizador = setInterval("temporizador()",1);
	
	jQuery(".botao_tempo a").toggle(
			
		function() {
			
			jQuery(".botao_tempo a").html("Continuar");
			
			clearInterval(iniciarTemporizador); //PAUSA A VERIFICAÇÃO
			
		},
		function() {
			
			jQuery(".botao_tempo a").html("Pausar");
			
			iniciarTemporizador = setInterval("temporizador()",1);
			
		}
		
	);
	
	//FINALIZA CRONOMETRO PARA O TEMPORIZADOR
		
	//BOX INDICE "0"	
	jQuery(".iniciar_"+id_produto).toggle(
			
		function() {
			
			jQuery(".iniciar_"+id_produto).html("Pausar");
				
			nome_usuario = jQuery(".campo_user_"+id_produto).val(); //PEGA O LOGIN DO USUARIO NO INPUT
			
			clicar_em   = jQuery(".clicar_em_"+id_produto).val(); //PEGA O TEMPO DO INPUT
			
			if(site_utilizado == "m"){ //VERIFICA SE O SITE É MUKIRANA
			
				intervalo = setInterval("ultimo_lance_m()",1); //EXECUTA A VERIFICAÇÃO
				
			}else if(site_utilizado == "o"){ //VERIFICA SE O SITE É OFERTA FÁCIL
			
				intervalo = setInterval("ultimo_lance_o()",1); //EXECUTA A VERIFICAÇÃO
				
			}	
			
		},
		function() {
			
			jQuery(".iniciar_"+id_produto).html("Iniciar");
			
			clearInterval(intervalo); //PAUSA A VERIFICAÇÃO
			
		}
		
	);
	
	//AUMENTANDO E DIMINUINDO BOX DE LANCES
	
	jQuery(".expandir").toggle(
	
		function(){
	
			jQuery(this).next("div").animate({height: altura_pg+'px'}); //AUMENTA A ALTURA DO BOX
			
			jQuery(this).html("<img src='http://www.tiagoleite.com.br/leilao/down.png' border='0'>"); //MUDA O ICONE PRA DESCER
			
			jQuery(this).attr("title", "Descer"); //MUDA O TITLE DO LINK
			
		},
		function(){
	
			jQuery(this).next("div").animate({height: '150px'}); //RETORNA A ALTURA ORIGINAL DO BOX
			
			jQuery(this).html("<img src='http://www.tiagoleite.com.br/leilao/up.png' border='0'>"); //MUDA O ICONE PRA SUBIR
			
			jQuery(this).attr("title", "Subir"); //MUDA O TITLE DO LINK
			
		}
		
	);
	
});

function ultimo_lance_m(){
	
	var tempo2 = jQuery("#current_time_auction_"+id_produto).html(); //VERIFICA O TEMPO
	
	if(tempo2 > time_lance){ //COMPARA COM A VARIÁVEL ARMAZENADA
	
		var tempo = parseInt(time_lance) + 1; //ESCREVE O TEMPO CORRIGIDO
		
		if(tempo < 10){ tempo = "0"+tempo; } //ACRESCENTA O ZERO PARA MANTER O PADRÃO
		
		time_lance = tempo2; //ATUALIZA A VARIAVEL PARA NOVA CONTAGEM
	
	}else{
	
		var tempo = jQuery("#current_time_auction_"+id_produto).html(); //VERIFICA O TEMPO
		
	}	
	
	time_lance--; //DISCREMENTA A VARIAVEL DE TEMPO PARA COMPARAÇÃO
	
	jQuery("#current_username_auction_"+id_produto+" img").remove(); //RETIRA AVATAR DO NOME #### NOVA MODIFICAÇÃO ####
	
	var user_atual = jQuery("#current_username_auction_"+id_produto).html(); //VERIFICA O USUÁRIO COM LANCE ATUAL
	
	var lance_disponivel = jQuery(".lance_disponivel_"+id_produto).val(); //VERIFICA LANCE RESTANTE
	
	jQuery(".conteudo_estatistica_"+id_produto+" div").css({"background" : "none" , "color" : "#24314D"}); //LIMPA MARCADOR DE USUÁRIO ATIVO
	
	jQuery(".conteudo_estatistica_"+id_produto+" div:first").css({"background" : "#F90" , "color" : "#FFFFFF"}); //ATIVA USUÁRIO ATUAL		
	
	if(user_atual != user_ativo){ //VERIFICA SE O USUÁRIO AINDA CONTINUA ATIVO 
		
		jQuery(".conteudo_estatistica_"+id_produto).prepend("<div style='padding:3px;'><strong>"+tempo+"</strong> - "+user_atual+"</div>"); //ESCREVE NOVO USUÁRIO
		
		if(jQuery("."+user_atual).length){ //VERIFICA SE ESSE USUÁRIO EXISTE
		
			var lances_atuais = jQuery("."+user_atual+" span").html(); //VERIFICA O TOTAL DE LANCES ATUAL
			
			jQuery("."+user_atual+" span").html(parseInt(lances_atuais) + 1); //ACRESCENTA O NOVO LANCE
		
		}else{ //CASO NÃO EXISTA INSERE O NOVO USUARIO NA LISTA
		
			jQuery(".conteudo_lances_estatistica_"+id_produto).prepend("<div style='padding:3px;' class='"+user_atual+"'><strong>"+user_atual+"</strong> - lances( <span style='font-weight:bold; color:#F00;'>1</span> )</div>"); //ESCREVE NOVO USUÁRIO 
			
		}	
		
		
		user_ativo = user_atual; //ALTERA A VARIÁVEL
		
	}
	
	if(lance_disponivel == 0){ //VERIFICA SE AINDA RESTA LANCE DISPONÍVEL
		
		jQuery(".iniciar_"+id_produto).html("Iniciar");
			
		clearInterval(intervalo); //PAUSA A VERIFICAÇÃO
		
	}
	
	if(tempo == clicar_em && user_atual != nome_usuario){ //VERIFICA SE O TEMPO É IGUAL AO DEFINIDO E SE O USUÁRIO É DIFERENTE DO PASSADO
		
		if(clicado == "0"){ //VERIFICA SE O CLIQUE ESTÁ ATIVO
		
			if(jQuery(".ativar_estatistica_"+id_produto+" input:checked").length == 0){ //VERIFICA SE É PRA DAR LANCE OU NÃO
			
				jQuery("#submit_auction_"+id_produto).click(); //EXECUTA A FUNÇÃO DO CLIQUE
				
				jQuery(".lance_disponivel_"+id_produto).val(lance_disponivel - 1); //REDUZ OS LANCES DISPONÍVEIS
			
			}
			
			jQuery(".conteudo_estatistica_"+id_produto).prepend("<div style='padding:3px;'><span style='color:#F00;'>"+tempo+" - "+nome_usuario+"</span></div>"); //DESTACA O NOME
			
			clicado = "1"; //DEFINE O CLIQUE COMO ATIVO
			
		}
		
	}else{
		
		clicado = "0"; //DEFINE O CLIQUE COMO INATIVO
		
	}
	
}

function ultimo_lance_o(){
		
	if(jQuery("#Bid"+id_produto+" span").length){ //VERIFICA SE EXISTE SPAN DENTRO DA DIV TEMPO
	
		var tempo2 = jQuery("#Bid"+id_produto+" span").html().substr(6); //VERIFICA O TEMPO
		
	}else{
	
		var tempo2 = jQuery("#Bid"+id_produto).html().substr(6); //VERIFICA O TEMPO

	}	
	
	if(tempo2 > time_lance){ //COMPARA COM A VARIÁVEL ARMAZENADA
	
		var tempo = parseInt(time_lance) + 1; //ESCREVE O TEMPO CORRIGIDO
		
		if(tempo < 10){ tempo = "0"+tempo; } //ACRESCENTA O ZERO PARA MANTER O PADRÃO
		
		time_lance = tempo2; //ATUALIZA A VARIAVEL PARA NOVA CONTAGEM
	
	}else{
	
		if(jQuery("#Bid"+id_produto+" span").length){ //VERIFICA SE EXISTE SPAN DENTRO DA DIV TEMPO
	
			var tempo = jQuery("#Bid"+id_produto+" span").html().substr(6); //VERIFICA O TEMPO
			
		}else{
		
			var tempo = jQuery("#Bid"+id_produto).html().substr(6); //VERIFICA O TEMPO

		}
		
	}	
	
	time_lance--; //DISCREMENTA A VARIAVEL DE TEMPO PARA COMPARAÇÃO
	
	var user_atual = jQuery("#Usr"+id_produto).html(); //VERIFICA O USUÁRIO COM LANCE ATUAL
	
	var lance_disponivel = jQuery(".lance_disponivel_"+id_produto).val(); //VERIFICA LANCE RESTANTE
	
	jQuery(".conteudo_estatistica_"+id_produto+" div").css({"background" : "none" , "color" : "#24314D"}); //LIMPA MARCADOR DE USUÁRIO ATIVO
	
	jQuery(".conteudo_estatistica_"+id_produto+" div:first").css({"background" : "#F90" , "color" : "#FFFFFF"}); //ATIVA USUÁRIO ATUAL		
	
	if(user_atual != user_ativo){ //VERIFICA SE O USUÁRIO AINDA CONTINUA ATIVO 
		
		jQuery(".conteudo_estatistica_"+id_produto).prepend("<div style='padding:3px;'><strong>"+tempo+"</strong> - "+user_atual+"</div>"); //ESCREVE NOVO USUÁRIO
		
		if(jQuery("."+user_atual).length){ //VERIFICA SE ESSE USUÁRIO EXISTE
		
			var lances_atuais = jQuery("."+user_atual+" span").html(); //VERIFICA O TOTAL DE LANCES ATUAL
			
			jQuery("."+user_atual+" span").html(parseInt(lances_atuais) + 1); //ACRESCENTA O NOVO LANCE
		
		}else{ //CASO NÃO EXISTA INSERE O NOVO USUARIO NA LISTA
		
			jQuery(".conteudo_lances_estatistica_"+id_produto).prepend("<div style='padding:3px;' class='"+user_atual+"'><strong>"+user_atual+"</strong> - lances( <span style='font-weight:bold; color:#F00;'>1</span> )</div>"); //ESCREVE NOVO USUÁRIO 
			
		}	
		
		
		user_ativo = user_atual; //ALTERA A VARIÁVEL
		
	}
	
	if(lance_disponivel == 0){ //VERIFICA SE AINDA RESTA LANCE DISPONÍVEL
		
		jQuery(".iniciar_"+id_produto).html("Iniciar");
			
		clearInterval(intervalo); //PAUSA A VERIFICAÇÃO
		
	}
	
	if(tempo == clicar_em && user_atual != nome_usuario){ //VERIFICA SE O TEMPO É IGUAL AO DEFINIDO E SE O USUÁRIO É DIFERENTE DO PASSADO
		
		if(clicado == "0"){ //VERIFICA SE O CLIQUE ESTÁ ATIVO
		
			if(jQuery(".ativar_estatistica_"+id_produto+" input:checked").length == 0){ //VERIFICA SE É PRA DAR LANCE OU NÃO
				
				bidnow(id_produto);//EXECUTA A FUNÇÃO DO CLIQUE
				
				jQuery(".lance_disponivel_"+id_produto).val(lance_disponivel - 1); //REDUZ OS LANCES DISPONÍVEIS
			
			}
			
			jQuery(".conteudo_estatistica_"+id_produto).prepend("<div style='padding:3px;'><span style='color:#F00;'>"+tempo+" - "+nome_usuario+"</span></div>"); //DESTACA O NOME
			
			clicado = "1"; //DEFINE O CLIQUE COMO ATIVO
			
		}
		
	}else{
		
		clicado = "0"; //DEFINE O CLIQUE COMO INATIVO
		
	}
	
}

function temporizador(){
	
	var tempo = parseInt(jQuery(".area_tempo").html());
	
	var destino = jQuery(".botao_tempo a").attr("href");
	
	if(tempo > 0){
		
		tempo--;
		
		jQuery(".area_tempo").html(tempo);
		
	}else{
		
		jQuery(".area_tempo").html('10000');
		
		if(destino == "#topo"){
			
			jQuery(".botao_tempo a").attr("href", "#rodape");
			
		}else if(destino == "#rodape"){
			
			jQuery(".botao_tempo a").attr("href", "#topo");
			
		}
		
		window.location.href = urlsite+destino;
		
	}
		
	
}