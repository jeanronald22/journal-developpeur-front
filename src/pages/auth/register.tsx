import { register } from '@/api/auth';
import { subtitle, title } from '@/components/primitives';
import AuthLayout from '@/layouts/auth';
import { User } from '@/types';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Lock, MailIcon, UserRoundIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@heroui/progress';

export default function RegisterPage() {
	const [data, setData] = useState<User>({
		username: '',
		email: '',
		password: '',
	});
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const router = useNavigate();
	const onSubmit = async () => {
		try {
			setLoading(true);
			const res = await register(data);
			if (res.message) {
				router('/login', { replace: true });
			}
		} catch (e) {
			console.log(e);
			setError(`${e.message}`);
		} finally {
			setLoading(false);
		}
	};
	return (
		<AuthLayout isLogin={false}>
			<div className="flex flex-col justify-center items-center min-h-screen px-6 py-12 bg-white text-gray-800">
				<div className="space-y-6 w-80">
					<div className="text-center">
						<h2 className={title()}>Hell😊!</h2>
						<p className={subtitle()}>
							Inscrivez-vous pour commencer
						</p>
					</div>

					<div className="space-y-4">
						<Input
							startContent={
								<UserRoundIcon className="w-5 h-5 text-gray-400" />
							}
							placeholder="Nom complet"
							type="text"
							variant="bordered"
							value={data.username}
							onValueChange={(value: string) =>
								setData((prev) => ({
									...prev,
									username: value,
								}))
							}
						/>
						<Input
							startContent={
								<MailIcon className="w-5 h-5 text-gray-400" />
							}
							placeholder="Adresse e-mail"
							type="email"
							variant="bordered"
							value={data.email}
							onValueChange={(value: string) =>
								setData((prev) => ({
									...prev,
									email: value,
								}))
							}
						/>
						<Input
							startContent={
								<Lock className="w-5 h-5 text-gray-400" />
							}
							placeholder="Mot de passe"
							type="password"
							variant="bordered"
							value={data.password}
							onValueChange={(value: string) =>
								setData((prev) => ({
									...prev,
									password: value,
								}))
							}
						/>
					</div>

					<Button
						variant="solid"
						color="primary"
						className="w-full"
						onPress={onSubmit}
					>
						{loading ? (
							<CircularProgress size="md" color="default" />
						) : (
							"S'inscrire"
						)}
					</Button>
					{error && (
						<p className="text-red-500 text-center">{error}</p>
					)}
				</div>
			</div>
		</AuthLayout>
	);
}
