import { Button } from '@heroui/button';

import { subtitle, title } from '@/components/primitives';

export default function AuthLayout({
	children,
	isLogin,
}: {
	children: React.ReactNode;
	isLogin: boolean;
}) {
	return (
		<section className="flex min-h-screen">
			{/* Section gauche avec gradient */}
			<div className="bg-gradient-to-b from-[#0575E6] from-0% via-[#02298A] via-85% to-[#021B79] to-100% hidden md:flex flex-col justify-center text-gray-100 md:w-1/2 p-12 space-y-6">
				<h1 className={title({ size: 'lg' })}>
					Journal du développeur
				</h1>

				{isLogin ? (
					<p className={subtitle({ class: 'text-gray-100' })}>
						Connectez-vous pour continuer ou{' '}
					</p>
				) : (
					<p className={subtitle({ class: 'text-gray-100' })}>
						créez un compte pour commencer à utiliser notre
						application de journalisation.
					</p>
				)}

				<Button className="w-32" color="primary" variant="solid">
					{isLogin ? 'Register' : 'Login'}
				</Button>
			</div>

			{/* Section droite */}
			<div className="flex items-center justify-center w-full md:w-1/2 p-10 md:p-0">
				{children}
			</div>
		</section>
	);
}
