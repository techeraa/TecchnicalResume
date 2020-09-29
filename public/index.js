let heading  = document.querySelector('h1')
console.log(getData()  )

async function getData(){
    let response = await fetch("https://api.github.com/users/techeraa");
    let data = await response.json();
    return data.id;
}