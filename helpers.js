   var count = 0; 

      var active_type = "all";

      $(document).ready(function() {
        //loadDataPrim()
        //loadDataSec()
        loadHome()
      })
/*
        var container_div_1 = $("<div>")
        $("container_div_1").html("")
        container_div_1.attr('class',"container")
        $("#parent").append(container_div_1)
        var itemList = $("<div id='item_list'>")
        var label = $("<h1>")
        label.text(labels[active_type])
        $("#parent").append(itemList)
*/
function loadDataPrim(){

       document.getElementById("parent").innerHTML = "";
       //document.getElementById("homepage").innerHTML ="";
       document.getElementById("homepage").style.visibility = "hidden";

        var container_div_1 = $("<div>")
        $("container_div_1").html("")
        container_div_1.attr('class',"container")
        $("#parent").append(container_div_1)

        var itemList = $("<div id='item_list'>")
        var label = $("<h1>")
        label.text(labels[active_type])
        $("#parent").append(itemList)


        count = 0

        var row = $("<div>")
        row.attr('class', "row")
        $("row").html("")
        $(container_div_1).append(row)

        numcol = 3; 
        currcol = 1; 
        currrow = 1; 

        for(d in data){

          var i = 0; 
          var item = data[d]

          var container_div = $("<div id='item_"+item['id']+"' class='container_div'>")

          var caption = item.num + item.image_src
          container_div.append("<br>" + caption.bold())
          var catcap = item.cap 
          container_div.append("<br>" + catcap + "<br>")
          var image_div = $("<img style='width:60%'>").attr("src", item['image_src'])
          container_div.append(image_div) 


          for (c in item['primary_category']) {
            if (item['primary_category'][c] == active_type) {
                  count++
                  //$("#item_list").append(container_div)
                  if (currcol <= numcol)
                  {
                    currcol++;
                    col = $("<div>")
                    col.attr("class", "col-md")
                    $(row).append(col)  
                    $(col).html(container_div)
                  }
                  else 
                  {
                    currcol = 2;
                    row = $("<div>")
                    row.attr('class', "row")
                    $(container_div_1).append(row)
                    col = $("<div>")
                    col.attr("class", "col-md")
                    $(row).append(col) 
                    $(col).html(container_div)
                  }
            }
          }
        }
        
        changeCount()

      }  

      var loadDataSec = function(){

        document.getElementById("parent").innerHTML = "";
        document.getElementById("homepage").style.visibility = "hidden";

        var container_div_1 = $("<div>")
        $("container_div_1").html("")
        container_div_1.attr('class',"container")
        $("#parent").append(container_div_1)

        var itemList = $("<div id='item_list'>")
        var label = $("<h1>")
        label.text(labels[active_type])
        $("#parent").append(itemList)

        count = 0
        $("#item_list").remove()
        var row = $("<div>")
        row.attr('class', "row")
        $("row").html("")
        $(container_div_1).append(row)

        numcol = 3; 
        currcol = 1; 
        currrow = 1; 

        for(d in data){

          var i = 0; 
          var item = data[d]

          var container_div = $("<div id='item_"+item['id']+"' class='container_div'>")

          var caption = item.num + item.image_src
          container_div.append("<br>" + caption.bold())
          var catcap = item.cap 
          container_div.append("<br>" + catcap + "<br>")
          var image_div = $("<img style='width:60%'>").attr("src", item['image_src'])
          container_div.append(image_div) 

          for (c in item['secondary_categories']) {
            if (item['secondary_categories'][c] == active_type) {
                  count++
                  //$("#item_list").append(container_div)
                  if (currcol <= numcol)
                  {
                    currcol++;
                    col = $("<div>")
                    col.attr("class", "col-md")
                    $(row).append(col)  
                    $(col).html(container_div)
                  }
                  else 
                  {
                    currcol = 2;
                    row = $("<div>")
                    row.attr('class', "row")
                    $(container_div_1).append(row)
                    col = $("<div>")
                    col.attr("class", "col-md")
                    $(row).append(col) 
                    $(col).html(container_div)
                 }
            }
          }

        }
        
        changeCount()

      }  

      var setActivePrim = function(type) {
        console.log("setActivePrim")
        active_type = type
        loadDataPrim() 
      }    

      var setActiveSec = function(type) {
        console.log("setActiveSec")
        active_type = type 
        loadDataSec()
      }

     var changeHeader =  function (name) {
         $("#myHeader").contents().filter(function(){ return this.nodeType != 1; }).remove();
         $("#myHeader").append(name)
      }

      var changeCount = function() {
          $("#counter").contents().filter(function(){ return this.nodeType != 1; }).remove();
          $("#counter").append('Number of animations:   ' + count); 
      }

      var loadHome = function() {
         document.getElementById("parent").innerHTML = "";
         document.getElementById("myHeader").innerHTML = "";
         document.getElementById("counter").innerHTML = "";
         document.getElementById("homepage").style.visibility = "visible";
      }

      /*
             /* col1 = $("<div>")
        col1.attr("class", "col-md")
        $(new_row).append(col1)
        //$(col1).html("col1")
        col2 = $("<div>")
        col2.attr("class", "col-md")
        $(new_row).append(col2)
        //$(col2).html("col222222")
        col3 = $("<div>")
        col3.attr("class", "col-md")
        $(new_row).append(col3)
        //$(col3).html("33333")
        col4 = $("<div>")
        col4.attr("class", "col-md")
        $(new_row).append(col4)
        //$(col4).html("444")
         new row 
        var new_row_2 = $("<div>")
        new_row_2.attr('class', "row")
        $(container_div).append(new_row_2)
        col1_2 = $("<div>")
        col1_2.attr("class", "col-md-4")
        $(new_row_2).append(col1_2)
        //$(col1_2).html("col1_2")
*/
