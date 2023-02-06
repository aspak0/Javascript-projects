// get btn and create  afunction

document.getElementById("myBtn").addEventListener("click", getData);

function getData() {
    // console.log("clicked");
    // GET API
    fetch("https://randomuser.me/api/?results=100")
    .then((response ) => response.json())
    .then((data) => {
        // console.log(data);
        let author = data.results;
        console.log(author);

        // Get Data Value
        let output = "<h2><center>Get User Data</center></h2>";

        // get Data loop through

      author.forEach(function(lists){
          output +=  `
          <div class ="container">
            <div class ="card mt-4 bg-dark">
                <ul class ="list-group">
                    <li class ="list-group-item"><h2>Name:${lists.name.first}</h2></li>
                    <li class ="list-group-item"><img src ="${lists.picture.large}"</li>
                    <li class ="list-group-item">Gender: ${lists.gender}</li>
                    <li class ="list-group-item">Email:${lists.email}</li>
                </ul>
            </div>
          </div>
        `;

      });

// show all of the data on the screen

 document.getElementById("output").innerHTML = output;
    });
}