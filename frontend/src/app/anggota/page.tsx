"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Anggota = {
  id: string;
  nama: string;
  email: string;
  no_hp: string;
  alamat: string;
};

export default function AnggotaList() {
  const [data, setData] = useState<Anggota[]>([]);

  const fetchData = () => {
    fetch(`http://127.0.0.1:8000/api/anggota`)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = confirm("Apakah Anda yakin ingin menghapus anggota ini?");
    if (!confirmed) return;

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/anggota/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Gagal menghapus anggota");
      alert("Berhasil dihapus!");
      fetchData(); // refresh data
    } catch (err) {
      console.error(err);
      alert("Terjadi error saat menghapus anggota.");
    }
  };

  return (
    <div  className="px-10 pb-5 md:px-6 lg:px-16">
      <h1 className="text-lg font-bold pt-10">Daftar Anggota</h1>
      <div className="flex justify-end px-15 pb-5">
      <Link
       href={`/anggota/create/`}
       className="justify-items-end px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
       Tambah
      </Link>
      </div>
      <div>
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Nama</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map(a => (
            <tr key={a.id}>
              <td className="px-2 py-1 border">{a.nama}</td>
              <td className="px-2 py-1 border space-x-2">
              <Link
                href={`/anggota/${a.id}/`}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Detail
              </Link>
              <Link
                href={`/anggota/${a.id}/edit`}
                 className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Edit
              </Link>
              <Link
                href={`/anggota/${a.id}/delete`}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Hapus
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
