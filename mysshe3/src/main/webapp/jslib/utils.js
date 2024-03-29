$.extend($.fn.validatebox.defaults.rules,{
	eqPassword : {
		validator : function(value,param){
			return value == $(param[0]).val();
		},
		message : '密码不一致!'
	}
});

var easyuiPanelOnMove = function(left,top){
	var l = left;
	var t = top;
	if(l <1){
		l=1;
	}
	if(t <1){
		t=1;
	}
	var width = parseInt($(this).parent().css('width'))+14;
	var height = parseInt($(this).parent().css('height')) + 14;
	var right = l + width;
	var buttom = t+height;
	var browserWidth = $(window).width();
	var browserHeight = $(window).height();
	if(right > browserWidth){
		 l = browserWidth - width;
	}
	if(buttom > browserHeight){
		t = browserHeight - height;
	}
	$(this).parent().css({
		left : l,
		top : t
	});
	
};
$.fn.dialog.defaults.onMove = easyuiPanelOnMove;
$.fn.window.defaults.onMove = easyuiPanelOnMove;
$.fn.panel.defaults.onMove = easyuiPanelOnMove;