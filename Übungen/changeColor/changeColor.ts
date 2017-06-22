document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById("Hand").style.background="red";

    document.getElementById("Hand").addEventListener("click", abc);
    

    function abc() {
        
            var color: string = document.getElementById("Hand").style.background;
            
            if (color == "red") {
                document.getElementById("Hand").style.background = "green";
           } else {
                document.getElementById("Hand").style.background = "red";
                }
        console.log("Hallo");
}
    
 


    
});