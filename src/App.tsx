import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import RegisterPage from './pages/auth/register';
import Login from './pages/auth/login';
import Dashboard from './pages/dashboard';

function App() {
	return (
		<Routes>
			<Route element={<RegisterPage />} path="/register" />
			<Route element={<Login />} path="/login" />
			<Route element={<PrivateRoute />}>
				<Route element={<Dashboard />} path="/" />
			</Route>
		</Routes>
	);
}

export default App;
