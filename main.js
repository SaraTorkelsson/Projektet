let getData = async (URL) => {
  let response = await fetch(URL);
  let data = await response.json();
  return data;
};

// Hämtar elever och skolor.
async function renderData() {
  let students = await getData("https://api.mocki.io/v2/01047e91/students");
  let schools = await getData("https://api.mocki.io/v2/01047e91/schools");

  let studentHobbies = [];
  students.forEach((student) => {
      let hobbies = student.hobbies;
      studentHobbies.push(hobbies);
  });
  
  let schoolActivities = [];
  schools.forEach((school) => {
      let activities = school.activities;
      schoolActivities.push(activities);
  });

  // Skriver ut lista på elever.
  students.forEach((user) => {
      let hobbies = [];
      hobbies = user.hobbies;
    let student = document.createElement("li");
    student.textContent = user.firstName + " " + user.lastName;
    student.addEventListener("click", () => {
        filteredStudentList.textContent = "";
        schools.forEach((school) => {
            // let exist = false;
          //   for (var i = 0; i < studentHobbies.length; i++) {
          //       for (var j = 0; j < school.programmes.length; j++) {
          //           for (k = 0; k < school.activities.length; k++) {
                        if (user.programme === school.programmes[0] ||
                          user.programme === school.programmes[1])
                            {
                                hobbies.forEach((schoolActivities) => {
                                    // if (schoolActivities[0] === hobby || schoolActivities[1] === hobby || schoolActivities[2] === hobby)
                                    // {
                                        // console.log("hej");   
                                        // exist = true;
                                        
                                      let findSchool = document.createElement("li");
                                      findSchool.textContent = school.name;
                                    //   students.firstName + " " + students.lastName +
                                    //   " " + "matchar ihop med: " + schools.name;
                                      filteredStudentList.appendChild(findSchool);
                                    // }
                                });
                                // if (exist === true) {
                                //     console.log("hej");
                                //     let findSchool = document.createElement("li");
                                //     findSchool.textContent = schools.name;
                                //   //   students.firstName + " " + students.lastName +
                                //   //   " " + "matchar ihop med: " + schools.name;
                                //     filteredStudentList.appendChild(findSchool);
                                //   //   console.log("hej");
                                // }
                            }
                  //   }
              //   }
          //   }
        });
    });
    document.querySelector("#studentList").appendChild(student);
  });

  let filterBtn = document.querySelector("#filterBtn");
  let filteredSchools = document.querySelectorAll("input[name='filterSchool']");
  let filteredStudentList = document.querySelector("#filteredStudentList");
  let sortByAgeBtn = document.querySelector("#sortByAgeBtn");
  let sortByFirstNameBtn = document.querySelector("#sortByFirstNameBtn");
  let sortByLastNameBtn = document.querySelector("#sortByLastNameBtn");
  // let sortBySchoolBtn = document.querySelector("#sortBySchoolBtn");

  // Filtrera elever efter program.
  filterBtn.addEventListener("click", () => {
    filteredStudentList.textContent = "";
    filteredSchools.forEach((input) => {
      if (input.checked) {
        programme = input.value;
        let filteredStudents = students.filter(
          (student) => student.programme === programme
        );
        filteredStudents.forEach((student) => {
          let studentName = document.createElement("li");
          studentName.textContent = student.firstName + " " + student.lastName;
          filteredStudentList.appendChild(studentName);
        });
      }
    });
  });

  // Filtrera elever efter ålder.
  sortByAgeBtn.addEventListener("click", () => {
    filteredStudentList.textContent = "";
    let sortByAgeBtn = students.sort((a, b) => a.age - b.age);

    sortByAgeBtn.forEach((students) => {
      let studentAge = document.createElement("li");
      studentAge.textContent =
        students.firstName + " " + students.lastName + ", " + students.age;
      filteredStudentList.appendChild(studentAge);
    });
  });

  // Filtera elever efter förnamn.
  sortByFirstNameBtn.addEventListener("click", () => {
    filteredStudentList.textContent = "";
    let sortByFirstNameBtn = students.sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );

    sortByFirstNameBtn.forEach((students) => {
      let studentFirstName = document.createElement("li");
      studentFirstName.textContent =
        students.firstName + " " + students.lastName;
      filteredStudentList.appendChild(studentFirstName);
    });
  });

  // Filtrera elever efter efternamn.
  sortByLastNameBtn.addEventListener("click", () => {
    filteredStudentList.textContent = "";
    let sortByLastNameBtn = students.sort((a, b) =>
      a.lastName.localeCompare(b.lastName)
    );

    sortByLastNameBtn.forEach((students) => {
      let studentLastName = document.createElement("li");
      studentLastName.textContent =
        students.lastName + ", " + students.firstName;
      filteredStudentList.appendChild(studentLastName);
    });
  });

//   let findSchool = schools;


  // Matcha ihop elev med skola.

}

//   sortBySchoolBtn.addEventListener("click", () => {
//     filteredStudentList.textContent = "";
//     findSchool.forEach((school, students) => {
//       for (let i = 0; i < students.hobbies.length; i++) {
//         for (let j = 0; j < school.programmes.length; j++) {
//           for (let k = 0; k < school.activities.length; k++) {
//             if (
//               students.programme === school.programmes[j] &&
//               students.hobbies[i] === school.activities[k]
//             ) {
//               findSchool.forEach((students) => {
//                 let sortSchool = document.createElement("li");
//                 sortSchool.textContent =
//                   students.firstName +
//                   " " +
//                   students.lastName +
//                   " matchar ihop med: " +
//                   schools.name;
//                 filteredStudentList.appendChild(sortSchool);
//               });
//             }
//           }
//         }
//       }
//     });
//   });

// //   sortBySchoolBtn.addEventListener("click", () => {
//     filteredStudentList.textContent = "";
//     sortBySchoolBtn = schools.filter((students, schools) => {
//         students.hobbies.forEach((hobby) => {
//             schools.activities.forEach((activity) => {
//                 if (schools.activities.includes(hobby === activity)) {
//                     console.log("hej");
//                 }
//             });
//         });
//         return schools.programmes.includes(students.programme);
//       });
//     sortSchool.forEach((schools) => {
//       let studentSchool = document.createElement("li");
//       studentSchool.textContent =
//       students.firstName + ", " + students.lastName + " " +
//       "matchar ihop med: " + schools.name;
//       filteredStudentList.appendChild(studentSchool);
//     });
//   });

renderData();
