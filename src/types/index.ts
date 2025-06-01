import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};
export type User = {
	username: string;
	email: string;
	password: string;
};
export type RegisterResponse = {
	message: string;
};
export type PartialUser = {
	username: string;
	password: string;
};
export type LoginResponse = {
	access: string;
	refresh: string;
};
