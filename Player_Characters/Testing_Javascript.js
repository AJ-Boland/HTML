
  function myFunction(z,name) 
  {
    
    // if(z == 1){
        
      //document.getElementsByClassName("InfoArea")[0].style.display = 'none';
      var larry = document.getElementsByClassName(name)
      var x = 0 //counter
      for (var i of larry){
        
        
        if (x == z){
          
          i.style.display = ''
        }else{
          i.style.display = 'none'
        }
        x += 1
        
      }
      
      
      //}

    }