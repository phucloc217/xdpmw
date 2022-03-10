<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassModel extends Model
{
    use HasFactory;
    protected $table = 'lop';
    public $timestamps = false;
    protected $fillable = [
        'tenlop',
        'khoahoc',
        'makhoa'
    ];
    public function faculty()
    {
        return $this->hasOne('khoa', 'id', 'makhoa');
    }
}
