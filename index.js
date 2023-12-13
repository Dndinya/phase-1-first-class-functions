 function callback(){
    console.log('This is a function');
 }
 function receivesAFunction(callback){
    callback();
console.log('its not a callback function');
   }
  function returnsANamedFunction(){
    function namedFunction() {
        console.log('This is a named function!');
      }
      return namedFunction;
  }
 function returnsAnAnonymousFunction(){
    return function() {
        console.log('This is an anonymous function!');
      };
 }