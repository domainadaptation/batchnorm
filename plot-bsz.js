var config_batchsize = {
    type: 'line',
    data: {
        labels: table.batchsize,
        datasets: [{
            label: 'ResNet',
            borderColor: COLOR[0],
            data: table2chart(table_batchsize_optimal.batchsize, table_batchsize_optimal.resnet),
            fill: false,
        }, {
            label: 'AutoAugment',
            fill: false,
            borderColor: COLOR[1],
            data: table2chart(table_batchsize_optimal.batchsize, table_batchsize_optimal.augmix),
        }, {
            label: 'AugMix',
            fill: false,
            borderColor: COLOR[0],
            borderDash: [5, 5],
            data: table2chart(table_infty_rn50.batchsize, table_infty_rn50.mCE),
        }, {
            label: 'AugMix',
            fill: false,
            borderColor: COLOR[1],
            borderDash: [5, 5],
            data: table2chart(table_infty_augmix.batchsize, table_infty_augmix.mCE),
        }
        ]
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
        scales: {
            xAxes: [{
                display: true,
                type: 'logarithmic',
                ticks: {
                    min: 1,
                    max: 4096,
                    callback: function(label, index, labels) {
                        return label;
                    }
                },
                scaleLabel: {
                    display: true,
                    labelString: '# Samples'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Mean Corruption Error'
                }
            }]
        }
    }
};
