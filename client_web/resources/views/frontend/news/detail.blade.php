@extends("frontend.layouts.master")
@section("content")
@include("frontend.includes.modal_auth")
    <!-- Modal Đăng nhập -->
    <div class="container" style="margin-top: 150px;">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div class="title-block"><img src="/assets/images/icon-card.png" alt=""> Tin tức
                    {{--<a href="c/huong-dan" class="link-seemore"><img src="/assets/images/icon-seemore.png" alt=""></a>--}}
                </div>
                <div class="block-page-detail">
                    @if(isset($post))
                    <h1 class="center">{!! $post->title !!}</h1>
                    {!! $post->body !!}
                    @endif
                </div>
            </div>
            @include("frontend.includes.fb")
        </div>
    </div>

@endsection
@section("support")
    @include("frontend.includes.support")
@endsection
