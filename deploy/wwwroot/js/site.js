

function printContent(id) {
    var contentToPrint = document.getElementById("contentToPrint");
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>#' + id + '</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Ft3lOC0hqib3bsL71LL6bA7p7TvMHik5bYRY5rGkBoq0CDQ+nOp6pNLHco2W0R7j" crossorigin="anonymous">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(contentToPrint.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
function printContentC(id) {
    var contentToPrint = document.getElementById("contentToPrintC");
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>#' + id + '</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Ft3lOC0hqib3bsL71LL6bA7p7TvMHik5bYRY5rGkBoq0CDQ+nOp6pNLHco2W0R7j" crossorigin="anonymous">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(contentToPrint.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
function printContentL(id) {
    var contentToPrint = document.getElementById("contentToPrintL");
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>#' + id + '</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Ft3lOC0hqib3bsL71LL6bA7p7TvMHik5bYRY5rGkBoq0CDQ+nOp6pNLHco2W0R7j" crossorigin="anonymous">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(contentToPrint.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
function printContentT(id) {
    var contentToPrint = document.getElementById("contentToPrintT");
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>#' + id + '</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Ft3lOC0hqib3bsL71LL6bA7p7TvMHik5bYRY5rGkBoq0CDQ+nOp6pNLHco2W0R7j" crossorigin="anonymous">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(contentToPrint.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
function printContentU(id) {
    var contentToPrint = document.getElementById("contentToPrintU");
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>#' + id + '</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Ft3lOC0hqib3bsL71LL6bA7p7TvMHik5bYRY5rGkBoq0CDQ+nOp6pNLHco2W0R7j" crossorigin="anonymous">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(contentToPrint.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
function printContentA4(id) {
    var contentToPrintA4 = document.getElementById("contentToPrintA4");
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>#' + id + '</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Ft3lOC0hqib3bsL71LL6bA7p7TvMHik5bYRY5rGkBoq0CDQ+nOp6pNLHco2W0R7j" crossorigin="anonymous">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(contentToPrintA4.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
function printContentLetter(id) {
    var contentToPrintA4 = document.getElementById("contentToPrintLetter");
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>#' + id + '</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Ft3lOC0hqib3bsL71LL6bA7p7TvMHik5bYRY5rGkBoq0CDQ+nOp6pNLHco2W0R7j" crossorigin="anonymous">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(contentToPrintA4.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

function printByElementId(elementId, title) {
    var contentToPrint = document.getElementById(elementId);

    if (!contentToPrint) {
        alert("No se encontró el contenido para imprimir.");
        return;
    }

    var printWindow = window.open('', '_blank');

    if (!printWindow) {
        alert("El navegador bloqueó la ventana de impresión.");
        return;
    }

    printWindow.document.open();
    printWindow.document.write('<html><head><title>' + (title || 'Imprimir') + '</title>');
    printWindow.document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">');
    printWindow.document.write('<style>');
    printWindow.document.write('@page { size: auto; margin: 10mm; }');
    printWindow.document.write('body { background: #fff !important; color: #000 !important; font-family: Arial, sans-serif; }');
    printWindow.document.write('* { color: #000 !important; box-sizing: border-box; }');
    printWindow.document.write('.print-area { width: 100%; background: #fff !important; }');
    printWindow.document.write('.print-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }');
    printWindow.document.write('.print-title { font-weight: bold; text-transform: uppercase; font-size: 16px; text-align: right; }');
    printWindow.document.write('.print-summary { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; margin-bottom: 15px; font-size: 12px; }');
    printWindow.document.write('.print-table { width: 100%; border-collapse: collapse; }');
    printWindow.document.write('.print-table th, .print-table td { border: 1px solid #000; padding: 6px; font-size: 11px; text-align: left; vertical-align: top; }');
    printWindow.document.write('.print-table th { background: #f2f2f2 !important; font-weight: bold; }');
    printWindow.document.write('.print-table thead { display: table-header-group; }');
    printWindow.document.write('.print-table tfoot { display: table-footer-group; }');
    printWindow.document.write('.print-table tr { page-break-inside: avoid; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(contentToPrint.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();

    setTimeout(function () {
        printWindow.focus();
        printWindow.print();
    }, 500);
}

function printByElementIdAuto(elementId, title) {
    var contentToPrint = document.getElementById(elementId);

    if (!contentToPrint) {
        alert("No se encontró el contenido para imprimir.");
        return;
    }

    var printWindow = window.open('', '_blank');

    if (!printWindow) {
        alert("El navegador bloqueó la ventana de impresión.");
        return;
    }

    printWindow.document.open();
    printWindow.document.write('<html><head><title>' + (title || 'Imprimir') + '</title>');
    printWindow.document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">');
    printWindow.document.write('<style>');
    printWindow.document.write('@page { size: auto; margin: 6mm; }');
    printWindow.document.write('html, body { margin: 0; padding: 0; background: #fff !important; color: #000 !important; font-family: Arial, sans-serif; }');
    printWindow.document.write('* { color: #000 !important; box-sizing: border-box; }');
    printWindow.document.write('.print-area { width: 100%; background: #fff !important; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(contentToPrint.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();

    setTimeout(function () {
        printWindow.focus();
        printWindow.print();
    }, 500);
}