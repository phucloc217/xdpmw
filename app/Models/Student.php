<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $table = 'sinhvien';

    protected $fillable = [
        'hoten',
        'ngaysinh',
        'diachi',
        'mssv',
        'malop',
        'makhoa',
        'khoahoc',
        'hedaotao',
        'hinh'
    ];
    public $timestamps = false;
}
