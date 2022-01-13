'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Mentor, {through: 'Lesson', foreignKey: 'student_id'} )
      this.hasMany(models.TestResult, {foreignKey: 'student_id'})
    }
  };
  Student.init({
    studentName: DataTypes.STRING,
    parentName: DataTypes.STRING,
    studentAge: DataTypes.INTEGER,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
