import EmptyView from '@/components/emptyView';
import DashboardLayout from '@/layouts/dasboad';

export default function Dashboard() {
	return (
		<DashboardLayout title="Tableau de board">
			<EmptyView />
		</DashboardLayout>
	);
}
