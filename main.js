//  script cho icon 
 function myFunction() {
 var x = document.getElementById("nav-list");
if (x.className === "header__nav-list") {
      x.className += " responsive";
} else {
     (x.className = "header__nav-list")
}
};

// Chatbox
 var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "101098755882654");
            chatbox.setAttribute("attribution", "biz_inbox");
              window.fbAsyncInit = function () {
                FB.init({
                    xfbml: true,
                    version: 'v13.0'
                });
            };
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

  // Scroll
  window.onscroll = function () {
                scrollFunction()
            };
            function scrollFunction() {
                if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
                    document.getElementById("baBtn").style.display = "block";
                } else {
                    document.getElementById("baBtn").style.display = "none";
                }
            }
            document.getElementById('baBtn').addEventListener("click", function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
            );

//   slider
var index = 1;
changeImg = function () {
    var imgs = ["./img/banner2.png","./img/banner1.png","./img/banner3.png",'./img/banner4.png'];
    document.getElementById('banner-img').src = imgs[index];
    index++;
    if(index == 4) {
        index = 0
    }
}
setInterval(changeImg, 3000)