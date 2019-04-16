var Teacher = require('../model/teacher')

exports.setTeacher =  (req, res) => {
    
    var teacher = new Teacher({
        name: req.body.t_name,
        date: req.body.t_db,
        department:  req.body.t_dpname,
        qualification:  req.body.t_qual,
        subject: req.body.t_sub,
        contact:  req.body.t_con,
        teacher_id:  req.body.tid,
        email:  req.body.t_eml,
        password:  req.body.t_pass,
        gender:  req.body.gender
    });

    console.log(teacher)

    teacher.save()
    .then(
        res.redirect('/admin/teacher_report/')
    )
    .catch(
        res.redirect('/admin/t_register/')  
    )
}

exports.getTeacher = (req, res) => {
    Teacher.find().exec()
    .then(docs =>{
        res.render('teacher_report', { title: 'Teacher Report',  items: docs });
    })
}

exports.getTeacherDetails = (req, res, next) => {
    Teacher.findById({_id: req.params.id}).exec()
    .then(data => {
        //console.log(data);
        return res.render('update_teacher', {items: data})
    }
    )
    .catch(err =>{
        return res.redirect('/admin/teacher_report/')
    }
    )
}

exports.updateTeacher = (req, res, next) => {
    var id = req.body.id;
    Teacher.findById(id, function(err, docs) {
        docs.department = req.body.department;
        docs.qualification= req.body.qualification;
        docs.subject= req.body.subject;
        docs.contact= req.body.contact;
        docs.email= req.body.email;
        docs.password= req.body.password;
        docs.save();
    })
    res.redirect('/admin/teacher_report/');
};

