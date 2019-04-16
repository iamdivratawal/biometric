var Attend = require('../model/attend')
var Student = require('../model/student')
//var Teacher = require('../model/teacher')
exports.setAttendance =  (req, res) => {
    
    var attend = new Attend({
        name: req.body.sn_id,
        enrollmentId: req.body.enroll_id,
        programme:  req.body.p_id,
        date: req.body.date,
        attendance:  req.body.att,
    });
    
    attend.save()
    .then(
        res.redirect('/admin/attendance_report/')
    )

    .catch(err =>{
        res.redirect('/admin/attendance/')  
    })
}

exports.getAttendance = (req, res) => {
    Attend.find().exec()
    .then(docs =>{
        res.render('attendance_report', { title: ' Attendance Report',  items: docs });
    })
}

exports.getStudentDetails = (req, res, next) => {
    Student.findById({_id: req.params.id}).exec()
    .then(data => {
        //console.log(data);
        return res.render('update_student', {items: data})
    }
    )
    .catch(err =>{
        return res.redirect('/admin/student_report/')
    }
    )
}

exports.updateStudent = (req, res, next) => {
    var id = req.body.id;
    Student.findById(id, function(err, docs) {
        docs.name = req.body.name;
        docs.semester= req.body.semester;
        docs.email= req.body.email;
        docs.password= req.body.password;
        docs.contact= req.body.contact;
        docs.save();
    })
    res.redirect('/admin/student_report/');
};