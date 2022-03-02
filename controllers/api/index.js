const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const collectionRoutes = require('./collectionRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/collection', collectionRoutes);

module.exports = router;
