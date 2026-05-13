import { useEffect, useMemo, useState } from 'react';
import { CustomerTable } from '../components/crm/CustomerTable';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { PageHeader } from '../components/ui/PageHeader';
import { customerRepository } from '../services/repositories';

const usersById = {
  'u-1': { name: 'Alex Sterling' },
  'u-2': { name: 'Maya Chen' },
};

export function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');

  useEffect(() => {
    customerRepository.list().then(setCustomers);
  }, []);

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const matchesQuery =
        [customer.name, customer.company, customer.email].join(' ').toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === 'All' || customer.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [customers, query, status]);

  const activeCount = customers.filter((item) => item.status === 'Active').length;

  return (
    <div>
      <PageHeader
        eyebrow="Workspace / Customers"
        title="Customer Directory"
        description="Manage relationships, account context and ownership with a table-first view that stays ready for API-backed CRUD later."
        actions={
          <>
            <Button icon="download" variant="secondary">
              Export
            </Button>
            <Button icon="userPlus">New Customer</Button>
          </>
        }
      />

      <div className="mb-6 grid gap-4 md:grid-cols-4">
        {[
          ['Total Customers', customers.length],
          ['Active Now', activeCount],
          ['At Risk', customers.filter((item) => item.status === 'At Risk').length],
          ['Avg. Account Value', '$14.2K'],
        ].map(([label, value]) => (
          <Card key={label} className="p-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">{label}</p>
            <p className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em]">{value}</p>
          </Card>
        ))}
      </div>

      <Card className="mb-6 bg-surface-container p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-col gap-3 sm:flex-row">
            <Input placeholder="Search customers, companies or records..." value={query} onChange={(event) => setQuery(event.target.value)} />
            <select
              className="rounded-2xl bg-surface-container-low px-4 py-3 text-sm outline-none"
              onChange={(event) => setStatus(event.target.value)}
              value={status}
            >
              {['All', 'Active', 'Inactive', 'At Risk'].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="text-sm text-on-surface-variant">{filteredCustomers.length} visible records</div>
        </div>
      </Card>

      <CustomerTable customers={filteredCustomers} usersById={usersById} />
    </div>
  );
}
