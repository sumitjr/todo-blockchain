const Todo = artifacts.require("todolist");

module.exports = function (deployer) {
  deployer.deploy(Todo);
};
