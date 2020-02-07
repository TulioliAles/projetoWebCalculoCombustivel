var etanol, gasolina;

function calcular(){
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(',' , '.'));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(',' , '.'));
      
    if(etanol < 0.7 * gasolina){
        document.getElementById("status").scr = "etanol.png";
    } else{
        document.getElementById("status").scr = "gasolina.png";
    }
}

function resetar(){
    document.getElementById("status").scr = "neutro.png";
}