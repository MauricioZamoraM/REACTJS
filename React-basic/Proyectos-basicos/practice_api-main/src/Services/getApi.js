const apiURL = 'https://jsonplaceholder.typicode.com/posts'


export default async function getApi() {
    return fetch(apiURL)
        .then(res =>{
          return res.json()
        })
        .then(res=>{
            const data = res
            return data
        })
        .catch(error => console.error(error))
       
   
    
}