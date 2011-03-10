	  $(document).ready(function(){
		$("a#s-search").click(function () {
			// slide all content up
			$("#search").toggle();	
			return false;
		});
		
		$("a#s-tags").click(function () {
			// slide all content up
			$("#tags").toggle();		
			return false;
		});
	
	  });