class Animal
  constructor: (@name) -> 
    return @name

Person = ->
    return "Tom"

### class typeOf START ###
class typeOf
  constructor: (@value) ->
    if @value == null then return "[object Null]"
    if @value == undefined or typeof @value == "undefined" then return "[object Undefined]"
    getClass =  toClass(@value)
    if getClass == "[object annonymous]" then return @value
    return getClass
    
toClass = (@value)-> (
  str = {}.toString.call(@value)
  
  switch str
    when "[object Function]" then return ( (obj)-> 
        name = obj.name || "Annonymous"
        return "[object #{name}]"
      )(@value)
    when "[object Object]" then return ( (obj)->
        name = obj.constructor.name || "Annonymous"
        "[class #{name}]"
      )(@value)
    
    else str
)

### class typeOf END ###
  
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

####
for item in list
  console.log(typeOf(item) , "\t\t\t :: \t\t\t", item )
###

console.log typeOf Animal()
