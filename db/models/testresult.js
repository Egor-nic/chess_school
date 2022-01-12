'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Student, {foreignKey: 'student_id'})

    }
  };
  TestResult.init({
    student_id: DataTypes.INTEGER,
    student_level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TestResult',
  });
  return TestResult;
};
