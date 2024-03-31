export function filteredArray(array, value) {
  return builtFlatArray(array).filter((obj) => {
    return compareValue(obj, value);
  });
}

function compareValue(obj, value) {
  const allKeys = Object.keys(obj);

  return allKeys.some((key) => {
    if (!excludedKeys.includes(key)) {
      return obj[key].toLowerCase().includes(value.toLowerCase());
    }
  });
}

function flatArray(arrayToFlat) {
  const newArray = arrayToFlat
    .map((item) => {
      if (typeof item === "object") {
        return flatArray(Object.values(item)).join(" ");
      } else {
        return item;
      }
    })
    .flat();
  return newArray;
}

function builtFlatArray(array) {
  return array.map((obj) => {
    const flattingKeys = flatArray(Object.keys(obj));
    const flattingValues = flatArray(Object.values(obj));
    obj = rebuiltObjects(flattingKeys, flattingValues);
    return obj;
  });
}

function rebuiltObjects(flatKeys, flatValues) {
  const newObj = {};
  for (let i = 0; i < flatKeys.length; i++) {
    newObj[flatKeys[i]] = flatValues[i];
  }
  return newObj;
}

const excludedKeys = ["id", "company"];
