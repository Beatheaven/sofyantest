"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  params: { uuid: string };
};

export default function DeletePage({ params }: Props) {
  const { uuid } = params;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    const confirmed = confirm("Apakah Anda yakin ingin menghapus anggota ini?");
    if (!confirmed) return;

    setLoading(true);
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/anggota/${uuid}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Gagal menghapus anggota");
      alert("Berhasil dihapus!");
      router.push("/anggota");
    } catch (err) {
      setError("Terjadi error saat menghapus anggota");
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleDelete();
  }, [uuid]);

  if (loading) return <div>Proses penghapusan...</div>;
  if (error) return <div>{error}</div>;
  return <div>Menghapus anggota...</div>;
}
