const functions = {
    isLeapYear: (year) => {
        if (year % 4 == 0 && year % 100 != 0) {
            return true;
        }
        return false;
    },

    sortArray: (arr) => {

    },

    joinTwoArray: (arr1, arr2) => {
        return arr1.concat(arr2);
    },

    sendMessage: (phoneNo, message) => {
        if (!phoneNo || !message) {
            throw new Error("Параметр дутуу байна");
        }

        const phoneNoRegex = /^[6-9]{1}[0-9]{7}$/;
        if (!phoneNoRegex.test(phoneNo)) {
            throw new Error("Утасны дугаар буруу байна");
        }
        return true;
    }
}

module.exports = functions;