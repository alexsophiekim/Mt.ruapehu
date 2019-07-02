$("#cardsList").hide();
$("#details").hide();
var locations = [
  {
    placeName: 'national',
    accom: [
      {
      id:1,
      type:"Hostel",
      name: "National Park Backpackers",
      price: 30,
      minGuest:1,
      maxGuest:1,
      minNight:1,
      maxNight:10,
      amenities: ["kitchen","Shared lounge"],
      img: "nationalHostel.jpg",
      morePhoto: ["nationalHostel2.jpg","nationalHostel3.jpg"],
      add: "4 Findlay Street, 3948 National Park, New Zealand",
      lat: -39.175230,
      lng: 175.398300,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:2,
      type:"Motel",
      name: "National Park Pipers Lodge",
      price: 90,
      minGuest: 2,
      maxGuest:4,
      minNight:3,
      maxNight:10,
      amenities: ["kitchen","Shared lounge"],
      img: "nationalMotel.jpg",
      morePhoto: ["nationalMotel2.jpg","nationalMotel3.jpg"],
      add: "18 Millar Street, National Park, 3989 National Park, New Zealand",
      lat:-39.173410,
      lng: 175.398950,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:3,
      type:"Hotel",
      name: "The Park Hotel Ruapehu",
      price: 157,
      minGuest:1,
      maxGuest:2,
      minNight:1,
      maxNight:5,
      amenities: ["kitchen","Shared lounge"],
      img: "nationalHotel.jpg",
      morePhoto: ["nationalHotel2.jpg","nationalHotel3.jpg"],
      add: "Cnr Sh4 And Millar St, 3948 National Park, New Zealand",
      lat: -39.173270,
      lng: 175.400480,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:4,
      type:"House",
      name: "National Park Donlouin Cottage",
      price: 240,
      minGuest:1,
      maxGuest:4,
      minNight:2,
      maxNight:15,
      amenities: ["kitchen","Shared lounge"],
      img: "nationalHouse.jpg",
      morePhoto: ["nationalHouse2.jpg","nationalHouse3.jpg"],
      add: "28 Findlay St, National Park, 3989 National Park, New Zealand",
      lat: -39.175000,
      lng: 175.399680,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
     }
    ]
  },
  {
    placeName: 'whakapapa',
    accom: [
      {
      id:1,
      type:"Hostel",
      name: "Whakapapa Holiday Park",
      price: 30,
      minGuest:1,
      maxGuest:1,
      minNight:1,
      maxNight:10,
      amenities: ["kitchen","Shared lounge"],
      img: "whakapapaHostel.jpg",
      img: "nationalHouse.jpg",
      morePhoto: ["nationalHotel2.jpg","nationalHotel3.jpg"],
      add: "State Highway 48 Whakapapa Village, Mt Ruapehu, Tongariro National Park 3951",
      lat: -39.201610,
      lng: 175.540090,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:2,
      type:"Motel",
      name: "Skotel Alpine Resort",
      price: 90,
      minGuest: 2,
      maxGuest:4,
      minNight:3,
      maxNight:10,
      amenities: ["kitchen","Shared lounge"],
      img: "whakapapaMotel.jpg",
      morePhoto: ["whakapapaHotel2.jpg","whakapapaHotel3.jpg"],
      add: "Ngauruhoe Place,Tongariro National Park 4691, 3951 Tongariro, New Zealand",
      lat: -39.173990,
      lng: 175.399050,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:3,
      type:"Hotel",
      name: "Whakapapa Chateau Hotel",
      price: 157,
      minGuest: 1,
      maxGuest:2,
      minNight:1,
      maxNight:5,
      amenities: ["kitchen","Shared lounge"],
      img: "whakapapaHotel.jpg",
      add: "State Highway 48 Whakapapa Village, Mt Ruapehu, Tongariro National Park 3951",
      lat: -39.201610,
      lng: 175.540090,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:4,
      type:"House",
      name: "Whakapapa Eco Escape",
      price: 240,
      minGuest:1,
      maxGuest:4,
      minNight:1,
      maxNight:15,
      amenities: ["kitchen","Shared lounge"],
      img: "whakapapaHouse.jpg",
      add: "State Highway 48 Whakapapa Village, Mt Ruapehu, Tongariro National Park 3951",
      lat: -41.289816,
      lng: 174.779321,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    }
    ]
  },
  {
    placeName: 'turangi',
    accom: [
      {
      id:1,
      type:"Hostel",
      name: "Riverstone Backpackers",
      price: 30,
      minGuest:1,
      maxGuest:1,
      minNight:1,
      maxNight:10,
      amenities: ["kitchen","Shared lounge"],
      img: "turangiHostel.jpg",
      add: "State Highway 48 Whakapapa Village, Mt Ruapehu, Tongariro National Park 3951",
      lat: -41.289816,
      lng: 174.779321,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:2,
      type:"Motel",
      name: "Turangi Bridge Motel",
      price: 90,
      minGuest:2,
      maxGuest:4,
      minNight:3,
      maxNight:10,
      amenities: ["kitchen","Shared lounge"],
      img: "turangiMotel.jpg",
      add: "4600 State Highway 1, 3334 Turangi, New Zealand",
      lat: -41.289816,
      lng: 174.779321,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:3,
      type:"Hotel",
      name: "Turangi Braxmere Hotel",
      price: 157,
      minGuest:1,
      maxGuest:2,
      minNight:1,
      maxNight:5,
      amenities: ["kitchen","Shared lounge"],
      img: "turangiHotel.jpg",
      add: "88 Waihi Road, 3381 Turangi, New Zealand",
      lat: -41.289816,
      lng: 174.779321,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:4,
      type:"House",
      name: "Turangi Pihanga View",
      price: 240,
      minGuest:1,
      maxGuest:4,
      minNight:1,
      maxNight:15,
      amenities: ["kitchen","Shared lounge"],
      img: "turangiHouse.jpg",
      add: "Pihanga View, 3381 Turangi, New Zealand",
      lat: -41.289816,
      lng: 174.779321,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    }
    ]
  },
  {
    placeName:'ohakune',
    accom:[
      {
      id:1,
      type:"Hostel",
      name: "Ohakune LKNZ Lodge",
      price: 30,
      minGuest: 1,
      maxGuest:1,
      minNight:1,
      maxNight:10,
      amenities: ["kitchen","Shared lounge"],
      img: "ohakuneHostel.jpg",
      add: "1 Rata Street, 4265 Ohakune, New Zealand",
      lat: -41.289816,
      lng: 174.779321,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:2,
      type:"Motel",
      name: "Central Motel & Lodge",
      price: 90,
      minGuest: 2,
      maxGuest:4,
      minNight:3,
      maxNight:10,
      img: "ohakuneMotel.jpg",
      add: "2 Moore Street, 4625 Ohakune, New Zealand",
      lat: -41.289816,
      lng: 174.779321,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:3,
      type:"Hotel",
      name: "Tussock Grove Boutique Hotel",
      price: 157,
      minGuest: 1,
      maxGuest:2,
      minNight:1,
      maxNight:5,
      img: "ohakuneHotel.jpg",
      add: "3 Karo Street, 4660 Ohakune, New Zealand",
      lat: -41.289816,
      lng: 174.779321,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:4,
      type:"House",
      name: "Ohakune vue pour deux",
      price: 240,
      minGuest:1,
      maxGuest:4,
      minNight:1,
      maxNight:15,
      img: "ohakuneHouse.jpg",
      add: "Tainui St, 4625 Ohakune, New Zealand",
      lat: -41.289816,
      lng: 174.779321,
        description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
      }
    ]
  }
];
var filerArray = [];

