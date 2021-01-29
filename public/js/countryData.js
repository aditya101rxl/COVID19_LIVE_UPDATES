// let country_list = [
//     { name: 'USA', code: 'US' },
//     { name: 'Spain', code: 'ES' },
//     { name: 'Italy', code: 'IT' },
//     { name: 'France', code: 'FR' },
//     { name: 'Germany', code: 'DE' },
//     { name: 'UK', code: 'GB' },
//     { name: 'Turkey', code: 'TR' },
//     { name: 'Iran', code: 'IR' },
//     { name: 'Russia', code: 'RU' },
//     { name: 'Belgium', code: 'BE' },
//     { name: 'Brazil', code: 'BR' },
//     { name: 'Canada', code: 'CA' },
//     { name: 'Netherlands', code: 'NL' },
//     { name: 'Switzerland', code: 'CH' },
//     { name: 'Portugal', code: 'PT' },
//     { name: 'India', code: 'IN' },
//     { name: 'Ireland', code: 'IE' },
//     { name: 'Austria', code: 'AT' },
//     { name: 'Peru', code: 'PE' },
//     { name: 'Sweden', code: 'SE' },
//     { name: 'Japan', code: 'JP' },
//     { name: 'S. Korea', code: 'KR' },
//     { name: 'Chile', code: 'CL' },
//     { name: 'Saudi Arabia', code: 'SA' },
//     { name: 'Poland', code: 'PL' },
//     { name: 'Ecuador', code: 'EC' },
//     { name: 'Romania', code: 'RO' },
//     { name: 'Pakistan', code: 'PK' },
//     { name: 'Mexico', code: 'MX' },
//     { name: 'Denmark', code: 'DK' },
//     { name: 'Norway', code: 'NO' },
//     { name: 'UAE', code: 'AE' },
//     { name: 'Czechia', code: 'CZ' },
//     { name: 'Australia', code: 'AU' },
//     { name: 'Singapore', code: 'SG' },
//     { name: 'Indonesia', code: 'ID' },
//     { name: 'Serbia', code: 'RS' },
//     { name: 'Philippines', code: 'PH' },
//     { name: 'Ukraine', code: 'UA' },
//     { name: 'Qatar', code: 'QA' },
//     { name: 'Malaysia', code: 'MY' },
//     { name: 'Belarus', code: 'BY' },
//     { name: 'Dominican Republic', code: 'DO' },
//     { name: 'Panama', code: 'PA' },
//     { name: 'Finland', code: 'FI' },
//     { name: 'Colombia', code: 'CO' },
//     { name: 'Luxembourg', code: 'LU' },
//     { name: 'South Africa', code: 'ZA' },
//     { name: 'Egypt', code: 'EG' },
//     { name: 'Argentina', code: 'AR' },
//     { name: 'Morocco', code: 'MA' },
//     { name: 'Thailand', code: 'TH' },
//     { name: 'Algeria', code: 'DZ' },
//     { name: 'Moldova', code: 'MD' },
//     { name: 'Bangladesh', code: 'BD' },
//     { name: 'Greece', code: 'GR' },
//     { name: 'Hungary', code: 'HU' },
//     { name: 'Kuwait', code: 'KW' },
//     { name: 'Bahrain', code: 'BH' },
//     { name: 'Croatia', code: 'HR' },
//     { name: 'Iceland', code: 'IS' },
//     { name: 'Kazakhstan', code: 'KZ' },
//     { name: 'Uzbekistan', code: 'UZ' },
//     { name: 'Estonia', code: 'EE' },
//     { name: 'Iraq', code: 'IQ' },
//     { name: 'New Zealand', code: 'NZ' },
//     { name: 'Azerbaijan', code: 'AZ' },
//     { name: 'Slovenia', code: 'SI' },
//     { name: 'Lithuania', code: 'LT' },
//     { name: 'Armenia', code: 'AM' },
//     { name: 'Bosnia and Herzegovina', code: 'BA' },
//     { name: 'Oman', code: 'OM' },
//     { name: 'North Macedonia', code: 'MK' },
//     { name: 'Slovakia', code: 'SK' },
//     { name: 'Cuba', code: 'CU' },
//     { name: 'Hong Kong', code: 'HK' },
//     { name: 'Cameroon', code: 'CM' },
//     { name: 'Afghanistan', code: 'AF' },
//     { name: 'Bulgaria', code: 'BG' },
//     { name: 'Tunisia', code: 'TN' },
//     { name: 'Ghana', code: 'GH' },
//     { name: 'Ivory Coast', code: 'CI' },
//     { name: 'Cyprus', code: 'CY' },
//     { name: 'Djibouti', code: 'DJ' },
//     { name: 'Latvia', code: 'LV' },
//     { name: 'Andorra', code: 'AD' },
//     { name: 'Lebanon', code: 'LB' },
//     { name: 'Costa Rica', code: 'CR' },
//     { name: 'Niger', code: 'NE' },
//     { name: 'Burkina Faso', code: 'BF' },
//     { name: 'Albania', code: 'AL' },
//     { name: 'Kyrgyzstan', code: 'KG' },
//     { name: 'Nigeria', code: 'NG' },
//     { name: 'Bolivia', code: 'BO' },
//     { name: 'Guinea', code: 'GN' },
//     { name: 'Uruguay', code: 'UY' },
//     { name: 'Honduras', code: 'HN' },
//     { name: 'San Marino', code: 'SM' },
//     { name: 'Palestine', code: 'PS' },
//     { name: 'Malta', code: 'MT' },
//     { name: 'Taiwan', code: 'TW' },
//     { name: 'Jordan', code: 'JO' },
//     { name: 'Réunion', code: 'RE' },
//     { name: 'Georgia', code: 'GE' },
//     { name: 'Senegal', code: 'SN' },
//     { name: 'Mauritius', code: 'MU' },
//     { name: 'DRC', code: 'CD' },
//     { name: 'Montenegro', code: 'ME' },
//     { name: 'Isle of Man', code: 'IM' },
//     { name: 'Sri Lanka', code: 'LK' },
//     { name: 'Mayotte', code: 'YT' },
//     { name: 'Kenya', code: 'KE' },
//     { name: 'Vietnam', code: 'VN' },
//     { name: 'Guatemala', code: 'GT' },
//     { name: 'Venezuela', code: 'VE' },
//     { name: 'Mali', code: 'ML' },
//     { name: 'Paraguay', code: 'PY' },
//     { name: 'El Salvador', code: 'SV' },
//     { name: 'Jamaica', code: 'JM' },
//     { name: 'Tanzania', code: 'TZ' },
//     { name: 'Martinique', code: 'MQ' },
//     { name: 'Guadeloupe', code: 'GP' },
//     { name: 'Rwanda', code: 'RW' },
//     { name: 'Congo', code: 'CG' },
//     { name: 'Brunei', code: 'BN' },
//     { name: 'Somalia', code: 'SO' },
//     { name: 'Gibraltar', code: 'GI' },
//     { name: 'Cambodia', code: 'KH' },
//     { name: 'Madagascar', code: 'MG' },
//     { name: 'Trinidad and Tobago', code: 'TT' },
//     { name: 'Gabon', code: 'GA' },
//     { name: 'Myanmar', code: 'MM' },
//     { name: 'Ethiopia', code: 'ET' },
//     { name: 'Aruba', code: 'AW' },
//     { name: 'French Guiana', code: 'GF' },
//     { name: 'Monaco', code: 'MC' },
//     { name: 'Bermuda', code: 'BM' },
//     { name: 'Togo', code: 'TG' },
//     { name: 'Liechtenstein', code: 'LI' },
//     { name: 'Equatorial Guinea', code: 'GQ' },
//     { name: 'Liberia', code: 'LR' },
//     { name: 'Barbados', code: 'BB' },
//     { name: 'Sudan', code: 'SD' },
//     { name: 'Guyana', code: 'GY' },
//     { name: 'Zambia', code: 'ZM' },
//     { name: 'Cabo Verde', code: 'CV' },
//     { name: 'Cayman Islands', code: 'KY' },
//     { name: 'Bahamas', code: 'BS' },
//     { name: 'French Polynesia', code: 'PF' },
//     { name: 'Uganda', code: 'UG' },
//     { name: 'Maldives', code: 'MV' },
//     { name: 'Libya', code: 'LY' },
//     { name: 'Guinea-Bissau', code: 'GW' },
//     { name: 'Macao', code: 'MO' },
//     { name: 'Haiti', code: 'HT' },
//     { name: 'Syria', code: 'SY' },
//     { name: 'Eritrea', code: 'ER' },
//     { name: 'Mozambique', code: 'MZ' },
//     { name: 'Saint Martin', code: 'MF' },
//     { name: 'Benin', code: 'BJ' },
//     { name: 'Chad', code: 'TD' },
//     { name: 'Mongolia', code: 'MN' },
//     { name: 'Nepal', code: 'NP' },
//     { name: 'Sierra Leone', code: 'SL' },
//     { name: 'Zimbabwe', code: 'ZW' },
//     { name: 'Angola', code: 'AO' },
//     { name: 'Antigua and Barbuda', code: 'AG' },
//     { name: 'Eswatini', code: 'SZ' },
//     { name: 'Botswana', code: 'BW' },
//     { name: 'Timor-Leste', code: 'TL' },
//     { name: 'Belize', code: 'BZ' },
//     { name: 'New Caledonia', code: 'NC' },
//     { name: 'Malawi', code: 'MW' },
//     { name: 'Fiji', code: 'FJ' },
//     { name: 'Dominica', code: 'DM' },
//     { name: 'Namibia', code: 'NA' },
//     { name: 'Saint Lucia', code: 'LC' },
//     { name: 'Grenada', code: 'GD' },
//     { name: 'Saint Kitts and Nevis', code: 'KN' },
//     { name: 'CAR', code: 'CF' },
//     { name: 'St. Vincent Grenadines', code: 'VC' },
//     { name: 'Turks and Caicos', code: 'TC' },
//     { name: 'Falkland Islands', code: 'FK' },
//     { name: 'Greenland', code: 'GL' },
//     { name: 'Montserrat', code: 'MS' },
//     { name: 'Seychelles', code: 'SC' },
//     { name: 'Suriname', code: 'SR' },
//     { name: 'Nicaragua', code: 'NI' },
//     { name: 'Gambia', code: 'GM' },
//     { name: 'Vatican City', code: 'VA' },
//     { name: 'Mauritania', code: 'MR' },
//     { name: 'Papua New Guinea', code: 'PG' },
//     { name: 'St. Barth', code: 'BL' },
//     { name: 'Burundi', code: 'BI' },
//     { name: 'Bhutan', code: 'BT' },
//     { name: 'Caribbean Netherlands', code: 'BQ' },
//     { name: 'British Virgin Islands', code: 'VG' },
//     { name: 'Sao Tome and Principe', code: 'ST' },
//     { name: 'South Sudan', code: 'SD' },
//     { name: 'Anguilla', code: 'AI' },
//     { name: 'Saint Pierre Miquelon', code: 'PM' },
//     { name: 'Yemen', code: 'YE' },
//     { name: 'China', code: 'CN' }
// ];

