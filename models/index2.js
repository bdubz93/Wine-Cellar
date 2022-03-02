const User = require('./user');
const Wine = require('./wine');
const Comment = require('./comment');

User.hasMany(Wine, {
    foreignKey: 'user_id'
});

Wine.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Comment.belongsTo(Wine, {
    foreignKey: 'Wine_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});
  
Wine.hasMany(Comment, {
    foreignKey: 'Wine_id'
});
