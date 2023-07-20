import StudentCard from './StudentCard'

function MainContainer () {
    const students = [
        {
          id: 0,
          firstName: 'Toto',
          lastName: 'Regua',
          grade: '74'
        },
        {
            id: 1,
            firstName: 'Wanda',
            lastName: 'Malt',
            grade: '99'
        },
        {
            id: 2,
            firstName: 'Matt',
            lastName: 'Marin',
            grade: '90'
        }
      ]
      const StudentCardList = students.map(
        (student) => <StudentCard key={student.id} firstName={student.firstName} lastName={student.lastName} grade={student.grade} />
    );

    return (
        <>
            <div className="container h-100 bg-dark mt-2 p-5 d-flex justify-content-around">
                {StudentCardList}
            </div>
        </>
    )
}

export default MainContainer