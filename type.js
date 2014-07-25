var Animal, Person, item, list, type, _i, _len;
Animal = (function() {
  function Animal(name) {
    this.name = name;
    return this.name;
  }
  return Animal;
})();
Person = function() {
  return "Tom";
};
/* class type START */
type = (function() {
  var toClass;
  function type(value) {
    var getClass;
    this.value = value;
    if (this.value === null) {
      return "[object Null]";
    }
    if (this.value === void 0 || typeof this.value === "undefined") {
      return "[object Undefined]";
    }
    getClass = toClass(this.value);
    if (getClass === "[object annonymous]") {
      return this.value;
    }
    return getClass;
  }
  toClass = function(value) {
    var str;
    this.value = value;
    str = {}.toString.call(this.value);
    switch (str) {
      case "[object Function]":
        return (function(obj) {
          var name;
          name = obj.name || "Annonymous";
          return "[object " + name + "]";
        })(this.value);
      case "[object Object]":
        return (function(obj) {
          var name;
          name = obj.constructor.name || "Annonymous";
          return "[class " + name + "]";
        })(this.value);
      default:
        return str;
    }
  };
  return type;
})();
/* class type END */
list = ["", new String(""), NaN, 0, Infinity, -1, new Number("2"), "2", true, null, void 0, [], new Array, Array(), {}, new Object(), function() {}, type(""), new type(), new Date(), new Animal("Ben"), new Animal(), Animal(), Animal("ben"), Animal, new Person(), Person(), Person];
for (_i = 0, _len = list.length; _i < _len; _i++) {
  item = list[_i];
  console.log(type(item), "\t\t\t :: \t\t\t", item);
}
/*

console.log type Animal()*/
