'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({TestAnswers}) {
      // define association here
      this.hasMany(TestAnswers, {foreignKey: 'question_id'})

    }
  };
  TestQuestion.init({
    question: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TestQuestion',
  });
  return TestQuestion;
};
