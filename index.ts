type Rectangle = {
  width: number;
  height: number;
};

function calculateArea(shape: Rectangle): number {
  return shape.width * shape.height;
}

function calculatePerimeter(shape: Rectangle): number {
  return 2 * (shape.width + shape.height);
}

type Circle = {
  radius: number;
};

function calculateAreaOfCircle(circle: Circle): number {
  return Math.PI * Math.pow(circle.radius, 2);
}

function calculateCircumference(circle: Circle): number {
  return 2 * Math.PI * circle.radius;
}

function sum(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

function findLargest(numbers: number[]): number {
  return Math.max(...numbers);
}

function checkPalindrome(str: string): boolean {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

type Transaction = {
  amount: number;
  type: string;
  id?: string;
};

class Account {
  private accountId: string;
  private balance: number;
  private transactionHistory: Transaction[] = [];

  constructor(accountId: string, balance: number) {
    this.accountId = accountId;
    this.balance = balance;
  }

  deposit(amount: number) {
    if (amount < 0) {
      console.log("Invalid deposit amount");
      return this;
    }
    this.balance += amount;
    this.addTransaction({
      amount: this.balance,
      type: "deposit",
      id: this.accountId,
    });
    return this;
  }

  withdraw(amount: number) {
    if (amount < 0) {
      console.log("Invalid withdrawal amount");
      return this;
    }
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return this;
    }
    this.balance -= amount;
    this.addTransaction({
      amount: this.balance,
      type: "withdrawal",
      id: this.accountId,
    });
    return this;
  }

  transfer(id: string, amount: number) {
    if (this.balance < amount) {
      console.log("Insufficient funds");
      return this;
    }
    this.balance -= amount;
    this.addTransaction({
      amount: this.balance,
      type: "transfer",
      id: id,
    });
    return this;
  }

  showTransactionHistory() {
    console.log(
      "Transaction History: ",
      JSON.stringify(this.transactionHistory)
    );
    return this;
  }

  private addTransaction({ amount, type, id }: Transaction) {
    const transaction = { amount, type, id };
    this.transactionHistory.push(transaction);
  }
}

const userAccount = new Account("987654321", 1500);

userAccount
  .withdraw(100)
  .deposit(200)
  .showTransactionHistory()
  .transfer("123456789", 300)
  .showTransactionHistory();
