import { useEffect, useState } from 'react';
import BillForm from '../components/BillForm';
import { getBills, Bill } from '../lib/supabase/bills';

export default function Home() {
  const [bills, setBills] = useState<Bill[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadBills() {
    setLoading(true);
    try {
      const data = await getBills();
      setBills(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBills();
  }, []);

  return (
    <div>
      <h1>Split Bill</h1>
      <BillForm onAdded={loadBills} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {bills.map((bill) => (
            <li key={bill.id}>
              {bill.name}: ${bill.total} split between {bill.participants.join(', ')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
