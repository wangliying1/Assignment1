(function ( win, doc ) {
    var body = doc.body;

    var h1 = doc.createElement( 'h1' );
    h1.innerHTML = '我是初始化内容！';

    body.appendChild( h1 );
})( window, document );