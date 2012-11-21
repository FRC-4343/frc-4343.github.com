jQuery(function($){
  $(".tweet").tweet({
    username: "StMaxFRC",
    join_text: "auto",
    avatar_size: 32,
    count: 4,
    auto_join_text_default: ": ", 
    auto_join_text_ed: ": ",
    auto_join_text_ing: ": ",
    auto_join_text_reply: ": ",
    auto_join_text_url: ": ",
    loading_text: " loading tweets... "
  });
});