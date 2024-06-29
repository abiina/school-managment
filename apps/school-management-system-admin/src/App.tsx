import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { TeacherList } from "./teacher/TeacherList";
import { TeacherCreate } from "./teacher/TeacherCreate";
import { TeacherEdit } from "./teacher/TeacherEdit";
import { TeacherShow } from "./teacher/TeacherShow";
import { SubjectList } from "./subject/SubjectList";
import { SubjectCreate } from "./subject/SubjectCreate";
import { SubjectEdit } from "./subject/SubjectEdit";
import { SubjectShow } from "./subject/SubjectShow";
import { ClassModelList } from "./classModel/ClassModelList";
import { ClassModelCreate } from "./classModel/ClassModelCreate";
import { ClassModelEdit } from "./classModel/ClassModelEdit";
import { ClassModelShow } from "./classModel/ClassModelShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { CourseGradeList } from "./courseGrade/CourseGradeList";
import { CourseGradeCreate } from "./courseGrade/CourseGradeCreate";
import { CourseGradeEdit } from "./courseGrade/CourseGradeEdit";
import { CourseGradeShow } from "./courseGrade/CourseGradeShow";
import { StudentClassEnrollmentList } from "./studentClassEnrollment/StudentClassEnrollmentList";
import { StudentClassEnrollmentCreate } from "./studentClassEnrollment/StudentClassEnrollmentCreate";
import { StudentClassEnrollmentEdit } from "./studentClassEnrollment/StudentClassEnrollmentEdit";
import { StudentClassEnrollmentShow } from "./studentClassEnrollment/StudentClassEnrollmentShow";
import { GradeList } from "./grade/GradeList";
import { GradeCreate } from "./grade/GradeCreate";
import { GradeEdit } from "./grade/GradeEdit";
import { GradeShow } from "./grade/GradeShow";
import { ClassTimetableList } from "./classTimetable/ClassTimetableList";
import { ClassTimetableCreate } from "./classTimetable/ClassTimetableCreate";
import { ClassTimetableEdit } from "./classTimetable/ClassTimetableEdit";
import { ClassTimetableShow } from "./classTimetable/ClassTimetableShow";
import { DigitalLibraryList } from "./digitalLibrary/DigitalLibraryList";
import { DigitalLibraryCreate } from "./digitalLibrary/DigitalLibraryCreate";
import { DigitalLibraryEdit } from "./digitalLibrary/DigitalLibraryEdit";
import { DigitalLibraryShow } from "./digitalLibrary/DigitalLibraryShow";
import { AttendanceList } from "./attendance/AttendanceList";
import { AttendanceCreate } from "./attendance/AttendanceCreate";
import { AttendanceEdit } from "./attendance/AttendanceEdit";
import { AttendanceShow } from "./attendance/AttendanceShow";
import { CourseMaterialList } from "./courseMaterial/CourseMaterialList";
import { CourseMaterialCreate } from "./courseMaterial/CourseMaterialCreate";
import { CourseMaterialEdit } from "./courseMaterial/CourseMaterialEdit";
import { CourseMaterialShow } from "./courseMaterial/CourseMaterialShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SchoolManagementSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Teacher"
          list={TeacherList}
          edit={TeacherEdit}
          create={TeacherCreate}
          show={TeacherShow}
        />
        <Resource
          name="Subject"
          list={SubjectList}
          edit={SubjectEdit}
          create={SubjectCreate}
          show={SubjectShow}
        />
        <Resource
          name="ClassModel"
          list={ClassModelList}
          edit={ClassModelEdit}
          create={ClassModelCreate}
          show={ClassModelShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="CourseGrade"
          list={CourseGradeList}
          edit={CourseGradeEdit}
          create={CourseGradeCreate}
          show={CourseGradeShow}
        />
        <Resource
          name="StudentClassEnrollment"
          list={StudentClassEnrollmentList}
          edit={StudentClassEnrollmentEdit}
          create={StudentClassEnrollmentCreate}
          show={StudentClassEnrollmentShow}
        />
        <Resource
          name="Grade"
          list={GradeList}
          edit={GradeEdit}
          create={GradeCreate}
          show={GradeShow}
        />
        <Resource
          name="ClassTimetable"
          list={ClassTimetableList}
          edit={ClassTimetableEdit}
          create={ClassTimetableCreate}
          show={ClassTimetableShow}
        />
        <Resource
          name="DigitalLibrary"
          list={DigitalLibraryList}
          edit={DigitalLibraryEdit}
          create={DigitalLibraryCreate}
          show={DigitalLibraryShow}
        />
        <Resource
          name="Attendance"
          list={AttendanceList}
          edit={AttendanceEdit}
          create={AttendanceCreate}
          show={AttendanceShow}
        />
        <Resource
          name="CourseMaterial"
          list={CourseMaterialList}
          edit={CourseMaterialEdit}
          create={CourseMaterialCreate}
          show={CourseMaterialShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
