

var expect = function(val) {
  
    let res = {
        toBe: function(val2) {
            if (val === val2) {
                return true;
            }
            throw new Error("Not Equal");
        },

        notToBe: function(val2) {
            if (val !== val2) {
                return true;
            }
            throw new Error("Equal");
        }
    };
    return res;
};


  //  expect(5).toBe(5); // true              >  first expect(5) called and returns an object (res). 
 //                                           >  Then, the returned object's toBe(5) method is called.