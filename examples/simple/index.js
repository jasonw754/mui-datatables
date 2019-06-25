import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "../../src/";

class Example extends React.Component {

  render() {

    const columns = [
      "Name", 
      "Title", 
      "Location", 
      {
        name: "Test 1",
        group: "Group A"
      },
      {
        name: "Test 2",
        group: "Group A"
      },
      {
        name: "Test 3",
        group: "Group A"
      },
      {
        name: "Test 4",
        group: "Group B"
      },      
      {
        name: "Test 5",
        group: "Group B"
      },
      {
        name: "Test 6",
        group: "Group B"
      },
      {
        name: "Test 7",
        group: "Group B"
      }
    ];

    const data = [
      ["Gabby George", "Business Analyst", "Minneapolis"],
      ["Aiden Lloyd", "Business Consultant", "Dallas"],
      ["Jaden Collins", "Attorney", "Santa Ana"],
      ["Franky Rees", "Business Analyst", "St. Petersburg"],
      ["Aaren Rose", null, "Toledo"],
      ["Aaren Rose", null, "Toledo"],
      ["Aaren Rose", null, "Toledo"],
      ["Aaren Rose", null, "Toledo"],
      ["Aaren Rose", null, "Toledo"],
      ["Aaren Rose", null, "Toledo"],
      ["Aaren Rose", null, "Toledo"],
      ["Aaren Rose", null, "Toledo"],
      ["Aaren Rose", null, "Toledo"],
    ];


    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'scroll',
      rowSelection: false
    };

    return (
      <MUIDataTable title={"ACME Employee list"} data={data} columns={columns} options={options} />
    );

  }
}

ReactDOM.render(<Example />, document.getElementById("app-root"));
