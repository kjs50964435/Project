
$(function(){
	initSetting.init(); //페이지기본이벤트
	initSetting.modal(); //모달관련함수
});

$(function(){

	//Lnb Menu
	$("#lnb ul.lnbMenu > li > a").click(function(){
		if($(this).parent().children("ul").length > 0){
	
			if($(this).parent("li").hasClass("active")){
				$(this).parent("li").children("ul").slideUp(function(){
					$(this).parent("li").removeClass("active");
					// 3depth ul slidup
					$(this).parent("li").find('ul>li').removeClass("active");
					$(this).parent("li").find('ul>li>ul').slideUp();
				});
			}else {
				$(this).parent("li").addClass("active").children("ul").slideDown();
				$(this).parent("li").siblings().removeClass("active").find('>ul').slideUp();
				// 3depth ul slidup
				$(this).parent("li").siblings().removeClass("active").find('>ul>li').removeClass("active");
				$(this).parent("li").siblings().removeClass("active").find('>ul>li>ul').slideUp();
			}
		}
	});

	$("#lnb ul.lnbMenu > li > ul > li > a").click(function(){
		 if($(this).parent().children("ul").length > 0){
			if($(this).parent("li").hasClass("active")){
				$(this).parent("li").children("ul").slideUp(function(){
					$(this).parent("li").removeClass("active")
				});
			} else {
				$(this).parent("li").siblings().removeClass("active").find('>ul').slideUp()
				$(this).parent("li").addClass("active").children("ul").slideDown();
			}
		 }
	})


	//Lnb Menu
	$("#lnb_menu ul.lnbMenu > li > a").click(function(){
		if($(this).parent().children("ul").length > 0){
	
			if($(this).parent("li").hasClass("active")){
				$(this).parent("li").children("ul").slideUp(function(){
					$(this).parent("li").removeClass("active");
					// 3depth ul slidup
					$(this).parent("li").find('ul>li').removeClass("active");
					$(this).parent("li").find('ul>li>ul').slideUp();
				});
			}else {
				$(this).parent("li").addClass("active").children("ul").slideDown();
				$(this).parent("li").siblings().removeClass("active").find('>ul').slideUp();
				// 3depth ul slidup
				$(this).parent("li").siblings().removeClass("active").find('>ul>li').removeClass("active");
				$(this).parent("li").siblings().removeClass("active").find('>ul>li>ul').slideUp();
			}
		}
	});

	$("#lnb_menu ul.lnbMenu > li > ul > li > a").click(function(){
		 if($(this).parent().children("ul").length > 0){
			if($(this).parent("li").hasClass("active")){
				$(this).parent("li").children("ul").slideUp(function(){
					$(this).parent("li").removeClass("active")
				});
			} else {
				$(this).parent("li").siblings().removeClass("active").find('>ul').slideUp()
				$(this).parent("li").addClass("active").children("ul").slideDown();
			}
		 }
	})	

	//Lnb Toggle
	$(".btn_lnbToggle").click(function(e){
		e.preventDefault();
		if($("#container_left").hasClass("lnbHide")){
			$(this).css({"right":"477px"});
			$("#container_left").removeClass("lnbHide");
			// $("#container_left").animate({"right":"0px"}, 500);
			$(".lnbFixed").css({"right":"77px"});
		}else{
			// $(this).css({"right":"77px"});
			// $("#container_left").addClass("lnbHide");
			// $(".lnbFixed").css({"right":"-477px"});
			$(this).css({"right":"77px"});
			$("#container_left").addClass("lnbHide");
			// $("#container_left").animate({"right":"-477px"}, 500);
			$(".lnbFixed").css({"right":"-477px"});
		}
	});

	//mCustomScrollbar
	$("#lnb").mCustomScrollbar({
		autoHideScrollbar:true,
		scrollbarPosition:'outside'
	});
	$("#lnb_menu").mCustomScrollbar({
		autoHideScrollbar:true,
		scrollbarPosition:'outside'
	});
	$(".thumListArea").mCustomScrollbar({
		autoHideScrollbar:true
	});
	
	//달력 비활성
	$(".useDatepicker.disabled").datepicker("option","disabled",true);
	$(".useMonthpicker.disabled").monthpicker("options","disabled",true);
	
	// 중요 버튼 jquery
	$(".star_btn > a").click(function(){
		if(!$(this).parent().hasClass("on")){
			$(this).parent().addClass("on");
		}else{
			$(this).parent().removeClass("on");
		}
	})

	// Selectbox UI
	$( ".selectTitle" ).click(function() {
		 $(this).next().toggleClass("on");
		 return false;
	});
	$( ".btnCloseChk" ).click(function() {
		 $(this).parent().removeClass("on");
		 return false;
	});
	
	$(".selectUiBox ul li .chk").click(function() {
		if($(this).children("input").is(':checked')) {
			$(this).parent().addClass("on");
		} else {
			$(this).parent().removeClass("on");
		}
		if(!$(this).children("input").is(":checked")) {
			$(this).parent().siblings("li.check_all").removeClass("on").find("input").prop("checked", false);
		}
		else {
			var li_nav = $(this).parent().parent().children("li");
			if(li_nav.not(".check_all").find("input:checked").size() == li_nav.size()-1) {
				$(this).parent().siblings("li.check_all").addClass("on").find("input").prop("checked", true);
			}
		}
	});
	$(".selectUiBox ul li.check_all .chk").click(function() {
		if($(this).children("input").is(":checked")) {
			$(this).parent().siblings("li").addClass("on").find("input").prop("checked", true);
		}
		else {
			$(this).parent().siblings("li").removeClass("on").find("input[type=checkbox]").prop("checked", false);
		}
	});
	$( ".btnCloseChk" ).click(function() {
		var bindingBox = $(".selectBindingBox ul");
		var bindingBoxLi = $(".selectBindingBox ul li");
		var html = "";
		if(bindingBoxLi.length > 0 ){
			bindingBoxLi.remove();
		}
		
		var input_checked = $(this).siblings("ul").find("input:checked");
		if($(this).siblings("ul").find("li.check_all").children().children("input").is(":checked")) {
			$(this).parent().prev(".selectTitle").text("전체");

			if(input_checked.size() > 0){
				$(".selectBindingBox").css("display", "block");
				$(this).siblings("ul").find("input:checked").each(function(){
					if($(this).next().text() != "전체"){
						html += "<li><a href='#n' class='del'>"+$(this).next().text()+"</a></li>";
					}
				});
				bindingBox.append(html);
			}else{
				$(".selectBindingBox").css("display", "none");
			}
		}
		else {
			if(input_checked.size() > 0){
				$(".selectBindingBox").css("display", "block");
				$(this).siblings("ul").find("input:checked").each(function(){
					html += "<li><a href='#n' class='del'>"+$(this).next().text()+"</a></li>";
				});
				bindingBox.append(html);
			}else{
				$(".selectBindingBox").css("display", "none");
			}

			if((input_checked.size()) > 1){ // selectBox에 text
				$(this).parent().prev(".selectTitle").text(input_checked.first().parent().text()+" 외"+(input_checked.size()-1));
			}
			else if(($(this).siblings("ul").find("input:checked").size()) == 1){
				$(this).parent().prev(".selectTitle").text(input_checked.first().parent().text());
			}
			else {
				$(this).parent().prev(".selectTitle").text("항목선택");
			 }
		}
		return false;
	});
});
 