let app_data = [],
  cases_list = [],
  recovered_list = [],
  deaths_list = [],
  deaths = [],
  dates = [],
  formatedDates = [];

function fatchData(country) {

    // console.log(country);
    document.querySelector('.country .title').innerHTML = "Loading..."
    // variables where data stores
    country_name = ""
    cases_list = []
    active_list = []
    recovered_list = []
    deaths_list = []
    dates = []
    formatedDates = []

    const api_fatch = async (country) => {
        await fetch("https://api.covid19api.com/total/country/" + country + "/status/confirmed")
            .then(response => {
                return response.json();
            })
            .then(data => {
                country_name = data[0].Country;
                data.forEach(entry => {
                    dates.push(entry.Date);
                    cases_list.push(entry.Cases);
                })
                document.querySelector('.country .title').innerHTML = country_name + `'s Data`;
            })
        await fetch("https://api.covid19api.com/total/country/" + country + "/status/recovered")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.forEach((entry) => {
                    recovered_list.push(entry.Cases);
                });
            });
        await fetch("https://api.covid19api.com/total/country/" + country + "/status/deaths")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.forEach((entry) => {
                    deaths_list.push(entry.Cases);
                });
            });
        var i;
        // console.log(dates);
        for (i = 0; i < cases_list.length; i++) {
            active = cases_list[i] - deaths_list[i] - recovered_list[i];
            active_list.push(active);
            formatedDates[i] = formatDate(dates[i]);
        }
        // console.log(formatedDates);
        updateUI()
    }
    api_fatch(country);
}
function updateUI() {
    updateStats()
    axesLinearChart()
}
function updateStats() {
    const total_case = cases_list[cases_list.length - 1];
    const new_case = total_case - cases_list[cases_list.length - 2];

    const total_recovered = recovered_list[recovered_list.length - 1];
    const new_recovered = total_recovered - recovered_list[recovered_list.length - 2];

    const total_death = deaths_list[deaths_list.length - 1];
    const new_death = total_death - deaths_list[deaths_list.length - 2];

    const total_active = active_list[active_list.length - 1];
    const new_active = total_active - active_list[active_list.length - 2];

    document.querySelector('.country .right .confirmed h1').innerHTML = total_case;
    document.querySelector('.country .right .confirmed h3').innerHTML = `+` + new_case;

    document.querySelector('.country .right .active h1').innerHTML = total_active;
    document.querySelector('.country .right .active h3').innerHTML = `+` + new_active;

    document.querySelector('.country .right .recovered h1').innerHTML = total_recovered;
    document.querySelector('.country .right .recovered h3').innerHTML = `+` + new_recovered;

    document.querySelector('.country .right .death h1').innerHTML = total_death;
    document.querySelector('.country .right .death h3').innerHTML = `+` + new_death;


    // console.log(total_case, new_case);
}

let my_chart;
function axesLinearChart() {
    if (my_chart) {
        my_chart.destroy();
    }
    const ctx = document.getElementById("axes_line_chart").getContext("2d");
    my_chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'confirmed',
                data: cases_list,
                fill: false,
                borderColor: "red",
                backgroundColor: "red",
                borderWidth: 1
            }, {
                label: 'active',
                data: active_list,
                fill: false,
                borderColor: "#2828e7",
                backgroundColor: "#2828e7",
                borderWidth: 1
            }, {
                label: 'recovered',
                data: recovered_list,
                fill: false,
                borderColor: "green",
                backgroundColor: "green",
                borderWidth: 1
            }, {
                label: 'death',
                data: deaths_list,
                fill: false,
                borderColor: "death",
                backgroundColor: "death",
                borderWidth: 1
            }],
            labels: formatedDates
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}


const monthsNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function formatDate(dateString) {
    let date = new Date(dateString);

    return `${date.getDate()} ${monthsNames[date.getMonth()]}`;
}