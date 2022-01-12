'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestAnswers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({TestQuestion}) {
      // define association here
      this.belongsTo(TestQuestion, {foreignKey: 'question_id'})
    }
  };
  TestAnswers.init({
    answer: DataTypes.STRING,
    correct: DataTypes.BOOLEAN,
    question_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TestAnswers',
  });
  return TestAnswers;
};
