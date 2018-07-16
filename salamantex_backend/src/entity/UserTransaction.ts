import {User} from "./User";
import {Transaction} from "./Transaction";
import {Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserTransaction {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.userTransactions)
    user: User;

    @ManyToOne(type => Transaction, transaction => transaction.users)
    transaction: Transaction;

    @Column({
        nullable: false
    })
    from: boolean;
}