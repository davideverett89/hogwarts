import './studentCard.scss';

const createStudentCard = (student, house) => {
  let domString = `<li class="student-${house.name.toLowerCase()}">`;
  domString += '<div class="image-holder">';
  domString += `<img src="${student.picture}" alt="${student.name}">`;
  domString += '</div>';
  domString += `<h2>${student.name}</h2>`;
  domString += '</li>';
  return domString;
};


export default { createStudentCard };
