
function alertMessage (message){
    const dateTimeNow = new Date();
    console.log(dateTimeNow.toLocaleDateString()); 
    console.log(dateTimeNow.toLocaleTimeString());
    return  dateTimeNow.toLocaleDateString()+" "+dateTimeNow.toLocaleTimeString()+" : "+message;
}




alert(alertMessage("Je veux qu'Emma me suck !"));
