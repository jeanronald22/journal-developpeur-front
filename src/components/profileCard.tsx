import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import { Avatar } from '@heroui/avatar';
import { Button } from '@heroui/button';

export default function ProfilCart() {
	return (
		<Card>
			<CardHeader className="justify-between">
				<Avatar
					isBordered
					radius="full"
					size="md"
					src="https://heroui.com/avatars/avatar-1.png"
					color="primary"
				/>
				<div className="flex gap-5">
					<div className="flex flex-col gap-1 items-start justify-center">
						<h4 className="text-small font-semibold leading-none text-default-600">
							Jean Ronald
						</h4>
						<h5 className="text-small tracking-tight text-default-400">
							@premium
						</h5>
					</div>
				</div>
			</CardHeader>
			<CardBody className="px-3 py-0 text-small text-default-400">
				<p>vous etes actuellement sur la plan graduit</p>
			</CardBody>
			<CardFooter className="w-ful">
				<Button color="primary" className="w-full">
					Upgrade
				</Button>
			</CardFooter>
		</Card>
	);
}
