$(document).ready(function(){
  Galleria.run('#galleria');

  var flickr = new Galleria.Flickr();
  flickr.user('90253023@N03', function(data){
    Galleria.get(0).load( data ); // reloads the first galleria instance with the new data
  });
});