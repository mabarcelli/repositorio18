 console.log("Hola mundo");

 let nombre = document.getElementById("nombre");
 let apellido = document.getElementById("apellido");
 let btnenviar = document.getElementById("btnenviar");

nombreV="";
apellidoV="";

 btnenviar.addEventListener("click", function(e){

    e.preventdefault;


        nombreV = nombre.Value;
        apellidoV = apellido.Value;


            if(nombreV === ""){
             error1.innerHTML = "error en el nombre";
             error1.style.color = "red";
             return;
                }
            

            //console.log(nombrev);
            //console.log(apellidov);

            console.log('estoy clickeando');
 })