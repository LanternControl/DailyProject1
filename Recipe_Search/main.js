function searchSubmit(){
  let usersearch = document.getElementById("textinput").value;
  fetch("http://recipepuppyproxy.herokuapp.com/api/?q=" + usersearch)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status);
          return;
        }
      
        response.json().then(function(data) {
          let resultsArray = data.results;
            display(resultsArray);
          
          })
        });
      }



      
   
   
    

        
        
        
        
        
        
 