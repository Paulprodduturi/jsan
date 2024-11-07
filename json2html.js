export default function json2html(data) {
    // Identify the headers by combining keys from all objects
    const headers = [...new Set(data.flatMap(Object.keys))];

    // Create the table with the required data-user attribute
    let html = `<table data-user="abrahamprodduturi@gmail.com">`;
    html += "<thead><tr>";
    // Add headers
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += "</tr></thead><tbody>";

    // Add rows
    data.forEach(row => {
        html += "<tr>";
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
        });
        html += "</tr>";
    });

    html += "</tbody></table>";
    return html;
}
