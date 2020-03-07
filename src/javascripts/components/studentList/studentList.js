import utils from '../../helpers/utils';
import studentCard from '../studentCard/studentCard';
import './studentList.scss';

const createStudentList = (students) => {
  let domString = '';
  domString += '<ul class="student-list">';
  students.forEach((student) => {
    domString += studentCard.createStudentCard(student);
  });
  domString += '</ul>';
  utils.printToDom('student-container', domString);
};

export default { createStudentList };
