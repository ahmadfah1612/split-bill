import { useState } from 'react';
import { addBill } from '../lib/supabase/bills';

export default function BillForm({ onAdded }: { onAdded: () => void }) {
  const [name, setName] = useState('');
  const [total, setTotal] = useState(0);
  const [participants, setParticipants] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await addBill({
        name,
        total,
        participants: participants.split(',').map((p) => p.trim()),
      });
      setName('');
      setTotal(0);
      setParticipants('');
      onAdded();
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Bill name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Total amount"
        value={total}
        onChange={(e) => setTotal(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Participants comma separated"
        value={participants}
        onChange={(e) => setParticipants(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Add Bill'}
      </button>
    </form>
  );
}
