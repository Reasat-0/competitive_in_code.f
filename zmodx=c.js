var number_of_test = readline();
 
 
function get_numbers_with_solution(){
   var arr = readline().split(' ') ;
   var a = parseInt( arr[0] ),
       b = parseInt( arr[1] ),
       c = parseInt( arr[2] )
   var z = c, 
       y = c + b,
       x = c + b + a;
   print(x + " " + y + " " + z ) ;
}
 
for(var i = 0 ; i < number_of_test ; i++ ) {
   
   get_numbers_with_solution();
 
}