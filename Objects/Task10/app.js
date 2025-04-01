const students = [
    {
      name: "Alice",
      marks: [8, 10, 7, 5, 4]
    },
    {
      name: "Bob",
      marks: [3, 4, 2, 5, 6]
    },
    {
      name: "Charlie",
      marks: [9, 10, 8, 9, 7]
    },
    {
      name: "David",
      marks: [6, 5, 4, 7, 5]
    },
    {
      name: "Emma",
      marks: [10, 9, 10, 10, 9]
    }
  ];
  
    // Функция для вычисления средней оценки студента
  function calculateAverage(student) {
    const totalMarks = student.marks.reduce((acc, mark) => acc + mark, 0);
    return totalMarks / student.marks.length;
  }
  
  //Выводим среднюю оценку каждого студента
  students.forEach(student => {
    const avg = calculateAverage(student);
    console.log(`${student.name}: ${avg.toFixed(1)}`);
  });
  
  // < 5
  function findStudentsWithLowGrades() {
    const lowGradeStudents = students.filter(student => calculateAverage(student) < 5);
    console.log("Students with an average grade < 5:");
    lowGradeStudents.forEach(student => {
      console.log(`${student.name} (${calculateAverage(student).toFixed(1)})`);
    });
  }
  
  // Минимальная и максимальная средняя оценка
  function findHighestAndLowestAverage() {
    const avgGrades = students.map(student => ({
      name: student.name,
      average: calculateAverage(student)
    }));
  
    // Находим студента с самой высокой и самой низкой средней оценкой
    const highest = avgGrades.reduce((prev, current) => (prev.average > current.average ? prev : current));
    const lowest = avgGrades.reduce((prev, current) => (prev.average < current.average ? prev : current));

    console.log(`Highest Average: ${highest.name} (${highest.average.toFixed(1)})`);
    console.log(`Lowest Average: ${lowest.name} (${lowest.average.toFixed(1)})`);
  }
  
  // Сортируем студентов по средней оценке
  function sortStudentsByAverage() {
    const sortedStudents = students.slice().sort((a, b) => calculateAverage(b) - calculateAverage(a));
    console.log("Sorted List (by average grade):");
    sortedStudents.forEach(student => {
      console.log(`${student.name}: ${calculateAverage(student).toFixed(1)}`);
    });
  }
  
  // Находим студентов с оценкой выше средней по классу
  function findStudentsAboveClassAverage() {
    const classAverage = students.reduce((acc, student) => acc + calculateAverage(student), 0) / students.length;
    const aboveClassAverage = students.filter(student => calculateAverage(student) > classAverage);
  
    console.log(`Class Average: ${classAverage.toFixed(2)}`);
    console.log("Students above class average:");
    aboveClassAverage.forEach(student => {
      console.log(`${student.name} (${calculateAverage(student).toFixed(1)})`);
    });
  }
  
  // Вызовы функций для выполнения заданий
  console.log("1. Average grade for each student:");
  students.forEach(student => {
    const avg = calculateAverage(student);
    console.log(`${student.name}: ${avg.toFixed(1)}`);
  });
  
  findStudentsWithLowGrades();
  findHighestAndLowestAverage();
  sortStudentsByAverage();
  findStudentsAboveClassAverage();
  