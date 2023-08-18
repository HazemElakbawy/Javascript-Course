const companyData = [
  { name: "Hazem", salary: 20000 },
  { name: "Yasser", salary: 30000 },
  { name: "Mazen", salary: 60000 },
];

// print the total salaries of the company

// * More Readable Method
const salaries = companyData.map((person) => person.salary);
const totalSalaries = salaries.reduce((sum, curr) => sum + curr, 0);
console.log(totalSalaries); // 110000

// * Shorter Method
console.log(
  companyData
    .map((person) => person.salary)
    .reduce((sum, curr) => sum + curr, 0)
); // 110000
