// Task 1: Sorting Hospital Patient Records

function sortPatients(n, patients) {
  // Sorting by Severity (descending) and Age (ascending)
  patients.sort((a, b) => {
    // Severity Score diye descending sort korbo
    if (b.severity === a.severity) {
      // Severity same hole Age diye ascending sort korbo
      return a.age - b.age;
    }
    return b.severity - a.severity;
  });

  // Output the sorted patient records
  patients.forEach((patient) => {
    console.log(
      `${patient.id} ${patient.name} ${patient.age} ${patient.severity}`
    );
  });
}

// Input Example:
const n = 5;
const patients = [
  { id: 101, name: "Alice", age: 30, severity: 5 },
  { id: 102, name: "Bob", age: 25, severity: 8 },
  { id: 103, name: "Charlie", age: 40, severity: 8 },
  { id: 104, name: "David", age: 35, severity: 6 },
  { id: 105, name: "Eve", age: 28, severity: 5 },
];

// Calling the function
sortPatients(n, patients);
