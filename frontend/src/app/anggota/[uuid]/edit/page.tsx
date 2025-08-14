"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Anggota = {
  id: string;
  nama: string;
  email: string;
  no_hp: string;
  alamat: string;
};

type Props = {
  params: { uuid: string };
};

export default function EditAnggotaPage({ params }: Props) {
  const router = useRouter();
  const [anggota, setAnggota] = useState<Anggota | null>(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    nama: "",
    email: "",
    no_hp: "",
    alamat: "",
  });

  // Fetch data anggota
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/anggota/${params.uuid}`)
      .then(res => res.json())
      .then(data => {
        setAnggota(data);
        setForm({
          nama: data.nama,
          email: data.email,
          no_hp: data.no_hp,
          alamat: data.alamat,
        });
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [params.uuid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/anggota/${params.uuid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Gagal update anggota");
      alert("Berhasil diupdate!");
      router.push("/anggota"); // redirect ke list
    } catch (err) {
      console.error(err);
      alert("Terjadi error saat update");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!anggota) return <div>Anggota tidak ditemukan</div>;

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4">
      <h1 className="text-xl font-bold mb-4">Edit Anggota</h1>
        <div>
          <label className="block mb-1">Nama</label>
          <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">No. HP</label>
          <input
            type="text"
            name="no_hp"
            value={form.no_hp}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Alamat</label>
          <textarea
            name="alamat"
            value={form.alamat}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
}
