<?php

namespace App\Http\Controllers;

use App\Models\ClassModel;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $classes = ClassModel::join('khoa', 'lop.makhoa', '=', 'khoa.id')->select('lop.id', 'tenlop', 'khoahoc', 'makhoa', 'tenkhoa')->get();
        return response()->json($classes, Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $class = ClassModel::create($request->all());
        $class->save();
        return response()->json($class, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ClassModel  $classModel
     * @return \Illuminate\Http\Response
     */
    public function show(ClassModel $classModel)
    {
        return response()->json($classModel, Response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ClassModel  $classModel
     * @return \Illuminate\Http\Response
     */
    public function edit(ClassModel $classModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ClassModel  $classModel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ClassModel $classModel)
    {
        $classModel->update($request->all());
        return response()->json($classModel, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ClassModel  $classModel
     * @return \Illuminate\Http\Response
     */
    public function destroy(ClassModel $classModel)
    {
        $classModel->delete();
        return response()->json($classModel, Response::HTTP_OK);
    }
}
