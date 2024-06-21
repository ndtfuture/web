function percentage_1() {
    
    // Method returns the element of percent id
   // var percent = document.getElementById("percent").value;
    
    // Method returns the element of num id
    var num = document.getElementById("num").value;
    document.getElementById("value1")
        .value = "$"+ Math.round((num / 30) * 100);
    }
    
    function percentage_2() {
    
    // Method returns the element of num1 id
	
   
   //Comment out the below line to ignore getting percentage from user input
   // var num1 = document.getElementById("num1").value;
   
    
    // Method returns the elements of num2 id
    var num2 = document.getElementById("num2").value;
    document.getElementById("value2")
        	.value = "$"+ Math.round((num2/40) * 100);
    }
