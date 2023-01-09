import axios from "axios"

const getData = async function(number){
    const {data:data1} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?id=${number}`)

const res = {data1, "posts": posts}
console.log(res)
}

export default getData