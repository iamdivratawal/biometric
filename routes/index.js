var express = require('express');
var router = express.Router();

var Account = require('../collection/account.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard/', function(req, res, next) {
  res.render('admindash', { title: 'dashboard' });
});

router.get('/login/', function(req, res, next) {
  res.render('admin_login', { title: 'Admin Login' });
});

router.post('/login/', Account.login)

router.get('/register/', function(req, res, next) {
  res.render('register', { title: 'Login' });
});

router.get('/account/', function(req, res, next) {
  res.render('account', { title: 'Account' });
});

router.post('/register/', Account.register)


router.get('./attendance_report/', function(req, res, next) {
  res.render('attendance_report', { title: 'attendance_report' });
});

router.get('/student_login/', function(req, res, next) {
  res.render('student_login', { title: 'student login' });
});


router.get('/teacher_login/', function(req, res, next) {
  res.render('teacher_login', { title: 'teacher login' });
});

router.get('/student_report/', function(req, res, next) {
  res.render('student_report', { title: 'student_report' });
});


router.get('/teacher_report/', function(req, res, next) {
  res.render('teacher_report', { title: 'teacher_report' });
});

module.exports = router;