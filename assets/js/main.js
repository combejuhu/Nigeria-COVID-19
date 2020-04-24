//AMCHART
$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
});
//CALL NUBMERSž
function citys(value) {
  if (value == "NORTH CENTRAL") {
      document.getElementById("callNumbers").innerHTML = ' <div class="container pt-3 d-flex justify-content-center"> <div class="row" style="overflow-x:auto"> <div class="col-xs-12"> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th colspan="5" class="text-center">Sarajevski kanton</th> </tr><tr> <th>#</th> <th>Name</th> <th>Number:</th> </tr></thead> <tbody> <tr class="text-center"> <td>1.</td><td>Benue State</td><td>09018602439, 07025031214</td></tr><tr class="text-center"> <td>2.</td><td>Federal Capital Territory</td><td>08099936312, 07080631500</td></tr><tr class="text-center"> <td>3.</td><td>Kogi State</td><td>0704485619, 07088292249, 08150953486, 08095227003, 07043402122</td></tr><tr class="text-center"> <td>4.</td><td>Kwara State</td><td>090620100001, 09062010002</td></tr><tr class="text-center"> <td>5.</td><td>Niger State</td><td>08038246018, 09093093642, 08077213070</td></tr><tr class="text-center"> <td>6.</td><td>Plateau State</td><td>07032864444, 0803542271, 08065486416, 08035779917</td></tr></tbody> <thead> <tr> <th colspan="5" class="text-center">If you have any usefull number regarding COVID feel free to contact us at : info@covid19connectng.orgbr</th> </tr></thead> </table> </div></div></div></div>';
  } else if (value == "NORTH WEST") {
      document.getElementById("callNumbers").innerHTML = ' ';
  } else if (value == "NORTH EAST") {
      document.getElementById("callNumbers").innerHTML = ' ';
  } else if (value == "SOUTH SOUTH") {
      document.getElementById("callNumbers").innerHTML = ' ';
  } else if (value == "SOUTH EAST") {
      document.getElementById("callNumbers").innerHTML = ' ';
  } else if (value == "SOUTH WEST") {
      document.getElementById("callNumbers").innerHTML = ' ';
  } else if (value == "Bosanskopodrinjski kanton") {
      document.getElementById("callNumbers").innerHTML = ' ';
  } else if (value == "Srednjobosanski kanton") {
      document.getElementById("callNumbers").innerHTML = ' ';
  } else if (value == "Republika Srpska") {
      document.getElementById("callNumbers").innerHTML = ' ';
  } else {
      document.getElementById("callNumbers").innerHTML = '<div class="container pt-3 d-flex justify-content-center"><h4>Nemamo informacija vezano za taj grad</h4></div>';
  }
}

citys("NORTH CENTRAL")

//AMCHART MAP
am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    
    // Set map definition
    chart.geodata = am4geodata_nigeriaLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Miller();
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    //Disable Zoom
    chart.maxZoomLevel = 1;

    //enable scroll
    chart.chartContainer.wheelable = false;

    //scroll - areas
    chart.seriesContainer.draggable = false;
    chart.seriesContainer.resizable = false;
    chart.tapToActivate = false;
    
    // Exclude Antartica
    polygonSeries.exclude = ["AQ"];
    
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    
    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.polygon.fillOpacity = 0.6;
    
    
    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(0);
    
    // Add image series
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    imageSeries.mapImages.template.propertyFields.longitude = "longitude";
    imageSeries.mapImages.template.propertyFields.latitude = "latitude";
    imageSeries.mapImages.template.tooltipText = "{title}";
    imageSeries.mapImages.template.propertyFields.url = "url";
    
    var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle.radius = 3;
    circle.propertyFields.fill = "color";
    
    var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle2.radius = 3;
    circle2.propertyFields.fill = "color";
    
    
    circle2.events.on("inited", function(event){
      animateBullet(event.target);
    })
    
    
    function animateBullet(circle) {
        var animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
        animation.events.on("animationended", function(event){
          animateBullet(event.target.object);
        })
    }
    
    var colorSet = new am4core.ColorSet();
    
    imageSeries.data = [ {
      "title": "Auja",
      "latitude": 9.072264,
      "longitude": 7.491302,
      "color":colorSet.next()
    }
];
    
    
    
    }); // end am4core.ready()
