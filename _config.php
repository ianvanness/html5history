<?php
$_rev = 1; // revision
$_ajax = false; // ajax request or not
if( isset( $_SERVER['HTTP_X_REQUESTED_WITH'] ) && ( $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest' ) ) {
    $_ajax = true;
}