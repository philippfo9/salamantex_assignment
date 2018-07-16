import {User} from "./User";
import {TransactionState} from "./TransactionState";
import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {UserTransaction} from "./UserTransaction";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    currency: string;

    @CreateDateColumn({type: "timestamp"})
    createdAt: Date;

    @UpdateDateColumn({type: "timestamp"})
    processed: Date;

    @Column("enum", {enum: TransactionState})
    state: TransactionState;

    @OneToMany(type => UserTransaction, userTransaction => userTransaction.transaction)
    users: UserTransaction[];
}