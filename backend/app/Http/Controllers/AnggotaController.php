<?php

namespace App\Http\Controllers;

use App\Models\Anggota; // <- tambahkan ini
use Illuminate\Http\Request;
use App\Http\Requests\StoreAnggotaRequest;  // <- tambahkan ini
use App\Http\Requests\UpdateAnggotaRequest; // <- tambahkan ini

class AnggotaController extends Controller
{
    // List semua anggota
    public function index()
    {
        try {
            $data = Anggota::all();
            \Log::info('Index Anggota', ['count' => $data->count()]);
            return response()->json($data, 200);
        } catch (\Exception $e) {
            \Log::error('Error Index Anggota', ['message' => $e->getMessage()]);
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Tambah anggota baru
    public function store(StoreAnggotaRequest $request)
    {
        try {
            $data = Anggota::create($request->validated());
            \Log::info('Anggota Created', ['anggota' => $data->toArray()]);
            return response()->json($data, 201);
        } catch (\Exception $e) {
            \Log::error('Error Store Anggota', ['message' => $e->getMessage()]);
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Detail anggota
    public function show($id)
        {
            $item = Anggota::find($id); // Find the item by its ID

            if (!$item) {
                return response()->json(['message' => 'Item not found'], 404);
            }

            return response()->json($item); // Return the item data as JSON
        }

    // Update anggota
    public function update(UpdateAnggotaRequest $request, $id)
    {
        try {
            $anggota = Anggota::findOrFail($id);
            $anggota->update($request->validated());
            \Log::info('Anggota Updated', ['anggota' => $anggota->toArray()]);
            return response()->json($anggota);
        } catch (\Exception $e) {
            \Log::error('Error Update Anggota', ['message' => $e->getMessage()]);
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }



    // Hapus anggota
    public function destroy($id)
{
    try {
        $anggota = Anggota::findOrFail($id); // Ambil berdasarkan UUID
        $anggota->delete();
        \Log::info('Anggota Deleted', ['id' => $id]);
        return response()->json(['message' => 'Anggota berhasil dihapus'], 200);
    } catch (\Exception $e) {
        \Log::error('Error Delete Anggota', ['message' => $e->getMessage()]);
        return response()->json(['error' => $e->getMessage()], 500);
    }
}
}
