function calcular() 
{
    var senhor_aneis = document.getElementById("sociedade1")
    var quant_sociedade = document.getElementById("num1")
    var preco_total = document.getElementById("total")
    var total = 0.0

    if(senhor_aneis.checked)
    {        
        total =total+ (senhor_aneis.value*quant_sociedade.value)

    }

    var senhor_aneis2 = document.getElementById("sociedade2")
    var quant_duastorres = document.getElementById("num2")
    
    if(senhor_aneis2.checked)
    {        
        total=total + (senhor_aneis2.value*quant_duastorres.value)
    }

    var senhor_aneis3 = document.getElementById("sociedade3")
    var quant_retornorei = document.getElementById("num3")
    
    if(senhor_aneis3.checked)
    {        
        total=total + (senhor_aneis3.value*quant_retornorei.value)
    }

    var eassimqueacaba = document.getElementById("assimacaba")
    var quant_eassimqueacaba = document.getElementById("num4")
    
    if(eassimqueacaba.checked)
    {        
        total=total + (eassimqueacaba.value*quant_eassimqueacaba.value)
    }

    var antescafe = document.getElementById("cafeesfrie")
    var quant_antescafe = document.getElementById("num5")
    
    if(antescafe.checked)
    {        
        total=total + (antescafe.value*quant_antescafe.value)
    }


    var embuscademim = document.getElementById("embusca")
    var quant_embuscademim = document.getElementById("num6")
    
    if(embuscademim.checked)
    {        
        total=total + (embuscademim.value*quant_embuscademim.value)
    }
    
    var tronodevidro1 = document.getElementById("tronovidro")
    var quant_tronodevidro = document.getElementById("num7")
    
    if(tronodevidro1.checked)
    {        
        total=total + (tronodevidro1.value*quant_tronodevidro.value)
    }
    
    var tronodev2 = document.getElementById("tronovidro2")
    var quant_tronodev2 = document.getElementById("num8")
    
    if(tronodev2.checked)
    {        
        total=total + (tronodev2.value*quant_tronodev2.value)
    }
    
    var tronodev3 = document.getElementById("tronovidro3")
    var quant_tronodev3 = document.getElementById("num9")
    
    if(tronodev3.checked)
    {        
        total=total + (tronodev3.value*quant_tronodev3.value)
    }
    
    var orgulhoep = document.getElementById("orgulhoepreconceito")
    var quant_orgulhoep = document.getElementById("num10")
    
    if(orgulhoep.checked)
    {        
        total=total + (orgulhoep.value*quant_orgulhoep.value)
    }
    
    var omorrodosv = document.getElementById("omorro")
    var quant_omorrodosv = document.getElementById("num11")
    
    if(omorrodosv.checked)
    {        
        total=total + (omorrodosv.value*quant_omorrodosv.value)
    }

    var draculabs = document.getElementById("dracula")
    var quant_draculabs = document.getElementById("num12")
    
    if(draculabs.checked)
    {        
        total=total + (draculabs.value*quant_draculabs.value)
    }

    var fogoesng = document.getElementById("fogoesangue")
    var quant_fogoesng = document.getElementById("num13")
    
    if(fogoesng.checked)
    {        
        total=total + (fogoesng.value*quant_fogoesng.value)
    }

    var mundogf = document.getElementById("geloefogo")
    var quant_mundogf = document.getElementById("num14")
    
    if(mundogf.checked)
    {        
        total=total + (mundogf.value*quant_mundogf.value)
    }

    preco_total.innerHTML="R$ " + total.toFixed(2)
    document.getElementById("valorTotal").value = total.toFixed(2);

}





function retornaValor() { 
 
var cartaoavista = document.getElementById("cartao_vista")
var valorTotal = parseInt(document.getElementById("valorTotal").value);
var preco_total = document.getElementById("totalComDescontos")
//var preco_total = 0.00
var desconto = ((valorTotal * 15)/100)

    if(cartaoavista.checked)
    {
   //   preco_total.innerHTML="R$ " + total.toFixed(2) - desconto
        var valorComDesconto = valorTotal - desconto;
        preco_total.innerHTML="R$ " + valorComDesconto.toString(); 
    }


var cartaoparcelado = document.getElementById("cartao_parcelado")
var numeroparcela = parseInt(document.getElementById("parcela").value)
var ValorParcelado = valorTotal/numeroparcela

    if(cartaoparcelado.checked)
    {
        preco_total.innerHTML= (numeroparcela) + " parcelas de R$ " + ValorParcelado.toString()
    }



var pix1pix = document.getElementById("pix")    
var desconto2 = ((valorTotal * 15)/100)
var valorDesconto = valorTotal - desconto2

if(pix1pix.checked)
{
  
  preco_total.innerHTML="R$ " + valorDesconto.toString()

}


}
    
    
    
    
    



























