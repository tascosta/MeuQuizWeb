function quiz() {
	let resultado = 0;

	if (document.meuquiz.p1[0].checked == false && document.meuquiz.p1[1].checked == false) {
		alert('Por favor, selecione alguma opção da questão 1');
		document.meuquiz.p1[0].focus();
		return (false);
	}else if(document.meuquiz.p2[0].checked == false && document.meuquiz.p2[1].checked == false && document.meuquiz.p2[2].checked == false && document.quizhtml.p2[3].checked == false) {
		alert('Por favor, selecione alguma opção da questão 2');
		document.meuquiz.p2[0].focus();
		return (false);
	}else if(document.meuquiz.p3[0].checked == false && document.meuquiz.p3[1].checked == false && document.meuquiz.p3[2].checked == false){
		alert('Por favor, selecione alguma opção da questão 3');
		document.meuquiz.p3[0].focus();
		return (false);
	}
	else if(document.meuquiz.p4.value == ''){
		alert('Por favor, responda a questão 4');
		document.meuquiz.p4.focus();
		return (false);
	}
	else if(document.meuquiz.p5[0].checked == false && document.meuquiz.p5[1].checked == false && document.meuquiz.p5[2].checked == false){
		alert('Por favor, selecione alguma opção da questão 5');
		document.meuquizmeuquiz.p5[0].focus();
		return (false);
	}
	else if(document.meuquiz.p6[0].checked == false && document.meuquiz.p6[1].checked == false && document.meuquiz.p6[2].checked == false && document.quizhtml.p6[3].checked == false){
		alert('Por favor, selecione alguma opção da questão 6');
		document.meuquiz.p6[0].focus();
		return (false);
	}
	else if(document.meuquiz.p7[0].checked == false && document.meuquiz.p7[1].checked == false && document.meuquiz.p7[2].checked == false){
		alert('Por favor, responda a questão 7');
		document.meuquiz.p7.focus();
		return (false);
	}
	else if(document.meuquiz.p8[0].checked == false && document.meuquiz.p8[1].checked == false){
		alert('Por favor, selecione alguma opção da questão 8');
		document.meuquiz.p8[0].focus();
		return (false);
	}
	else if(document.meuquiz.p9.value == 'escolha'){
		alert('Por favor, selecione alguma opção da questão 9');
		document.meuquiz.p9[0].focus();
		return (false);
	}
	else if(document.meuquiz.p10.value == 'escolha'){
		alert('Por favor, selecione alguma opção da questão 10');
		document.meuquiz.p10[0].focus();
		return (false);
	}
	if (document.meuquiz.p1[1].checked) {
		resultado++;
	} 
	if (document.meuquiz.p2[2].checked) {
		resultado++;
	} 
	if (document.meuquiz.p3[0].checked) {
		resultado++;
	} 
	if (document.meuquiz.p4.value == 'text-color' || document.meuquiz.p4.value == 'Text-color' || document.meuquiz.p4.value == 'TEXT-COLOR') {
		resultado++;
	} 
	if (document.meuquiz.p5[0].checked) {
		resultado++;
	} 
	if (document.meuquiz.p6[2].checked) {
		resultado++;
	} 
	if (document.meuquiz.p7[1].checked) {
		resultado++;
	} 
	if (document.meuquiz.p8[0].checked) {
		resultado++;
	}  
	if (document.meuquiz.p9.value =='certa') {
		resultado++;
	} 
	if (document.meuquiz.p10.value == 'certa') {
		resultado++;
	}
	
	document.meuquiz.resultado.value = ((100 * resultado)/10) + '%';
	
	return true;
	
}