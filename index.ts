// გადავწეროთ მოცემული ფაილი typescript_ზე.

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

function calculateRectangleArea(rectangle: Rectangle) {
  return rectangle.width * rectangle.height;
}

function calculateRectanglePerimeter(rectangle: Rectangle) {
  return 2 * (rectangle.width + rectangle.height);
}

class Circle {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
}

function calculateCircleArea(circle: Circle) {
  return Math.PI * Math.pow(circle.radius, 2);
}

function calculateCirclePerimeter(circle: Circle) {
  return 2 * Math.PI * circle.radius;
}

// Independent Functions

function addNumbers(a: number, b: number): number {
  return a + b;
}

function multiplyNumbers(a: number, b: number): number {
  return a * b;
}

function capitalizeString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

function findMax(numbers: number[]) {
  return Math.max(...numbers);
}

function isPalindrome(str: string): boolean {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

function calculateFactorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

// Test Cases

// სასურველია გავაკეთოთ Rectangle და Circle კლაზები და დავუმატოთ შესაბამისი მეთოდები.
class Rectangle2 {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateAre(): number {
    return this.width * this.height;
  }
  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}
class Circle2 {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
  calculateAre(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

const rectangle: Rectangle = { width: 5, height: 8 };
const circle: Circle = { radius: 3 };

const rectangleArea = calculateRectangleArea(rectangle);
const rectanglePerimeter = calculateRectanglePerimeter(rectangle);

const circleArea = calculateCircleArea(circle);
const circlePerimeter = calculateCirclePerimeter(circle);

console.log(
  `Rectangle Area: ${rectangleArea}, Perimeter: ${rectanglePerimeter}`
);
console.log(`Circle Area: ${circleArea}, Perimeter: ${circlePerimeter}`);

const sumResult = addNumbers(5, 3);
const multiplicationResult = multiplyNumbers(4, 7);
const capitalizedString = capitalizeString("javascript is fun");
const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(`Sum: ${sumResult}`);
console.log(`Multiplication: ${multiplicationResult}`);
console.log(`Capitalized String: ${capitalizedString}`);
console.log(`Even Numbers: ${evenNumbers}`);

const maxNumber = findMax([23, 56, 12, 89, 43]);
const isPalindromeResult = isPalindrome("A man, a plan, a canal, Panama");
const factorialResult = calculateFactorial(5);

console.log(`Max Number: ${maxNumber}`);
console.log(`Is Palindrome: ${isPalindromeResult}`);
console.log(`Factorial: ${factorialResult}`);

/* 
  
  2. შევქმნათ კლასი BankAccount რომელსაც ექნება accountNumber,balance და transactionHistory ფროფერთები.
     კონსტრუქტორში უნდა ვიღებდეთ accountNumber და initialBalance მნიშვნელობებს.
     გარედან არუნდა იყოს შესაძლებელი accountNumber, balance და transactionHistory შეცვლა.
     კლასში უნდა გვქონდეს მეთოდები:
     getAccountInfo
     deposit - თანხის დამატება ანგარიშზე.
     withdraw - თანხის მოკლება ანგარიშიდან.
     transferFunds - გადარიცხვა სხვა BankAccount_ზე
     getTransactionHistory - აბრუნებს transactionHistory_ მასივს
     recordTransaction - transactionHistory_ში ამატებს ჩნაწერს ტრანსფერის შესახებ
  
     შევქმნათ მინიმუმ 2 BankAccount_ის ინსტანსი.
     გავაკეთოთ სხვადასხვა ოპერაციები.
     დავბეჯდოთ შექმნილი ექაუნთების transactionHistory.
  
  */
class BankAccount {
  private transactionHistory: string[] = [];

  constructor(private accountNumber: string, private balance: number) {}

  getAccountInfo(): string {
    return `Account Number: ${this.accountNumber}, balance:$${this.balance}`;
  }

  deposit(amount: number): void {
    this.balance += amount;
    this.recordTransaction(`deposited: $${amount}`);
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.recordTransaction(`withdrawn: $${amount}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  transferFunds(amount: number, targetAccount: BankAccount): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      targetAccount.deposit(amount);
      this.recordTransaction(
        `Transferred: $${amount} to Account ${targetAccount.accountNumber}`
      );
    } else {
      console.log("Insufficient funds");
    }
  }

  getTransactionHistory(): string[] {
    return this.transactionHistory;
  }

  private recordTransaction(transaction: string): void {
    this.transactionHistory.push(transaction);
  }
}
