import { supabase } from './client';

export interface Bill {
  id?: number;
  name: string;
  total: number;
  participants: string[];
}

export async function getBills() {
  const { data, error } = await supabase
    .from('bills')
    .select('*')
    .order('id', { ascending: false });
  if (error) throw error;
  return data as Bill[];
}

export async function addBill(bill: Bill) {
  const { data, error } = await supabase
    .from('bills')
    .insert([bill])
    .select()
    .single();
  if (error) throw error;
  return data as Bill;
}
