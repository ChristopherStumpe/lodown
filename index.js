'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Takes a parameter called value and returns the value unchanged.
 * 
 * @param {Value} value: can be any input value.
 * 
 * @return {Value}: will be the same value as my input value. 
 * 
 */
function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Takes a parameter called value and returns the type of the value as a string.
 * 
 * @param {value} value: can be any input value.
 * 
 * @return {String}: returns a string with the data type.
 * 
 */
 function typeOf(value){  
   let result = typeof(value);
   if(result == 'object') {
       if(Array.isArray(value)) {
           let result = 'array';
           return result;
       }
       if(value === null) {
           let result = 'null';
           return result;
       }
   }
  return result;  
 }
 module.exports.typeOf = typeOf;
 
/**
 * first: Takes two parameters, a value and a number and returns a paired down array with nust the first *input number* of items in the array.
 *  edge cases include: negative number, or non-array as first input. Both will return an empty array. 
 * 
 * @param {Array} array: The array to grab values from.
 * @param {Number} number: the number of values to grab from the front of the array.
 * 
 * @return {Array}: returns a new array with just *input number* of items from the front of array.
 * 
 */
 function first(array, number) {
    if(!Array.isArray(array) || number < 0) {
        return [];
    };
   let results = [];
   for(let i = 0; i < number && i<array.length; i++) {
       results.push(array[i]);
   }
   if(results.length == 0) {
       results = array[0]
   }
   return results;
}
module.exports.first = first;

/**
 * last: Takes two parameters, an array and a number and returns the last *numbers* of the array.
 *  edge cases include: negative number, or non-array as first input. Both will return an empty array. 
 * 
 * @param {Array} array: The array to grab values from.
 * @param {Number} number: the number of values to gram from the end of the array.
 * 
 * @return {Array}: returns a new array with just *input number* of items from the end of the array.
 * 
 */
 function last(array, number) {
    if(!Array.isArray(array) || number < 0) {
        return [];
    };
   let results = [];
   let counter;
   if (number>array.length) {
       counter = array.length
   } else {
       counter = number
   }
   for(let i = array.length-1; i > (array.length-counter-1); i--) {
       results.unshift(array[i]);
   }
   if(results.length == 0) {
       results = array[array.length-1]
   }
   
   return results;
}
module.exports.last = last;

/**
 * indexOf: Takes two parameters, an array and a value and returns the index of *array* that is the first occurrance of *value*.
 * If the value is not found the function will return -1.
 * 
 * @param {Array} array: The array to grab values from.
 * @param {Value} value: the value to search for in the array.
 * 
 * @return {Number}: returns the index representing the first occurrance of *value*.
 *
 */
 function indexOf(array, value) {
    for(let i = 0; i <array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }
    return -1
}
module.exports.indexOf = indexOf;

/** 
 * contains
 * 
 * @param {Array} array: The array to grab values from.
 * @param {Value} value: The value to search the array for.
 * 
 * @return {Boolean}: returns a boolean value representing if the value can be found in the array.
 *
 */
 function contains(array, value) {
     return array.includes(value) ? true : false;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Loops through an array and returns a new array with all duplicates removed.
 * 
 * @param {Array} array: the array to loop over and remove duplicates from
 * 
 * @return {Array}: returns a new array with all duplicates removed.
 */
 
function unique(array) {
     var newArray = [];
    for(var i = 0; i < array.length; i++) {
        if(newArray.indexOf(array[i]) === -1) {
           newArray.push(array[i]);
        } 
    }
    return newArray;
};
module.exports.unique = unique;


/**
 * filter: loops through an array, passing each value, index, and the entire collection through the given function, and returns a new array of the values that returned true.
 * 
 * @param {Array} array: the array to loop through.
 * @param {Function} funky: the function to pass the values into and grab the true results from. Should output a boolean value.
 * 
 * @return {Array}: the values that returned true when passed through the function; placed in a new array.
 */
 
function filter(array, funky) {
    let myArray = [];
    let result;
    for(let i =0; i<array.length; i++) {
        result = funky(array[i], i, array)
        if(result == true) {
            myArray.push(array[i])
        }
    }
    return myArray;
}
module.exports.filter = filter;


/** 
 * reject: loops through an array, passing each  value, index, and the entire collection through the given function, and returns a new array consisting of the values that returned false.
 * 
 * @param {Array} array: the array to loop through.
 * @param {Function} funky: the function to pass the values into and grab the results from. Should output a boolean value.
 * 
 * @return {Array}: the values that returned false when passed through the function; placed in a new array.
 */
 
function reject(array, funky) {
     let results =[];
    let filterResults =_.filter(array, funky)
    for(let i=0; i<array.length;i++) {
        if(filterResults.includes(array[i])) {
        } else {
            results.push(array[i])
        }
    }
    return results;
}
module.exports.reject = reject;

/** 
 * partition: loops through an array, passing each  value, index, and the entire collection through the given function, and returns a new array consisting of two
 * sub arrays, the first with all truthy results, and the second with all falsy results.
 * 
 * @param {Array} array: the array to loop through.
 * @param {Function} funky: the function to pass the values into and grab the results from. Should output a boolean value.
 * 
 * @return {Array}: This array will consist of two sub arrays, the first holding the truthy values and the second holding the falsey values.
 */
 
function partition(array, funky) {
    let subTruthy = []
    let subFalsey = []
    let results = []
    let funkResult;
    for(let i = 0; i < array.length; i++) {
        funkResult = funky(array[i], i, array)
        if(funkResult === true) {
            subTruthy.push(array[i]);
        } else {
            subFalsey.push(array[i]);
        }
    }
    results.push(subTruthy, subFalsey);
    return results;
}
module.exports.partition = partition;

/**
 * map: loop through a collection, passing each value through the given function and returning the results of the function in a new array.
 * 
 * @param {Collection} collection: the collection to loop through and modify.
 * @param {Function} funky: the function to run each value through.
 * 
 * @return {Array}: This new array will consist of the values returned by running the collection through the provided function.
 */
 
function map(collection, funky) {
    let funkyCollection =[];
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            funkyCollection.push(funky(collection[i], i, collection))
        } 
    }else { 
        for(let key in collection) {
            funkyCollection.push(funky(collection[key], key, collection))
        }
    }
    return funkyCollection;
}
module.exports.map = map;

