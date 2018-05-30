# ReTable - Work in progress, DO NOT USE

Retable is a table component written in React.
**[ReTable Demo](https://liorheber.github.io/retable)**

### Main Features
1. Customized renderers
2. Server side sorting
3. Resizeable columns
4. Theme support
5. Sticky header and footer
6. Row selection
7. Customized server side filtering (Coming soon)
8. Virtualized rows (Coming soon)
9. Movable columns (Coming soon)
10. Tree model (Coming soon)

### How to install
 **Installation using npm:**

```
 npm install @liorheber/retable --save
```

 **Installation using Yarn:** 

```
 yarn add @liorheber/retable
```

 ### How to use

```jsx
import React, { Component } from "react";
import ReTable from "@liorheber/retable";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [{
        id: "C0",
        name: "Average score (%)",
        type: "PERCENTAGE",
        width: 200,
        sortable: true
    },{
        id: "C1",
        name: "Class",
        type: "TEXT",
        width: 100,
        filterable: true,
        sortable: true,
        resizable: true,
    },{
        id: "C2",
        name: "Date of test",
        type: "DATE",
        width: 125,
        filterable: true,
        sortable: true
    }],
      rows: [
        {C0: 67, C1: "3rd grade", C2: 1452672956000},
        {C0: 82, C1: "5th grade", C2: 1351672951000},
        {C0: 99, C1: "6th grade", C2: 1252672258000},
      ]
    };
  }

  render() {
    const { columns, rows } = this.state;
    return (
      <ReTable
        columns={columns}
        rows={rows}
      />
    );
  }
}
```