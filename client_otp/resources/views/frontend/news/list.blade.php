@extends("frontend.layouts.master")
@section("content")
@include("frontend.includes.modal_auth")
    <!-- Modal Đăng nhập -->
    <div class="container" style="margin-top: 150px;">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div class="block-cat-news">
                    <div class="title-block">
                        <img src="/assets/images/icon-card.png" alt=""> {{ !isset($name) ? "Tin tức" : $name}}
                        {{--<a href="c/tin-tuc" class="link-seemore"><img src="/assets/images/icon-seemore.png" alt=""></a>--}}
                    </div>
                    @foreach($posts as $post)
                        <div class="tab-content col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="small-news tab-pane in active" id="news01">
                                <div class="news-main">
                                    <div class="block-news-img">
                                        <a href="/tin-tuc/{{$post->slug}}"><img src="https://cms.big88.club/{{$post->img_feature}}" alt=""></a>
                                    </div>
                                    <div class="block-news-content">
                                        <h3><a href="/tin-tuc/{{$post->slug}}">{{$post->title}}</a></h3>
                                        <div class="block-news-date">{{$post->created_at}}</div>
                                        <h5>{{$post->summary}}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                    @include('pagination.default', ['paginator' => $posts])
                </div>
            </div>
            @include("frontend.includes.fb")
        </div>
    </div>
@endsection

@section("support")
    @include("frontend.includes.support")
@endsection
