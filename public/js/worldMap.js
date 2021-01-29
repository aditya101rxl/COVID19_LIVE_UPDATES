// import "https://www.gstatic.com/charts/loader.js"


google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

let t_case = 0
let t_recovered = 0
let t_death = 0
let t_active = 0
function drawRegionsMap() {
    // coronavirus country wise data 

    fetch("https://rapidapi.p.rapidapi.com/api", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
            "x-rapidapi-key": "04a3ed855fmsh260396fe2f34e8ep10e61djsna92131318642"
        }
    })
    .then(response => {
        return response.json();
        // console.log('msg : ', response);
    })
    .then(data => {
        var table = [['Country', 'Cases', 'Recovered']];
        data = data.countries_stat;
        
        // these country have diff code and name so using map to set it
        const myMap = new Map();
        myMap.set('Congo', 'CD');
        myMap.set('South Sudan', 'SS');
        myMap.set('USA', 'United States');
        myMap.set('Thailand', 'TH');
        
        data.forEach(ele => {
            // lst = [ele.country_name, ele.cases, ele.total_recovered];
            country = ele.country_name;
            if (myMap.get(country) != undefined) country = myMap.get(country);
            cases = "";
                recovered = "";
                ele.cases.split(',').forEach(ele => cases += ele);
                ele.total_recovered.split(',').forEach(ele => recovered += ele);
                t_case += Number(cases);
                t_recovered += ((recovered == "N/A") ? 0 : Number(recovered));
                t_death += Number(ele.deaths.replace(",", ""));
                table.push([country, Number(cases), Number(recovered)]);
                // console.log(typeof ele.country_name, typeof ele.cases, typeof ele.total_recovered);
            });
            
            var data = google.visualization.arrayToDataTable(table);
            // console.log('mydata: ', data);
            var options = {
                colorAxis: { colors: ['red'] },
                backgroundColor: '#161629',
                datalessRegionColor: '#f8bbd0',
                defaultColor: '#f5f5f5',
            };

            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
            
            chart.draw(data, options);
            google.visualization.events.addListener(chart, 'regionClick', selectHandler);
            
            t_active = t_case - (t_death + t_recovered);
            document.querySelector('.confirmed h1').innerHTML = t_case;
            document.querySelector('.active h1').innerHTML = t_active
            document.querySelector('.death h1').innerHTML = t_death
            document.querySelector('.recovered h1').innerHTML = t_recovered
            
            
            function selectHandler(e) {
                window.scrollTo(0, 600)
                fatchData(e.region);
                // console.log(e);
            }
        })
        .catch(err => {
            alert(err + " Geomap");
        });
    fatchData("IN");
}
