document.querySelector("#submit").addEventListener('click', function(){

    console.log("button");

    let Phone = "522229033821";
    
    let FullName = document.querySelector("#FullName").value;
    let Email = document.querySelector("#Email").value;
    let Service = document.querySelector("#ServiceContact").value;
    let Message = document.querySelector("#Message").value;

    let url = `https://api.whatsapp.com/send?phone=${Phone}&text=
    *_EdXpertz_*%0A
    *Servicios de programador*%0A
    *Mi nombre es:*%0A
    ${FullName}%0A
    *Este es mi correo de contacto:*%0A
    ${Email}%0A
    *El servicio que solicito es:*%0A
    ${Service}%0A
    *Con estos requisitos:*%0A
    ${Message}`;

    if (FullName === "" || Email === "" || Service === "" || Message === "") {
        
        alert(`Faltan algunos datos, ${FullName}`);
        return false;

    }
    else{

        alert(`Tus datos serán enviados correctamente, ${FullName}, solo verificalos en la siguiente ventana de WhatsApp.`);
        window.open(url);    
    }





});