// $("#cardsList").hide();
var locations = [
  {
    placeName: 'national',
    accom: [
      {
      id:1,
      type:"hostel",
      name: "National Park Backpackers",
      price: 30,
      valid: {
        minGuest:1,
        minNight:1,
        maxNight:10
      },
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
      name: "Pipers Lodge",
      price: 90,
      valid: {
        minGuest: 2,
        minNight:3,
        maxNight:10,
      },
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
      valid: {

      },
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
      name: "Donlouin Cottage",
      price: 240,
      valid: {
        minGuest: 1,
        minNight:2,
        maxNight:15
      },
      amenities: ["kitchen","Shared lounge"],
      img: "nationalHouse.jpg",
      morePhoto: ["nationalHotel2.jpg","nationalHotel3.jpg"],
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
      type:"hostel",
      name: "Whakapapa Holiday Park",
      price: 30,
      valid: {
        minGuest: 1,
        minNight:1,
        maxNight:10
      },
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
      valid: {
        minGuest: 2,
        minNight:3,
        maxNight:10
      },
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
      name: "Chateau Hotel",
      price: 157,
      valid: {
        minGuest: 1,
        minNight:1,
        maxNight:5
      },
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
      name: "Whakapapa Holiday Park",
      price: 240,
      valid: {
        minGuest:1,
        minNight:1,
        maxNight:15
      },
      amenities: ["kitchen","Shared lounge"],
      img: "whakapapa1.jpg",
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
      type:"hostel",
      name: "Whakapapa Holiday Park",
      price: 30,
      valid: {
        minGuest:1,
        minNight:1,
        maxNight:10
      },
      amenities: ["kitchen","Shared lounge"],
      img: "whakapapa1.jpg",
      add: "State Highway 48 Whakapapa Village, Mt Ruapehu, Tongariro National Park 3951",
      lat: -41.289816,
      lng: 174.779321,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:2,
      type:"Motel",
      name: "Whakapapa Holiday Park",
      price: 90,
      valid: {
        minGuest:2,
        minNight:3,
        maxNight:10
      },
      amenities: ["kitchen","Shared lounge"],
      img: "whakapapa1.jpg",
      add: "State Highway 48 Whakapapa Village, Mt Ruapehu, Tongariro National Park 3951",
      lat: -41.289816,
      lng: 174.779321,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:3,
      type:"Hotel",
      name: "Whakapapa Holiday Park",
      price: 90,
      valid: {
        minGuest:1,
        minNight:1,
        maxNight:5
      },
      amenities: ["kitchen","Shared lounge"],
      img: "whakapapa1.jpg",
      add: "State Highway 48 Whakapapa Village, Mt Ruapehu, Tongariro National Park 3951",
      lat: -41.289816,
      lng: 174.779321,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:4,
      type:"House",
      name: "Whakapapa Holiday Park",
      price: 90,
      valid: {
        minGuest:1,
        minNight:1,
        maxNight:15
      },
      amenities: ["kitchen","Shared lounge"],
      img: "whakapapa1.jpg",
      add: "State Highway 48 Whakapapa Village, Mt Ruapehu, Tongariro National Park 3951",
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
      type:"hostel",
      name: "LKNZ Lodge",
      price: 30,
      valid: {
        minGuest: 1,
        minNight:1,
        maxNight:10
      },
      amenities: ["kitchen","Shared lounge"],
      img: "ohakuneHostel.jpg",
      add: "State Highway 48 Whakapapa Village, Mt Ruapehu, Tongariro National Park 3951",
      lat: -41.289816,
      lng: 174.779321,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:2,
      type:"Motel",
      name: "Ohakune Court Motel",
      price: 90,
      valid: {
        minGuest: 2,
        minNight:3,
        maxNight:10
      },
      img: "ohakuneMotel.jpg",
      add: "State Highway 48 Whakapapa Village, Mt Ruapehu, Tongariro National Park 3951",
      lat: -41.289816,
      lng: 174.779321,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:3,
      type:"Hotel",
      name: "Tussock Grove Boutique Hotel",
      price: 157,
      valid: {
        minGuest: 1,
        minNight:1,
        maxNight:5
      },
      img: "ohakuneHotel.jpg",
      add: "State Highway 48 Whakapapa Village, Mt Ruapehu, Tongariro National Park 3951",
      lat: -41.289816,
      lng: 174.779321,
      description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
    },
    {
      id:4,
      type:"House",
      name: "Ohakune-Matata",
      price: 240,
      valid: {
        minGuest:1,
        minNight:1,
        maxNight:15
      },
      img: "ohakuneHouse.jpg",
      add: "2 Snowmass Drive, 4625 Ohakune, New Zealand",
      lat: -41.289816,
      lng: 174.779321,
        description:"A 32 bed lodge and several tent sites are also available, all bookable online.",
      }
    ]
  }
];

var option = $("#inputGroupSelect01");
option.change(function(){
  if (option.val()==1) {
    $("#cardsList").html('');
    var nationalArray = [];
    for (var i = 0; i < locations.length; i++) {
      if (locations[i].placeName == 'national') {
        nationalArray.push(locations[i])
      }
    }
    itemCard(nationalArray);
  } else if (option.val()==2) {
    $("#cardsList").html('');
    var whakapapaArray = [];
    for (var i = 0; i < locations.length; i++) {
      if (locations[i].placeName == 'whakapapa') {
        console.log('whakapapa');
        whakapapaArray.push(locations[i])
      }
    }
    itemCard(whakapapaArray);
  } else if (option.val()==3) {
    $("#cardsList").html('');
    var turangiArray = [];
    for (var i = 0; i < locations.length; i++) {
      if (locations[i].placeName == 'turangi') {
        console.log('turangi');
        turangiArray.push(locations[i])
      }
    }
    itemCard(turangiArray);
  } else if (option.val()==4) {
    $("#cardsList").html('');
    var ohakuneArray = [];
    for (var i = 0; i < locations.length; i++) {
      if (locations[i].placeName == 'ohakune') {
        console.log('ohakune');
        ohakuneArray.push(locations[i])
      }
    }
    itemCard(ohakuneArray);
  }

});


function itemCard(inputArray){
  var accom = inputArray[0].accom;
    for (var i = 0; i < accom.length; i++) {
        var itemCard ='<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
          itemCard += '<div class="card itemThumb itemThumb2" style="width: 18rem; height:28rem;" data-id="'+accom[i].id+'">';
          itemCard += '<img src ="img/'+accom[i].img+'"class="img-img-top img-thumbnail" alt="">';
            itemCard += '<div class="card-body">';
              itemCard += '<h5 class="card-title">'+accom[i].name+'</h5>';
              itemCard += '<h5 class="card-title">NZD'+accom[i].price+'/night</h5>';
                itemCard +=  '<p class="card-text">Minimum Guest:'+accom[i].minGuest+', Minimum Night:'+accom[i].minNight+', Maximum night:'+accom[i].maxNight+'</p>';
                  itemCard +=  '<a href="#" class="seeMore btn btn-outline-info btn-block">SEE MORE</a>';
                  itemCard +=  '<a href="#" class="bookNow btn btn-info btn-block">BOOK NOW</a>';
            itemCard +='</div>';
          itemCard +='</div>';
        itemCard +='</div>';

        cardsList.innerHTML += itemCard;
    };
}

$("#search").click(function(){
  $("#cardsList").show();
  $(".banner").hide();
  calculate();


});




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
    console.log(diff);
}



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
