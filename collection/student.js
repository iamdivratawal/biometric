var Student = require('../model/student')

exports.setStudent =  (req, res) => {
    
    var student = new Student({
        name: req.body.s_name,
        enrollmentId: req.body.s_eid,
        programme:  req.body.s_pg,
        date: req.body.s_db,
        semester:  req.body.s_sem,
        batch:  req.body.s_bat,
        contact:  req.body.s_con,
        email:  req.body.s_mail,
        gender:  req.body.gender,
        password: req.body.s_pass
    });
    student.save()
    .then(
        res.redirect('./student_report/')
    )
    .catch(
        res.redirect('/s_register/')  
    )
}

exports.getStudent = (req, res) => {
    Student.find().exec()
    .then(docs =>{
        res.render('student_report', { title: 'Student Report',  items: docs });
    })
}