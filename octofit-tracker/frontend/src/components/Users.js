import 'bootstrap/dist/css/bootstrap.min.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://potential-system-x9pp9vrv5gxhv65p-8000.app.github.dev/api/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Users</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>User Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
