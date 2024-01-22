

/*плавные переходы по якорям*/

$(document).ready(function () {

    function snegOn() {
        $('.snow-start').addClass('active');
    }
    function snegOff() {
        $('.snow-start').removeClass('active');
    }

    setInterval(snegOn, 2000);
    setInterval(snegOff, 4000);

	$(".anchor").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top - 147;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').stop().animate({ scrollTop: top }, 1000);
    });

	$(".anchor").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top - 147;
	});

	$(".arrow_down").on("click", function (event) {

        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top - 147;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });

});
/*конец плавные переходы по якорям*/

/*кнопка на верх*/

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
$(document).ready(function () {
    if (innerWidth > 414) {
        $(window).scroll(function () { // При прокрутке попадаем в эту функцию
            /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
            if ($(this).scrollTop() > top_show) $('#top').fadeIn();
            else $('#top').fadeOut();

            if ($(this).scrollTop() > 10) {
                if ($(this).scrollTop() > 800) {
                    $('.fixed_elka').css('top', '-273px')
                } else {
                    $('.fixed_elka').css('top', '-95px')
                }
            } else {
                $('.fixed_elka').css('top', '0px')
            }
        });
    } else {
        $('.fixed_elka').css('display', 'none')
    }
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    	/* Плавная прокрутка наверх */
    	$('body, html').animate({
    		scrollTop: 0
    	}, delay);
    });
});

var res = true;

$('.slider_content a').on('click', function () {
    $('.slide1').css('display', 'none');
    if (res == true) {
        $('#one').addClass('active');
        $('#two').addClass('active');
        res = false
    } else {
        $('#one').removeClass('active');
        $('#two').removeClass('active');
        res = true;
    }
});

$('.back').on('click', function () {
    $('.slide1').css('display', 'block');
    if (res == true) {
        $('#one').addClass('active');
        $('#two').addClass('active');
        res = false
    } else {
        $('#one').removeClass('active');
        $('#two').removeClass('active');
        res = true;
    }
})
if(innerWidth>414){
var snowsrc = "/images/snow.png";
var no = 20;
var log = 0;
var hidesnowtime = 0;
var snowdistance = "windowheight";

var ie4up = (document.all) ? 1 : 0;
var ns6up = (document.getElementById && !document.all) ? 1 : 0;

function iecompattest() {
	return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body
}

var dx, xp, yp;
var am, stx, sty;
var i, doc_width = 800, doc_height = 600;

if (ns6up) {
	doc_width = self.innerWidth;
	doc_height = self.innerHeight;
} else if (ie4up) {
	doc_width = iecompattest().clientWidth;
	doc_height = iecompattest().clientHeight;
}

dx = new Array();
xp = new Array();
yp = new Array();
am = new Array();
stx = new Array();
sty = new Array();
snowsrc = (snowsrc.indexOf("all-blogspot.com") != 1) ? "images/snow.png" : snowsrc
for (i = 0; i < no; ++i) {
	dx[i] = 0;
	xp[i] = Math.random() * (doc_width - 50);
	yp[i] = Math.random() * doc_height;
	am[i] = Math.random() * 20;
	stx[i] = 0.1 + Math.random() / 10;
	sty[i] = 0.6 + Math.random();
	if (ie4up || ns6up) {
		if (i == 0) {
			document.write("<div id=\"dot" + i + "\" style=\"POSITION: fixed; Z-INDEX: " + i + "; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='" + snowsrc + "' border=\"0\"><\/div>");
		} else {
			document.write("<div id=\"dot" + i + "\" style=\"POSITION: fixed; Z-INDEX: " + i + "; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='" + snowsrc + "' border=\"0\"><\/div>");
		}
	}
}

function snowIE_NS6() {
	doc_width = ns6up ? window.innerWidth - 10 : iecompattest().clientWidth - 10;
	doc_height = (window.innerHeight && snowdistance == "windowheight") ? window.innerHeight : (ie4up && snowdistance == "windowheight") ? iecompattest().clientHeight : (ie4up && !window.opera && snowdistance == "pageheight") ? iecompattest().scrollHeight : iecompattest().offsetHeight;
	for (i = 0; i < no; ++i) {
		yp[i] += sty[i];
		if (yp[i] > doc_height - 50) {
			xp[i] = Math.random() * (doc_width - am[i] - 30);
			yp[i] = 0;
			stx[i] = 0.02 + Math.random() / 10;
			sty[i] = 0.7 + Math.random();
		}
		dx[i] += stx[i];
		document.getElementById("dot" + i).style.top = yp[i] + "px";
		document.getElementById("dot" + i).style.left = xp[i] + am[i] * Math.sin(dx[i]) + "px";
	}
	snowtimer = setTimeout("snowIE_NS6()", 15);
}

function hidesnow() {
	if (window.snowtimer) clearTimeout(snowtimer)
		for (i = 0; i < no; i++) document.getElementById("dot" + i).style.visibility = "hidden";
	}

if (ie4up || ns6up) {
	snowIE_NS6();
	if (hidesnowtime > 0)
		setTimeout("hidesnow()", hidesnowtime * 1000);
}
function stopsnow() {
	if (log == 0) {
		for (i = 0; i < no; i++) document.getElementById("dot" + i).style.visibility = "hidden";
			no = 0;
		log = 1;
	}
	else {
		log = 0; no = 20; for (i = 0; i < no; i++) document.getElementById("dot" + i).style.visibility = "visible";

	}

}
}
function ojidanieNG() {
	var today = new Date();
	var BigDay = new Date("January 1, 2017");
	var timeLeft = (BigDay.getTime() - today.getTime());

	var e_daysLeft = timeLeft / 86400000;
	var daysLeft = Math.floor(e_daysLeft);

	var e_hrsLeft = (e_daysLeft - daysLeft) * 24;
	var hrsLeft = Math.floor(e_hrsLeft);

	var e_minsLeft = (e_hrsLeft - hrsLeft) * 60;
	var minsLeft = Math.floor(e_minsLeft);

	var seksLeft = Math.floor((e_minsLeft - minsLeft) * 60);

	if (BigDay.getTime() > today.getTime()) {
		// console.log(daysLeft);
		document.getElementById("day").innerHTML = daysLeft;
		document.getElementById("hou").innerHTML = hrsLeft;
		document.getElementById("min").innerHTML = minsLeft;

	} else {
		$('.time').css('display', 'none');
		$('.ny').css('display', 'block');
	}
}
setInterval("ojidanieNG()", 500);



