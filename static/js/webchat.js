    document.head.innerHTML +=
  '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mikaelhaule/chatbot-widget/static/css/style.css">';
    

let div = document.createElement("div");
    div.className = "container";
    div.innerHTML =
      ' <div class="widget"><div class="chat_header"><span class="chat_header_title">powered by &nbsp;<a href="https://belltro.com/" target="_blank"> <img src="http://chatbotafrica.btest.link/static/img/Belltro_White-Logo.svg" alt="" height="25px" width="auto"/></a></span><span class="dropdown-trigger" href="#" data-target="dropdown1"> <i class="material-icons"> more_vert </i> </span><ul id="dropdown1" class="dropdown-content"><li><a href="#" id="restart">Restart</a></li><li><a href="#" id="close">Close</a></li></ul></div><div class="chats" id="chats"><div class="clearfix"></div></div><div class="keypad"><textarea id="userInput" placeholder="Type a message..."onblur="this.focus()"autocomplete="off"autofocus="on"class="usrInput"></textarea> <div id="sendButton"><i class="fa fa-paper-plane" aria-hidden="true"></i></div></div></div><div class="profile_div" id="profile_div"><img class="imgProfile"src="http://chatbotafrica.btest.link/static/img/chatbot.svg"/></div>';
    let content = document.querySelector('#webchat');
    content.appendChild(div);
