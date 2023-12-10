// This function calculates the GPA and outputs the Class of diploma of a Nigerian Polytechnic student based on only 1 course.
//First, grades and grade points are assigned based on their scores.
// The weighted point and grade point average is calculated.
// The gradepoint average is printed out and fed u=into the second part of the function that checks the Class of Diploma.
//The If statements are evaluated and it prints out the Class of diploma.
//

function gradePointAverageCalculator(studentScore, courseUnit) {
  let grade = " "; //This initializes grade to an empty string
  let gradePoint;  //This declares gradepoint
  let totalUnits;  //This declares totalUnits
  let weightedPoint;   //This declares weightedPoint
  //The If statements below assign Grade letters to Student scores.
  // If the scores fall with each range, the letter grade is assigned and the gradepoint is calculated.
  if (studentScore >= 75) {
    grade = "A";
    gradePoint = 4.0;
  } else if (studentScore >= 70 && studentScore <= 74) {
    grade = "AB";
    gradePoint = 3.5;
  } else if (studentScore >= 65 && studentScore <= 69) {
    grade = "B";
    gradePoint = 3.25;
  } else if (studentScore >= 60 && studentScore <= 64) {
    grade = "BC";
    gradePoint = 3.0;
  } else if (studentScore >= 55 && studentScore <= 59) {
    grade = "C";
    gradePoint = 2.75;
  } else if (studentScore >= 50 && studentScore <= 54) {
    grade = "CD";
    gradePoint = 2.5;
  } else if (studentScore >= 45 && studentScore <= 49) {
    grade = "D";
    gradePoint = 2.25;
  } else if (studentScore >= 40 && studentScore <= 44) {
    grade = "E";
    gradePoint = 2.0;
  } else if (studentScore < 40) {
    grade = "F";
    gradePoint = 0;
  }

  weightedPoint = courseUnit * gradePoint;
  
  gradePointAverage = weightedPoint / courseUnit;
  console.log(" Your GPA is " + gradePointAverage + " because you scored " + studentScore +" in a " + courseUnit + " unit course" );

  //This If statement part determines the class of diploma based on the  calculated value of the grade point average calculated above.
  let diplomaClass = " ";
  if (gradePointAverage >= 3.5 && gradePointAverage <= 4.0)
    diplomaClass = " Distinction";
  else if (gradePointAverage >= 3.0 && gradePointAverage <= 3.49)
    diplomaClass = " Upper Credit";
  else if (gradePointAverage >= 2.5 && gradePointAverage <= 2.99)
    diplomaClass = " Lower Credit";
  else if (gradePointAverage >= 2.0 && gradePointAverage <= 2.49)
    diplomaClass = " Pass";
  else if (gradePointAverage >= 0.0 && gradePointAverage <= 1.49)
    diplomaClass = " Fail";

  console.log("Your Class of Diploma is " + diplomaClass + " based on your GPA which is " + gradePointAverage);

  return gradePointAverage;
}
gradePointAverageCalculator(50, 6);
