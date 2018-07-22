import {User} from "./User";
import {TransactionState} from "./TransactionState";

export class Transaction {
    id: number;

    amount: number;

    currency: string;

    source: User;

    target: User;

    created: Date;

    processed: Date;

    state: string;
}