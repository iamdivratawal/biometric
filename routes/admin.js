var express = require('express');
var router = express.Router();

var Account = require('../collection/account.js')
var Admin = require('../collection/admin.js')
var Attend = require('../collection/attendance.js')
var Student = require('../collection/student.js')
var Teacher = require('../collection/teacher.js')
var StudModel = require('../model/student') 
var TeachModel = require('../model/teacher') 


function isAuthenticated(req, res, next) {
  if (req.session.user){
    if (req.session.user.email == 'root')
      return next();
  }
  res.redirect('/admin/login/');
}


function skipLogin(req, res, next) {
  if (!req.session.user)
    return res.redirect('/login/');
  return res.redirect('/admin/');
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard/', function(req, res, next) {
  res.render('admindash', { title: 'dashboard' });
});

router.get('/login/', skipLogin);

router.post('/login/', Admin.login)

router.get('/register/', isAuthenticated, function(req, res, next) {
  res.render('register', { title: 'Login' });
});

router.get('/account/', isAuthenticated, function(req, res, next) {
  res.render('account', { title: 'Account' });
});

router.post('/register/', isAuthenticated, Account.register);

router.get('/update_student/:id', isAuthenticated, Attend.getStudentDetails);

router.post('/update_student/', isAuthenticated, Attend.updateStudent);


router.get('/update_teacher/:id', isAuthenticated, Teacher.getTeacherDetails);

router.post('/update_teacher/', isAuthenticated, Teacher.updateTeacher);

router.get('/option/', function(req, res, next) {
  res.render('option', { title: 'Choose' });
});

//
//

router.get('/delete_student/:id',function(req,res,next){
  const id = req.params.id;
  StudModel.remove({_id: id}).exec()
  res.redirect('/admin/student_report')
})


router.get('/delete_teacher/:id',function(req,res,next){
  const id = req.params.id;
  TeachModel.remove({_id: id}).exec()
  res.redirect('/admin/teacher_report')
})


router.get('/attendance/', function(req, res, next) {
  res.render('attendance', { title: 'Add_attendance' });
});

router.post('/attendance/', Attend.setAttendance );

router.get('/attendance_report/', Attend.getAttendance );
router.get('/attendance_report/attendance_report/', Attend.getAttendance );


router.get('/s_register/', isAuthenticated, function(req, res, next) {
  res.render('s_register', { title: 'S_Registeration' });
});

router.post('/s_register/', isAuthenticated, Student.setStudent );


router.get('/student_report/', isAuthenticated, Student.getStudent );

router.get('/attendance_report/student_report/', isAuthenticated, Student.getStudent );



router.get('/t_register/', isAuthenticated, function(req, res, next) {
  res.render('t_register', { title: 'T_Registeration' });
});

router.post('/t_register/', isAuthenticated, Teacher.setTeacher );

router.get('/logout/', isAuthenticated, function(req, res, next) {
  req.session.destroy();
  res.redirect('/');
});

router.get('/teacher_report/', isAuthenticated, Teacher.getTeacher );
router.get('/attendance_report/teacher_report/', Attend.getAttendance );


module.exports = router;
