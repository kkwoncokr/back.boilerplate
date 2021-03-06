import {Sequelize, DataTypes, Optional,Model} from 'sequelize';
import User from '../resolvers/User';
import {sequelize} from './index';
import { Roles } from './role';

export enum Role {
    User ='USER',
    Admin = 'ADMIN'
}
export class Users extends Model{
    public readonly id! : number;
    public email! : string;
    public password! : string;
    public nickname! : string;
    public phoneNumber! :number;
}

Users.init(
    {
        email : {
            type: DataTypes.STRING(45),
            allowNull:false,
        },
        password : {
            type: DataTypes.STRING(100),
            allowNull:false,
        },
        nickname: {
            type:DataTypes.STRING(45),
            allowNull:false,
        },
        phoneNumber:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
    },
    {
        modelName:'Users',
        tableName:'User',
        sequelize,
        freezeTableName:true,
        timestamps:true,
        updatedAt:'updateTimestamp',
    }
)
Users.belongsTo(Roles,{
    foreignKey:{
        allowNull:false,
        defaultValue:1
    },
    as:'roles'
})

Users.sync().then(() => console.log("Users table created"))
