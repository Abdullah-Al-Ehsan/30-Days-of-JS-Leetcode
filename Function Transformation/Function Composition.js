
var compose = function(functions) {

    let composedFunction = function(x) {
        let i = functions.length - 1;

        while(i >= 0) {
            let cur = functions[i];
            let result = cur(x);
            x = result;
            i-=1;
        }
        return x;
    };
    
    return composedFunction;
};
/**
 * const fn = compose([x => x + 1, x => 2 * x])    //compose returs a function
 * fn(4) // 9     
 */