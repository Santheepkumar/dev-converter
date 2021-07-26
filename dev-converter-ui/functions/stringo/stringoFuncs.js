function allStringFunctions() {}

allStringFunctions.prototype.toCapitalize = (str) => {
  return str.toUpperCase();
};

allStringFunctions.prototype.stringyfy = (anything) => {
  return JSON.stringify(anything, null, 2);
};

allStringFunctions.prototype.toSmallCase = (str) => {
  return str.toLowerCase();
};

const ASF = new allStringFunctions();

export default ASF;
