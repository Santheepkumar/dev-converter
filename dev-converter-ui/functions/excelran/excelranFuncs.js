function allExcelranFunctions() {}
const X = allExcelranFunctions.prototype;

X.toJSONtoCSV = (arr = "[]") => {
  if (!arr.includes("[") || !arr.includes("]")) {
    return ""
  }
  
  arr = eval(arr);
  console.log(arr);
  if (!Array.isArray(arr)) {
    return "";
  }
  // This gives all keys of max length obj
  const columns = arr.reduce(
    (a, e) =>
      Object.keys(a).length > Object.keys(e).length
        ? Object.keys(a)
        : Object.keys(e),
    {}
  );

  return [
    columns.join(","),
    ...arr.map(obj => {
      return columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? "" : ","}"${!obj[key] ? "" : obj[key]}"`,
        ""
      );
    })
  ].join("\n");
};
X.toarrayToCSV = str => {
  return (str.arrayToCSV = (arr, delimiter = ",") =>
    arr
      .map(v =>
        v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter)
      )
      .join("\n"));
};

X.toCSYtoJSON = str => {
  return (str.CSVToJSON = (data, delimiter = ",") => {
    const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
    return data
      .slice(data.indexOf("\n") + 1)
      .split("\n")
      .map(v => {
        const values = v.split(delimiter);
        return titles.reduce(
          (obj, title, index) => ((obj[title] = values[index]), obj),
          {}
        );
      });
  });
};
X.toCSVToArray = str => {
  return (str.CSVToArray = (data, delimiter = ",", omitFirstRow = false) =>
    data
      .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
      .split("\n")
      .map(v => v.split(delimiter)));
};
const AEF = new allExcelranFunctions();

export default AEF;
