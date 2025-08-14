"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Anggota = {
  id: string;
  nama: string;
  email: string;
  no_hp: string;
  alamat: string;
};

export default function AnggotaDetail() {
  const params = useParams();
  const [anggota, setAnggota] = useState<Anggota | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.uuid) return;

    fetch(`http://127.0.0.1:8000/api/anggota/${params.uuid}`)
      .then(res => res.json())
      .then(data => setAnggota(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [params?.uuid]);

  if (loading) return <p>Loading...</p>;
  if (!anggota) return <p>Anggota tidak ditemukan</p>;

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Detail Anggota</h1>
      <div className="space-y-2">
        <p><strong>Nama:</strong> {anggota.nama}</p>
        <p><strong>Email:</strong> {anggota.email}</p>
        <p><strong>No. HP:</strong> {anggota.no_hp}</p>
        <p><strong>Alamat:</strong> {anggota.alamat}</p>
      </div>
    </div>
  );
}
