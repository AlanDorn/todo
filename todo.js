function alanworld() {
    alert(`${document.getElementById('blank_txt').value}`)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "todo": document.getElementById('blank_txt').value
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/api/todos", requestOptions)
        .then(response => response.json())  //es6 shorthand arrow expressions
        .then((result) => { //anon function 
                            // =>
            document.getElementById('result').innerHTML = ''
            result.todo.forEach(element => {

                let container = document.createElement('div');
                let button = document.createElement('button')
                button.innerHTML = "X"
                button.setAttribute("class", "deleteButton")
                button.onclick = () => {
                    confirm("Are you sure? ")
                }
                container.appendChild(button)
            
                let label = document.createElement("div")
                label.innerHTML = element.todo
                container.appendChild(label)
                
                document.getElementById('result').appendChild(container)
            });
        })
        .catch(error => console.log('error', error));

   
  

    //document.getElementById('result').innerHTML += document.getElementById('blank_txt').value + "<br />"

}

var ei = document.getElementById('submit_button')
ei.onclick = alanworld

document.addEventListener('keypress', (e) => {
    if (e.key == "Enter") {
        alanworld()
    }

})