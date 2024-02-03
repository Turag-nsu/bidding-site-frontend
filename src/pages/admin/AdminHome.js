//./pages/admin/index.js
import AdminLogin from './AdminLogin';
// import AdminDashboard from './AdminDashboard';

const AdminHome = () => {
    return (
        <div className="admin-home">
            <AdminLogin />
            {/* <AdminDashboard /> */}
        </div>
    );
}

export default AdminHome;