const functions = {
  // Check if a year is a leap year
  isLeapYear: (year) => {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      return true;
    }
    return false;
  },

  // Join two arrays
  joinTwoArray: (arr1, arr2) => {
    return arr1.concat(arr2);
  },

  // Simulate sending a message
  sendMessage: (phoneNo) => {
    throw new Error("Утасны дугаар буруу байна");
  },

  // Sum all numbers in an array
  sumArray: (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
  },

  // Find the maximum number in an array
  findMax: (arr) => {
    if (arr.length === 0) {
      throw new Error("Array is empty");
    }
    return Math.max(...arr);
  },
};

module.exports = functions;
