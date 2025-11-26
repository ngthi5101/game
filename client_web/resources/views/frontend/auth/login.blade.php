@extends('frontend.layouts.master')

@section('content')
    @include("frontend.includes.home")
    @include("frontend.includes.event")
@endsection

@section('after-scripts')
    <script>
        $(document).ready(function () {
            $( "#dang_nhap_modal" ).modal("show");
        });
    </script>
@endsection