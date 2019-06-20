import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "../../src/";

class Example extends React.Component {

  render() {

    const columns = ["Name", "Title", "Location", "Test 1", "Test 2", "Test 3", "Test 4", "Test 5", "Test 6", "Test 7", "Test 8", "Test 9", "Test 10", "Test 11", "Test 12", "Test 13", "Really Long Name", "Kind of long", "Need to scroll for this"];

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
    };

    return (
      <MUIDataTable title={"ACME Employee list"} data={data} columns={columns} options={options} />
    );

  }
}

ReactDOM.render(<Example />, document.getElementById("app-root"));
