
function get_datasets() {
    var colors = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'];
    var colors = ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a']; 
    var table = torchvision_models();
    var models = new Set(table.model);
    var modelclasses = new Set(table.modelclass);

    var colorMap = {};
    [...modelclasses].forEach((model, idx) => {
        colorMap[model] = colors[idx];
    })

    console.log(colorMap);

    datasets = [];
    [...models].forEach((model, index) => {
        entry = {
            label: table.modelclass[index],
            data: [],
            borderColor: colorMap[table.modelclass[index]],
            backgroundColor: colorMap[table.modelclass[index]],
            //borderDash: [5, 5],
            fill: false
        }
        table.model
            .map((el, idx) => { return { "model": el, "x": table.in[idx], "y": table.inc[idx] }; })
            .filter(el => (el.model === model))
            .forEach((el, idx) => {
                entry.data.push({
                    'x': parseFloat(el.x),
                    'y': parseFloat(el.y)
                });
            });
        datasets.push(entry);
    });

    console.log(datasets);
    return datasets;
}
get_datasets();

var config_torchvision = {
    type: 'line',
    data: {
        datasets: get_datasets()
    },
    options: {
        responsive: true,
        title: {
            display: false,
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display: true,
                type: "linear",
                ticks: {
                    min: 20,
                    max: 40
                },
                scaleLabel: {
                    display: true,
                    labelString: 'ImageNet Error'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Mean Corruption Error'
                },
                ticks: {
                    min: 40,
                    max: 100
                },
            }]
        }
    }
};