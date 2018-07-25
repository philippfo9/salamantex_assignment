import {Injectable} from "injection-js";
import {getConnection, Repository} from "typeorm";
import {User} from "../entity/User";
import {Utils} from "../tools/utils";
import {CustomError} from "../tools/CustomError";
import {validate} from "class-validator";
import {getBasicUserById} from "../queries/user-queries";

@Injectable()
export class UsersDomain {
    public static userRepository: Repository<User> = null;

    static async getUser(userId) {
        if(!UsersDomain.userRepository) UsersDomain.userRepository = getConnection().manager.getRepository(User);
        let user = await this.userRepository.findOneOrFail(userId);
        return user;
    }

    static async getBasicUser(userId) {
        if(!UsersDomain.userRepository) UsersDomain.userRepository = getConnection().manager.getRepository(User);
        return await getBasicUserById(userId);
    }

    static async saveUser(user: User) {
        if(!UsersDomain.userRepository) UsersDomain.userRepository = getConnection().manager.getRepository(User);
        let errors = await validate(user, {skipMissingProperties: true});
        if(errors.length > 0) {
            console.log("one or more field were not filled correctly", errors);
            throw new CustomError(422, "Eines oder mehrere Felder sind nicht korrekt ausgefüllt");
        }
        let savedUser = <User>await this.userRepository.save(user).catch(err => {
            throw new CustomError(422, "Etwas ist schief gelaufen");
        });
        delete savedUser.password;
        return savedUser;
    }

    static async postUser(user: User) {
        if(!user.password)
            throw new CustomError(422, "Für die Registrierung wird ein Passwort benötigt");

        if(await User.findOne({email: user.email})) {
            throw new CustomError(422, "Email existiert bereits");
        }

        if(await User.findOne({name: user.name})) {
            throw new CustomError(422, "Username existiert bereits");
        }

        user.password = <string> await User.hashPassword(user.password);
        return await UsersDomain.saveUser(user);
    }

    static async updateUser(user: User) {
        let oldUser = await UsersDomain.userRepository.findOne(user.id);

        if(oldUser.bitcoinWalletID != user.bitcoinWalletID) {
            if(!Utils.validateAddress(user.bitcoinWalletID, "BTC"))
                throw new CustomError(422, "Die angegebene Bitcoin Wallet Adresse ist nicht korrekt");

            user.bitcoinBalance = <number> await Utils.getBitcoinBalance(user.bitcoinWalletID);
        }
        if(oldUser.ethereumWalletID != user.ethereumWalletID) {
            if(!Utils.validateAddress(user.ethereumWalletID, "ETH"))
                throw new CustomError(422, "Die angegebene Bitcoin Wallet Adresse ist nicht korrekt");

            user.ethereumBalance = <number> await Utils.getEthereumBalance(user.ethereumWalletID);
        }

        return this.saveUser(user);
    }
}