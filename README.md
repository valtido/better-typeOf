better-type
===========

JavaScript function which defines proper types in JavaScript variable or object

#How it works?

We will look for proper Object names otherwise a Class name (I know a taboo name) but we .

if a name is not present, we assume it's an Annonymous function

There `typeOf` outputs two messages in the format of `[type Name]`:
- type // object || class
- name // name || Annonymous    
 
Note: that name is the function//constructor name, or Annonymous, 
Note: name is always capital (first letter), or left as defined by the function, otherwise unexpected letter casing could go wrong.

#Contributions
This is an innitial draft, and would be open to improvements if I have forgotten something.



#How to use?

```
    //in javascript
    var value = "test me"
    typeOf(myValue); //output: "object String"
    
    //in coffee script
    value = "test me"
    typeOf myValue; #output "object String"
```

#The test list

```
list = [
  ""
  new String("")
  NaN
  0
  Infinity
  -1
  new Number("2")
  "2"
  true
  null
  undefined
  []
  new Array
  Array()
  {}
  new Object()
  ->
  typeOf("")
  new typeOf()
  new Date()
  new Animal("Ben")
  new Animal()
  Animal()
  Animal("ben")
  Animal
  new Person()
  Person()
  Person
]
```
##Which outputs
```
[object String]		: ""
[object String]		: String
[object Number]		: NaN
[object Number]		: 0
[object Number]		: Infinity
[object Number]		: -1
[object Number]		: Number
[object String]		: "2"
[object Boolean]	: true
[object Null]		: null
[object Undefined]	: undefined
[object Array]		: Array[0]
[object Array]		: Array[0]
[object Array]		: Array[0]
[class Object]		: Object
[class Object]		: Object
[object Annonymous]	: function () {}
[object String]		: "[object String]"
[class typeOf]		: typeOf
[object Date]		: Fri Jul 25 2014 16:41:39 GMT+0100 (GMT Daylight Time)
[class Animal]		: Animal
[class Animal]		: Animal
[object String]		: "undefined"
[object String]		: "ben"
[object Animal]		: function Animal(name) { this.name = name;    return this.name; }
[class Annonymous]	: Person
[object String]		: "Tom"
[object Annonymous]	: function () { return "Tom"; } 
```

