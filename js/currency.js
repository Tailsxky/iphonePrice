// Load exchange rates data via AJAX:
    $.getJSON(
    	// NB: using Open Exchange Rates here, but you can use any source!
        'https://openexchangerates.org/api/latest.json?app_id=266b73b81542459595f32538d28ab6bb',
        function(data) {
            // Check money.js has finished loading:
            if ( typeof fx !== "undefined" && fx.rates ) {
                fx.rates = data.rates;
                fx.base = data.base;
            } else {
                // If not, apply to fxSetup global:
                var fxSetup = {
                    rates : data.rates,
                    base : data.base
                }
            }
            currencyRate = fx(1).from("HKD").to("CNY").toFixed(3);
        }
);

//console.log(list);
//console.log(currencyRate);

	var iphone8 = {
			small64G: 5988,
			large256G: 7288

	};

    var iphone8P = {
            small64G:6888,
            large256G:8188
    };

    var iphoneX = {
            small64G:8588,
            large256G:9888
    };

	var checkPrice = function(){

	//console.log(currency);
	//var currency = document.getElementById("currency").value;
	var iphone8small64GsalePrice = (iphone8.small64G + 100) * currencyRate + 40 + 200;
	//var ip128salePrice = (iphone8.middle + 100) * currencyRate + 40 + 150;
	var iphone8large256GsalePrice = (iphone8.large256G + 100) * currencyRate + 40 + 200;
    var iphone8Psmall64GsalePrice = (iphone8P.small64G + 100) * currencyRate + 40 + 200;
    var iphone8Plarge256GsalePrice = (iphone8P.large256G + 100) * currencyRate + 40 + 200;
    var iphoneXsmall64GsalePrice = (iphoneX.small64G + 100) * currencyRate + 40 + 200;
    var iphoneXlarge256GsalePrice = (iphoneX.large256G + 100) * currencyRate + 40 + 200;


    //original price

    document.getElementById("iphone8-64g-applePrice").innerHTML = iphone8.small64G;
    document.getElementById("iphone8-256g-applePrice").innerHTML = iphone8.large256G;
    document.getElementById("iphone8P-64g-applePrice").innerHTML = iphone8P.small64G;
    document.getElementById("iphone8P-256g-applePrice").innerHTML = iphone8P.large256G;
    document.getElementById("iphoneX-64g-applePrice").innerHTML = iphoneX.small64G;   
    document.getElementById("iphoneX-256g-applePrice").innerHTML = iphoneX.large256G;    
   



	document.getElementById("iphone8-64g-salePrice").innerHTML = iphone8small64GsalePrice.toFixed(0);
	//document.getElementById("ip128salePrice").innerHTML = ip128salePrice.toFixed(0);
	document.getElementById("iphone8-256g-salePrice").innerHTML = iphone8large256GsalePrice.toFixed(0);

    document.getElementById("iphone8P-64g-salePrice").innerHTML = iphone8Psmall64GsalePrice.toFixed(0);
    document.getElementById("iphone8P-256g-salePrice").innerHTML = iphone8Plarge256GsalePrice.toFixed(0);

    document.getElementById("iphoneX-64g-salePrice").innerHTML = iphoneXsmall64GsalePrice.toFixed(0);
    document.getElementById("iphoneX-256g-salePrice").innerHTML = iphoneXlarge256GsalePrice.toFixed(0);

	document.getElementById("rate").innerHTML = "今日港元兑人民币汇率为：" + currencyRate;

	};