
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Cisco', data : ['Task-1','Task-2','Task-3'] });
};