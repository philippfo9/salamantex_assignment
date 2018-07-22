
import {Transaction} from "./Transaction";

export class User {

    id: number;

    publicIdentifier: string;

    name: string;

    lastName: string;

    birthDay: Date;

    description: string;

    email: string;

    bitcoinWalletID: string;

    bitcoinBalance: number;

    ethereumWalletID: string;

    ethereumBalance: number;

    maximumAmountPerTransaction: number;

}


