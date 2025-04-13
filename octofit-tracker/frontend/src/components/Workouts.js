import 'bootstrap/dist/css/bootstrap.min.css';

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('https://potential-system-x9pp9vrv5gxhv65p-8000.app.github.dev/api/workouts')
            .then(response => response.json())
            .then(data => setWorkouts(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Workouts</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Workout Name</th>
                    </tr>
                </thead>
                <tbody>
                    {workouts.map(workout => (
                        <tr key={workout.id}>
                            <td>{workout.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Workouts;
