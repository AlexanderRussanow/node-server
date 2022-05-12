
module.export = function () {
   if (!Array.prototype.myMap) {
      Array.prototype.myMap = function (callback) {
         if (!(this instanceof Array || this instanceof String)) {
            throw new TypeError('myMap was called on a wrong type')
         }
         if (typeof callback !== 'function') {
            throw new TypeError('myMap was called with a wrong callback')
         }
         const newArray = []
         for (let i = 0; i < this.length; i++) {
            newArray.push(callback(this[i], i, this))
         }
         return newArray
      }
   }
}


module.exports = function () {
   if (!Array.prototype.myReduce) {
      Array.prototype.myReduce = function (callback, initialValue) {
         if (!(this instanceof Array || this instanceof String)) {
            throw new TypeError('myReduce was called on a wrong type')
         }
         if (typeof callback !== 'function') {
            throw new TypeError('myReduce was called with a wrong callback')
         }
         let accumulator = initialValue
         for (let i = 0; i < this.length; i++) {
            accumulator = callback(accumulator, this[i], i, this)
         }
         return accumulator
      }
   }
}


module.exports = function () {
   if (!Array.prototype.myFilter) {
      Array.prototype.myFilter = function (callback) {
         if (!(this instanceof Array || this instanceof String)) {
            throw new TypeError('myFilter was called on a wrong type')
         }
         if (typeof callback !== 'function') {
            throw new TypeError('myFilter was called with a wrong callback')
         }
         const newArray = []
         for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
               newArray.push(this[i])
            }
         }
         return newArray
      }
   }
}


module.exports = function () {
   if (!Array.prototype.mySome) {
      Array.prototype.mySome = function (callback) {
         if (!(this instanceof Array || this instanceof String)) {
            throw new TypeError('mySome was called on a wrong type')
         }
         if (typeof callback !== 'function') {
            throw new TypeError('mySome was called with a wrong callback')
         }
         for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
               return true
            }
         }
         return false
      }
   }
}

module.export = function () {
   if (!Array.prototype.myEvery) {
      Array.prototype.myEvery = function (callback) {
         if (!(this instanceof Array || this instanceof String)) {
            throw new TypeError('myEvery was called on a wrong type')
         }
         if (typeof callback !== 'function') {
            throw new TypeError('myEvery was called with a wrong callback')
         }
         for (let i = 0; i < this.length; i++) {
            if (!callback(this[i], i, this)) {
               return false
            }
         }
         return true
      }
   }
}
