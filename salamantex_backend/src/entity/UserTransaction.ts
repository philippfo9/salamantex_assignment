import {User} from "./User";
import {Transaction} from "./Transaction";
import {BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

/*@Entity()
export class UserTransaction extends BaseEntity{

    @ManyToOne(type => User, user => user.transactionHistory, {primary: true})
    user: User;

    @ManyToOne(type => Transaction, transaction => transaction.users,{primary: true})
    transaction: Transaction;

    @Column({
        nullable: false
    })
    from: boolean;
}*/