function changeTable() {
    var wrapper = document.querySelector('.price_wrapper');
    var headers = document.querySelectorAll('.price_table_header p');
    var table = document.querySelector('.price_table');
    var tableRow = document.querySelectorAll('.price_table tr');
    var price = document.querySelector('.site_price');
    var site = document.querySelector('.site_form');
    var secondColum = document.querySelectorAll('.price_table tr td:nth-child(2)');
    var thirdColumn = document.querySelectorAll('.price_table tr td:nth-child(3)');
    var sites = [ '<th></th><th>Basic</th><th>Standart</th><th>Premium</th>', '<th></th><th>Standart</th><th>Premium</th>',  '<th></th><th>Standart</th><th>Premium</th>'        
    ];
    var prices = [ '<th></th><th>600$</th><th>900$</th><th>1200$</th>', '<th></th><th>2300$</th><th>3000$</th>',  '<th></th><th>3000$</th><th>3900$</th>'        
    ];
    
    function activeHeader() {
        if(wrapper.offsetWidth < 935) return;
        var el = event.target;
        for(var i = 0; i < headers.length; i++) {
            headers[i].style.opacity = '0.5';
            headers[i].style.borderBottom = '0';
        }
        el.style.opacity = '1';
        el.style.borderBottom = '3px solid #fff';
    }
    function changeText() {
        if(wrapper.offsetWidth < 935) return;
        var el = event.target;
        for(var i = 0; i < headers.length; i++) {
            if(el == headers[i]) {
                
                price.innerHTML = prices[i];
                site.innerHTML = sites[i];
                                
                if(el == headers[1] || el == headers[2]) 
                {
                for(var i = 0; i < secondColum.length; i++) {
                    Velocity(tableRow[i+2], { rotateY: '90deg'}, 0);
                    secondColum[i].remove();
                    tableRow[tableRow.length - 1].remove();
                    Velocity(tableRow[i+2], { rotateY: '0deg'}, 800);
                }
            }
                if(el == headers[0]) {
                for(var i = 0; i < secondColum.length; i++) {
                    Velocity(tableRow[i+2], { rotateY: '90deg'}, 0);
                    tableRow[i+2].insertBefore(secondColum[i], thirdColumn[i]);
                    table.insertBefore(tableRow[tableRow.length - 1], null);
                    tableRow[tableRow.length - 2].style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
                    Velocity(tableRow[i+2], { rotateY: '0deg'}, 800);
                }
                
            }
        }
    }
          }
    for(var i = 0; i < headers.length; i++) {
        headers[i].addEventListener('click', activeHeader);
    }
    for(var i = 0; i < headers.length; i++) {
        headers[i].addEventListener('click', changeText);
    }

};

        changeTable();