/**
 * pluck: loop through an array of objects and return the value of the given property for every element in array.
 * 
 * @param {Array} array: the array to loop through.
 * @param {String} prop: the property to search for.
 * 
 * @return {Array}: This new array will contain the value of the given property for every element in the array.
 */

function pluck(array, prop) {
    let results = _.map(array, function(object, index, array) {
        return object[prop]
    })
    return results;
}
module.exports.pluck = pluck;

/** 
 * every: call the given function for every element in the collection. If all results are true return true, otherwise return false. If no function is provided it defaults to false.
 * 
 * @param {Collection} collection: the array to loop through.
 * @param {Function} funky: the function to apply to the collection. Should return booleans.
 * 
 * @return {Boolean}: return a boolean of true if every element passes true, otherwise false.
 */
 
function every(collection, funky) {
    let mapResults;
    if(arguments.length == 2) {
            mapResults = _.map(collection, funky);
    } else if(Array.isArray(collection)){
            mapResults = _.map(collection, function(value, i, collection) {
            if(collection[i]) {
                return true;
            } else {
                return false;
            }
        }) 
    } else {
            mapResults = _.map(collection, function(value, key, collection) {
            if(collection[key]) {
                return true;
            } else {
                return false;
            }
        })
    }
    for(let i = 0; i < mapResults.length; i++) {
            if(mapResults[i] === false) {
                return false;
            }
        }
        return true;
};
module.exports.every = every;

/**
 * some: Call the given function for every element in the collection. Return true if at least one result is true, if false for every, return false. If no function is provided it defaults to false.
 * 
 * @param {Collection} collection: The collection to loop through.
 * @param {Function} funky: the function to apply to the elements of the collection. Should return a boolean.
 * 
 * @return {Boolean}: return a boolean of true if at least one result is true, if all are false return false.
 */
 
function some(collection, funky) {
    let mapResults;
    if(arguments.length == 2) {
        mapResults = _.map(collection, funky);
    } else {
        mapResults = _.map(collection, function(value, i, collection) {
            if(collection[i]) {
             return true;
        } else {
            return false;
        }
        });
    }   for(let i = 0; i < mapResults.length; i++) {
            if(mapResults[i] === true) {
                return true;
            }
        }
        return false;
};
module.exports.some = some;

/**
 * reduce:run through an array and compile a single result based on the given function.
 * 
 * @param {Array} array: The array to reduce.
 * @param {Function} funky: the function to use to compile the single value.
 * @param {Value} seed: the seed value to start the compiling.
 * 
 * @return {Value}: The final value returned from the function representing the entirety of the compiled values.
 */

function reduce(array, funky, seed = array[0]) {
    let garden = seed;
    let i;
    for(arguments.length === 3 ? i = 0 : i = 1; i < array.length; i++) {
        garden = funky(garden, array[i], i);
    }
    return garden;
};
module.exports.reduce = reduce;

/**
 * extend: takes a series of objects and compiles all of their properties into the first object.
 * 
 * @param: {Object} myObject: The first object given will be the object that all of the properties are compiled into.
 * @param: {Objects} ...objects: Any further number of objects.
 * 
 * @return {Object}: The first object with an updated property list reflecting the entirety of entered objects.
 */

function extend(myObject, ...objects) {
    for(let i = 0; i < objects.length; i++) {
        for(let key in objects[i]) {
            myObject[key] = objects[i][key];
        }
    }
    return myObject;
};
module.exports.extend = extend;
