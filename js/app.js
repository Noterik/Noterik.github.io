(function(){
	
	// ready
	$(document).ready(function(){
		
		// nav
		$('.splash').fullpageSplash({
            minusSection: 'header'
        });
        
        // nav
		$('.small-splash').fullpageSplash({
            minusSection: 'header'
        });
        
        // get json github stat
        getGithubStats();
        
        // mobile nav
        $('#mobile-toggle').click(function(){ 
        	$('#navpanel').slideToggle();
        });
	});
	
	// everything is loaded
	$(window).load(function(){
		
		// load splash
		loadSplash();
	});
	
	// load splash fn
	var loadSplash = function(){
		
		// check width
		if($(window).width() <= 768) {
			
			// show tag	
			$('.img-splash').animate({ opacity : 1}, 1000, function(){
						
				// show tag
				$('.tag').animate({ opacity: 1 }, 500);
			});
		}
		else {
			
			// show bgs one by one
			$('.bg-1').animate({ opacity : 1}, 1000, function(){
				$('.bg-2').animate({ opacity : 1}, 1000, function(){
					$('.bg-3').animate({ opacity : 1}, 1000, function(){
						$('.img-splash').animate({ opacity : 1}, 1000, function(){
						
							// show tag
							$('.tag').animate({ opacity: 1 }, 500);
						});
					});
				});
			});	
		}
	};
	
	// get github stat
	var getGithubStats = function(){
		var url="http://os.noterik.com/github_stats.json";
		$.getJSON(url,function(json){
        	$('#public_repos').html(json.public_repos);
        	$('#lines_of_code_current_week').html(json.lines_of_code_current_week);
        	$('#total_lines_of_code').html(json.total_lines_of_code);
		});
	};
})();