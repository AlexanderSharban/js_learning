const array = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];
// 1. Числа меньше 5
function numbersLessThan5(arr) {
  return arr.filter(num => num < 5);
}
// 2. Позиции минимального и максимального значений
function positionsOfMinMax(arr) {
  const minVal = Math.min(...arr);
  const maxVal = Math.max(...arr);
  const minPos = arr.indexOf(minVal);
  const maxPos = arr.indexOf(maxVal);
  return { minPos, maxPos };
}
// 3. Элементы больше среднего арифметического
function elementsGreaterThanMean(arr) {
  const mean = arr.reduce((sum, num) => sum + num, 0) / arr.length;
  return arr.filter(num => num > mean);
}
// 4. Количество отрицательных и положительных элементов
function countNegativeAndPositive(arr) {
  const negativeCount = arr.filter(num => num < 0).length;
  const positiveCount = arr.filter(num => num > 0).length;
  return { negativeCount, positiveCount };
}
// Результаты работы функций
console.log("Числа меньше 5:", numbersLessThan5(array));
const { minPos, maxPos } = positionsOfMinMax(array);
console.log(`Позиции минимального и максимального значений: Мин - ${minPos}, Макс - ${maxPos}`);
console.log("Элементы, большие среднего арифметического:", elementsGreaterThanMean(array));
const { negativeCount, positiveCount } = countNegativeAndPositive(array);
console.log(`Отрицательные элементы: ${negativeCount}, Положительные элементы: ${positiveCount}`);


// const numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];
//     // 1. Числа меньше 5
//     function numbersLessThan5(arr) {
//         return arr.filter(num => num < 5);
//     }
//     // 2. Позиции минимального и максимального значений
//     function positionsOfMinMax(arr) {
//         const minVal = Math.min(...arr);
//         const maxVal = Math.max(...arr);
//         const minPos = arr.indexOf(minVal);
//         const maxPos = arr.indexOf(maxVal);
//         return { minPos, maxPos };
//     }
//     // 3. Элементы больше среднего арифметического
//     function elementsGreaterThanMean(arr) {
//         const mean = arr.reduce((sum, num) => sum + num, 0) / arr.length;
//         return arr.filter(num => num > mean);
//     }
//     // 4. Количество отрицательных и положительных элементов
//     function countNegativeAndPositive(arr) {
//         const negativeCount = arr.filter(num => num < 0).length;
//         const positiveCount = arr.filter(num => num > 0).length;
//         return { negativeCount, positiveCount };
//     }

//  console.log("Числа меньше 5:", numbersLessThan5(numbers));
//  console.log("Позиции минимального и максимального значений:", positionsOfMinMax(numbers));
//  console.log("Элементы, большие среднего арифметического:", elementsGreaterThanMean(numbers));
//  console.log("Количество отрицательных и положительных элементов:", countNegativeAndPositive(numbers));

