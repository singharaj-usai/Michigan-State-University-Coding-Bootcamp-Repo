// Helper function to sort data based on key and type
const sortData = (firstKey, secondKey, type) => {
  switch (type) {
    case 'asc': {
      return (a, b) => {
        if (a[firstKey] < b[firstKey]) {
          return -1;
        }
        if (a[firstKey] > b[firstKey]) {
          return 1;
        }

        if (a[secondKey] < b[secondKey]) {
          return 1;
        }
        if (a[secondKey] > b[secondKey]) {
          return -1;
        }
        return 0;
      };
    }
    case 'dsc': {
      return (a, b) => {
        if (a[firstKey] > b[firstKey]) {
          return -1;
        }
        if (a[firstKey] < b[firstKey]) {
          return 1;
        }

        if (a[secondKey] > b[secondKey]) {
          return 1;
        }
        if (a[secondKey] < b[secondKey]) {
          return -1;
        }
        return 0;
      };
    }
    default:
      return undefined;
  }
};
exports.sortData = sortData;
