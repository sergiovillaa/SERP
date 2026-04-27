import { Link } from 'react-router-dom';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

const statusVariant = {
  Active: 'active',
  Inactive: 'inactive',
  'At Risk': 'risk',
};

export function CustomerTable({ customers, usersById }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-surface-container-low">
            <tr className="text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Company</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Assigned</th>
              <th className="px-6 py-4">Last Contact</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="bg-surface-container-lowest transition hover:bg-surface-container-low">
                <td className="px-6 py-5">
                  <Link className="block" to={`/customers/${customer.id}`}>
                    <p className="font-semibold text-on-surface">{customer.name}</p>
                    <p className="text-sm text-on-surface-variant">{customer.email}</p>
                  </Link>
                </td>
                <td className="px-6 py-5">
                  <p className="font-medium text-on-surface">{customer.company}</p>
                  <p className="text-sm text-on-surface-variant">{customer.location}</p>
                </td>
                <td className="px-6 py-5">
                  <Badge variant={statusVariant[customer.status]}>{customer.status}</Badge>
                </td>
                <td className="px-6 py-5 text-sm text-on-surface-variant">{usersById[customer.assigned_user_id]?.name}</td>
                <td className="px-6 py-5 text-sm text-on-surface-variant">{new Date(customer.lastContactAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
