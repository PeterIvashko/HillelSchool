const student1 = new Student("Іван", "Іванов", 2000);
const student2 = new Student("Петро", "Петров", 2001);

student1.grades = [95, 87, 91];
student2.grades = [75, 80, 85];

function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = [];
  this.attendance = new Array(25).fill(null);

  this.getAge = function() {
    const today = new Date();
    const birthDate = new Date(this.birthYear, 0, 1);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  this.getAverageGrade = function() {
    if (this.grades.length === 0) {
      return null;
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade);
    return sum / this.grades.length;
  };

  this.present = function() {
    const attendanceIndex = this.attendance.indexOf(null);
    if (attendanceIndex !== -1) {
      this.attendance[attendanceIndex] = true;
    }
  };

  this.absent = function() {
    const attendanceIndex = this.attendance.indexOf(null);
    if (attendanceIndex !== -1) {
      this.attendance[attendanceIndex] = false;
    }
  };

  this.getAttendanceRate = function() {
    const presentCount = this.attendance.filter(val => val === true).length;
    return presentCount / this.attendance.length;
  };

  this.summary = function() {
    const averageGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceRate();
    if (averageGrade === null || attendanceRate === null) {
      return "Неможливо розрахувати оцінку або відвідуваність.";
    } else if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще.";
    } else {
      return "Редиска!";
    }
  };
}


student1.present(); 
student1.absent(); 
student1.present(); 

console.log(student1.getAge());
console.log(student2.getAverageGrade()); 

console.log(student1.summary()); 
console.log(student2.summary()); 