$(document).ready(function () {
	$('.colCaunt').on('keyUp change',function(e){
		if(parseInt($(e.target).val())){
			$(e.target).val(parseInt($(e.target).val()))
		}else{
			$(e.target).val(0);
		}

		changeRes();

	})


	$('.colCaunt').each(function(e){
	// var val = $(this).parents(".tableContent").find('p.price').text();
	this.value = 0;
});

	$('.plusCol').on('click',function(e){
		e.preventDefault();

		var price = parseInt($(e.target).parents(".tableContent").find('p.price').text());
		val = $(e.target).parents(".tableContent").find('.colCaunt').val();
		$(e.target).parents(".tableContent").find('.colCaunt').val(+val + 1);

	//.sum .result
	$(e.target).parents(".tableContent").find('.sum .result').text((+val + 1) * price);

	changeRes();
});

	$('.minusCol').on('click',function(e){
		e.preventDefault();
		var price = parseInt($(e.target).parents(".tableContent").find('p.price').text());
		val = $(e.target).parents(".tableContent").find('.colCaunt').val();
		if(+val > 0 ){
			$(e.target).parents(".tableContent").find('.colCaunt').val(+val - 1);
			$(e.target).parents(".tableContent").find('.sum .result').text((+val - 1) * price);
			changeRes();
		}

	});

	function changeRes(){
		var res = 0
		$('.colCaunt').each(function(e){
			price = parseInt($(this).parents(".tableContent").find('p.price').text())
			res += this.value * price;
		})
		$('.res h3').text(res+" руб");
	}
})

function sumbmiteForm() {
	var articuls = [];
	$('.colCaunt').each(function(e){
		if(+this.value){
			var product = {};
			product.art = $(this).parents(".tableContent").find('.articul p').text();
			product.count = this.value;
			articuls.push(product)
		};
	});
	console.log(articuls);

	var err = true;
	if (jQuery('input[name="organisation"]').val() == "") {
		jQuery('input[name="organisation"]').addClass('err');
		err = false;
	}else{
		jQuery('input[name="organisation"]').removeClass('err');
	}
	if (jQuery('input[name="inn"]').val() == "") {
		jQuery('input[name="inn"]').addClass('err');
		err = false;
	}else{
		jQuery('input[name="inn"]').removeClass('err');
	}
	if (jQuery('input[name="kpp"]').val() == "") {
		jQuery('input[name="kpp"]').addClass('err');
		err = false;
	}else{
		jQuery('input[name="kpp"]').removeClass('err');
	}
	if (jQuery('input[name="fio"]').val() == "") {
		jQuery('input[name="fio"]').addClass('err');
		err = false;
	}else{
		jQuery('input[name="fio"]').removeClass('err');
	}
	if (jQuery('input[name="tel"]').val() == "") {
		jQuery('input[name="tel"]').addClass('err');
		err = false;
	}else{
		var re = /[0-9 \-()\+]{5,}/; 
		if(!re.test(jQuery('input[name="tel"]').val())){
			jQuery('input[name="tel"]').addClass('err');
			err = false;
		}else{
			jQuery('input[name="tel"]').removeClass('err');
		}
		
	}
	if (jQuery('input[name="email"]').val() == "") {
		jQuery('input[name="email"]').addClass('err');
		err = false;
	}else{
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!re.test(jQuery('input[name="email"]').val())){
			jQuery('input[name="email"]').addClass('err');
			err = false;
		}else{
			jQuery('input[name="email"]').removeClass('err');
		}
		
	}

	if(err && articuls.length > 0){
		var data = {
			articuls: articuls,
			organisation: jQuery('input[name="organisation"]').val(),
			inn: jQuery('input[name="inn"]').val(),
			kpp: jQuery('input[name="kpp"]').val(),
			fio: jQuery('input[name="fio"]').val(),
			tel: jQuery('input[name="tel"]').val(),
			email: jQuery('input[name="email"]').val(),
			notes: jQuery('textarea[name="notes"]').val(),
			result: jQuery('.res h3').text()
		};

		$.ajax({
			type: "POST",
			url: "./mail.php",
			data: data,
			success: function (msg) {
				if (msg) {
					if (msg = JSON.parse(msg)) {
						if (msg['err']) {
                        // console.log(msg['err']);
                        for (property in msg['err']) {
                        	if (!msg['err'].hasOwnProperty(property)) continue;
                        	jQuery('input[name="' + property + '"]').addClass('err')
                        }
                    }
                }
            } else {
            	alert('заявка отправлена');
            	/*$('input[type="text"],input[type="number"],input[type="email"],textarea').each(function(){            		
            		this.value = "";
            	});*/
            }
        }
    });
	}

}









