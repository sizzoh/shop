$(function () {
  $("input[type=checkbox]").on("click", function () {
    $(this).parent().css({ "background-color": "skyblue" });

    $.ajax({
      url: "/...",
      type: "GET",
      dataType: "json",
      data: { status: "paid ☑" },
      success: function (data) {
        console.log(data);
      },
      error: function (error) {
        console.log("error", error);
      },
    });
  });

  //functions that handle shop transactions
  var counter_type = '';
  var pipi_type = "";
  $("select[name=item_name]").click(function () {
    // if($(this).val() == "mafuta"){
    var items = {
      mafuta: {
        lita: 5000,
        nusu: 2500,
        robo: 1300,
        "robo tatu": 3800,
        "kichoteo kidogo": 100,
        "kichoteo kikubwa": 500,
      },
      unga: {
        kilo: 1600,
        nusu: 800,
        robo: 400,
        "robo tatu": 1200,
      },
      sukari: {
        kilo: 3000,
        nusu: 1500,
        robo: 800,
        "robo tatu": 2400,
      },
      sabuni: {
        "kipande jamaa": 600,
        kipande: 500,
        "mche jamaa": 3500,
        mche: 3000,
      },
      gazeti: {
        moja: 100,
        robo: 1000,
        nusu: 2000,
        kilo: 4000,
      },
      karanga: {
        kijiko: 100,
        robo: 1000,
        nusu: 2000,
        kilo: 4000,
      },
      ngano: {
        robo: 500,
        nusu: 1000,
        kilo: 2000,
        "robo tatu": 1500,
      },
      daftari: {
        dogo: 200,
        "jumbo kubwa": 500,
        msomaji: 700,
        "page 100": 800,
        counter: {
          "quire 1": 1500,
          "quire 2": 2500,
          "quire 3": 3000,
          "quire 4": 4000,
        },
      },
      rambo: {
        nusu: 1000,
        paketi: 2000,
      },
      items_siblings: {
        'tambi': 2000,
        'pencil': 100,
        'kifutio': 200,
        'wembe': 100,
        'pen': 200,
        'mswaki': 500,
        'ubuyu': 100,
        'GBOOST': 500,
        'powder': 500,
        'baking powder': 1000,
        'rungu spray': 6000,
        'chill source': 2000,
        'manila': 1000,
        'mkonge': 3000,
        'big boss': 100,
        'big bom': 200,
        'pipi':{
          'kifua': 100,
          'ivory': 50
        },
        "pampasi":{
          "bunda": 4500,
          "pisi moja": 500,
        },
        "magufuli":{
          'kubwa': 500,
          'ndogo': 300
        }
      }
    };
    
    var item_quantity_category = $("select[name=item_quantity_category]");
    // var item_category = $("select[name=item_name]");
    item_quantity_category.on("click", function () {
      if ($("select[name=item_name]").val() == "mafuta") {
        if (item_quantity_category.val() == "lita") {
          $("input[name=price]").val(items.mafuta.lita);
        } else if (item_quantity_category.val() == "nusu") {
          $("input[name=price]").val(items.mafuta.nusu);
        } else if (item_quantity_category.val() == "robo") {
          $("input[name=price]").val(items.mafuta.robo);
        } else if (item_quantity_category.val() == "robo tatu") {
          $("input[name=price]").val(items.mafuta["robo tatu"]);
        } else if (item_quantity_category.val() == "kichoteo kidogo") {
          $("input[name=price]").val(items.mafuta["kichoteo kidogo"]);
        } else if (item_quantity_category.val() == "kichoteo kikubwa") {
          $("input[name=price]").val(items.mafuta["kichoteo kikubwa"]);
        }
      } else if ($("select[name=item_name]").val() == "unga") {
        if (item_quantity_category.val() == "kilo") {
          $("input[name=price]").val(items.unga.kilo);
        } else if (item_quantity_category.val() == "nusu") {
          $("input[name=price]").val(items.unga.nusu);
        } else if (item_quantity_category.val() == "robo") {
          $("input[name=price]").val(items.unga.robo);
        } else if (item_quantity_category.val() == "robo tatu") {
          $("input[name=price]").val(items.unga["robo tatu"]);
        }
      } else if ($("select[name=item_name]").val() == "sukari") {
        if (item_quantity_category.val() == "kilo") {
          $("input[name=price]").val(items.sukari.kilo);
        } else if (item_quantity_category.val() == "nusu") {
          $("input[name=price]").val(items.sukari.nusu);
        } else if (item_quantity_category.val() == "robo") {
          $("input[name=price]").val(items.sukari.robo);
        } else if (item_quantity_category.val() == "robo tatu") {
          $("input[name=price]").val(items.sukari["robo tatu"]);
        }
      } else if ($("select[name=item_name]").val() == "sabuni") {
        if (item_quantity_category.val() == "kipande jamaa") {
          $("input[name=price]").val(items.sabuni["kipande jamaa"]);
        } else if (item_quantity_category.val() == "kipande") {
          $("input[name=price]").val(items.sabuni.kipande);
        } else if (item_quantity_category.val() == "mche jamaa") {
          $("input[name=price]").val(items.sabuni["mche jamaa"]);
        } else if (item_quantity_category.val() == "mche") {
          $("input[name=price]").val(items.sabuni.mche);
        }
      } else if ($("select[name=item_name]").val() == "gazeti") {
        if (item_quantity_category.val() == "kilo") {
          $("input[name=price]").val(items.gazeti.kilo);
        } else if (item_quantity_category.val() == "nusu") {
          $("input[name=price]").val(items.gazeti.nusu);
        } else if (item_quantity_category.val() == "robo") {
          $("input[name=price]").val(items.gazeti.robo);
        } else if (item_quantity_category.val() == "moja") {
          $("input[name=price]").val(items.gazeti.moja);
        }
      } else if ($("select[name=item_name]").val() == "karanga") {
        if (item_quantity_category.val() == "kilo") {
          $("input[name=price]").val(items.karanga.kilo);
        } else if (item_quantity_category.val() == "nusu") {
          $("input[name=price]").val(items.karanga.nusu);
        } else if (item_quantity_category.val() == "robo") {
          $("input[name=price]").val(items.karanga.robo);
        } else if (item_quantity_category.val() == "kijiko") {
          $("input[name=price]").val(items.karanga.kijiko);
        }
      } else if ($("select[name=item_name]").val() == "ngano") {
        if (item_quantity_category.val() == "kilo") {
          $("input[name=price]").val(items.ngano.kilo);
        } else if (item_quantity_category.val() == "nusu") {
          $("input[name=price]").val(items.ngano.nusu);
        } else if (item_quantity_category.val() == "robo") {
          $("input[name=price]").val(items.ngano.robo);
        } else if (item_quantity_category.val() == "robo tatu") {
          $("input[name=price]").val(items.ngano["robo tatu"]);
        }
      } else if ($("select[name=item_name]").val() == "daftari") {
        if (item_quantity_category.val() == "dogo") {
          $("input[name=price]").val(items.daftari.dogo);
        } else if (item_quantity_category.val() == "jumbo kubwa") {
          $("input[name=price]").val(items.daftari["jumbo kubwa"]);
        } else if (item_quantity_category.val() == "page 100") {
          $("input[name=price]").val(items.daftari["page 100"]);
        } else if (item_quantity_category.val() == "msomaji") {
          $("input[name=price]").val(items.daftari.msomaji);
        } else if (item_quantity_category.val() == "counter") {
           counter_type = window.prompt(
            "unaitaji counter book quire ngapi",
            ""
          );
          if (counter_type == 1) {
            $("input[name=price]").val(items.daftari.counter["quire 1"]);
          } else if (counter_type == 2) {
            $("input[name=price]").val(items.daftari.counter["quire 2"]);
          } else if (counter_type == 3) {
            $("input[name=price]").val(items.daftari.counter["quire 3"]);
          } else if (counter_type == 4) {
            $("input[name=price]").val(items.daftari.counter["quire 4"]);
          }
        }
      } else if ($("select[name=item_name]").val() == "rambo") {
        if (item_quantity_category.val() == "paketi") {
          $("input[name=price]").val(items.rambo["paketi"]);
        } else if (item_quantity_category.val() == "nusu") {
          $("input[name=price]").val(items.rambo.nusu);
        }
      }
      else if ($("select[name=item_name]").val() == "pampasi") {
        if (item_quantity_category.val() == "bunda") {
          $("input[name=price]").val(items.items_siblings.pampasi["bunda"]);
        } else if (item_quantity_category.val() == "pisi moja") {
          $("input[name=price]").val(items.items_siblings.pampasi['pisi moja']);
        }
      }
      else if ($("select[name=item_name]").val() == "magufuli") {
        if (item_quantity_category.val() == "kubwa") {
          $("input[name=price]").val(items.items_siblings.magufuli["kubwa"]);
        } else if (item_quantity_category.val() == "ndogo") {
          $("input[name=price]").val(items.items_siblings.magufuli.ndogo);
        }
      }
      
    });
    //event handling on item selection that uses only one selection
    $('select[name=item_name]').on("click", function(){
       if ($("select[name=item_name]").val() == "tambi") {
          $("input[name=price]").val(items.items_siblings.tambi);
          
        }
        else if ($("select[name=item_name]").val() == "pencil") {
          $("input[name=price]").val(items.items_siblings.pencil);
        }
        else if ($("select[name=item_name]").val() == "kifutio") {
          $("input[name=price]").val(items.items_siblings.kifutio);
        }
        else if ($("select[name=item_name]").val() == "wembe") {
          $("input[name=price]").val(items.items_siblings.wembe);
        }
        else if ($("select[name=item_name]").val() == "pen") {
          $("input[name=price]").val(items.items_siblings.pen);
        }
        else if ($("select[name=item_name]").val() == "mswaki") {
          $("input[name=price]").val(items.items_siblings.mswaki);
        }
        else if ($("select[name=item_name]").val() == "ubuyu") {
          $("input[name=price]").val(items.items_siblings.ubuyu);
        }
        else if ($("select[name=item_name]").val() == "GBOOST") {
          $("input[name=price]").val(items.items_siblings.GBOOST);
        }
        else if ($("select[name=item_name]").val() == "powder") {
          $("input[name=price]").val(items.items_siblings.powder);
        }
        else if ($("select[name=item_name]").val() == "baking powder") {
          $("input[name=price]").val(items.items_siblings['baking powder']);
        }
        else if ($("select[name=item_name]").val() == "rungu spray") {
          $("input[name=price]").val(items.items_siblings['rungu spray']);
        }
        else if ($("select[name=item_name]").val() == "chill source") {
          $("input[name=price]").val(items.items_siblings['chill source']);
        }
        else if ($("select[name=item_name]").val() == "manila") {
          $("input[name=price]").val(items.items_siblings.manila);
        }
        else if ($("select[name=item_name]").val() == "mkonge") {
          $("input[name=price]").val(items.items_siblings.mkonge);
        }
        else if ($("select[name=item_name]").val() == "big boss") {
          $("input[name=price]").val(items.items_siblings['big boss']);
        }
        else if ($("select[name=item_name]").val() == "big bom") {
          $("input[name=price]").val(items.items_siblings['big bom']);
        }
        else if ($("select[name=item_name]").val() == "pipi") {
          pipi_type = prompt("ingiza aina ya pipi unazoitaji", "");
          if(pipi_type == "kifua"){
            let pipi_quantity = prompt("ingiza idadi ya pipi unazoitaji", "");
            if(pipi_quantity < 3){
              alert(" umeigiza idadi sio sahihi tafadhari ingiza tena kuanzia 3");
              pipi_quantity = prompt("ingiza upya ", "");
              if(pipi_quantity > 3){
                $("input[name=price]").val(items.items_siblings.pipi.kifua * 1.5);
              }
              else if(pipi_quantity == 3){
                $("input[name=price]").val(items.items_siblings.pipi.kifua);
              }
            }
            else if(pipi_quantity > 3){
                $("input[name=price]").val(items.items_siblings.pipi.kifua * 1.5);
              }
              else if(pipi_quantity == 3){
                $("input[name=price]").val(items.items_siblings.pipi.kifua);
              }
          }
          else if(pipi_type =="ivory" || pipi_type =="maziwa"){
            $("input[name=price]").val(items.items_siblings.pipi.ivory);
          }
        }
    });

    //event handling on input of qauntity needed
    $("input[name=quantity]").on("input", function () {
      if ($("select[name=item_name]").val() == "mafuta") {
        if (item_quantity_category.val() == "lita") {
          $("input[name=price]").val(items.mafuta.lita * $(this).val());
        } else if (item_quantity_category.val() == "nusu") {
          $("input[name=price]").val(items.mafuta.nusu * $(this).val());
        } else if (item_quantity_category.val() == "robo") {
          $("input[name=price]").val(items.mafuta.robo * $(this).val());
        } else if (item_quantity_category.val() == "robo tatu") {
          $("input[name=price]").val(items.mafuta["robo tatu"] * $(this).val());
        } else if (item_quantity_category.val() == "kichoteo kidogo") {
          $("input[name=price]").val(
            items.mafuta["kichoteo kidogo"] * $(this).val()
          );
        } else if (item_quantity_category.val() == "kichoteo kikubwa") {
          $("input[name=price]").val(
            items.mafuta["kichoteo kikubwa"] * $(this).val()
          );
        }
      } else if ($("select[name=item_name]").val() == "unga") {
        if (item_quantity_category.val() == "kilo") {
          $("input[name=price]").val(items.unga.kilo * $(this).val());
        } else if (item_quantity_category.val() == "nusu") {
          $("input[name=price]").val(items.unga.nusu * $(this).val());
        } else if (item_quantity_category.val() == "robo") {
          $("input[name=price]").val(items.unga.robo * $(this).val());
        } else if (item_quantity_category.val() == "robo tatu") {
          $("input[name=price]").val(items.unga["robo tatu"] * $(this).val());
        }
      } else if ($("select[name=item_name]").val() == "sukari") {
        if (item_quantity_category.val() == "kilo") {
          $("input[name=price]").val(items.sukari.kilo * $(this).val());
        } else if (item_quantity_category.val() == "nusu") {
          $("input[name=price]").val(items.sukari.nusu * $(this).val());
        } else if (item_quantity_category.val() == "robo") {
          $("input[name=price]").val(items.sukari.robo * $(this).val());
        } else if (item_quantity_category.val() == "robo tatu") {
          $("input[name=price]").val(items.sukari["robo tatu"] * $(this).val());
        }
      } else if ($("select[name=item_name]").val() == "sabuni") {
        if (item_quantity_category.val() == "kipande jamaa") {
          $("input[name=price]").val(
            items.sabuni["kipande jamaa"] * $(this).val()
          );
        } else if (item_quantity_category.val() == "kipande") {
          $("input[name=price]").val(items.sabuni.kipande * $(this).val());
        } else if (item_quantity_category.val() == "mche") {
          $("input[name=price]").val(items.sabuni.mche * $(this).val());
        } else if (item_quantity_category.val() == "mche jamaa") {
          $("input[name=price]").val(
            items.sabuni["mche jamaa"] * $(this).val()
          );
        }
      } else if ($("select[name=item_name]").val() == "gazeti") {
        if (item_quantity_category.val() == "kilo") {
          $("input[name=price]").val(items.gazeti.kilo * $(this).val());
        } else if (item_quantity_category.val() == "nusu") {
          $("input[name=price]").val(items.gazeti.nusu * $(this).val());
        } else if (item_quantity_category.val() == "robo") {
          $("input[name=price]").val(items.gazeti.robo * $(this).val());
        } else if (item_quantity_category.val() == "moja") {
          $("input[name=price]").val(items.gazeti.moja * $(this).val());
        }
      } else if ($("select[name=item_name]").val() == "karanga") {
        if (item_quantity_category.val() == "kilo") {
          $("input[name=price]").val(items.karanga.kilo * $(this).val());
        } else if (item_quantity_category.val() == "nusu") {
          $("input[name=price]").val(items.karanga.nusu * $(this).val());
        } else if (item_quantity_category.val() == "robo") {
          $("input[name=price]").val(items.karanga.robo * $(this).val());
        } else if (item_quantity_category.val() == "kijiko") {
          $("input[name=price]").val(items.karanga.kijiko * $(this).val());
        }
      } else if ($("select[name=item_name]").val() == "ngano") {
        if (item_quantity_category.val() == "kilo") {
          $("input[name=price]").val(items.ngano.kilo * $(this).val());
        } else if (item_quantity_category.val() == "nusu") {
          $("input[name=price]").val(items.ngano.nusu * $(this).val());
        } else if (item_quantity_category.val() == "robo") {
          $("input[name=price]").val(items.ngano.robo * $(this).val());
        } else if (item_quantity_category.val() == "robo tatu") {
          $("input[name=price]").val(items.ngano["robo tatu"] * $(this).val());
        }
      } 
      if ($("select[name=item_name]").val() == "daftari") {
        if (item_quantity_category.val() == "dogo") {
          $("input[name=price]").val(items.daftari.dogo * $(this).val());
        } else if (item_quantity_category.val() == "jumbo kubwa") {
          $("input[name=price]").val(items.daftari['jumbo kubwa'] * $(this).val());
        } else if (item_quantity_category.val() == "msomaji") {
          $("input[name=price]").val(items.daftari.msomaji * $(this).val());
        } else if (item_quantity_category.val() == "page 100") {
          $("input[name=price]").val(items.daftari["page 100"] * $(this).val());
        } 
        else if (item_quantity_category.val() == "counter") {
          if (counter_type == 1) {
            $("input[name=price]").val(items.daftari.counter["quire 1"] * $(this).val());
          } else if (counter_type == 2) {
            $("input[name=price]").val(items.daftari.counter["quire 2"] * $(this).val());
          } else if (counter_type == 3) {
            $("input[name=price]").val(items.daftari.counter["quire 3"] * $(this).val());
          } else if (counter_type == 4) {
            $("input[name=price]").val(items.daftari.counter["quire 4"] * $(this).val());
          }
        }
      }
      else if ($("select[name=item_name]").val() == "rambo") {
        if (item_quantity_category.val() == "paketi") {
          $("input[name=price]").val(
            items.rambo["paketi"] * $(this).val()
          );
        } else if (item_quantity_category.val() == "nusu") {
          $("input[name=price]").val(items.rambo.nusu * $(this).val());
        }
      }
      else if ($("select[name=item_name]").val() == "pampasi") {
        if (item_quantity_category.val() == "bunda") {
          $("input[name=price]").val(
            items.items_siblings.pampasi.bunda * $(this).val()
          );
        } else if (item_quantity_category.val() == "pisi moja") {
          $("input[name=price]").val(items.items_siblings.pampasi['pisi moja'] * $(this).val());
        }
      }
      else if ($("select[name=item_name]").val() == "magufuli") {
        if (item_quantity_category.val() == "kubwa") {
          $("input[name=price]").val(
            items.items_siblings.magufuli.kubwa * $(this).val()
          );
        } else if (item_quantity_category.val() == "ndogo") {
          $("input[name=price]").val(items.items_siblings.magufuli.ndogo * $(this).val());
        }
      }

      else if ($("select[name=item_name]").val() == "tambi") {
          $("input[name=price]").val(items.items_siblings.tambi * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "pencil") {
          $("input[name=price]").val(items.items_siblings.pencil * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "kifutio") {
          $("input[name=price]").val(items.items_siblings.kifutio * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "wembe") {
          $("input[name=price]").val(items.items_siblings.wembe * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "pen") {
          $("input[name=price]").val(items.items_siblings.pen * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "mswaki") {
          $("input[name=price]").val(items.items_siblings.mswaki * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "ubuyu") {
          $("input[name=price]").val(items.items_siblings.ubuyu * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "GBOOST") {
          $("input[name=price]").val(items.items_siblings.GBOOST * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "powder") {
          $("input[name=price]").val(items.items_siblings.powder * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "baking powder") {
          $("input[name=price]").val(items.items_siblings['baking powder'] * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "rungu spray") {
          $("input[name=price]").val(items.items_siblings['rungu spray'] * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "chill source") {
          $("input[name=price]").val(items.items_siblings['chill source'] * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "manila") {
          $("input[name=price]").val(items.items_siblings.manila * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "mkonge") {
          $("input[name=price]").val(items.items_siblings.mkonge * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "big boss") {
          $("input[name=price]").val(items.items_siblings['big boss'] * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "big bom") {
          $("input[name=price]").val(items.items_siblings['big bom'] * $(this).val());
        }
        else if ($("select[name=item_name]").val() == "pipi") {
          if(pipi_type == "kifua"){
             $("input[name=price]").val(items.items_siblings.pipi.kifua * $(this).val());
          }
          else if(pipi_type == "ivory" || pipi_type == "maziwa"){
            $("input[name=price]").val(items.items_siblings.pipi.ivory * $(this).val());
          }    
        }
    });
  });
  //handling payment method
  $('select[name=pay_method]').click(function(){
    if($(this).val() == "bank"){
      let card_number = prompt("ingiza namba yako ya kadi ya benki");
      $('form').on("submit", function(){
         let secrety_key = prompt("unataarifiwa kuwa kiasi cha  "+$('input[name=price]').val()+
          "kitakatwa kutoka kwenye akaunti yako yenye namba " 
          +card_number+" ingiza namba ya siri kudhibitisha", "");


      });
    }
    else if($(this).val() == "lipa namba"){
       let lipa = prompt("ingiza lipa namba hii 5422 4974 apa kulipia","");
       $('form').submit(function(){
        let yes = prompt("unalipa kiasi cha "+ $('input[name=price]').val()+
         " kwenda "+lipa+" jina Mr.shop weka 1 kudhibitisha" ,"")
       })
    }
  })
  //handling users 
  $('#home_link').on(function(){
    console.log('----------------writing nothing');
  })
  //handling body-content backgrounds
  $('.body-content').find('.next').on('click',function(){
    // alert('next clicked');
    $('.body-content').css({'background-image': `${'static/media/lunch.jpg'}`});
    console.log('background set');
  })
  //controlling nav moves
  $(document).on('scroll',function(){
    $('.navbar-top').css({'position': "sticky"});
  })
});
