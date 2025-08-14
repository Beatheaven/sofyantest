'use client';
import { useState } from 'react';

export default function CreateAnggota() {
  const [form, setForm] = useState({ nama:'', email:'', no_hp:'', alamat:'' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anggota`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(await res.text());
      setMessage('Anggota berhasil ditambahkan!');
      setForm({ nama:'', email:'', no_hp:'', alamat:'' });
    } catch (err: any) {
      setMessage('Error: ' + err.message);
    }
  }

  return (
    <div className="px-auto py-auto">
    <form className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4" onSubmit={handleSubmit}>
    <h1 className="text-xl font-bold mb-4">Tambah Anggota</h1>
      <label className="block text-sm font-medium text-gray-700">Nama</label>
      <input className="w-full border px-2 py-1 rounded" placeholder="Nama" value={form.nama} onChange={e=>setForm({...form,nama:e.target.value})} />
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input className="w-full border px-2 py-1 rounded" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
      <label className="block text-sm font-medium text-gray-700">NO. HP</label>
      <input className="w-full border px-2 py-1 rounded" placeholder="No HP" value={form.no_hp} onChange={e=>setForm({...form,no_hp:e.target.value})} />
      <label className="block text-sm font-medium text-gray-700">Alamat</label>
      <textarea className="w-full border px-2 py-1 rounded" placeholder="Alamat" value={form.alamat} onChange={e=>setForm({...form,alamat:e.target.value})}></textarea>
      <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition" type="submit">Tambah</button>
      <p>{message}</p>
    </form>
    </div>
  );
}
