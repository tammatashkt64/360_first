
$(function(){
  $('.spritespin').spritespin({
    source: SpriteSpin.sourceArray('images/{frame}.png', {
      frame: [1,28],
      digits: 1
    }),
    width: 1108,
    height: 1477,
    sense: -1,
    responsive: true
  });
});