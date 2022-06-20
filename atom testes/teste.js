async function testeFetch(url) {
  var fet = await fetch(url)
  var jason = await fet.json()
  console.log(jason)

}

testeFetch('https://jsonplaceholder.typicode.com/posts')