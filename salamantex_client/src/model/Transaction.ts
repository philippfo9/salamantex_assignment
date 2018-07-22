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

    getStateColor() {
      let bgColor = "";
      Object.keys(TransactionState).forEach(key =>{
        if(this.state.toLowerCase() == key.toLowerCase()) {
          bgColor = TransactionState[key];
        }
      });
      return bgColor;
    }

    getStateText() {
      switch(this.state.toLowerCase()) {
        case "processing": {
          return "Transaktion in Bearbeitung";
        }
        case "canceled": {
          return "Transaktion abgebrochen";
        }
        case "finished": {
          return "Transaktion erfolgreich";
        }
        default: {
          return "Kein Status verfügbar";
        }
      }
    }
}
