(function(){
    var i = 0;
    var txt = 'Email Scheduling'; 
    var speed = 200;
    
    function typeWriter() {
        
            if (i < txt.length) {
                document.getElementById("typing").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
              }
        
    }
    typeWriter()

})();