var option = $("#inputGroupSelect01");
option.change(function(){
  filerArray = [];
  if (option.val()==1) {
    for (var i = 0; i < locations.length; i++) {
      if (locations[i].placeName == 'national') {
        filerArray.push(locations[i]);
      }
    }
  } else if (option.val()==2) {
    for (var i = 0; i < locations.length; i++) {
      if (locations[i].placeName == 'whakapapa') {
        filerArray.push(locations[i]);
      }
    }
  } else if (option.val()==3) {
    for (var i = 0; i < locations.length; i++) {
      if (locations[i].placeName == 'turangi') {
        filerArray.push(locations[i]);
      }
    }
  } else if (option.val()==4) {
    for (var i = 0; i < locations.length; i++) {
      if (locations[i].placeName == 'ohakune') {
        filerArray.push(locations[i]);
      }
    }
  }
});

function itemCard(finalFilterArray){
  cardsList.innerHTML='';
  console.log(finalFilterArray);
  var accom = finalFilterArray;
    for (var i = 0; i < accom.length; i++) {
        var itemCard ='<div class=" text-center my-1">';
          itemCard += '<div class="card " style="width: 16rem;" data-id="'+accom[i].id+'">';
          itemCard += '<img src ="img/'+accom[i].img+'"class="img-img-top img-thumbnail" style="height: 12rem;" alt="">';
            var typeColour = getTypeColour(accom[i].type);
            console.log(typeColour);
           itemCard += '<span class ="badge badge-'+typeColour+' mr-1">'+accom[i].type+'</span>';
            itemCard += '<div class="card-body">';
              itemCard += '<h5 class="card-title">'+accom[i].name+'</h5>';
              itemCard += '<h5 class="card-title">NZD'+accom[i].price+'/night</h5>';
                itemCard +=  '<p class="card-text">Minimum Guest:'+accom[i].minGuest+' Maximum Guest:'+accom[i].maxGuest+' Minimum Night:'+accom[i].minNight+' Maximum night:'+accom[i].maxNight+'</p>';
                  itemCard +=  '<a href="#" class="seeMore seeMore btn btn-outline-info btn-block">SEE MORE</a>';
                  itemCard +=  '<a href="#" class="bookNow bookNow btn btn-info btn-block">BOOK NOW</a>';
            itemCard +='</div>';
          itemCard +='</div>';
        itemCard +='</div>';

        cardsList.innerHTML += itemCard;
    };
    $(".bookNow").click(function(){
      var diff2 = calculate();
      var accom = finalFilterArray;
      for (var i = 0; i < accom.length; i++) {
        var getPrice = accom[0].price;
        console.log(getPrice);
      }
      var totalCost = diff2 * getPrice;
      var pay =["Credit Card","Debit Card","Cash","Others"];
      var breakfast =["Yes","No"];
      Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      }).queue([
        {
          title: 'Total NZD '+totalCost,
          html: 'For '+diff2+' Nights',
          input: 'select',
          inputPlaceholder: 'Breakfast Option',
          animation:'slide-from-top',
          inputOptions: breakfast
        },
        {
          title: 'Payment Type',
          input: 'select',
          animation:'slide-from-top',
          inputOptions: pay

        },
        {
          title: 'Do you want to get confirmation email?',
          input: 'email',
          inputPlaceholder: 'Enter your email address'
        }
      ]).then((result) => {
        if (result.value) {
          Swal.fire({
            type:'success',
            title: 'Done!',
            confirmButtonText: 'Thank You!'
          })
        }
      })

    });
    $(".seeMore").click(function(){
      $("#cardsList").hide();
      $("#details").show();

    });
};

