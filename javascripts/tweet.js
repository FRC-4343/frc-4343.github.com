jQuery(function($){
  $(".tweet").tweet({
    username: "tcmalone14",
    list: "robotics",
    join_text: "auto",
    avatar_size: 32,
    count: 8,
    loading_text: " loading tweets... ",
    refresh_interval: 60,
    auto_join_text_default: ": ", 
    auto_join_text_ed: ": ",
    auto_join_text_ing: ": ",
    auto_join_text_reply: ": ",
    auto_join_text_url: ": ",
  });
});