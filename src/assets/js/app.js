const Portfolio =function() {
    console.log(new Date());

    function typeAnimation() { 
        new Typed('#writing-text', {
            strings: [
				"am a Full-Stack Developer", 
                "am a Data Science Enthusiast", "am a Melophile.", "Keep HUSTLING."
			],
            stringElement: null,
            //Typing speed
            typeSpeed: 50,
            contentType: 'text',
            callback: function() {
				$("#writing-text").css({"color": "red", "background-color": "#C8412B"});
			},
            preStringTyped: function() {},
			onStringTyped: function() {}
        });
    }

    return{
        typeAnimation: typeAnimation
    }
}();

Portfolio.typeAnimation();