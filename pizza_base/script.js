const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)

pizzaJason.map((item, index) => {
  var pizzaItem = c('.models .pizza-item').cloneNode(true)
  //preencher as informações em pizzaItem

  c('.pizza-area').append(pizzaItem)
})