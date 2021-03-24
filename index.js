// Add your code here



function submitData(name, email) {
  let formData = {
    name,
    email
  };
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
  .then(resp => resp.json())
  .then(json => {
    const h1 = document.createElement('h1')
    const div = document.createElement('div')
    h1.innerHTML = json['id']
    document.body.appendChild(div)
    div.appendChild(h1)
    }
  ) 
  .catch(function(error) {
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    document.body.appendChild(div)
    h2.innerHTML = error.message
    div.appendChild(h2)
  })
}

 submitData()