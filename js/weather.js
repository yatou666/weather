{

    $.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",
    function () {

        var data=remote_ip_info;
        var city=data.city;

    })

    function getWeather(city) {
   // $(".now_city_name").html(str);
    $.ajax({
        url:"http://api.jisuapi.com/weather/query?appkey=beb4b8fbbda90b1a&city="+city,
        dataType:"jsonp",
        success:function (r) {
            //let data=r.result.daily;
            let date=r.result;

            //console.log(data);

            console.log(r);
            let strrr=r.result.daily[0].date
            let str22=strrr.slice(5)
            console.log(strrr);
            console.log(str22);
            let str="";
            str+=`<section id="now">
                    <h1 class="now_city">
			            <span class="address_icon">&#xe62e;</span>
			            <span class="now_city_name">${city}</span>
			            <span class="more">+</span>
		            </h1>
		            <!-- 当前空气质量 -->
                    <div class="now_air">
                        <h1>空气</h1>
                        <h2>${r.result.aqi.quality}</h2>
                    </div>
                    <!-- 当前温度 -->
                    <div class="now_temp">
                        <span>${r.result.temp}</span>°
                    </div>
                    <!-- 当前天气 -->
                    <div class="now_weather">${r.result.weather}</div>
                    <!-- 当前风向 -->
                    <div class="now_wind">
                        ${r.result.winddirect}
                        ${r.result.windpower}
                    </div>
                    <!-- 一句话 -->
                    <div class="now_word">${r.result.index[0].detail}</div>  
</section>
<!-- 今明天气框 -->
	<section id="future">
		<div class="future_box today">
			<div class="future_top">				
				<span class="future_date">今天</span>
				<p>
					<span class="today_hightemp">${r.result.temphigh}</span>/
					<span class="today_lowtemp">${r.result.templow}</span>		
				</p>
			</div>
			<div class="future_top">				
				<span class="future_weather">多云</span>
				<div class="today_img">
					<img src="images/${r.result.img}.png" alt="">
				</div>
			</div>
		</div>

		<div class="future_box today tomorrow">
			<div class="future_top">				
				<span class="future_date">明天</span>
				<p>
					<span class="today_hightemp">5</span>/
					<span class="today_lowtemp">-7°</span>		
				</p>
			</div>
			<div class="future_top">				
				<span class="future_weather">多云</span>
				<div class="today_img">
					<img src="images/1.png" alt="">
				</div>
			</div>
		</div>
		
	</section>

<!-- 二十四小时 -->
  
	<ul id="hours">
		<li>
			<h1 class="hours_time">${r.result.hourly[0].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[0].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[0].temp}</span>°</h2>
		</li>
        <li>
			<h1 class="hours_time">${r.result.hourly[1].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[1].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[1].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[2].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[2].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[2].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[3].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[3].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[3].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[4].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[4].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[4].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[5].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[5].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[5].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[5].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[5].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[5].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[7].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[7].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[7].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[8].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[8].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[8].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[9].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[9].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[9].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[10].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[10].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[10].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[11].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[11].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[11].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[12].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[12].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[12].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[13].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[13].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[13].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[14].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[14].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[14].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[15].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[15].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[15].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[16].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[16].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[16].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[17].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[17].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[17].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[18].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[18].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[18].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[19].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[19].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[19].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[20].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[20].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[20].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[21].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[21].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[21].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[22].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[22].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[22].temp}</span>°</h2>
		</li>
		<li>
			<h1 class="hours_time">${r.result.hourly[23].time}</h1>
			<div class="hours_image">
				<img src="images/${r.result.hourly[23].img}.png" alt="">
			</div>
			<h2 class="hours_temp"><span>${r.result.hourly[23].temp}</span>°</h2>
		</li>
		
		
	</ul>
	
	<!-- 未来一周 -->
	<ul id="date">
		<li>
			<div class="date_date"><p>${r.result.daily[0].date.slice(5)}</p></div>
			<div class="date_tianqi"><p>${r.result.daily[0].day.weather}</p></div>
			<div class="date_image">
				<img src="images/${r.result.daily[0].day.img}.png" alt="">
			</div>
			<div class="date_maxtemp"><p>${r.result.daily[0].day.temphigh}℃</p></div>
			<div class="date_mintemp"><p>${r.result.daily[0].night.templow}℃</p></div>
			<div class="date_windposition"><p>${r.result.daily[0].day.winddirect}</p></div>
			<p class="date_windlevel">${r.result.daily[0].day.windpower}</p>	
		</li>
        <li>
			<div class="date_date"><p>${r.result.daily[1].date.slice(5)}</p></div>
			<div class="date_tianqi"><p>${r.result.daily[1].day.weather}</p></div>
			<div class="date_image">
				<img src="images/${r.result.daily[1].day.img}.png" alt="">
			</div>
			<div class="date_maxtemp"><p>${r.result.daily[1].day.temphigh}℃</p></div>
			<div class="date_mintemp"><p>${r.result.daily[1].night.templow}℃</p></div>
			<div class="date_windposition"><p>${r.result.daily[1].day.winddirect}</p></div>
			<p class="date_windlevel">${r.result.daily[1].day.windpower}</p>	
		</li>
		<li>
			<div class="date_date"><p>${r.result.daily[2].date.slice(5)}</p></div>
			<div class="date_tianqi"><p>${r.result.daily[2].day.weather}</p></div>
			<div class="date_image">
				<img src="images/${r.result.daily[2].day.img}.png" alt="">
			</div>
			<div class="date_maxtemp"><p>${r.result.daily[2].day.temphigh}℃</p></div>
			<div class="date_mintemp"><p>${r.result.daily[2].night.templow}℃</p></div>
			<div class="date_windposition"><p>${r.result.daily[2].day.winddirect}</p></div>
			<p class="date_windlevel">${r.result.daily[2].day.windpower}</p>	
		</li>
        <li>
			<div class="date_date"><p>${r.result.daily[3].date.slice(5)}</p></div>
			<div class="date_tianqi"><p>${r.result.daily[3].day.weather}</p></div>
			<div class="date_image">
				<img src="images/${r.result.daily[3].day.img}.png" alt="">
			</div>
			<div class="date_maxtemp"><p>${r.result.daily[3].day.temphigh}℃</p></div>
			<div class="date_mintemp"><p>${r.result.daily[3].night.templow}℃</p></div>
			<div class="date_windposition"><p>${r.result.daily[3].day.winddirect}</p></div>
			<p class="date_windlevel">${r.result.daily[3].day.windpower}</p>	
		</li>
		<li>
			<div class="date_date"><p>${r.result.daily[4].date.slice(5)}</p></div>
			<div class="date_tianqi"><p>${r.result.daily[4].day.weather}</p></div>
			<div class="date_image">
				<img src="images/${r.result.daily[4].day.img}.png" alt="">
			</div>
			<div class="date_maxtemp"><p>${r.result.daily[4].day.temphigh}℃</p></div>
			<div class="date_mintemp"><p>${r.result.daily[4].night.templow}℃</p></div>
			<div class="date_windposition"><p>${r.result.daily[4].day.winddirect}</p></div>
			<p class="date_windlevel">${r.result.daily[4].day.windpower}</p>	
		</li>
        <li>
			<div class="date_date"><p>${r.result.daily[5].date.slice(5)}</p></div>
			<div class="date_tianqi"><p>${r.result.daily[5].day.weather}</p></div>
			<div class="date_image">
				<img src="images/${r.result.daily[5].day.img}.png" alt="">
			</div>
			<div class="date_maxtemp"><p>${r.result.daily[5].day.temphigh}℃</p></div>
			<div class="date_mintemp"><p>${r.result.daily[5].night.templow}℃</p></div>
			<div class="date_windposition"><p>${r.result.daily[5].day.winddirect}</p></div>
			<p class="date_windlevel">${r.result.daily[5].day.windpower}</p>	
		</li>
		<li>
			<div class="date_date"><p>${r.result.daily[6].date.slice(5)}</p></div>
			<div class="date_tianqi"><p>${r.result.daily[6].day.weather}</p></div>
			<div class="date_image">
				<img src="images/${r.result.daily[6].day.img}.png" alt="">
			</div>
			<div class="date_maxtemp"><p>${r.result.daily[6].day.temphigh}℃</p></div>
			<div class="date_mintemp"><p>${r.result.daily[6].night.templow}℃</p></div>
			<div class="date_windposition"><p>${r.result.daily[6].day.winddirect}</p></div>
			<p class="date_windlevel">${r.result.daily[6].day.windpower}</p>	
		</li>

		
		

	</ul>
`


            //console.log(str);
            $("body").html(str);
        }
    });

}

    //选择城市
    $(".more").click(function () {
        $("#citys").show();
       // console.log($(".cityname"))

        var data=[];//存放所有数据
        var province=[];//存放所有省的数据
        var city=[];//存放某个省的所有市

        $.ajax({
            url:"http://api.jisuapi.com/weather/city?appkey=beb4b8fbbda90b1a&city="+city,
            dataType:"jsonp",
            success:function (r) {
                data=r.result;
                province=$.grep(data,function (val,index) {
                    if(val.parentid==="0"){
                        return true;
                    }
                });
                let str="";
                $.each(province,function (index,val) {
                    //console.log(val);
                    str+=`<p class="province" id="${val.cityid}">${val.city}</p>`
                });
                $(".cityname").html(str);

                $(".cityname").on("click",".province",function () {

                  //  console.log($(this));
                    var id=$(this).attr("id");
                    city=$.grep(data,function (val,index) {//数据过滤
                        if(val.parentid===id){
                            return true;
                        }
                    });
                    let str="";
                    $.each(city,function (index,val) {
                        str+=`<div class="city">${val.city}</div>`
                    });

                    // $(".mask").empty();
                    $(".cityname").html(str);
                    //console.log(str);
                });

                //点击城市
                $(".cityname").on("click",".city",function () {
                    $(".cityname").hide();
                    getWeather($(this).html())
                });
            }
        })
    })
}