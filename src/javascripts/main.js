import navbar from './components/navbar/navbar';
import studentList from './components/studentList/studentList';
import studentData from './helpers/data/studentData';
import '../styles/main.scss';

const init = () => {
  const allStudents = studentData.getStudents();
  navbar.loadNavbar();
  studentList.createStudentList(allStudents);
};

init();
