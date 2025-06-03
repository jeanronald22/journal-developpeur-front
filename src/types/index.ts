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
export type Language = {
	id: number;
	name: string;
};

export type Snippet = {
	id: number;
	title: string;
	code: string;
	language: Language;
	created_at: string;
	updated_at: string;
};

export type CreateSnippetForm = {
	title: string;
	code: string;
	language: string;
	languageId: number;
};
