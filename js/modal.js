function itemCard(inputArray){
  for (var i = 0; i < inputArray.length; i++) {

      var itemCard ='<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
        itemCard += '<div class="card" style="width: 18rem; height:28rem;" data-id="'+inputArray[i].id+'">';
        itemCard += '<img src ="img/'+inputArray[i].photo+'"class="img-img-top" alt="">';
          itemCard += '<div class="card-body">';
            itemCard += '<h5 class="card-title">'+inputArray[i].name+'</h5>';
            itemCard += '<h5 class="card-title">NZD'+inputArray[i].price+'/night</h5>';
              itemCard +=  '<p class="card-text">Minimum Guest:'+inputArray[i].minGuest+', Minimum Night:'+inputArray[i].minNight+', Maximum night:'+inputArray[i].maxNight+'</p>';'
                itemCard +=  '<a href="#" class="seeMore btn btn-outline-info btn-block">SEE MORE</a>';
                itemCard +=  '<a href="#" class="bookNow btn btn-info btn-block">BOOK NOW</a>';
          itemCard +='</div>';
        itemCard +='</div>';
      itemCard +='</div>';

      itemList.innerHTML += itemCard;
  };
}
