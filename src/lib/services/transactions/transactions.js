import { saveTransactionsBulks, getMostRecentTransaction, updateTransactionsCategory, removeTransactions } from "@lib/repos/transactions";
import { updateAccountBalance } from "@lib/repos/accounts";

import { filterAlreadyExisting, importFile } from "./import.js";

function updateCategory(_selectedTransactions, _category)
{
    return updateTransactionsCategory(_selectedTransactions, _category);
}

function remove(_selectedTransactions)
{
    return removeTransactions(_selectedTransactions);
}

async function imports(file, options)
{
    let { balance, dateMin, dateMax, transactions } = await importFile(file, options);
    const lastTransaction = await getMostRecentTransaction();
    const newTransactions = filterAlreadyExisting(options.accountId, lastTransaction, transactions);

    if (!newTransactions.length) return {count: 0};

    saveTransactionsBulks(newTransactions);
    updateAccountBalance(options.accountId, balance);

    return {
        count: newTransactions.length,
    };
}

function groupTransactionsByDate(_transactions)
{
    let groupedTransactions = [];

    if (!_transactions) return groupedTransactions;

    // Work because we know that the transactions are sorted
    let previousDate = new Date(0);
    for (let transaction of _transactions) {
        if (transaction.date.getTime() != previousDate.getTime()) {
            groupedTransactions.push({
                date: transaction.date,
                transactions: [],
            });
            previousDate = transaction.date;
        }
        groupedTransactions[
            groupedTransactions.length - 1
        ].transactions.push(transaction);
    }

    return groupedTransactions;
}

// Create a summary of the given transactions (positive, negative, total, categories values)
function getTransactionsRecap(_transactions)
{
    let catTmpMap = new Map();
    // transactions without a category (None category) so that its first in the list
    catTmpMap.set(null, 0);

    let totals = {
        positiveTotal: 0,
        negativeTotal: 0,
        total: 0,
    };

    for (let transaction of _transactions || [])
    {
        // Categories values
        if (!catTmpMap.has(transaction.categoryId)) catTmpMap.set(transaction.categoryId, 0);
        catTmpMap.set(transaction.categoryId, catTmpMap.get(transaction.categoryId) + Math.abs(transaction.value));

        // Transactions totals
        if (transaction.value > 0)
            totals.positiveTotal += transaction.value;
        else
            totals.negativeTotal += transaction.value;
    }

    // Reverse so that None category is always at the end
    
    let categoriesValues = Array.from(catTmpMap, function(entry) {
        return {id: entry[0], value: entry[1]};
    }).reverse();
    totals.total = Math.abs(totals.positiveTotal) + Math.abs(totals.negativeTotal);

    return {
        categoriesValues,
        totals
    }
}

export default {
    remove,
    updateCategory,
    imports,
    groupTransactionsByDate,
    getTransactionsRecap
}