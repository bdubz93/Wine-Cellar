const User = require('./User');
const Project = require('./Project');
const Comment = require('./comment');
User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Comment.hasMany(Project, {
  foreignKey: 'comment_id'
});
Project.belongsTo(User, {
  foreignKey: 'user_id'
});
Project.belongsTo(Comment, {
  foreignKey: 'comment_id'
});



module.exports = { User, Project, Comment};

