@if(!env("IS_BREAKLAW"))
<div  class="side-bar-news">
    <div class="container">
        <div class="col-md-6 title-block-news">
            <img src="./assets/images/sukien_icon.png" alt="">
            <span class="title-block-news-text">SỰ KIỆN HOT</span>
        </div>
        <div class="col-md-6 title-block-news hidden-sm hidden-xs">
            <!-- tabs -->

            <!-- Nav tabs -->
            <div class="card title-block-news-tabs title-block-tabs">
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">TẤT CẢ</a></li>
                    <li role="presentation"><a href="#news" aria-controls="profile" role="tab" data-toggle="tab">TIN TỨC</a></li>
                    <li role="presentation"><a href="#events" aria-controls="settings" role="tab" data-toggle="tab">SỰ KIỆN</a></li>
                </ul>
            </div>

            <!-- end tabs -->
        </div>
    </div>

</div>
<div class="news_br_background">
    <div class="container">
        <div class="col-md-6 news_br_slider">
            <section class="regular-news slider" style="margin-bottom: 30px">
                @if(!env("IS_BREAKLAW"))
                    @foreach($sliderDown as $slider)
                    <div>
                        <a href="{{$slider->link_event}}"><img width="100%" src="{{$slider->link_image}}"></a>
                    </div>
                    @endforeach
                @endif
            </section>
        </div>
        <div class="col-md-6 title-block-newst ">
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="home">
                    @foreach($allNews as $news)
                        <div>
                            <div style="line-height: 15px">
                                {{ $news->cate_id == 1 ? "TIN TỨC" : "SỰ KIỆN" }} | <span class="spe-text-news">{{$news->created_at}}</span>
                            </div>
                            <div style="line-height: 41px">
                                <a  class="title_news_tab" href="/tin-tuc/{{$news->slug}}">{{$news->title}}</a>
                                <a class="chitiet" href="/tin-tuc/{{$news->slug}}">Chi tiết</a>
                            </div>

                        </div>
                        <div class="line_news"></div>
                    @endforeach
                </div>

                <div role="tabpanel" class="tab-pane" id="news">
                    @foreach($latestNews as $news)
                        <div>
                            <div style="line-height: 15px">
                                TIN TỨC | <span class="spe-text-news">{{$news->created_at}}</span>
                            </div>
                            <div style="line-height: 41px">
                                <a class="title_news_tab" href="/tin-tuc/{{$news->slug}}">{{$news->title}}</a>
                                <a class="chitiet" href="/tin-tuc/{{$news->slug}}">Chi tiết</a>
                            </div>
                        </div>
                        <div class="line_news"></div>
                    @endforeach
                </div>

                <div role="tabpanel" class="tab-pane" id="events">
                    @foreach($latestEvent as $news)
                        <div>
                            <div style="line-height: 15px">
                                SỰ KIỆN | <span class="spe-text-news">{{$news->created_at}}</span>
                            </div>
                            <div style="line-height: 41px">
                                <a class="title_news_tab" href="/tin-tuc/{{$news->slug}}">{{$news->title}}</a>
                                <a class="chitiet" href="/tin-tuc/{{$news->slug}}">Chi tiết</a>
                            </div>
                        </div>
                        <div class="line_news"></div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
@endif

