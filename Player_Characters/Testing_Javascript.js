
  function myFunction(z,name) 
  {
    
    // if(z == 1){
        
      //document.getElementsByClassName("InfoArea")[0].style.display = 'none';
      var larry = document.getElementsByClassName(name)
      for (var i of larry){
        alert(z);
        if (i == z){
          
          larry[i].style.display = ''
        }else{
          larry[i].style.display = 'none'
        }
        
      }
      
      
      //}

    }