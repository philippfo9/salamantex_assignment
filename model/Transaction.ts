import {User} from "./User";
import {TransactionState} from "./TransactionState";

export class Transaction {
    id: number;

    amount: number;

    currency: string;

    sourceUser: User;

    targetUser: User;

    created: Date;

    processed: Date;

    state: TransactionState
}