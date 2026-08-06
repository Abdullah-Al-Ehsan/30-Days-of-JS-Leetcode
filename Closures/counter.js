

var createCounter = function(n) {
    n=n-1;
    return function() {
        n=n+1
        return n;
    };
};

 const counter = createCounter(10)
 counter();
 counter();