// Given a variable name in snake_case, return a string with that variable name written in camelCase. For example: snakeToCamel("awesome_sauce"); // "awesomeSauce"
// snakeToCamel("a_man_a_plan"); // "aManAPlan"
// snakeToCamel("HOW_ABOUT_NOW?"); // "HOWABOUTNOW?"

function snakeToCamel(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "_") {
      newStr += str[i + 1].toUpperCase();
      i++;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
/*[ ['A', 'B', 'C'], ['D', '*', 'E'], ['F', 'G', 'H'] ]
Write a function that, given a NxM grid, like the one above, returns a grid with all cells in a column or row originally containing a star turned into stars. Values which have been transformed into stars do not affect their rows and columns. You should do this in-place – by changing the original grid, not by creating a new one. Your function should return the grid.

For example, for the input above, it should return: */

function starGrid(grid) {
  let row = [];
  let col = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "*") {
        row.push(i);
        col.push(j);
      }
    }
  }
  for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < grid[row[i]].length; j++) {
      grid[row[i]][j] = "*";
    }
  }
  for (let i = 0; i < col.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      grid[j][col[i]] = "*";
    }
  }
  return grid;
}

console.log(
  starGrid([
    ["A", "B", "*"],
    ["D", "E", "E"],
    ["F", "A", "H"],
  ])
);
