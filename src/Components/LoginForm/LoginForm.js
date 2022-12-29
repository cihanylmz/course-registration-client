



const student = {
    firstName: 'No Rights',
    lastName: 'User',
    permissions: [],
}

const administrator = {
    firstName: 'Administrator', 
    lastName: 'User',
    permissions: ['list.elements', 'add.element', 'delete.element'],
}

const LoginForm = ({onLogin}) => (
    <div className="container">
        <div className="card-deck mb-3 text-center">
            <div className="card mb-3 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Student</h4>
                </div>
                <div className="card-body">
                    You can only enroll in courses
                    <button type="button" className="btn btn-lg btn-block btn-primary"
                            onClick={() => onLogin(student)}>
                        Login as Student
                    </button>
                </div>
            </div>
            <div className="card mb-3 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Administator</h4>
                </div>
                <div className="card-body">
                    You can add courses, add students and enroll students in courses.
                    <button type="button" className="btn btn-lg btn-block btn-primary"
                            onClick={() => onLogin(administrator)}>
                        Login as Administrator
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default LoginForm;
