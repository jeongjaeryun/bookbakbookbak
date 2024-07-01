(function ($) {
    "use strict";

    /*********************************
     * Table of Context
     * *******************************
     * 
    /* Preloader
    /* Sticky Navbar
    /* Scroll Top Bar
    *********************************/

    /*********************************
    /* Line Cart 01 Start
    *********************************/
    if ($("#mini_chart1").length) {
        var options1 = {
            chart: {
                type: "line",
                height: 80,
                sparkline: {
                    enabled: !0,
                },
            },
            series: [
                {
                    data: [3830, 3855, 3845, 3867, 3830],
                },
            ],
            stroke: {
                width: 2,
                curve: "smooth",
            },
            markers: {
                size: 0,
            },
            colors: ["#2CD9C5"],
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
        };
        new ApexCharts(document.querySelector("#mini_chart1"), options1).render();
    }
    /*********************************
    /* Line Cart 02 Start
    *********************************/
    if ($("#mini_chart2").length) {
        var options2 = {
            chart: {
                type: "line",
                height: 80,
                sparkline: {
                    enabled: !0,
                },
            },
            series: [
                {
                    data: [3830, 3855, 3845, 3850, 3835],
                },
            ],
            stroke: {
                width: 2,
                curve: "smooth",
            },
            markers: {
                size: 0,
            },
            colors: ["#FF6C40"],
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
        };
        new ApexCharts(document.querySelector("#mini_chart2"), options2).render();
    }
    /*********************************
    /* Line Cart 03 Start
    *********************************/
    if ($("#mini_chart3").length) {
        var options3 = {
            chart: {
                type: "line",
                height: 80,
                sparkline: {
                    enabled: !0,
                },
            },
            series: [
                {
                    data: [3830, 3875, 3830, 3860, 3830],
                },
            ],
            stroke: {
                width: 2,
                curve: "smooth",
            },
            markers: {
                size: 0,
            },
            colors: ["#00AB55"],
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
        };
        new ApexCharts(document.querySelector("#mini_chart3"), options3).render();
    }
    /*********************************
    /* Line Cart 04 Start
    *********************************/
    if ($("#mini_chart4").length) {
        var options4 = {
            chart: {
                type: "line",
                height: 80,
                sparkline: {
                    enabled: !0,
                },
            },
            series: [
                {
                    data: [3830, 3875, 3855, 3865, 3840],
                },
            ],
            stroke: {
                width: 2,
                curve: "smooth",
            },
            markers: {
                size: 0,
            },
            colors: ["#2CD9C5"],
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
        };
        new ApexCharts(document.querySelector("#mini_chart4"), options4).render();
    }

    /*********************************
    /* Growth Chart Start
    *********************************/
    if ($("#growth_chart").length) {
        var options5 = {
            series: [
                {
                    name: "Sales rise",
                    data: [45, 70, 85, 60, 70, 50, 60, 40, 60, 30, 50, 30],
                },
                {
                    name: "Sales drop",
                    data: [15, 40, 55, 30, 40, 20, 30, 10, 35, 70, 55, 60],
                },
            ],
            chart: {
                height: 385,
                type: "area",
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 3,
            },
            legend: {
                offsetX: 0,
                offsetY: 15,
                position: "top",
                horizontalAlign: "right",
                floating: false,
                itemMargin: {
                    horizontal: 10,
                    vertical: 10,
                },
            },
            colors: ["#9E77ED", "#EB5E28"],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                labels: {
                    show: true,
                    align: "left",
                    style: {
                        colors: "#919EAB",
                        fontSize: "1.2rem",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        cssClass: "apexcharts-yaxis-label",
                    },
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
            yaxis: {
                categories: ["0", "20", "40", "80", "100"],
                labels: {
                    show: true,
                    align: "center",
                    style: {
                        colors: "#7e7e7e",
                        fontSize: "1.2rem",
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 400,
                        cssClass: "apexcharts-yaxis-label",
                    },
                    offsetX: -10,
                    offsetY: 0,
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };

        new ApexCharts(document.querySelector("#growth_chart"), options5).render();
    }

    /*********************************
    /* Traffic Source Chart Start
    *********************************/

    if ($("#traffic_sources").length) {
        var options6 = {
            colors: ["#FF0202", "#9E77ED", "#FEDF89", "#0BA5EC"],
            series: [28, 30, 13, 40],
            chart: {
                foreColor: "#3d4859",
                type: "donut",
                height: 450,
                parentHeightOffset: 0,
            },
            dataLabels: {
                enabled: true,
                fontSize: "8px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
            },
            plotOptions: {
                pie: {
                    customScale: 1,
                    expandOnClick: true,
                    donut: {
                        size: "50%",
                        labels: {
                            // show: true,
                        },
                    },
                },
            },
            labels: ["Youtube", "Instragram", "Google", "Facebook"],
            legend: {
                fontSize: "14px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                position: "bottom",
                width: "100%",
                itemMargin: {
                    horizontal: 0,
                    vertical: 10,
                },
                markers: {
                    radius: 3,
                    width: 10,
                    height: 10,
                    offsetX: 0,
                },
                formatter: function (val, opts) {
                    return [val, "<span>" + opts.w.globals.series[opts.seriesIndex] + "%</span>"];
                },
            },
            stroke: {
                show: false,
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            // width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        };

        new ApexCharts(document.querySelector("#traffic_sources"), options6).render();
    }
})(jQuery);
