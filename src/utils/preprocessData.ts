export default function preprocessData(obj) {
  const cleanedObject = {};
  const utcDatePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/; // Regex pattern for UTC date format

  for (const key in obj) {
    if (obj[key] !== null) {
      // Check if the value matches the UTC date pattern
      if (typeof obj[key] === "string" && utcDatePattern.test(obj[key])) {
        // Try to convert the string to a Date object
        const dateValue = new Date(obj[key]);
        if (!isNaN(dateValue.getTime())) {
          cleanedObject[key] = dateValue;
        } else {
          // If conversion fails, keep the original string
          cleanedObject[key] = obj[key];
        }
      } else {
        // If it's not a date string, just copy the value
        cleanedObject[key] = obj[key];
      }
    }
  }

  return cleanedObject;
}
