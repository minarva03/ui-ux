//Local storage
// localStorage.clear();

let StudentName="Minarva";
let branch="cs";
let clg="NIT";
let yr= "2nd";

//localStorage.setItem('name',StudentName);
localStorage.setItem('Branch',branch);
localStorage.setItem('CollageName',clg);
localStorage.setItem('year',yr);

localStorage.removeItem('StudentName');

let StudentName="minu";
localStorage.setItem('name',StudentName);

//localStorage.clear();
//array of element is local storage

// let studentInfo=[
//                   {RegdNo:1901129001,Name:'Minarva',Branch:'Cs', Result:'9sgpa'},
//                   {RegdNo:1901129002,Name:'Pranjal',Branch:'Cs', Result:'8sgpa'},
//                   {RegdNo:1901129003,Name:'Ekta',Branch:'Civil', Result:'8.5sgpa'},
//                   {RegdNo:1901129004,Name:'Jangyasini',Branch:'Electrical', Result:'8.3sgpa'}

// ];
// localStorage.setItem('studentInfo',JSON.stringify(studentInfo));
// studentDetails=JSON.parse(localStorage.getItem('studentInfo'));
// console.log(studentDetails);
//localStorage.clear();

//session storage Array

let studentInfo2=[
                      {RegdNo:1901129001,Name:'Minarva',Branch:'Cs', Result:'9sgpa'},
                      {RegdNo:1901129002,Name:'Pranjal',Branch:'Cs', Result:'8sgpa'},
                      {RegdNo:1901129003,Name:'Ekta',Branch:'Civil', Result:'8.5sgpa'},
                      {RegdNo:1901129004,Name:'Jangyasini',Branch:'Electrical', Result:'8.3sgpa'}
    
    ];

    sessionStorage.setItem('studentInfo',JSON.stringify(studentInfo2));
    studentDetails=JSON.parse(sessionStorage.getItem('studentInfo'));
    console.log(studentDetails);