import {BaseEntity, Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {IsDefined, Length, Max, MaxLength, Min} from "class-validator";
import {Transaction} from "./Transaction";
import {CustomError} from "../tools/CustomError";
import * as bcrypt from "bcrypt-nodejs";

@Entity()
export class User extends BaseEntity {

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
    @Length(2, 512)
    @IsDefined()
    name: string;

    @Column()
    password: string;

    @Column({
        nullable: true
    })
    birthDay: Date;

    @Column({
        nullable: true,
        length: 1000
    })
    @Length(0, 1000)
    description: string;

    @Column({
        nullable: false,
        length: 1000,
        unique: true
    })
    @Length(4, 1000)
    @IsDefined()
    email: string;

    @Column({
        length: 35,
        nullable: true
    })
    @Length(26, 35)
    bitcoinWalletID: string;

    @Column({
        type: "decimal",
        precision: 8,
        scale: 8,
        nullable: true
    })
    @Min(0)
    @Max(1000000000)
    bitcoinBalance: number;

    @Column({
        length: 42,
        nullable: true
    })
    ethereumWalletID: string;

    @Column({
        type: "decimal",
        precision: 18,
        scale: 5,
        nullable: true
    })
    @Min(0)
    @Max(1000000000)
    ethereumBalance: number;

    @Column({
        type: "decimal",
        default: 0.5
    })
    maximumAmountPerTransaction: number;

    @OneToMany(type => Transaction, transaction => transaction.source)
    sourceTransactionHistory: Transaction[];

    @OneToMany(type => Transaction, transaction => transaction.target)
    targetTransactionHistory: Transaction[];

    /*@OneToMany(type => UserTransaction, userTransaction => userTransaction.user)
    transactionHistory: UserTransaction[];*/

    processUserAfterRead() {
        this.maximumAmountPerTransaction = Number(this.maximumAmountPerTransaction);
        this.ethereumBalance = Number(this.ethereumBalance);
        this.bitcoinBalance = Number(this.bitcoinBalance);
    }

    addAmountToBalance(balance, amount) {
        return Number(balance)+amount;
    }

    removeAmountFromBalance(balance, amount) {
        return Number(balance)-amount;
    }

    static comparePassword(candidatePassword: string, password) {
        return new Promise(resolve => {
            bcrypt.compare(candidatePassword, password, (err, isMatch: boolean) => {
                if(err) { throw new CustomError(422, "Email oder Passwort ist inkorrekt.") }
                resolve(isMatch);
            })
        });
    }

    static hashPassword(password: string) {
        return new Promise(resolve => {
            bcrypt.genSalt(10, (err, salt) => {
                if (err) { throw new CustomError(500, "Registrierung nicht möglich"); }
                bcrypt.hash(password, salt, undefined, (err, hash) => {
                    if (err) { throw new CustomError(500, "Registrierung nicht möglich"); }
                    resolve(hash);
                });
            });
        });
    }


}
