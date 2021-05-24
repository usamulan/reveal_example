$(function(){

  //Header stick to top when scrolling down
  const headerSticky = function(){
    // 요소의 위치 좌표를 브라우저(문서)를 기준으로 읽기
    //$("선택자").offset();
    //$("선택자").offset().top;
    //$("선택자").offset().left;

    //3. header 요소의 위쪽 끝 값 읽어서 저장
    const headerTop = $("header").offset().top;
    //console.log(headerTop);

    //2. 스크롤 이벤트 함수 작성
    $(window).on('scroll', function(){
      //1. 브라우저의 맨 위쪽 값 변수에 저장
      const winTop = $(window).scrollTop();
      //console.log(winTop);
      
      //4. winTop 값이 headerTop보다 같거나 클때 sticky 클래스 추가 및 제거
      if(winTop >= headerTop){
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  }

  headerSticky();

  //Mobile menu icon click
  //1. mobile-menu 클래스에 클릭 이벤트 적용
  $(".mobile-menu").on('click', function(){

    //2. mobile-menu 클래스를 클릭했을 때 on 클래스 추가 제거 반복
    $(this).toggleClass("on");

    //3. on 클래스가 있을때와 없을때 분개
    if($(this).hasClass("on")){
      $(this).find("i").attr("class", "fa fa-times");
      //4. 네비게이션 display를 flex로 변경
      //$("#gnb").css("display", "flex");
      //5. 첫 클릭 후 on 클래스 추가 시 gnb가 아래로 내려옴
      $("#gnb").slideDown(200);
    } else {
      $(this).find("i").attr("class", "fa fa-bars");
      //5. 네비게이션 display를 none으로 변경
      //$("#gnb").css("display", "none");
      //6. 두 번째 클릭 후 on 클래스 제거 시 gnb가 올라감
      $("#gnb").slideUp(200);
    }
  });

  $(window).on('resize', function(){
    // 1. 화면의 가로 값을 저장
    const winW = $(window).width();
    //2. 화면의 가로 값이 700 보다 크면 gnb의 display 값을 강제로 flex로 전환하여 보이게 만듦
    if(winW > 700){
      $("#gnb").css("display", "flex");
    } else {
      //3. 화면의 가로 값이 700 보다 작으면 gnb의 display 값을 원래대로 none으로 전환
      $("#gnb").css("display", "none");
    }
  });

  //WOW Framework Start Code
  new WOW().init();

  //Text cut when browser's width is less than 900
  //1. 글자의 갯수를 읽어서 변수에 저장
  //2. resize 함수를 함수 정의
  //3. 브라우저 width 값 읽어서 변수에 저장
  //4. if 조건을 사용하여 브라우저의 width가 900이하일 경우 1번에서 읽은 글자 수를 잘라냄
  $(".description").each(function(){
    const a = $(this).text();
    //각각의 텍스트를 a에 저장
    console.log(a);

    //const arr = [0, 3, 5, 5];
    //console.log(arr);

    //화면을 틀리고 줄일때 함수 정의
    $(window).resize(function(){
      //화면 가로 크기를 변수에 저장
      const winW = $(window).width();
    
      for(let i = 0; i < $(".description").length; i++){  
        if(winW < 900){
          $(".description").eq(i).text(a.substr(0, 50) + "...");
        } else {
          $(".description").eq(i).text(a);
        }
      }
    });
  });

  // Client Carousel Plugin Code
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    //nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:1500,
    responsive:{
        0:{
            items:2
        },
        700:{
            items:4
        },
        1000:{
            items:6
        }
    }
  });

  // Isotope Portfolio Filtering Plugin Code
  // init Isotope
  var $grid = $('.portfolio-container').isotope({
    // options
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });
  // filter items on button click
  $('.filter-menu li').on( 'click', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });

    $('.filter-menu li').removeClass("active");
    $(this).addClass("active");
  });

});