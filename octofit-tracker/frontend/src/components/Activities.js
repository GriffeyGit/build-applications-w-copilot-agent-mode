import 'bootstrap/dist/css/bootstrap.min.css';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('https://potential-system-x9pp9vrv5gxhv65p-8000.app.github.dev/api/activity')
            .then(response => response.json())
            .then(data => setActivities(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Activities</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Activity Name</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map(activity => (
                        <tr key={activity.id}>
                            <td>{activity.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Activities;
