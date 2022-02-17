function calculator() {
    let app = document.querySelector( ".app" );
    let calculator = document.createElement( 'div' );
    let screen = document.createElement( 'div' );
    let grid = document.createElement( 'div' );
    calculator.className = "calculator";
    screen.className = "screen";
    screen.innerText = '0';
    grid.className = "grid";
    app.append( calculator );
    calculator.append( screen );
    calculator.append( grid );
    let arr = '';
    var lastIsEqual = false;
    var oper = false;
    for ( let i = 0; i < 20; i++ ) {
        if ( i < 10 ) {
            let grid_item = document.createElement( 'div' );
            grid_item.className = `grid-item item${ i }`;
            grid_item.textContent = `${ i }`;
            grid_item.id = `num${ i }`;
            grid.append( grid_item );

        } else if ( i === 11 ) {
            let grid_item = document.createElement( 'div' );
            grid_item.className = `grid-item del`;
            grid_item.id = `clr`;
            grid_item.textContent = `CLR`;
            grid.append( grid_item );
        }
        else if ( i === 12 ) {
            let grid_item = document.createElement( 'div' );
            grid_item.className = `grid-item del`;
            grid_item.id = `del`;
            grid_item.textContent = `DEL`;
            grid.append( grid_item );

        } else if ( i === 13 ) {
            let grid_item = document.createElement( 'div' );
            grid_item.className = `grid-item raise`;
            grid_item.id = `raise`;
            grid_item.innerHTML = `X<sup>n</sup>`;
            grid.append( grid_item );

        } else if ( i === 14 ) {
            let grid_item = document.createElement( 'div' );
            grid_item.className = `grid-item divide`;
            grid_item.id = `divide`;
            grid_item.innerHTML = `/`;
            grid.append( grid_item );

        } else if ( i === 15 ) {
            let grid_item = document.createElement( 'div' );
            grid_item.className = `grid-item multiply`;
            grid_item.id = `multiply`;
            grid_item.innerHTML = `*`;
            grid.append( grid_item );

        } else if ( i === 16 ) {
            let grid_item = document.createElement( 'div' );
            grid_item.className = `grid-item subtract`;
            grid_item.id = `subtract`;
            grid_item.innerHTML = `-`;
            grid.append( grid_item );

        } else if ( i === 17 ) {
            let grid_item = document.createElement( 'div' );
            grid_item.className = `grid-item add`;
            grid_item.id = `add`;
            grid_item.innerHTML = `+`;
            grid.append( grid_item );

        } else if ( i === 18 ) {
            let grid_item = document.createElement( 'div' );
            grid_item.className = `grid-item dot`;
            grid_item.id = `dot`;
            grid_item.innerHTML = `.`;
            grid.append( grid_item );

        } else if ( i === 19 ) {
            let grid_item = document.createElement( 'div' );
            grid_item.className = `grid-item equal`;
            grid_item.id = `equal`;
            grid_item.innerHTML = `=`;
            grid.append( grid_item );
        }
    }
    function operations( e ) {
        console.log( e.target.id );
        for ( let numbers = 0; numbers < 10; numbers++ ) {

            if ( e.target.id === `num${ numbers }` ) {
                if ( screenSelector.innerText.length < 10 ) {
                    if ( lastIsEqual && (
                        screenSelector.innerText.lastIndexOf( '^' ) !== screenSelector.innerText.length - 1 &&
                        screenSelector.innerText.lastIndexOf( '*' ) !== screenSelector.innerText.length - 1 &&
                        screenSelector.innerText.lastIndexOf( '/' ) !== screenSelector.innerText.length - 1 &&
                        screenSelector.innerText.lastIndexOf( '+' ) !== screenSelector.innerText.length - 1 &&
                        screenSelector.innerText.lastIndexOf( '-' ) !== screenSelector.innerText.length - 1 ) ) {
                        screenSelector.innerText = '';
                        lastIsEqual = false;
                    } else {
                        lastIsEqual = false;
                    }
                    if ( oper === true ) {
                        oper = false;
                    }
                    if ( screenSelector.innerText.lastIndexOf( '0' ) === 0 && e.target.id === `num0` ) { screenSelector.innerText = '0'; }
                    else if (
                        ( screenSelector.innerText.lastIndexOf( '+0' ) + 1 === screenSelector.innerText.length - 1 ||
                            screenSelector.innerText.lastIndexOf( '-0' ) + 1 === screenSelector.innerText.length - 1 ||
                            screenSelector.innerText.lastIndexOf( '*0' ) + 1 === screenSelector.innerText.length - 1 ||
                            screenSelector.innerText.lastIndexOf( '/0' ) + 1 === screenSelector.innerText.length - 1 ) &&
                        e.target.id === `num0` && screenSelector.innerText.length - 1 !== 0
                    ) {

                        return;
                    }
                    else if ( ( screenSelector.innerText.lastIndexOf( '+0' ) + 1 === screenSelector.innerText.length - 1 ||
                        screenSelector.innerText.lastIndexOf( '-0' ) + 1 === screenSelector.innerText.length - 1 ||
                        screenSelector.innerText.lastIndexOf( '*0' ) + 1 === screenSelector.innerText.length - 1 ||
                        screenSelector.innerText.lastIndexOf( '/0' ) + 1 === screenSelector.innerText.length - 1 ) &&
                        !( e.target.id === `num0` ) && screenSelector.innerText.length - 1 !== 0
                    ) {
                        screenSelector.innerText = `${ screenSelector.innerText.slice( 0, -1 ) }${ numbers }`;
                    }
                    else if ( screenSelector.innerText.lastIndexOf( '0' ) === 0 ) {
                        ( screenSelector.innerText.lastIndexOf( '.' ) === 1 ) ? screenSelector.innerText += numbers :
                            screenSelector.innerText = `${ numbers }`;
                    } else {
                        screenSelector.innerText += numbers;
                    }
                }
            }

        }



        const add = function ( x, y ) {
            x = Number( x );
            y = Number( y );
            return x + y;
        };

        const subtract = function ( x = 0, y = 0 ) {
            return x - y;
        };

        const multiply = function ( x = 0, y = 0 ) {
            return x * y;
        };

        const divide = function ( x = 0, y = 0 ) {
            return x / y;
        };

        const raise = function ( x = 0, y = 0 ) {
            return Math.pow( x, y );
        };
        const power = function ( x = 0, y = 0 ) {
            let init = 1;
            for ( let i = 0; i < y; i++ ) {
                init *= x;
            }
            return init;
        };


        switch ( e.target.id ) {
            case 'clr':
                screenSelector.innerText = '0';
                break;
            case 'del':
                ( lastIsEqual ) ? screenSelector.innerText = '0' : screenSelector.innerText = screenSelector.innerText.slice( 0, -1 );
                break;
            case 'raise':
                if ( screenSelector.innerText.lastIndexOf( '^' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '*' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '/' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '+' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '-' ) === screenSelector.innerText.length - 1 ) {
                    let words = screenSelector.innerText.split( '' );
                    words.splice( ( screenSelector.innerText.length - 1 ), 1, "^" );
                    screen.innerText = words.join( '' );
                }
                else {
                    screenSelector.innerText = `${ screenSelector.innerText }^`;
                    oper = true;
                }
                break;
            case 'divide':
                if ( screenSelector.innerText.lastIndexOf( '^' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '*' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '/' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '+' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '-' ) === screenSelector.innerText.length - 1 ) {
                    let words = screenSelector.innerText.split( '' );
                    words.splice( ( screenSelector.innerText.length - 1 ), 1, "/" );
                    screen.innerText = words.join( '' );
                }
                else {
                    screenSelector.innerText = `${ screenSelector.innerText }/`;
                    oper = true;
                }
                break;
            case 'multiply':
                if ( screenSelector.innerText.lastIndexOf( '^' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '*' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '/' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '+' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '-' ) === screenSelector.innerText.length - 1 ) {
                    let words = screenSelector.innerText.split( '' );
                    words.splice( ( screenSelector.innerText.length - 1 ), 1, "*" );
                    screen.innerText = words.join( '' );
                }
                else {
                    screenSelector.innerText = `${ screenSelector.innerText }*`;
                    oper = true;
                }
                break;
            case 'subtract':
                if ( screenSelector.innerText.lastIndexOf( '^' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '*' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '/' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '+' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '-' ) === screenSelector.innerText.length - 1 ) {
                    let words = screenSelector.innerText.split( '' );
                    words.splice( ( screenSelector.innerText.length - 1 ), 1, "-" );
                    screen.innerText = words.join( '' );
                }
                else {
                    screenSelector.innerText = `${ screenSelector.innerText }-`;
                    oper = true;
                }
                break;

            case 'add':
                if ( screenSelector.innerText.lastIndexOf( '^' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '*' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '/' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '+' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '-' ) === screenSelector.innerText.length - 1 ) {
                    let words = screenSelector.innerText.split( '' );
                    words.splice( ( screenSelector.innerText.length - 1 ), 1, "+" );
                    screen.innerText = words.join( '' );
                }
                else {
                    screenSelector.innerText = `${ screenSelector.innerText }+`;
                    oper = true;
                }
                break;
            case 'equal':
                if ( screenSelector.innerText.lastIndexOf( '^' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '*' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '/' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '+' ) === screenSelector.innerText.length - 1 ||
                    screenSelector.innerText.lastIndexOf( '-' ) === screenSelector.innerText.length - 1 ) {
                    arr = screenSelector.innerText.split( '' );
                    screenSelector.innerText = arr.slice( 0, -1 ).join( '' );

                }

                lastIsEqual = true;
                arr = screenSelector.innerText.split( '+' ).join( '|+|' );
                arr = arr.split( '-' ).join( '|-|' );
                arr = arr.split( '*' ).join( '|*|' );
                arr = arr.split( '/' ).join( '|/|' );
                arr = arr.split( '^' ).join( '|^|' );
                arr = arr.split( '|' );
                while ( arr.indexOf( '^' ) !== -1 ) {
                    screenSelector.innerText = `${ raise( arr[ arr.indexOf( '^' ) - 1 ], arr[ arr.indexOf( '^' ) + 1 ] ) }`;
                    arr.splice( arr.indexOf( '^' ) - 1, 3, screenSelector.innerText );
                }
                while ( arr.indexOf( '*' ) !== -1 ) {
                    screenSelector.innerText = `${ multiply( arr[ arr.indexOf( '*' ) - 1 ], arr[ arr.indexOf( '*' ) + 1 ] ) }`;
                    arr.splice( arr.indexOf( '*' ) - 1, 3, screenSelector.innerText );

                }
                while ( arr.indexOf( '/' ) !== -1 ) {
                    if ( arr[ arr.indexOf( '/' ) + 1 ] === "0" ) {

                        screenSelector.innerText = 'Error';
                        arr = 'Error';
                    }
                    else {
                        screenSelector.innerText = `${ divide( arr[ arr.indexOf( '/' ) - 1 ], arr[ arr.indexOf( '/' ) + 1 ] ) }`;
                        arr.splice( arr.indexOf( '/' ) - 1, 3, screenSelector.innerText );
                    }


                }
                while ( arr.indexOf( '+' ) !== -1 ) {
                    screenSelector.innerText = `${ add( arr[ arr.indexOf( '+' ) - 1 ], arr[ arr.indexOf( '+' ) + 1 ] ) }`;
                    arr.splice( arr.indexOf( '+' ) - 1, 3, screenSelector.innerText );


                }
                while ( arr.indexOf( '-' ) !== -1 ) {
                    screenSelector.innerText = `${ subtract( arr[ arr.indexOf( '-' ) - 1 ], arr[ arr.indexOf( '-' ) + 1 ] ) }`;
                    arr.splice( arr.indexOf( '-' ) - 1, 3, screenSelector.innerText );

                }
                if ( screenSelector.innerText.length > 10 ) {
                    if ( screenSelector.innerText.lastIndexOf( '.' ) !== -1 ) {
                        if ( Number( screenSelector.innerText ) > 999999999 ) {

                            screenSelector.innerText = `${ Number( screenSelector.innerText ).toExponential( 4 ) }`;
                        }
                        else {
                            screenSelector.innerText = `${ Number( screenSelector.innerText ).toFixed( 9 - screenSelector.innerText.lastIndexOf( '.' ) ) }`;
                        };
                    }
                    else ( screenSelector.innerText = screenSelector.innerText.slice( 0, 10 ) );
                }
                break;
            case 'dot':
                if ( screenSelector.innerText.lastIndexOf( '.' ) === screenSelector.innerText.length - 1 ) { return; }
                else { screenSelector.innerText += `.`; }
                break;
        }
    }

    let buttons = document.querySelectorAll( '.grid-item' );
    let screenSelector = document.querySelector( '.screen' );

    buttons.forEach( element => {
        element.addEventListener( 'click', operations );
    } );
}

calculator();