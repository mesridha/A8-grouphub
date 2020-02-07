
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'projects': [
      { 'name': 'CSE 170',
        'image': 'CSE 170.jpeg',
        'id': '1'
      },
      { 'name': 'CSE 190',
        'image': 'CSE 190.jpeg',
        'id': '2'
      },
      { 'name': 'ENG 100D',
        'image': 'ENG 100D.jpeg',
        'id': '3'
      }
    ]  
  });
 };