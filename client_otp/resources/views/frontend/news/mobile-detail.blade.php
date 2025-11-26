<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
<head>
    <style type="text/css">
        body{
            background : #2f7cb2;
        }
        #body-content{
            padding-right: 0px;
            padding-left: 0px;
            margin-right: auto;
            margin-left: auto;
        }
        #body-content img {
            width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
<section id="body-content">
        @if(isset($post))
            {!! $post->body !!}
        @endif
</section>
</body>
</html>
