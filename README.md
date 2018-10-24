# math
This is a repository about math APIs.
        
2018-10-22   
LinWei     
           
Achieve some math APIs.    
See [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).     
Note:     
No support to Internet Explorer.     
      
APIs:    
```
Math._sqrt
```     
Description:    
Return the square root of a number.     

[source](https://github.com/asilinwei/math/blob/master/src/sqrt.js)   
See [Math.sqrt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)     
     
Example:   
```
Math._sqrt(16)
// => 4

Math._sqrt('0x10')
// => 4

Math._sqrt(-1)
// => NaN
```      
------------------------------------------
```
Math._toHex
```        
Description:     
Convert a number to hexadecimal sequence.      
          
[source](https://github.com/asilinwei/math/blob/master/src/toHex.js)        
        
Example:
```
Math._toHex(64)
// => '40'

Math._toHex(NaN)
// => '0'
```                          