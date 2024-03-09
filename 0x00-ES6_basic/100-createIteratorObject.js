export default function createIteratorObject(report) {
  const departments = Object.keys(report);

  const iterator = {
    [Symbol.iterator]() {
      let departmentIndex = 0;
      let employeeIndex = 0;

      return {
        next() {
          if (departmentIndex < departments.length) {
            const department = departments[departmentIndex];
            const employees = report[department];
            const employee = employees[employeeIndex];

            if (employeeIndex < employees.length - 1) {
              employeeIndex++;
            } else {
              employeeIndex = 0;
              departmentIndex++;
            }

            return {
              value: employee,
              done: false,
            };
          } else {
            return {
              done: true,
            };
          }
        },
      };
    },
  };

  return iterator;
}
