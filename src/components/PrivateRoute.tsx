import { getItem } from '@/lib/storage';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
	const isAuthenticated = Boolean(getItem('accesToken'));

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
