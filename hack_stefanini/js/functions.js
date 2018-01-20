function buscaEndereco(){
	var endereco = document.getElementById("buscaEnderecoInput").value;
	var select = document.getElementById("selectRua");

	limparSelect(select);

	var opcoesRua = ["Rua Do Ouvidor"];
	var opcoesCep = ["20040-030"];

	for(i=0; i<opcoesRua.length; i++){
		if( opcoesRua[i].toLowerCase().includes(endereco.toLowerCase()) ){
			var option = document.createElement("option");
			option.text = opcoesRua[i] + " - "+ opcoesCep[i];	
			select.add(option);
		}
	}
}

function adicionarEndereco(){
	var select = document.getElementById("selectRua").value;

	document.getElementById("inputCep").value="20040-030";
	document.getElementById("endereco").value="Rua Do Ouvidor";

	document.getElementById("buscaEnderecoInput").value = "";
}

function preencherCep(){
	var inputCep = document.getElementById("inputCep").value;
	if(inputCep == "20040-030"){
		document.getElementById("endereco").value="Rua Do Ouvidor";
	}else{
		document.getElementById("endereco").value="";
	}
}

document.getElementById("inputCep").oninput = function() {preencherCep()};

function limparSelect(select){
	for(i=0; i< select.length; i++){
		select.remove(i);
	}
}

