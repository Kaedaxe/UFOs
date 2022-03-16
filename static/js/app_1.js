// Import data from data.js
const tableData = data;

// Reference HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear existing data
    tbody.html("");

    // Add each row to the table
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        //Add values in each row
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick(){
    // Grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check if a date was entered, if so then filter the data with that date
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table with the filter applied
    buildTable(filteredData);
}

// Call handleClick() when button is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);