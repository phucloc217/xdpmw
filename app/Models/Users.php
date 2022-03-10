<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;
    protected $table = 'nguoidung';

    protected $fillable = [
        'taikhoan',
        'matkhau'

    ];
    protected $hidden = [
        'matkhau',
        'remember_token'
    ];
    public $timestamps = false;
}
