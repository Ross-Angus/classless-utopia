// This makes the assumption that the first row of any given table is a header row which will describe the data which follows. It uses the strings in this first row to label the rest of the cells for use in the mobile table solution.
const tableInit = () => {
  const tables = document.querySelectorAll("table");
  tables.forEach((table) => {
    const allRows = table.querySelectorAll("tr");
    if (allRows.length > 0) {
      const headerRow = allRows[0];
      // Label the header row so it can be hidden on mobile
      headerRow.setAttribute("data-header", "true");
      const headerCells = headerRow.querySelectorAll("td, th");
      // Strip the HTML tags just once
      const headerStrings = Array.from(headerCells).map(
        (cell) => cell.textContent
      );

      if (headerStrings.length > 0) {
        // Label the table as being valid for the mobile layout
        table.setAttribute("data-mobile", "true");
      }

      allRows.forEach((row, rowIndex) => {
        // Skip the first row
        if (rowIndex > 0) {
          const cells = row.querySelectorAll("td, th");
          cells.forEach((cell, cellIndex) => {
            // Don't do anything if the cell has been manually labelled
            if (!cell.hasAttribute("data-label")) {
              // If the cell has a `headers` attribute, check to see if we can
              // find the associated header cell string value
              if (cell.hasAttribute("headers")) {
                // The `headers` attribute can include multiple header cell IDs.
                // Not sure why. Seems like a terrible idea.
                const headers = cell.getAttribute("headers").split(" ");

                // This has a distinct name to avoid mixing up with the header strings Array
                let headerLabel = "";
                headers.map((id) => {
                  const header = document.getElementById(id);
                  header && (headerLabel += ` ${header.textContent}`);
                });
                cell.setAttribute("data-label", headerLabel);
              }

              // If the cell has no `headers` attribute, try and use the header strings array
              else if (headerStrings[cellIndex]) {
                cell.setAttribute("data-label", headerStrings[cellIndex]);
              }
            }
          });
        }
      });
    }
  });
};

export default tableInit;
