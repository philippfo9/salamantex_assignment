
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

    getBalanceByCurrency(currencyName: string) {
      //relation between currency obj and currency arr in user would be better (one to many)
      return this[currencyName.toLowerCase()+"Balance"]
    }

    walletExistsForCurrency(currencyName: string) {
      return this[currencyName.toLowerCase()+"WalletID"];
    }
}


