import * as Sequelize from "sequelize";
import * as sequelize from "../services/PostgresService";

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

export = User;