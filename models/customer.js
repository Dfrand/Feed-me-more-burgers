module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    }, {
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true


    });
            Customer.associate = function (models) {
                Customer.belongsTo(models.Burger);
            }

    return Customer;
};