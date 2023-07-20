function StudentCard (StudentCardList) {
        const {firstName, lastName, grade} = StudentCardList;

        let evaluation;
        if (grade < 75) {
            evaluation = <h3>You Failed!</h3>
        } else {
            evaluation = <h3>You Passed!</h3>
        }
    return (
        <>
            <div className={`card w-25 ${grade < 75 ? 'bg-danger' : 'bg-success'}`}>
                <div className="card-body">
                    <h5 className="card-title text-light">Student Card</h5>
                    <p className="card-text">Firstname: <span className="fw-bold">{firstName}</span></p>
                    <p className="card-text">Lastname: <span className="fw-bold">{lastName}</span></p>
                    <p className="card-text">Grade: <span className="fw-bold">{grade}</span></p>
                    {evaluation}
                </div>
            </div>
        </>
    );
}

export default StudentCard