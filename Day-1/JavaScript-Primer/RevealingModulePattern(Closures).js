function getSpinner(){
   var count = 0;
   function upper(){
      return ++count;
   }
   function downer(){
      return --count;
   }
   return {
     up : upper,
     down : downer
   }
}