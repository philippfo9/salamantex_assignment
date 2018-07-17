import {Transaction} from "../entity/Transaction";
//import {UserTransaction} from "../entity/UserTransaction";
import {getConnection} from "typeorm";
import {User} from "../entity/User";


export async function getTransactionsByUser(userId) {
    console.log(await getConnection().manager.getRepository(Transaction)
        .createQueryBuilder("trx")
        .where("trx.sourceId = :source", {source: userId})
        .orWhere("trx.targetId = :target", {target: userId})
        .getMany());
}