var express = require('express');
var router = express.Router();

var Account = require('../collection/account.js')
var Admin = require('../collection/admin.js')
var Attend = require('../collection/attendance.js')
var Student = require('../collection/student.js')
var Teacher = require('../collection/teacher.js')
var StudModel = require('../model/student') 
var TeachModel = require('../model/teacher') 



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard/', function(req, res, next) {
  res.render('admindash', { title: 'dashboard' });
});

router.get('/login/', function(req, res, next) {
  res.render('admin_login', { title: 'Login' });
});

router.post('/login/', Admin.login)

router.get('/register/', function(req, res, next) {
  res.render('register', { title: 'Login' });
});

router.get('/account/', function(req, res, next) {
  res.render('account', { title: 'Account' });
});

router.post('/register/', Account.register);

router.get('/update_student/:id', Attend.getStudentDetails);

router.post('/update_student/', Attend.updateStudent);


router.get('/update_teacher/:id', Teacher.getTeacherDetails);

router.post('/update_teacher/', Teacher.updateTeacher);

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


router.get('/s_register/', function(req, res, next) {
  res.render('s_register', { title: 'S_Registeration' });
});

router.post('/s_register/', Student.setStudent );


router.get('/student_report/', Student.getStudent );

router.get('/attendance_report/student_report/', Student.getStudent );



router.get('/t_register/', function(req, res, next) {
  res.render('t_register', { title: 'T_Registeration' });
});

router.post('/t_register/', Teacher.setTeacher );


router.get('/teacher_report/', Teacher.getTeacher );
router.get('/attendance_report/teacher_report/', Attend.getAttendance );


module.exports = router;
