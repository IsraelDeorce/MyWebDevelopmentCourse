			//esta função pode ser chamada para modificar o output de acordo com oo panel html e css
			function updateOutput() {
				$("iframe").contents().find("html").html("<html<head><style type='text/css'>" +  //está colocando todo o CSS dentro:
					$("#cssPanel").val() + "</style></head><body>" + //Pega tudo que está escrito do html e da close:
					$("#htmlPanel").val() + "</body></html>");
					
					
					document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
					
			}
			
			$(".toggleButton").hover(function() {
				
				$(this).addClass("highlightedButton");
			
			}, function() {
			
				$(this).removeClass("highlightedButton");
			
			});
            
			$(".toggleButton").click(function() {
			
				$(this).toggleClass("active");
				
				$(this).removeClass("highlightedButton");
				
				//attr pega o atributo, no caso ele irá retornar, ex: css + Panel, cssPanel
				var panelId = $(this).attr("id") + "Panel";	
				//daí, nesta linha ele irá fazer o #cssPanel receber a classe hidden que irá esconder.
				$("#" + panelId).toggleClass("hidden");
				//uma outra forma é só usar o toggle, q nao precisa apresentar a classe:
				//$("#" + panelId).toggle();
				
				//contando o número de painéis ativos para controlar o tamanho (diminui 4 que é o máximo pelo número de paineis "hidden":
				var numberOfActivePanels = 4 - $(".hidden").length;	
//				//e depois, com a variavel de número de paineis ativos, pega a largura da página e divide entre o número de painéis ativos:
				$(".panel").width($(window).width() / numberOfActivePanels - 10);	
				
			});
			
			$(".panel").height($(window).height() - $("#header").height() - 15);
			
			$(".panel").width($(window).width() / 2 -  10);			
			
			updateOutput();
			
			//esta função "change keyup paste click" detecta tudo e ativa oq vm dentro.
			$("textarea").on("change keyup paste", function() {
				
				//chama a função especificada acima.
				updateOutput();
				
			});
			