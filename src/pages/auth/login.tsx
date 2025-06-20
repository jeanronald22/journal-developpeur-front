import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { CircularProgress } from '@heroui/progress';
import { Lock, UserRoundIcon } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { PartialUser } from '@/types';
import AuthLayout from '@/layouts/auth';
import { subtitle, title } from '@/components/primitives';
import { login } from '@/api/auth';

export default function Login() {
	const [data, setData] = useState<PartialUser>({
		username: '',
		password: '',
	});
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const router = useNavigate();

	const onSubmit = async () => {
		try {
			setLoading(true);
			await login(data);
			router('/', { replace: true });
		} catch (e) {
			console.log(e);
			setError(`${e.message}`);
		} finally {
			setLoading(false);
		}
	};

	return (
		<AuthLayout isLogin={true}>
			<div className="flex flex-col justify-center items-center min-h-screen px-6 py-12 bg-white text-gray-800">
				<div className="space-y-6 w-80">
					<div className="text-center">
						<h2 className={title()}>Hell😊 Again!</h2>
						<p className={subtitle()}>Content de vous revoir</p>
					</div>

					<div className="space-y-4">
						<Input
							placeholder="Nom d'utilisateur"
							startContent={
								<UserRoundIcon className="w-5 h-5 text-gray-400" />
							}
							type="text"
							value={data.username}
							variant="bordered"
							onValueChange={(value: string) =>
								setData((prev) => ({
									...prev,
									username: value,
								}))
							}
						/>

						<Input
							placeholder="Mot de passe"
							startContent={
								<Lock className="w-5 h-5 text-gray-400" />
							}
							type="password"
							value={data.password}
							variant="bordered"
							onValueChange={(value: string) =>
								setData((prev) => ({
									...prev,
									password: value,
								}))
							}
						/>
					</div>

					<Button
						className="w-full"
						color="primary"
						variant="solid"
						onPress={onSubmit}
					>
						{loading ? (
							<CircularProgress color="default" size="md" />
						) : (
							'Connexion'
						)}
					</Button>

					<p className="text-center text-sm text-blue-600 cursor-pointer hover:underline">
						<Link to="/register">Mot de passe oublié ?</Link>
					</p>

					{error && (
						<p className="text-red-500 text-center">{error}</p>
					)}
				</div>
			</div>
		</AuthLayout>
	);
}
