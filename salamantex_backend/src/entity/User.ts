import {Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Max, Min} from "class-validator";
import {UserTransaction} from "./UserTransaction";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    @Generated("uuid")
    publicIdentifier: string;

    @Column({
        length: 512
    })
    name: string;

    @Column()
    birthDay: Date;

    @Column({
        nullable: true
    })
    description: string;

    @Column()
    email: string;

    @Column({
        length: 35,
        nullable: true
    })
    bitcoinWalletID: string;

    @Column({
        nullable: true
    })
    @Min(0)
    @Max(1000000000)
    bitcoinBalance: number;

    @Column({
        length: 35,
        nullable: true
    })
    ethereumWalletID: string;

    @Column({
        nullable: true
    })
    @Min(0)
    @Max(1000000000)
    ethereumBalance: number;

    @Column({
        default: 0.5
    })
    maximumAmountPerTransaction: number;

    @Column()
    @OneToMany(type => UserTransaction, userTransaction => userTransaction.user)
    userTransactions: UserTransaction[];

}
