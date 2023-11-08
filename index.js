const currentThemeId = localStorage.getItem("currentThemeId") || "fluent.blue.light";

const link = document.createElement("link");
link.href = `https://cdn.jsdelivr.net/gh/raushen/DXDev/BackColors2-10/css/dx.${currentThemeId}.css`;
link.type = "text/css";
link.rel = "stylesheet";

document.getElementsByTagName("head")[0].appendChild(link);

$(() => {
  const dataGrid = $('#grid-container').dxDataGrid({
    focusedRowEnabled: true,
    dataSource: sales,
    keyExpr: 'orderId',
    showBorders: true,
    selection: {
      mode: 'multiple',
      showCheckBoxesMode: 'always',
    },
    hoverStateEnabled: true,
    editing: {
      mode: 'batch',
      allowUpdating: true,
      allowAdding: true,
      allowDeleting: true,
    },
    paging: {
      pageSize: 10,
    },
    filterRow: {
      visible: true,
    },
    columns: [{
      dataField: 'orderId',
      caption: 'Order ID',
      width: 90,
    },
    'city', {
      dataField: 'country',
      width: 180,
    },
    'region', {
      dataField: 'date',
      dataType: 'date',
    }, {
      dataField: 'amount',
      format: 'currency',
      width: 90,
    }],
  }).dxDataGrid('instance');

  $('#select-all-mode').dxSelectBox({
    dataSource: ['allPages', 'page'],
    value: 'allPages',
    inputAttr: { 'aria-label': 'Select All Mode' },
    onValueChanged(data) {
      dataGrid.option('selection.selectAllMode', data.value);
    },
  });
});