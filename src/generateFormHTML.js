const Tables = require('../lib/Tables')

const generateTableFormOne = function (Tables) {
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta Time="viewport" content="width=device-width, initial-scale=1.0">
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
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Hot Resturant</span>
          </nav>
      </header>
      <main>
          <div class="container-fluid">
            <div class="container">
                <h2>Resturant Table Form</h2>
                <form action="../dist/tables.html" method="POST">
                  <div class="form-group">
                    <label for="Name">Name:${this.name}</label>
                    <input type="String" class="form-control" id="Name" placeholder="Enter last Name and first Name" name="Name">
                  </div>

                  <div class="form-group">
                    <label for="Contact">Contact:${this.contact}</label>
                    <input type="Number" class="form-control" id="Contact" placeholder="Enter Phone Number" name="Contact">
                  </div>

                  <div class="form-group">
                    <label for="guests">Amount of guests:${this.guests}</label>
                    <input type="Number" class="form-control" id="amountOfGuests" placeholder="Enter amount of guests" name="guests">
                  </div>

                  <div class="form-group">
                    <label for="Time">Time:${this.time}</label>
                    <input type="Time" class="form-control" id="Time" placeholder="Enter Phone Number" name="Time">
                  </div>

                  <div>
                  <button type="submit" onclick="location.href='../dist/tables.html'" class="submit-btn">Submit</button>
                  </div>
                </form>
              </div>

          <div class="btn" style="width:100%; height:100%;">
              <button onclick="location.href='../dist/home.html'" class="view-table-btn">Cancel</button>
          </div>    
         </div>
    
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>

    ` 
};


// push array to page 
generateHTML = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const tables = data[i];
        const table = tables.getTable(); 

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