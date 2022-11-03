const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,

    transactions: [],

    createTransaction(amount, type) {
        const transaction = {
            id: this.transactions.length + 1,
            type: type,
            amount: amount,
        };
        return transaction;
    },

    deposit(amount) {
        this.balance += amount;
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    },

    withdraw(amount) {
        this.balance < amount
            ? console.log('Недостаточно средств для снятия')
            : (this.balance -= amount);

        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
    },

    getBalance() {
        console.log('Ваш баланс:', this.balance, 'гривнав');
    },

    getTransactionDetails(id) {
        for (const item of this.transactions) {
            if (id === item.id) {
                console.log(item);
            }
        }
    },

    getTransactionTotal(type) {
        for (const item of this.transactions) {
            if (type === item.type) {
                console.log('Суммы данных операций:', item.amount);
            }
        }
    },
};

account.deposit(10);
account.deposit(100);
account.withdraw(20);
console.log(account);
account.getBalance();
account.getTransactionDetails(1);
account.getTransactionTotal('deposit');
account.getTransactionTotal('withdraw');
