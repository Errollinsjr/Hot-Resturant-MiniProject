const Tables = require('../lib/Tables')

const generateTableOne = function (Tables) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>Table 1</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
            <p class="id">Party Id: ${Tables.id}</p>
            <p class="reserversLastName">Name: ${Tables.name}</p>
            <p class="Contact">Number: ${Tables.contact}</p>
            <p class="amountOfPeople">Amount of Guests: ${Tables.guests}</p>
            <p class="Time">Time of Reservation: ${Tables.time}</p>
            </div>
    </div>
</div>
    ` 
};

const generateTableTwo = function (Tables) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>Table 2</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
            <p class="id">Party Id: ${Tables.id}</p>
            <p class="reserversLastName">Name: ${Tables.name}</p>
            <p class="Contact">Number: ${Tables.contact}</p>
            <p class="amountOfPeople">Amount of Guests: ${Tables.guests}</p>
            <p class="Time">Time of Reservation: ${Tables.time}</p>
            </div>
    </div>
</div>
    ` 
};

const generateTableThree = function (Tables) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>Table 3</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
            <p class="id">Party Id: ${Tables.id}</p>
            <p class="reserversLastName">Name: ${Tables.name}</p>
            <p class="Contact">Number: ${Tables.contact}</p>
            <p class="amountOfPeople">Amount of Guests: ${Tables.guests}</p>
            <p class="Time">Time of Reservation: ${Tables.time}</p>
            </div>
    </div>
</div>
    ` 
};

const generateTableFour = function (Tables) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>Table 4</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
            <p class="id">Party Id: ${Tables.id}</p>
            <p class="reserversLastName">Name: ${Tables.name}</p>
            <p class="Contact">Number: ${Tables.contact}</p>
            <p class="amountOfPeople">Amount of Guests: ${Tables.guests}</p>
            <p class="Time">Time of Reservation: ${Tables.time}</p>
            </div>
    </div>
</div>
    ` 
};

const generateTableFive = function (Tables) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>Table 5</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
            <p class="id">Party Id: ${Tables.id}</p>
            <p class="reserversLastName">Name: ${Tables.name}</p>
            <p class="Contact">Number: ${Tables.contact}</p>
            <p class="amountOfPeople">Amount of Guests: ${Tables.guests}</p>
            <p class="Time">Time of Reservation: ${Tables.time}</p>
            </div>
    </div>
</div>
    ` 
};

// push array to page 
generateHTML = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const tables = data[i];
        const table = tables.getTable(); 


       
        if (table) {
            const tableOneCard = generateTableOne(tables);

            pageArray.push(tableOneCard);
        }

        
        if (table) {
            const tableTwoCard = generateTableTwo(tables);

            pageArray.push(tableTwoCard);
        }

        if (table) {
            const tableThreeCard = generateTableThree(tables);

            pageArray.push(tableThreeCard);
        }

        if (table) {
            const tableFourCard = generateTableFour(tables);

            pageArray.push(tableFourCard);
        }

        if (table) {
            const tableFiveCard = generateTableFive(tables);

            pageArray.push(tableFiveCard);
        }
        
    }

    // joining strings 
    const tableCards = pageArray.join('')

    // return to generated page
    const generateTable = generateTablePage(tableCards); 
    return generateTable;

}

// generate html page 
const generateTablePage = function (tableCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Resturant Home</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="../assets/styles.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Current Tables</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
               ${tableCards} 
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

// export to index
module.exports = generateHTML; 