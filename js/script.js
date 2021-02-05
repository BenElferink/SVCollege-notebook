const id = (str) => {
  return document.getElementById(`${str}`);
};

function reactNotSupported() {
  alert('React iFrame is not supported yet for this notebook.');
}

function showModal(lessonId) {
  // CREATE LINKS TO DISTRIBUTE
  let frameToDisplay = fileLinks(lessonId);
  // UPDATES THE IFRAME WITH FIRST LINK
  if (frameToDisplay != undefined) {
    id('iframe').setAttribute('src', frameToDisplay);
  }
  // THEN SHOWS THE MODAL
  id('modal').style.opacity = '1';
  id('modal').style.visibility = 'visible';
}

function closeModal() {
  // CLEARS RENDERED CONTENT FROM MODAL
  id('file-links').innerHTML = '';
  id('iframe').removeAttribute('src');
  // THEN HIDES THE MODAL
  id('modal').style.opacity = '0';
  id('modal').style.visibility = 'hidden';
}

// THIS FUNCTION RECOGNIZES WHICH BUTTON WAS CLICKED
// AND THEREBY CREATES THE RIGHT ELEMENTS/LINKS
function fileLinks(lessonId) {
  // SECRET BUTTONS IN HEADER (for HTML & CSS)
  if (lessonId == 'html') {
    let a = document.createElement('a');
    a.innerText = 'PDF file';
    a.setAttribute('target', 'iframe');
    a.setAttribute('href', './Study Material/HTML and CSS/HTML.pdf');

    id('file-links').appendChild(a);

    return './Study Material/HTML and CSS/HTML.pdf';
  }

  // SECRET BUTTONS IN HEADER (for JavaScript)
  if (lessonId == 'js') {
    let a = document.createElement('a');
    a.innerText = 'PDF file';
    a.setAttribute('target', 'iframe');
    a.setAttribute('href', './Study Material/JavaScript/JavaScript.pdf');

    id('file-links').appendChild(a);

    return './Study Material/JavaScript/JavaScript.pdf';
  }

  // SECRET BUTTONS IN HEADER (for Bootstrap)
  if (lessonId == 'boot') {
    let a = document.createElement('a');
    a.innerText = 'PDF file';
    a.setAttribute('target', 'iframe');
    a.setAttribute('href', './Study Material/Bootstrap/Bootstrap.pdf');

    id('file-links').appendChild(a);

    return './Study Material/Bootstrap/Bootstrap.pdf';
  }

  // SECRET BUTTONS IN HEADER (for React)
  if (lessonId == 'react') {
    let a = document.createElement('a');
    a.innerText = 'PDF file';
    a.setAttribute('target', 'iframe');
    a.setAttribute('href', './Study Material/React/React.pdf');

    id('file-links').appendChild(a);

    return './Study Material/React/React.pdf';
  }

  // HTML AND CSS - LESSON 1
  if (lessonId == 0) {
    let a1 = document.createElement('a');
    a1.innerText = 'Classroom';
    a1.setAttribute('target', 'iframe');
    a1.setAttribute('href', './Study Material/HTML and CSS/lesson_01/classroom/index.html');

    let a2 = document.createElement('a');
    a2.innerText = 'Homework_01';
    a2.setAttribute('target', 'iframe');
    a2.setAttribute('href', './Study Material/HTML and CSS/lesson_01/homework_01/index.html');

    id('file-links').appendChild(a1);
    id('file-links').appendChild(a2);

    return './Study Material/HTML and CSS/lesson_01/classroom/index.html';
  }

  // HTML AND CSS - LESSON 2
  if (lessonId == 1) {
    let a1 = document.createElement('a');
    a1.innerText = 'Classroom';
    a1.setAttribute('target', 'iframe');
    a1.setAttribute('href', './Study Material/HTML and CSS/lesson_02/classroom/index.html');

    let a2 = document.createElement('a');
    a2.innerText = 'Task_01';
    a2.setAttribute('target', 'iframe');
    a2.setAttribute('href', './Study Material/HTML and CSS/lesson_02/task_01/index.html');

    id('file-links').appendChild(a1);
    id('file-links').appendChild(a2);

    return './Study Material/HTML and CSS/lesson_02/classroom/index.html';
  }

  // HTML AND CSS - LESSON 3
  if (lessonId == 2) {
    let a1 = document.createElement('a');
    a1.innerText = 'Classroom';
    a1.setAttribute('target', 'iframe');
    a1.setAttribute('href', './Study Material/HTML and CSS/lesson_03/classroom/index.html');

    let a2 = document.createElement('a');
    a2.innerText = 'Homework(v1)';
    a2.setAttribute('target', 'iframe');
    a2.setAttribute('href', './Study Material/HTML and CSS/lesson_03/homework_01/index.html');

    let a3 = document.createElement('a');
    a3.innerText = 'Homework(v2-flex)';
    a3.setAttribute('target', 'iframe');
    a3.setAttribute('href', './Study Material/HTML and CSS/lesson_03/homework_02/index.html');

    id('file-links').appendChild(a1);
    id('file-links').appendChild(a2);
    id('file-links').appendChild(a3);

    return './Study Material/HTML and CSS/lesson_03/classroom/index.html';
  }

  // JAVASCRIPT - LESSON 1
  if (lessonId == 3) {
    let a1 = document.createElement('a');
    a1.innerText = 'Classroom';
    a1.setAttribute('target', 'iframe');
    a1.setAttribute('href', './Study Material/JavaScript/lesson_01/classroom/index.html');

    let a2 = document.createElement('a');
    a2.innerText = 'Homework_01';
    a2.setAttribute('target', 'iframe');
    a2.setAttribute('href', './Study Material/JavaScript/lesson_01/homework_01/index.html');

    let a3 = document.createElement('a');
    a3.innerText = 'Task_01';
    a3.setAttribute('target', 'iframe');
    a3.setAttribute('href', './Study Material/JavaScript/lesson_01/task_01/index.html');

    id('file-links').appendChild(a1);
    id('file-links').appendChild(a2);
    id('file-links').appendChild(a3);

    return './Study Material/JavaScript/lesson_01/classroom/index.html';
  }

  // JAVASCRIPT - LESSON 2
  if (lessonId == 4) {
    let a1 = document.createElement('a');
    a1.innerText = 'Classroom';
    a1.setAttribute('target', 'iframe');
    a1.setAttribute('href', './Study Material/JavaScript/lesson_02/classroom/index.html');

    let a2 = document.createElement('a');
    a2.innerText = 'Homework_01';
    a2.setAttribute('target', 'iframe');
    a2.setAttribute('href', './Study Material/JavaScript/lesson_02/homework_01/index.html');

    id('file-links').appendChild(a1);
    id('file-links').appendChild(a2);

    return './Study Material/JavaScript/lesson_02/classroom/index.html';
  }

  // JAVASCRIPT - LESSON 3
  if (lessonId == 5) {
    let a1 = document.createElement('a');
    a1.innerText = 'Classroom';
    a1.setAttribute('target', 'iframe');
    a1.setAttribute('href', './Study Material/JavaScript/lesson_03/classroom/index.html');

    let a2 = document.createElement('a');
    a2.innerText = 'Homework_01';
    a2.setAttribute('target', 'iframe');
    a2.setAttribute('href', './Study Material/JavaScript/lesson_03/homework_01/index.html');

    let a3 = document.createElement('a');
    a3.innerText = 'Task_01';
    a3.setAttribute('target', 'iframe');
    a3.setAttribute('href', './Study Material/JavaScript/lesson_03/task_01/index.html');

    id('file-links').appendChild(a1);
    id('file-links').appendChild(a2);
    id('file-links').appendChild(a3);

    return './Study Material/JavaScript/lesson_03/classroom/index.html';
  }

  // JAVASCRIPT - LESSON 4
  if (lessonId == 6) {
    let a1 = document.createElement('a');
    a1.innerText = 'Classroom';
    a1.setAttribute('target', 'iframe');
    a1.setAttribute('href', './Study Material/JavaScript/lesson_04/classroom/index.html');

    let a2 = document.createElement('a');
    a2.innerText = 'Task_01 (calculator)';
    a2.setAttribute('target', 'iframe');
    a2.setAttribute('href', './Study Material/JavaScript/lesson_04/task_01/index.html');

    let a3 = document.createElement('a');
    a3.innerText = 'Task_02 (namePicker)';
    a3.setAttribute('target', 'iframe');
    a3.setAttribute('href', './Study Material/JavaScript/lesson_04/task_02/index.html');

    id('file-links').appendChild(a1);
    id('file-links').appendChild(a2);
    id('file-links').appendChild(a3);

    return './Study Material/JavaScript/lesson_04/classroom/index.html';
  }

  // JAVASCRIPT - LESSON 5 REHERSAL
  if (lessonId == 7) {
    let a1 = document.createElement('a');
    a1.innerText = 'Classroom';
    a1.setAttribute('target', 'iframe');
    a1.setAttribute(
      'href',
      './Study Material/JavaScript/lesson_05 (rehersal)/classroom/index.html',
    );

    let a2 = document.createElement('a');
    a2.innerText = 'Task_01 (register)';
    a2.setAttribute('target', 'iframe');
    a2.setAttribute(
      'href',
      './Study Material/JavaScript/lesson_05 (rehersal)/homework_01/index.html',
    );

    let a3 = document.createElement('a');
    a3.innerText = 'Questions_01';
    a3.setAttribute('target', 'iframe');
    a3.setAttribute(
      'href',
      './Study Material/JavaScript/lesson_05 (rehersal)/questions_01/index.html',
    );

    let a4 = document.createElement('a');
    a4.innerText = 'Questions_02';
    a4.setAttribute('target', 'iframe');
    a4.setAttribute(
      'href',
      './Study Material/JavaScript/lesson_05 (rehersal)/questions_02/index.html',
    );

    let a5 = document.createElement('a');
    a5.innerText = 'Questions_03';
    a5.setAttribute('target', 'iframe');
    a5.setAttribute(
      'href',
      './Study Material/JavaScript/lesson_05 (rehersal)/questions_03/index.html',
    );

    id('file-links').appendChild(a1);
    id('file-links').appendChild(a2);
    id('file-links').appendChild(a3);
    id('file-links').appendChild(a4);
    id('file-links').appendChild(a5);

    return './Study Material/JavaScript/lesson_05 (rehersal)/classroom/index.html';
  }

  // JAVASCRIPT - LESSON 6
  if (lessonId == 8) {
    let a1 = document.createElement('a');
    a1.innerText = 'Classroom';
    a1.setAttribute('target', 'iframe');
    a1.setAttribute('href', './Study Material/JavaScript/lesson_06/classroom/index.html');

    let a2 = document.createElement('a');
    a2.innerText = 'Homework_01';
    a2.setAttribute('target', 'iframe');
    a2.setAttribute('href', './Study Material/JavaScript/lesson_06/homework_01/index.html');

    id('file-links').appendChild(a1);
    id('file-links').appendChild(a2);

    return './Study Material/JavaScript/lesson_06/classroom/index.html';
  }

  // JAVASCRIPT - LESSON 7
  if (lessonId == 9) {
    let a1 = document.createElement('a');
    a1.innerText = 'Classroom';
    a1.setAttribute('target', 'iframe');
    a1.setAttribute('href', './Study Material/JavaScript/lesson_07/classroom/index.html');

    let a2 = document.createElement('a');
    a2.innerText = 'Project (Sudoku)';
    a2.setAttribute('target', 'iframe');
    a2.setAttribute(
      'href',
      './Study Material/JavaScript/lesson_07/project (mid-course)/index.html',
    );

    id('file-links').appendChild(a1);
    id('file-links').appendChild(a2);

    return './Study Material/JavaScript/lesson_07/classroom/index.html';
  }

  // JAVASCRIPT - LESSON 8
  if (lessonId == 10) {
    let a1 = document.createElement('a');
    a1.innerText = 'Classroom';
    a1.setAttribute('target', 'iframe');
    a1.setAttribute('href', './Study Material/JavaScript/lesson_08/classroom/index.html');

    let a2 = document.createElement('a');
    a2.innerText = 'Homework-1';
    a2.setAttribute('target', 'iframe');
    a2.setAttribute('href', './Study Material/JavaScript/lesson_08/homework_01/index.html');

    let a3 = document.createElement('a');
    a3.innerText = 'Homework-2';
    a3.setAttribute('target', 'iframe');
    a3.setAttribute('href', './Study Material/JavaScript/lesson_08/homework_02/index.html');

    id('file-links').appendChild(a1);
    id('file-links').appendChild(a2);
    id('file-links').appendChild(a3);

    return './Study Material/JavaScript/lesson_08/classroom/index.html';
  }

  // BOOTSTRAP - INTRO
  if (lessonId == 11) {
    let a1 = document.createElement('a');
    a1.innerText = 'Introduction';
    a1.setAttribute('target', 'iframe');
    a1.setAttribute('href', './Study Material/Bootstrap/lesson_01/classroom/index.html');

    id('file-links').appendChild(a1);

    return './Study Material/Bootstrap/lesson_01/classroom/index.html';
  }

  // REACT - LESSON 1
  if (lessonId == 12) {
    let a1 = document.createElement('a');
    a1.innerText = 'Classroom';
    a1.setAttribute('target', 'iframe');
    a1.setAttribute('href', './Study Material/React/lesson_01/classroom/build/index.html');

    let a2 = document.createElement('a');
    a2.innerText = 'Homework_01';
    a2.setAttribute('target', 'iframe');
    a2.setAttribute('href', './Study Material/React/lesson_01/homework_01/build/index.html');

    id('file-links').appendChild(a1);
    id('file-links').appendChild(a2);

    return './Study Material/React/lesson_01/classroom/build/index.html';
  }
}
