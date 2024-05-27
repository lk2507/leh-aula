 let XBolinha = 100;
 let YBolinha = 200;
 let diametro = 22;
 let raio = diametro / 2;
 
 let velocidadeXBolinha = 6;
 let velocidadeYBolinha = 6;
 
 let xRaquete = 5;
 let yRaquete =150;
 let raqueteComprimento = 10;
 let raqueteAltura = 90;
 let colidiu = false;
 function setup (){
 createCanvas (600,400);

  


}

function draw() {
  background("pink")
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete(); 
  
  colisaoMinhaRaqueteBiblioteca();
  
  
}

  function mostraBolinha(){
    circle (xBolinha,yBolinha,diametro);
  
}

  function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;

}

  function verificaColisaoBorda(){
    if (xBolinha + raio >width || xBolinha - raio<0){
     velocidadeXBolinha *= -1;
      
}
    
    if (yBolinha + raio >height || yBolinha - raio <0);
     velocidadeYBolinha *= -1;
 }
}
   function mostraRaquete(){
     rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura);

}

   function movimentaMinhaRaquete(){
     if(keylsDown(UP_ARROW)){
      yRaquete-= 10;
 
}
    if(keylsDown(DOWN_ARROW)){
      yRaquete += 10;
 
 }
}

   function verificaColisaoRaquete(){
     if(xBolinha - raio < xRaquete + raqueteAltura && yBolinha - raio < yRaquete){
       velocidadeXBolinha *= -1;

 }
}

   function colisaoMinhaRaqueteBiblioteca(){
     colidiu= collideRectCircle(xRaquete,yRaquete,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
     if (colidiu){
       velocidadeXBolinha *= -1;
       
 }
}





      
    
