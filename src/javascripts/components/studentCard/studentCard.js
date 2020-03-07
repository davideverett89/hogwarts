import './studentCard.scss';

const createStudentCard = (student) => {
  let domString = '<li class="student-card">';
  domString += '<div class="image-holder">';
  domString += `<img src="${student.picture}" alt="${student.name}">`;
  domString += '</div>';
  domString += `<h2>${student.name}</h2>`;
  domString += '</li>';
  return domString;
};


export default { createStudentCard };
