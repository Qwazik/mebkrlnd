new WOW().init();
$(function() {
	$('.fancybox').fancybox({
		padding: 0
	});

	/*-------------------------------------------------*/
	/*	tovar tabs
	/*-------------------------------------------------*/

	(function(){
		var carousels = [];
	    $('.tovar-tabs__list').each(function(){
	    	var itemsCount = Math.round($(this).find('.tovar__item').length);
	    	var that = this;
	    	var lastindex = itemsCount - 4;
	    	if(itemsCount > 4){
		    	var carousel = $(this).owlCarousel({
			    	items:1,
			        loop:false,
			        margin:40,
			        autoplayHoverPause:true,
			        autoWidth: true,
			        onTranslated: function(){
			        	var index = $(that).find('.owl-dot.active').index();
			        	if(index > lastindex){
			        		carousel.trigger('to.owl.carousel',lastindex, 100)
			        		slider.noUiSlider.set(lastindex);
			        	}
			        	slider.noUiSlider.set(index);

			        }
			    });
		    
			    carousels.push(carousel);

			    //uislider
			    if(itemsCount > 4){
				
					var slider = $(this).siblings('.tovar-tabs__scroll').find('.noUiSlider-tovar')[0];

					noUiSlider.create(slider,{
						start: 0,
						step: 1,
						range: {
							'min':0,
							'max': itemsCount-4
						}
					});

					slider.noUiSlider.on('slide', function(values){
						carousel.trigger('to.owl.carousel',parseInt(values[0]))
					});
				}
			}
	    });


		$('.page__tovar').each(function(){

			var that = $(this);
			console.log(that)
			if(that.find('.tovar-tabs__nav').length){
				console.log('ok')
				showActive(that);
				that.find('.tovar-tabs__nav li').click(function(){
					$(this).addClass('active');
					$(this).siblings('li').removeClass('active');
					showActive(that);
					return false;
				});
			}

			function showActive(that){
				that.find('.tovar-tabs__content').hide();
				var target = that.find('.tovar-tabs__nav li.active a').attr('href');
				$(target).fadeIn();
			}
		});


	}());


	$('.preview__gallary a').click(function(){
		var mainImg = $(this).closest('.card__preview').find('.preview__main img');
		var img = $(this).attr('href');
		mainImg.attr('src', img);
		console.log(mainImg[0]);
		return false;
	});
});


var map;
function initMap() {
  var markerPos1 = {lat: 45.024606, lng: 39.046018};
  var markerPos2 = {lat: 45.029275, lng: 39.046134};
  var centerPos = {lat: 45.027262, lng: 39.036018};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: centerPos
  });

  var marker1 = new google.maps.Marker({
    position: markerPos1,
    map: map,
    icon: 'img/map-marker.png',
  });

  var marker2 = new google.maps.Marker({
    position: markerPos2,
    map: map,
    icon: 'img/map-marker.png',
  });
}

		