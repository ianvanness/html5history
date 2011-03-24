<?php if(!$_ajax) {?>
<!DOCTYPE html>
<html>
<head>
<title>great strange dream</title>
<meta name="description" content="great strange dream" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>
<!-- Only for using #! in non html5history browsers -->
<!--<script type="text/javascript" src="/assets/jquery.ba-hashchange.js"></script>-->
<script type="text/javascript" charset="utf-8">
    <?php if( intval($_GET['p'] ) > 0 ) { ?>
    var initialParams = '<?php print intval($_GET['p']); ?>';
    <?php } else { ?>
    var initialParams = '-1';
    <?php } ?>
</script>
<script type="text/javascript" src="/assets/html5hist.js?r=<?php print $_rev;?>"></script>
</head>
<body>
<div>i have thoughts</div>
<ul>
<li><a class="alink" href="/1">1</a></li>
<li><a class="alink" href="/2">2</a></li>
<li><a class="alink" href="/3">3</a></li>
</ul>
<div id="inserthere">
<?php } ?>
