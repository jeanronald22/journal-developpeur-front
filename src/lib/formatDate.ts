import { formatRelative, subDays } from 'date-fns';
import { da, fr } from 'date-fns/locale';

export function formatDate(dateISO: string) {
	console.log(dateISO);

	const date = new Date(dateISO);
	console.log(date);

	// return formatRelative(date, new Date(), { locale: fr });
	return 'l';
}
