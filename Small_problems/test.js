function findNumber(numbers) {
  let savedNumber = numbers[0];
  numbers.forEach(number => 
    { if (number > savedNumber) {
      savedNumber = number;
    }
  });
  return savedNumber;
}