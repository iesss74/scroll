const { gsap, imagesLoaded } = window;

// 3D Scroll
let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName( 'frame' ),
    frames = Array.from( $frames ),
    zVals = [];

window.addEventListener("scroll",function (e) {

    let top = document.documentElement.scrollTop,
        delta = lastPos - top

    lastPos = top;

    frames.forEach( function ( n, i ) {
        zVals.push( (i * zSpacing) + zSpacing )
        zVals[i] += delta * -5.5
        let frame = frames[i],
            transform = `translateZ(${ zVals[i] }px)`,
            opacity = zVals[i] < Math.abs( zSpacing ) / 1.8 ? 1 : 0
            frame.setAttribute( 'style', `transform: ${ transform }; opacity: ${ opacity }` );
    } );

});

window.scrollTo( 0, 1 );

/* const waitForImages = () => {
    const images = [...document.querySelectorAll("img")];
    const totalImages = images.length;
    let loadedImages = 0;
    const loaderEl = document.querySelector(".loader span");

    images.forEach((image) => {
        imagesLoaded(image, (instance) => {
            if (instance.isComplete) {
                loadedImages++;
                let loadProgress = loadedImages / totalImages;

                gsap.to(loaderEl, {
                    duration: 1,
                    scaleX: loadProgress,
                    backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
                });

                if (totalImages == loadedImages) {
                    gsap.timeline()
                        .to(".loading__wrapper", {
                            duration: 0.8,
                            opacity: 0,
                            pointerEvents: "none",
                        })
                }
            }
        });
    });
};

waitForImages();*/