function getTypeColour(type){
  if (type === 'Hostel') {
      return 'primary';
  } else if (type === 'Motel') {
      return 'success';
  } else if (type=== 'Hotel') {
      return 'danger';
  } else {
      return 'warning';
  }
}


//// datepicker setting //////

$('.datepicker1').datepicker({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    changeYear: true,
    minDate:0
});
$('.datepicker2').datepicker({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    changeYear: true,
    minDate:+1
});
$('.datepicker1').datepicker().bind("change", function () {
    var minValue = $(this).val();
    minValue = $.datepicker.parseDate("yy-mm-dd", minValue);
    $('.todate').datepicker("option", "minDate", minValue);
    calculate();
});
$('.datepicker2').datepicker().bind("change", function () {
    var maxValue = $(this).val();
    maxValue = $.datepicker.parseDate("yy-mm-dd", maxValue);
    $('.datepicker1').datepicker("option", "maxDate", maxValue);
    calculate();
});

function calculate() {
    var d1 = $('.datepicker1').datepicker('getDate');
    var d2 = $('.datepicker2').datepicker('getDate');
    var oneDay = 24*60*60*1000;
    var diff = 0;
    if (d1 && d2) {
      diff = Math.round(Math.abs((d2.getTime() - d1.getTime())/(oneDay)));
    }
    return diff;
}

$("#search").click(function(){
  $(".banner").hide();
  $("#cardsList").show();
  var diff2 = calculate();
  console.log(diff2);
    var guest = parseInt($("input[name='quant[1]']").val());
    console.log(guest);

  var date =[];
  var final = [];
  for (var i = 0; i < filerArray[0].accom.length; i++) {
    if (diff2 >= filerArray[0].accom[i].minNight  && diff2 <= filerArray[0].accom[i].maxNight) {
      date.push(filerArray[0].accom[i]);
    }
  }
   for (var j = 0; j < date.length; j++) {
      if (guest >= date[j].minGuest && guest <= date[j].maxGuest) {
        final.push(date[j]);
      }
  }
  itemCard(final);
});

$(document).ready(function(){
  $("#owl1").owlCarousel({
      loop: true,
      autoWide: true,
      center: true,
      autoplay: true,
      nav: true,
      dots: true,
      stagePadding: 0,
      margin: 100,
      lazyLoad: true
  });
});


////// Login Form //////
$("#login").click(function(){
  $(".loginForm").toggle().dropdown()
});
$("#loginSubmit").click(function(){
  var id = $("#idInput").val();
  console.log(id);
  validate();
  $(".loginForm").hide( "drop", { direction: "down" }, "slow" )
});

  function validate(){
    var id = $("#idInput").val();
    var pw = $("#pwInput").val();
    if (id == "") {
      $("#idInput").attr("placeholder", "enter username");
    } else {
      $("#login").removeClass().html(id);
    }
    if (pw == "") {
      $("#pwInput").attr("placeholder", "enter password");
    } return false;
  }
