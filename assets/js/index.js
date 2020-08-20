"use strict";

function MyArray() {

    this.length = 0;

    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
        
    };

    this.push = function () {
        
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length ++;
        }
        return this.length
    };

    this.pop = function () {

        
        if (this.length > 0) {
            let delValue = this[this.length - 1];
            delete this[this.length - 1];
            this.length--;
            return delValue;
        } 

    };


    this.forEach = function (callback) {
        
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
            
        }
        return undefined;
        
    };
    
    
    this.flat = function (depth = 1) {
        if (depth < 0) {
        console.error("depth must be a positive value");
        return;
        }
        let newMyArr = [];
        if (depth === 0) {
        newMyArr = newMyArr.concat(this);
        return newMyArr;
        }
        for (let i = 0; i < this.length; i++) {
            this[i] && typeof this[i] === 'object' ? newMyArr = newMyArr.concat(this[i].flat(depth - 1)) : newMyArr.push(this[i]);
        }
        return newMyArr;
    };
};

// 2) Flat for objects

function flatObj(obj, depth = 1 ) {
    if (depth < 0) {
        console.error("depth must be a positive value");
        return;
    }
    let res = {};
    if (depth === 0) {
        res = Object.assign(res, obj);
        return res;
    }
    let newKey;
    for (const key in obj) {
        const value = obj[key];
        if(value != undefined) {
            value && typeof value === 'object' ? res = flatObj(Object.assign(res, value), depth - 1) : res[key] = value;
        }
    }    
    return res;
}


let zxd = {
    a: 2, 
    b: 3, 
    df: {
        c: 1, 
        e: 3, 
        d: 4,
    },
    dfg: {
        q: 34, 
        w: 21, 
        r: 3,
        efdr: {
            t: 23, 
            y: 1212, 
            u: 234,
        }, 
        
    },
    
    i: 2, 
    o: 23,
}

//3) logParenthis


function logParenthis(number) {
    if (number === 1) {
        return ['(',')'].toString().replace(/,/g, '');
      }
      return [`(`,`${logParenthis(number - 1)}`,`)`].toString().replace(/,/g, '');
    
}


//4) User object


const user = {
    name: "Test",
    bornDate: new Date(1986, 8, 10),
    hourRate: 11,
    workedHours: 160,
    get age() {
        return Math.floor((Date.now() - Date.parse(this.bornDate)) / 31536000000, 0);
    },
    get salary() {
      return this.hourRate * this.workedHours;  
    },
};

//last lesson tasks

function getVowelSum(string) {


    return string.replace(/[^aeiouAEIOU]/g, "").split("").length;
  
    
}
  
  
  
function getFizzBuzz(n) {
  
    n = parseInt(n, 10);
  
    for (let i = 1; i <= n; i++) {
      
      if (i % 3 === 0 && i % 5 === 0) {
          console.log("fizzbuzz");
      } else if (i % 3 === 0 ) {
          console.log("fizz");
      } else if (i % 5 === 0) {
        console.log("buzz");
      }
      
    }
    
}
  
  function avg(...args) {
  
    let avgArr = args;
    let avg = 0;
    for (let i = 0; i < avgArr.length; i++) {
        avg = avg + avgArr[i];
    };
    return avg / avgArr.length;
    
};


  function addNum(n) {

    function retFunc (a=3) {
       return n + a;
  };
  return retFunc();

};


function operation(num1, num2, fn) {

    return fn(num1, num2);
    
}


const obj = {

    method1 (){
        return this;
    },
    method2 (){
        return this;
    },
    method3 (){
        return "Метод 3";
    },

}