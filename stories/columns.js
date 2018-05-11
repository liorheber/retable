const columns = [
  {
    id: "S1",
    name: "Mug shot",
    type: "IMAGE",
    width: 130,
    sortable: true,
    resizable: true,
    defaultInColumnSelection: true,
  },
  {
    id: "S2",
    name: "type",
    filename: "type",
    type: "ICON",
    width: 145,
    filterable: true,
  },
  {
    id: "S3",
    name: "Name",
    type: "TEXT",
    width: 190,
    minWidth: 80,
    defaultInColumnSelection: false,
    sortable: true,
    resizable: true,
    filterable: true,
  },
  {
    id: "S4",
    name: "Description",
    type: "TEXT",
    width: 255,
    editType: "TEXT",
    sortable: true,
    resizable: true,
    filterable: true,
  },
  {
    id: "S5",
    name: "Country",
    type: "LOCATION",
    sortable: true,
    resizable: true,
    width: 190,
    filterable: true
  },
  {
    id: "S11",
    name: "Sleep (%)",
    type: "PERCENTAGE",
    width: 200
  },
  {
    id: "S6",
    name: "Family size",
    type: "NUMBER",
    width: 145,
    sortable: true,
    resizable: true,
    filterType: "NUMERIC",
    comparable: true
  },
  {
    id: "S7",
    name: "Date of birth",
    type: "DATE",
    width: 145
  },
  {
    id: "S8",
    name: "Eye color",
    type: "COLOR",
    width: 145
  },
  {
    id: "S9",
    name: "Hair color",
    type: "COLOR",
    width: 145
  },
  {
    id: "S10",
    name: "Wealth of toys",
    type: "NUMBER",
    width: 145
  }
];

export default columns;
