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
    let arr = [];
    var oper = false;
    var lastIsEqual = false;
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
                if ( oper === true ) {
                    oper = false;
                }
                if ( screenSelector.innerText.length < 10 ) {
                    console.log( e.target.id );
                    if ( lastIsEqual ) {
                        screenSelector.innerText = '';
                        lastIsEqual = false;
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
                        console.log( screenSelector.innerText.slice( 0, -1 ) );
                        screenSelector.innerText = `${ screenSelector.innerText.slice( 0, -1 ) }${ numbers }`;
                    }
                    else if ( screenSelector.innerText.lastIndexOf( '0' ) === 0 ) {
                        screenSelector.innerText = `${ numbers }`;
                    } else {
                        screenSelector.innerText += numbers;
                    }
                }
            }
        }



        const add = function ( x, y ) {
            return x + y;
        };

        const subtract = function ( x, y ) {
            return x - y;
        };

        const multiply = function ( x, y ) {
            return x * y;
        };

        const divide = function ( x, y ) {
            return x / y;
        };

        const raise = function ( x, y ) {
            return Math.pow( x, y );
        };
        const power = function ( x, y ) {
            let init = 1;
            for ( let i = 0; i < y; i++ ) {
                init *= x;
            }
            return init;
        };


        switch ( e.target.id ) {
            case 'clr':
                arr = [];
                screenSelector.innerText = '0';
                break;
            case 'del':
                if ( lastIsEqual ) {
                    arr = [];
                    screenSelector.innerText = '';
                } else {
                    screenSelector.innerText = screenSelector.innerText.slice( 0, -1 );
                }

                break;
            case 'raise':
                if ( screenSelector.innerText.lastIndexOf( '^' ) !== -1 ) {
                    return;
                } else {
                    oper = true;
                    arr.push( Number( screenSelector.innerText ), 'raise' );
                    ( lastIsEqual ) ? screenSelector.innerText :
                        screenSelector.innerText = `${ screenSelector.innerText }^`;
                }
                break;
            case 'divide':
                if ( screenSelector.innerText.lastIndexOf( '/' ) !== -1 ) {
                    return;
                } else {
                    oper = true;
                    arr.push( Number( screenSelector.innerText ), 'divide' );
                    ( lastIsEqual ) ? screenSelector.innerText :
                        screenSelector.innerText = `${ screenSelector.innerText }/`;
                    break;
                }
            case 'multiply':
                if ( screenSelector.innerText.lastIndexOf( '*' ) !== -1 ) {
                    return;
                } else {
                    oper = true;
                    arr.push( Number( screenSelector.innerText ), 'multiply' );
                    ( lastIsEqual ) ? screenSelector.innerText :
                        screenSelector.innerText = `${ screenSelector.innerText }*`;
                    break;
                }
            case 'subtract':
                if ( screenSelector.innerText.lastIndexOf( '-' ) !== -1 ) {
                    return;
                } else {
                    oper = true;
                    arr.push( Number( screenSelector.innerText ), 'subtract' );
                    ( lastIsEqual ) ? screenSelector.innerText :
                        screenSelector.innerText = `${ screenSelector.innerText }-`;
                    break;
                }
            case 'add':
                if ( screenSelector.innerText.lastIndexOf( '+' ) !== -1 ) {
                    return;
                } else {
                    oper = true;
                    arr.push( Number( screenSelector.innerText ), 'add' );
                    ( lastIsEqual ) ? screenSelector.innerText = screenSelector.innerText :
                        screenSelector.innerText = `${ screenSelector.innerText }+`;
                    break;
                }
            case 'equal':
                lastIsEqual = true;
                console.log( arr );
                for ( arrlen = 0; arrlen < arr.length; arrlen++ ) {
                    if ( arr[ arrlen ] === 'add' ) {
                        arr.push( Number( screenSelector.innerText.slice( screenSelector.innerText.lastIndexOf( '+' ) + 1, screenSelector.innerText.length ) ) );
                        if ( arr[ arrlen + 1 ] ) {
                            screenSelector.innerText = `${ add( arr[ arrlen - 1 ], arr[ arrlen + 1 ] ) }`;
                            arr = [];
                        }
                    }
                    else if ( arr[ arrlen ] === "subtract" ) {
                        arr.push( Number( screenSelector.innerText.slice( screenSelector.innerText.lastIndexOf( '-' ) + 1, screenSelector.innerText.length ) ) );
                        console.log( arr );
                        if ( arr[ arrlen + 1 ] ) {
                            screenSelector.innerText = `${ subtract( arr[ arrlen - 1 ], arr[ arrlen + 1 ] ) }`;
                            arr = [];
                        }
                    }
                    else if ( arr[ arrlen ] === "multiply" ) {
                        arr.push( Number( screenSelector.innerText.slice( screenSelector.innerText.lastIndexOf( '*' ) + 1, screenSelector.innerText.length ) ) );
                        console.log( arr );
                        if ( arr[ arrlen + 1 ] ) {
                            screenSelector.innerText = `${ multiply( arr[ arrlen - 1 ], arr[ arrlen + 1 ] ) }`;
                            arr = [];
                        }
                    }
                    else if ( arr[ arrlen ] === "divide" ) {
                        arr.push( Number( screenSelector.innerText.slice( screenSelector.innerText.lastIndexOf( '/' ) + 1, screenSelector.innerText.length ) ) );
                        console.log( arr );
                        if ( arr[ arrlen + 1 ] ) {
                            screenSelector.innerText = `${ divide( arr[ arrlen - 1 ], arr[ arrlen + 1 ] ) }`;
                            arr = [];
                        }
                    }
                    else if ( arr[ arrlen ] === "raise" ) {
                        arr.push( Number( screenSelector.innerText.slice( screenSelector.innerText.lastIndexOf( '^' ) + 1, screenSelector.innerText.length ) ) );
                        console.log( arr );
                        if ( arr[ arrlen + 1 ] ) {
                            screenSelector.innerText = `${ raise( arr[ arrlen - 1 ], arr[ arrlen + 1 ] ) }`;
                            arr = [];
                        }
                    }
                }
                break;
            case 'dot':
                console.log( screenSelector.innerText.lastIndexOf( '.' ), screenSelector.innerText.length - 1 );
                if ( screenSelector.innerText.lastIndexOf( '.' ) === screenSelector.innerText.length - 1 && screenSelector.innerText.length > 1 ) { return; }
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