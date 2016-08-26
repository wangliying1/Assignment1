(function ( win, doc ) {
    var body = doc.body;

    //创建顶部
    var div1 = doc.createElement( 'div' );
    div1.id = "div1";
    body.appendChild( div1 );

    //创建左侧内容1
    var div21 = doc.createElement( 'div' );
    div21.id = "div21";
    body.appendChild( div21 );

    //创建左侧内容2
    var div22 = doc.createElement( 'div' );
    div22.id = "div22";
    div21.appendChild( div22 );

    //创建右侧内容
    var div3 = doc.createElement( 'div' );
    div3.id = "div3";
    body.appendChild( div3 );

})( window, document );