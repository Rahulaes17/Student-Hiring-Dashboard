const students = [
    { name: "Rahul", rollNo: 51, cgpa: 8.67 },
    { name: "Rohit", rollNo: 58, cgpa: 8.00 },
    { name: "Sahil", rollNo: 40, cgpa: 8.50 },
    { name: "Rhutul", rollNo: 53, cgpa: 7.86 },
    { name: "Ashish", rollNo: 34, cgpa: 6.70 },
    { name: "Piyush", rollNo: 43, cgpa: 8.30 },
    { name: "Prabhu", rollNo: 45, cgpa: 9.20 },
    { name: "Prateek", rollNo: 46, cgpa: 9.10 }
];

function addHiringStatus(students) {
    return students.map(student => {
        let hiring;
        if (student.cgpa >= 9) hiring = "hired";
        else if (student.cgpa >= 8) hiring = "applicable";
        else hiring = "not-applicable";

        return { ...student, hiring };
    });
}
const studentsWithStatus = addHiringStatus(students)
console.log(studentsWithStatus)

const result = studentsWithStatus.reduce((count, student) => {
    if (student.hiring === "hired") {
        count.hired++
    }
    else if (student.hiring === "applicable") {
        count.applicable++
    }
    else {
        count.notApplicable++
    }

    return count
}, {
    hired: 0,
    applicable: 0,
    notApplicable: 0,
})


const studentList = document.getElementById('studentList')

function renderStudents(list){
    studentList.innerHTML=""

    list.forEach(student=>{
        const div = document.createElement("div")

        div.textContent = `${student.name} (${student.cgpa}) - ${student.hiring}`;

        div.classList.add("student");
        div.classList.add(student.hiring);

        studentList.appendChild(div);
    })
}
renderStudents(studentsWithStatus);

const counts = document.getElementById('counts')
function renderCounts(result){
    counts.innerHTML="";

    counts.textContent = `${result}`;


    counts.appendChild()
}
renderCounts(result);