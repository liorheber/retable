const columns = [
  {
    id: "S1",
    name: "Product",
    type: "IMAGE",
    width: 160,
    editable: true,
    sortable: true,
    resizable: true,
    defaultInColumnSelection: true,
    subColumn: {
      name: "Publisher",
      type: "RED_TEXT",
      subColumn: {
        name: "Segment",
        type: "IMAGE",
        subColumn: {
          name: "D",
          type: "TEXT"
        }
      }
    }
  },
  {
    id: "S6",
    name: "type",
    filename: "type",
    type: "ICON",
    width: 190,
    enableQuickFilter: true,
    filterType: "MONETARY"
  },
  {
    id: "S2",
    name: "Product title",
    type: "TEXT",
    width: 190,
    minWidth: 80,
    defaultInColumnSelection: false,
    sortable: true,
    resizable: true,
    enableQuickFilter: true,
    filterType: "LIST_ONLY",
    filterParams: {
      filterValues: [
        { value: 1, label: "Google to Google" },
        { value: 2, label: "Google to MSN" }
      ]
    },
    operators: [
      {
        id: 990,
        name: "FindInSet",
        numberOfOperands: "MULTIPLE",
        maxNumOfValues: 1000,
        position: 10
      }
    ]
  },
  {
    id: "S3",
    name: "asin",
    filename: "asin",
    type: "TEXT",
    width: 190,
    editType: "TEXT",
    editable: true,
    sortable: true,
    resizable: true,
    enableQuickFilter: true,
    filterType: "TEXT",
    comparable: true
  },
  {
    id: "S5",
    name: "marketplace",
    filename: "marketplace",
    type: "CAMPAIGN_ACTIVITY_TYPE",
    sortable: true,
    resizable: true,
    width: 190,
    enableQuickFilter: true,
    filterType: "PERCENTAGE"
  },
  {
    id: "S22",
    name: "impressions",
    filename: "impressions",
    type: "NUMBER",
    width: 190,
    sortable: true,
    resizable: true,
    filterType: "NUMERIC",
    comparable: true
  },
  {
    id: "S23",
    name: "impre",
    filename: "impre",
    type: "NUMBER",
    width: 190,
    comparisonParentId: "S22"
  },
  {
    id: "S24",
    name: "Previous",
    filename: "Previous",
    type: "NUMBER",
    width: 190,
    comparisonParentId: "S22"
  },
  {
    id: "S25",
    name: "Delta",
    filename: "Delta",
    type: "NUMBER",
    width: 190,
    comparisonParentId: "S22"
  },
  {
    id: "S26",
    name: "Delta %",
    filename: "Delta %",
    type: "NUMBER",
    width: 190,
    comparisonParentId: "S22"
  },
  {
    id: "S7",
    name: "publisher",
    filename: "publisher",
    type: "TEXT",
    width: 190
  },
  {
    id: "S8",
    name: "upc",
    filename: "upc",
    type: "TEXT",
    width: 190
  },
  {
    id: "S9",
    name: "ean",
    filename: "ean",
    type: "TEXT",
    width: 190
  },
  {
    id: "S10",
    name: "brand",
    filename: "brand",
    type: "TEXT",
    width: 190
  },
  {
    id: "S11",
    name: "availability",
    filename: "availability",
    type: "TEXT",
    width: 190
  },
  {
    id: "S12",
    name: "price",
    filename: "price",
    type: "TEXT",
    width: 190
  },
  {
    id: "S13",
    name: "lowest_price",
    filename: "lowest_price",
    type: "TEXT",
    width: 190
  },
  {
    id: "S14",
    name: "customer_review",
    filename: "customer_review",
    type: "NUMBER",
    width: 190
  },
  {
    id: "S15",
    name: "department",
    filename: "department",
    type: "TEXT",
    width: 190
  },
  {
    id: "S16",
    name: "import_date",
    filename: "import_date",
    type: "DATE",
    width: 190
  },
  {
    id: "S17",
    name: "color",
    filename: "color",
    type: "TEXT",
    width: 190
  },
  {
    id: "S18",
    name: "manufacturer",
    filename: "manufacturer",
    type: "TEXT",
    width: 190
  },
  {
    id: "S19",
    name: "model",
    filename: "model",
    type: "TEXT",
    width: 190
  },
  {
    id: "S20",
    name: "mpn",
    filename: "mpn",
    type: "TEXT",
    width: 190
  },
  {
    id: "S21",
    name: "similiar_products",
    filename: "similiar_products",
    type: "TEXT",
    width: 190
  }
];

export default columns;
