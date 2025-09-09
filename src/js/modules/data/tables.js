// This makes the assumption that the first row of any given table is a header row which will describe the data which follows. It uses the strings in this first row to label the rest of the cells for use in the mobile table solution.
const tableInit = () => {
  const tables = document.querySelectorAll("table");
  tables.forEach((table) => {
    const allRows = table.querySelectorAll("tr");
    if (allRows.length > 0) {
      const headerCells = allRows[0].querySelectorAll("td, th");
      // Strip the HTML tags just once
      const headerStrings = Array.from(headerCells).map(
        (cell) => cell.textContent
      );

      allRows.forEach((row, rowIndex) => {
        // Skip the first row
        if (rowIndex > 0) {
          const cells = row.querySelectorAll("td, th");
          cells.forEach((cell, cellIndex) => {
            // Skip this step if the cell has been manually labelled
            if (!cell.hasAttribute("data-label") && headerStrings[cellIndex]) {
              cell.setAttribute("data-label", headerStrings[cellIndex]);
            }
          });
        }
      });
    }
  });
};

export default tableInit;
