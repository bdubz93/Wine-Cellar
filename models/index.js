const User = require('./User');
const Project = require('./Project');
const img = require('./img');
User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Project.belongsTo(User, {
  foreignKey: 'user_id'
});
img.belongsTo(Project, {
  foreignKey: 'user_id'
});
module.exports = { User, Project, img };