$(window).resize(function(){
});

/*initSetting Libary*/
var initSetting = {
	'init':function(){
		initSetting.tab();
		initSetting.datepicker();
		initSetting.wordLength();
		initSetting.fileBtn();
		initSetting.fileBtnPreview();
	},
	'tab':function(){
		$(".tabContent").each(function(){
			var tabBar = $(".tabBar");
			var tabPage = $(".tabPage");
			if(!$(this).hasClass("notUsed")){
				if(tabBar.children("li.active").length == 0 && !tabBar.find("li").eq(0).children("a").hasClass("useLink")){
					initSetting.tabReset($(this));
					tabBar.children("li").eq(0).addClass("active");
					tabPage.eq(0).addClass("active");
				}
				tabBar.find("a").unbind().click(function(e){ //탭버튼 클릭이벤트
					if(!$(this).hasClass("useLink")){
						e.preventDefault();
						initSetting.tabReset($(this));
						$(this).parent().parent().siblings(".tabPage").eq($(this).parent().index()).addClass("active");
						$(this).parent().addClass("active");
					}
				}).keydown(function(e){
					if($(this).parent().hasClass("active") && e.keyCode == 9){
						var focusItem = initSetting.findFocusItem($(this).parents(".tabBar").eq(0).siblings(".tabPage.active"));
						if(focusItem.length == 0 || $(this).hasClass("useLink")){
							if($(this).parent().next().children("a").length > 0){
								e.preventDefault();
								$(this).parent().next().children("a").trigger("click").focus();
							}
						}else{
							e.preventDefault();
							focusItem.eq(0).focus();
						}
					}
				});
			}
		});
		$(".tabPage").each(function(){
			if(!$(this).parent(".tabContent").hasClass("notUsed")){
				var focusItem = initSetting.findFocusItem($(this)); //탭페이지 포커스 이동
				if(focusItem.length > 0){
					focusItem.last().unbind().keydown(function(e){
						var inTabPage = $(this).parents(".tabPage").eq(0);
						var inTabBar = inTabPage.siblings(".tabBar");
						var target = inTabBar.children("li.active").next();
						if(e.keyCode == 9 && target.length > 0){
							e.preventDefault();
							if(!target.children("a").hasClass("useLink")){
								target.children("a").trigger("click");
							}else{
								inTabBar.children("li").removeClass("active");
								target.addClass("active");
							}
							target.children("a").focus();
						}
					});
				}
			}
		});
	},
	'tabReset':function(tabItem){
		if(tabItem.hasClass("tabContent")){
			tabItem.children(".tabBar").find("li.active").removeClass("active");
			tabItem.children(".tabPage").removeClass("active");
		}else{
			tabItem.parents(".tabContent").eq(0).children(".tabBar").find("li.active").removeClass("active");
			tabItem.parents(".tabContent").eq(0).children(".tabPage").removeClass("active");
		}
	},
	'datepicker':function(){
		var holidayData = [
			{'mmdd':'1-1','title':'신정'},
			{'mmdd':'3-1','title':'3.1절'},
			{'mmdd':'5-5','title':'어린이날'},
			{'mmdd':'5-10','title':'석가탄신일'},
			{'mmdd':'6-6','title':'현충일'},
			{'mmdd':'8-15','title':'광복절'},
			{'mmdd':'10-3','title':'개천절'},
			{'mmdd':'10-9','title':'한글날'},
			{'mmdd':'12-25','title':'크리스마스'}
		];

		$(".useDatepicker").each(function(){
			if(!$(this).hasClass(".hasDatepicker")){
				var minDate = $(this).attr("data-minDate");
				var maxDate = $(this).attr("data-maxDate");
				var dateFormat = "yy.mm.dd";
				if($(this).attr("data-format")){
					dateFormat = $(this).attr("data-format");
				}
				$(this).datepicker({
					prevText: '이전 달',
					nextText: '다음 달',
					monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
					monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'],
					dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
					dayNamesShort: ['일','월','화','수','목','금','토'],
					dayNamesMin: ['일','월','화','수','목','금','토'],
					dateFormat: dateFormat,
					showMonthAfterYear: true,
					changeYear: true,
					changeMonth: true,
					yearSuffix: '&nbsp;',
					minDate: minDate,
					maxDate: maxDate,
					showOn:'both',
					buttonImage:'../images/bg_inputDate.png',
					buttonImageOnly:true,
					buttonText:'',
					beforeShowDay: function(date){
						var holidayCheck = false;
						var mmdd = (date.getMonth() + 1)+"-"+date.getDate();
						for(var i=0; i<holidayData.length; i++){
							if(holidayData[i].mmdd == mmdd){
								holidayCheck = true;
								return [true, "date-holiday", holidayData[i].title];
								break;
							}
						}
						if(holidayCheck == false){
							return [true, ""];
						}
					},
					onSelect: function(selectedDate){
					},
					onClose: function(selectedDate){
						if($(this).hasClass("dateFrom")) {
							if(selectedDate != "" && $(this).parent().children(".dateTo").val() != ""){
								if(selectedDate >= $(this).parent().children(".dateTo").val()){
									alert("시작날짜는 종료날짜보다 작아야 합니다.");
									$(this).val("");
									return;
								}
							}
						}else if($(this).hasClass("dateTo")) {
							if(selectedDate != "" && $(this).parent().children(".dataFrom").val() != ""){
								if($(this).parent().children(".dateFrom").val() >= selectedDate){
									alert("종료날짜는 시작날짜보다 커야 합니다.");
									$(this).val("");
									return;
								}
							}
						}
					}
				});
			}
		});
		$(".useMonthpicker").each(function(){
			$(this).monthpicker({
				showOn: "focus",
				monthNames: ['1월','2월','3월','4월','5월','6월', '7월','8월','9월','10월','11월','12월'],
				monthNamesShort: ['1월','2월','3월','4월','5월','6월', '7월','8월','9월','10월','11월','12월'],
				changeYear: true,
				yearRange: 'c-2:c+2',
				dateFormat: 'yy.mm',
				showOn:'both',
				buttonImage:'../images/bg_inputDate.png',
				buttonImageOnly:true,
				buttonText:'',
				onSelect: function(){	
				},
				onClose: function(selectedMonth){
					if($(this).hasClass("dateFrom")) {
						if(selectedMonth != "" && $(this).parent().children(".dateTo").val() != ""){
							if(selectedMonth > $(this).parent().children(".dateTo").val()){
								//inputCaptionOpen($("#monthTo"), "시작월은 종료월보다 작아야 합니다.");
								alert("시작월은 종료월보다 작아야 합니다.");
								$("#monthFrom").val("");
								return;
							}
						}
					}else if($(this).hasClass("dateTo")) {
						if(selectedMonth != "" && $(this).parent().children(".dataFrom").val() != ""){
							if($(this).parent().children(".dateFrom").val() > selectedMonth){
								//inputCaptionOpen($("#monthTo"), "종료월은 시작월보다 커야 합니다.");
								alert("종료월은 시작월보다 커야 합니다.");
								$("#monthTo").val("");
								return;
							}
						}
					}
				}
			});
		});
	},
	'fileBtn':function(){
		$("input.fileBtn").each(function(){
			if($(this).css("display") != "none"){
				var file_name = $(this).attr("id");
				var file_class = $(this).attr("class").replace("fileBtn","");
				$(this).after('<span id="for_'+file_name+'"><input type="text" class="'+file_class+'" value="" title="파일"> <a href="#" class="btn_inline for_fileBtn">파일첨부</a></span>');
				$(this).hide();
				$(this).change(function(){
					$("#for_"+file_name+" input[type='text']").val($(this).val());
				});
				$("#for_"+file_name+" .for_fileBtn").click(function(e){
					e.preventDefault();
					var id = $(this).parent().attr("id").replace("for_","");
					$("#"+id).click();
				});
			}
		});
	},
	'fileBtnPreview':function(){
		$("input.fileBtnPreview").each(function(){
			if($(this).css("display") != "none"){
				var file_name = $(this).attr("id");
				var file_class = $(this).attr("class").replace("fileBtnPreview","");
				$(this).after('<span id="for_'+file_name+'"><input type="hidden" class="'+file_class+'" value="" title="파일"> <a href="#" class="btn_l for_fileBtnPreview">파일첨부</a></span>');
				$(this).hide();
				$(this).change(function(){
					$("#for_"+file_name+" input[type='text']").val($(this).val());
				});
				$("#for_"+file_name+" .for_fileBtnPreview").click(function(e){
					e.preventDefault();
					var id = $(this).parent().attr("id").replace("for_","");
					$("#"+id).click();
				});
			}
		});
	},
	'wordLength':function(){
		$("textarea").each(function(){
			if($(this).attr("data-limitByte")){
				var textName = "none";
				if($(this).attr("name")){
					textName = $(this).attr("name");
				}
				limitByte = parseInt($(this).attr("data-limitByte"));
				if($("wordCount_"+textName).length == 0){
					$(this).after('<span id="wordCount_'+textName+'" class="wordCount"><b>0</b> / '+limitByte+' Byte</span>');
				}
				$(this).keyup(function(){
					textName = $(this).attr("name");
					limitByte = parseInt($(this).attr("data-limitByte"));
					var totalByte = 0;
					var limitLength = 0;
					var message = $(this).val();
					for(var i =0; i < message.length; i++){
						var currentByte = message.charCodeAt(i);
						if(currentByte > 128) totalByte += 2;
						else totalByte++;
						if(totalByte > limitByte){
							limitLength = i;
							$(this).val(message.substring(0,limitLength));
							totalByte = limitByte;
							break;
							return;
						}
					}
					$("#wordCount_"+textName+" b").text(totalByte);
				});
			}
		});
	},
	'modal':function(){
		$(document).on("click",".btn_modalOpen",function(e){
			e.preventDefault();
			var targetModal = $(this).attr("href");
			initSetting.modalOpen(targetModal);
		});
		$(document).on("click","#overlay, .btn_modalClose",function(e){
			e.preventDefault();
			initSetting.modalClose();
		});
	},
	'modalOpen':function(id){
		//$(window).scrollTop(0);
		$("body").css({"overflow":"hidden"});
		$("#overlay").show();
		$(id).css({
			"height":$(id).height()+"px",
			"margin-top":"-"+($(id).height()/2)+"px"
		});
		$(id).addClass("active");
		$(id).find(".btn_modalClose").eq(0).focus();
	},
	'modalClose':function(){
		var modalId = $(".modalWrap.active").attr("id");
		$(".modalWrap").removeClass("active");
		$("body").css({"overflow":"auto"});
		$("#overlay").hide();
		$("a.btn_modalOpen[href='#"+modalId+"']").focus();
	},
	'slider':function(){
		if($(".slider.useBx").length > 0){
			$(".slider.useBx").each(function(){
				initSetting.sliderBx($(this).children("ul"));
			});
		}
		if($(".slider.useSlick").length > 0){
			$(".slider.useSlick").each(function(){
				initSetting.sliderSlick($(this).children("ul"));
			});
		}
		$(".bx-viewport ul").each(function(){
			$(this).find("li a").focus(function(){
				//$(this).parents(".bx-wrapper").eq(0).find(".bx-stop").trigger("click");		
				var slideNo = $(this).parent().index();
				if(slideNo < $(this).parent().parent().children("li").length - 3){
					var sliderNo = parseInt($(this).parent().parent().attr("data-sliderNo"));
					sliderItem[sliderNo].goToSlide(slideNo);
					console.log(sliderNo+"|"+slideNo);
				}
			});
		});
	},
	'findFocusItem':function(area){
		return area.find("input, select, textarea, button, a");
	}
};