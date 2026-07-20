import { EntitySchema } from "typeorm";

const User = new EntitySchema({

    name: "User",

    tableName: "users",

    columns: {

        id: {

            primary: true,

            type: "int",

            generated: true,

        },

        name: {

            type: "varchar",

        },

        email: {

            type: "varchar",

            unique: true,

        },

        password: {

            type: "varchar",

        },

        createdAt: {

            createDate: true,

            type: "timestamp",

        },

        updatedAt: {

            updateDate: true,

            type: "timestamp",

        }

    }

});

export default User;