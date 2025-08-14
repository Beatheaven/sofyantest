<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Anggota extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'anggotas'; 
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = ['nama', 'email', 'no_hp', 'alamat'];
}

