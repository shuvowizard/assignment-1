class BankAccount {
    constructor(accountNumber, ownerName, balance = 0) {
        this.accountNumber = accountNumber
        this.ownerName = ownerName
        this.balance = balance
    }

    // Deposit Balance
    deposit(amount) {
        if (amount > 0) {
            this.balance = this.balance + amount
            console.log(`Successfully deposited your $${amount} amount!. Now your current balance is $${this.balance}`);
        } else {
            console.log(`This amount $${amount} is not acceptable!`);
        } 
    }

    // Withdraw Balance
    withdraw(amount) {
        if (amount <= this.balance && amount > 0) {
            this.balance = this.balance - amount
            console.log(`Your withdraw balance is $${amount}. Now your current balance is $${this.balance}`);
        } else {
            console.log(`Insufficient funds!`);
        }
    }

    // Get Balance
    getBalance() {
        return `$${this.balance}`
    }

    // Display user information
    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Create two instances of the BankAccount class!
const user1 = new BankAccount(1010102, "Md. Said", 500)
const user2 = new BankAccount(1010103, "Md. Abdullah", 1000)

// Demonstrate the functionality of the methods by depositing, withdrawing, and displaying account information.
console.log('User1 Information:');
user1.deposit(500);
user1.withdraw(300);
user1.displayAccountInfo();

console.log('\nUser2 Information:');
user2.deposit(700);
user2.withdraw(500);
user2.displayAccountInfo();