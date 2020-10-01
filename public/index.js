let userName  = document.querySelector('username')
let followers = document.querySelector("followers")
let foowing = document.querySelector("following")
// userName.textContent = getData().login
getData()
async function getData(){
    let response = await fetch("http://api.github.com/users/techeraa");
    let data = await response.json();

    document.getElementById("username").textContent += ` : ${data.login}`
    document.getElementById("followers").textContent = data.followers
    document.getElementById("following").textContent = data.following
    document.getElementById("repositories").textContent = data.public_repos

    console.log(data)


}
