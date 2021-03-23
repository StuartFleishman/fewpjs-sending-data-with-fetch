// Add your code here

let formData = {
  name: "Stu",
  email: "Fleis"
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};


function submitData() {
  fetch("http://localhost:3000/users", configObj)
  .then(resp => resp.json())
  .then(json => {
    const p = document.createElement('p')
    for (const j in json) {
      p.innerHTML = json[j]
      document.body.appendChild(p)
    }
  }) 
}

submitData()