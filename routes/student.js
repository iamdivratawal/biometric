var express = require('express');
var router = express.Router();

var Account = require('../collection/account.js')
var Attend = require('../collection/attendance')
var Student = require('../collection/student.js')
var Teacher = require('../collection/teacher.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login/', function(req, res, next) {
  res.render('admin_login', { title: 'Login' });
});

router.post('/login/', Account.login)

router.get('/register/', function(req, res, next) {
  res.render('register', { title: 'Login' });
});

router.get('/account/', function(req, res, next) {
  res.render('account', { title: 'Account' });
});

router.post('/register/', Account.register);

router.get('/attendance_report/', Attend.getAttendance );

router.get('/student_report/', Student.getStudent );

router.get('/teacher_report/', Teacher.getTeacher );
// router.get('/teacher_report/', function(req, res, next) {
//   res.render('t_teacher_report', { title: 'teacher_report' });
// });

router.get('/option/', function(req, res, next) {
  res.render('s_option', { title: 'Option' });
});

module.exports = router;
