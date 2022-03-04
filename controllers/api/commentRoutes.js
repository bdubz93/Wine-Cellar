const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll({

    })
      .then(commentText => res.json({commentText}))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});


// router.get('/', async (req, res) => {
//     try {
//       // Get all projects and JOIN with user data
//       const projectData = await Comment.findAll({
//         include: [
//           {
//             model: Comment,
//             attributes: ['name'],
//           },
//         ],
//       });
  
//       // Serialize data so the template can read it
//       const projects = projectData.map((project) => project.get({ plain: true }));
//   console.log(projects);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

router.get('/:id', (req, res) => {
    Comment.findByPk({

    })
      .then(commentText => res.json(commentText))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});



router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;