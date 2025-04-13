import 'bootstrap/dist/css/bootstrap.min.css';

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://potential-system-x9pp9vrv5gxhv65p-8000.app.github.dev/api/teams')
            .then(response => response.json())
            .then(data => setTeams(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Teams</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Team Name</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team => (
                        <tr key={team.id}>
                            <td>{team.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Teams;
