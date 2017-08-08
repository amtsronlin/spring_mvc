$(document).ready(function() {
        						
				
				//Display(not read only) for autocomplete
				if($(".not-read-only-autocomplete").find(".qp-input-autocomplete").length > 0) {
					$(".not-read-only-autocomplete").find(".qp-input-autocomplete").each(function() {
						$.qp.enableAutocomplete("input[id='"+$(this).attr("id")+"']");
					});
				}
				//Read only for autocomplete
				if($(".read-only-autocomplete").find(".qp-input-autocomplete").length > 0) {
					$(".read-only-autocomplete").find(".qp-input-autocomplete").each(function() {
						$.qp.disableAutocomplete("input[id='"+$(this).attr("id")+"']");
					});
				}
				//Non display for autocomplete
				if($(".no-display-autocomplete").find(".qp-input-autocomplete").length > 0) {
					$(".no-display-autocomplete").find(".qp-input-autocomplete").each(function() {
						$(this).closest("div").css("display","none");
					});
				}
        	});

function getObjectJson(object, name) {
	  if (name in object) return object[name];
	  for (key in object) {
	    if ((typeof (object[key])) == 'object') {
	      var t = findSomething(object[key], name);
	      if (t) return t;
	    }
	  }
	  return null;
	}