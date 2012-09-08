!SLIDE center

# The Winner is *Javascript*

![Victory](VictoryFace2.png)

!SLIDE center

# *Jeff Atwood's Law*
## Any application that can be written in JavaScript, will eventually be written in JavaScript.

!SLIDE bullets
# Javascript 
## Lisp in C clothing
![Lisp XKCD](xkcd-c224-lisp.jpg)



!SLIDE 
# Y Combinator

    @@@ javaScript
    // Creates a recursive function
    // from one that isn't
    function Y(X) {
      return (function(procedure) {
        return X(function(arg) {
          return procedure(procedure)(arg);
        });
      })(function(procedure) {
        return X(function(arg) {
          return procedure(procedure)(arg);
        });
      });
    }


!SLIDE execute
# Y Combinator (using)

    @@@ javaScript
    var factorial = Y(function(recurse) {
      return function(x) {
        return x == 0 ? 1 : x * recurse(x-1);
      };
    });

    result = factorial(6);

