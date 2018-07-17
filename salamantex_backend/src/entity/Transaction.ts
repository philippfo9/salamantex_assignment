import {TransactionState} from "./TransactionState";
import {
    BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
//import {UserTransaction} from "./UserTransaction";
import {Currency} from "./Currency";
import {User} from "./User";

@Entity()
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("decimal", {precision: 10, scale: 3})
    amount: number;

    @Column(/*"enum", {enum: Currency}*/)
    currency: string;

    @CreateDateColumn({type: "timestamp"})
    createdAt: Date;

    @UpdateDateColumn({type: "timestamp"})
    processed: Date;

    @ManyToOne(type => User, user => user.sourceTransactionHistory)
    @JoinColumn({ name: "sourceId" })
    source: User;

    @Column({ nullable: false })
    sourceId: number;

    @ManyToOne(type => User, user => user.targetTransactionHistory)
    @JoinColumn({ name: "targetId" })
    target: User;

    @Column({ nullable: false })
    targetId: number;

    @Column(/*"enum", {enum: TransactionState}*/)
    state: string;

    /*@OneToMany(type => UserTransaction, userTransaction => userTransaction.transaction, {cascade: true})
    users: UserTransaction[];*/
}