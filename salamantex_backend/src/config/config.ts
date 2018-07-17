import {ConnectionOptions} from "typeorm";

export class Config {
    public static connectionConfig: ConnectionOptions = {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "salamantex",
        password: "salamantex",
        database: "salamantex_assignment",
        synchronize: true,
        logging: true,
        entities: [
            "src/entity/**/*.ts"
        ],
        migrations: [
            "src/migration/**/*.ts"
        ],
        subscribers: [
            "src/subscriber/**/*.ts"
        ],
        cli: {
            entitiesDir: "src/entity",
            migrationsDir: "src/migration",
            subscribersDir: "src/subscriber"
        }
    };
}