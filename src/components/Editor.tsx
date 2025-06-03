import { Editor } from '@monaco-editor/react';

export default function Editeur({
	value,
	onValChange,
	language,
}: {
	value: string;
	onValChange: (value: string) => void;
	language: string;
}) {
	return (
		<Editor
			value={value}
			onChange={(val) => onValChange(val || '')}
			height={500}
			defaultLanguage="javascript"
			language={language.toLowerCase()}
			theme="vs-dark"
			className="rounded-lg"
			options={{
				readOnly: false,
				fontSize: 14,
				fontFamily: 'Fira code',
				fontLigatures: true,
				lineHeight: 2,
				minimap: { enabled: false },
				wordWrap: 'on',
				tabSize: 4,
				autoClosingBrackets: 'always',
				automaticLayout: true,
				autoIndent: 'full',
				colorDecorators: true,
				scrollbar: {
					vertical: 'visible',
					horizontal: 'visible',
				},
			}}
		/>
	);
}
