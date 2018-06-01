
    var m_names = ["January", "February", "March", 
    "April", "May", "June", "July", "August", "September", 
    "October", "November", "December"];
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();
    if(dd<10) { dd='0'+dd } 
    var currentDate= m_names[mm]+' '+dd+', '+yyyy;

    document.getElementById("date").innerHTML = currentDate;



