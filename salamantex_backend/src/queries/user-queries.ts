import {getConnection} from "typeorm";
import {User} from "../entity/User";

export async function getBasicUserById(userId) {
    return await getConnection().manager.getRepository(User)
        .createQueryBuilder("user")
        .select(["user.publicIdentifier", "user.id", "user.name"])
        .where("user.id = :userId", {userId: userId})
        .getOne()
}