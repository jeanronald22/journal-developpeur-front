import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import RegisterPage from './pages/auth/register';
import Login from './pages/auth/login';
import Dashboard from './pages/dashboard';
import Snippet from './pages/snippets';
import Categorie from './pages/categories';
import Parametre from './pages/parametre';

function App() {
	return (
		<Routes>
			<Route element={<RegisterPage />} path="/register" />
			<Route element={<Login />} path="/login" />
			<Route element={<PrivateRoute />}>
				<Route element={<Dashboard />} path="/" />
				<Route element={<Snippet />} path="/snippets" />
				<Route element={<Categorie />} path="/categories" />
				<Route element={<Parametre />} path="/parametre" />
			</Route>
		</Routes>
	);
}

export default App;
