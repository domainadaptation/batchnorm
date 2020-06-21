
function table2chart(x, y) {
    // convert table format to point format
    return x.map((el, idx) => {
        return { 'x': el, 'y': y[idx] };
    })
}

function make_table(data, header, format = true) {
    data = data.map(element => {
        return element.split(/\s+/).map(
            el => { if (format) { return parseFloat(el); } else {return el;}; }
        );
    });
    table = {};
    header.forEach((el, index) => {
        table[el] = data.map(el => el[index]);
    });

    return table;
}

function batchsize_infty_resnet() {

    header = ["model", "batchsize", "error", "mCE"];
    data = ["resnet50 1.0 99.83653333333335 129.13054949410525",
        "resnet50 2.0 86.20114666666667 110.79344954360569",
        "resnet50 4.0 66.68461333333335 84.92573574820335",
        "resnet50 8.0 57.32800000000001 72.66376469775307",
        "resnet50 16.0 53.17941333333333 67.26207907546512",
        "resnet50 32.0 51.180453333333325 64.6729453300907",
        "resnet50 64.0 50.23589333333334 63.447835404340935",
        "resnet50 128.0 49.75744 62.830512031993614",
        "resnet50 256.0 49.52074666666667 62.52594221484739",
        "resnet50 1024.0 49.40077333333333 62.3726115801417",
        "resnet50 2048.0 49.40594666666666 62.37935405389798",
    ]
    return make_table(data, header);
}

function batchsize_infty_augmix() {
    header = ["model", "batchsize", "top1", "error", "severity", "mCE"];
    data = [
        "augmix_12b196e0ccd64ef3a38e6e10846bad35 1 0.1061599999666214 99.89384000003338 3.0 129.2063780158424",
        "augmix_12b196e0ccd64ef3a38e6e10846bad35 2 9.476480029424032 90.52351997057596 3.0 116.73957284840328",
        "augmix_12b196e0ccd64ef3a38e6e10846bad35 4 33.99599998474121 66.00400001525878 3.0 84.454780047309",
        "augmix_12b196e0ccd64ef3a38e6e10846bad35 8 47.610106709798174 52.389893290201826 3.0 66.69620776436709",
        "augmix_12b196e0ccd64ef3a38e6e10846bad35 16 53.9412535349528 46.0587464650472 3.0 58.50090484037514",
        "augmix_12b196e0ccd64ef3a38e6e10846bad35 32 56.99346672058106 43.006533279418946 3.0 54.557048660360984",
        "augmix_12b196e0ccd64ef3a38e6e10846bad35 64 58.48133359273275 41.51866640726725 3.0 52.63965989050594",
        "augmix_12b196e0ccd64ef3a38e6e10846bad35 128 59.20768005371094 40.792319946289076 3.0 51.708028149439045",
        "augmix_12b196e0ccd64ef3a38e6e10846bad35 256 59.57690663655599 40.42309336344401 3.0 51.23062348531985",
        "augmix_12b196e0ccd64ef3a38e6e10846bad35 512 59.29882671356201 40.70117328643799 3.1 51.58023162458449",
        "augmix_12b196e0ccd64ef3a38e6e10846bad35 50000 59.29882671356201 40.70117328643799 3.1 51.58023162458449",
    ]
    return make_table(data, header);
}

function torchvision_models() {
header=["modelclass","model","trainmode","params","in","inc"]
data = [
"densenet      densenet121         False        7.97886e+06  25.566  73.3882",
"densenet      densenet121         True         7.97886e+06  25.654  63.004",
"densenet      densenet161         False        2.8681e+07   22.862  66.3956",
"densenet      densenet161         True         2.8681e+07   22.522  55.8329",
"densenet      densenet169         False        1.41495e+07  24.4    69.4387",
"densenet      densenet169         True         1.41495e+07  23.874  58.3926",
"densenet      densenet201         False        2.00139e+07  23.104  68.4136",
"densenet      densenet201         True         2.00139e+07  23.014  57.119",
"googlenet     googlenet           False        1.30049e+07  30.222  78.7845",
"googlenet     googlenet           True         1.30049e+07  31.162  68.4985",
"inception     inception_v3        False        2.71613e+07  30.462  73.9561",
"inception     inception_v3        True         2.71613e+07  33.432  68.5379",
"mnasnet       mnasnet0_5          False        2.22082e+06  32.398  93.2074",
"mnasnet       mnasnet0_5          True         2.22082e+06  34.308  80.7586",
"mnasnet       mnasnet1_0          False        4.38331e+06  26.544  83.0407",
"mnasnet       mnasnet1_0          True         4.38331e+06  28.182  71.6951",
"mobilenet     mobilenet_v2        False        3.50487e+06  28.122  86.1797",
"mobilenet     mobilenet_v2        True         3.50487e+06  28.796  74.0861",
"resnet        resnet101           False        4.45492e+07  22.626  70.372",
"resnet        resnet101           True         4.45492e+07  22.946  59.6339",
"resnet        resnet152           False        6.01928e+07  21.688  69.2738",
"resnet        resnet152           True         6.01928e+07  22.006  58.1201",
"resnet        resnet18            False        1.16895e+07  30.242  84.6618",
"resnet        resnet18            True         1.16895e+07  30.898  70.4037",
"resnet        resnet34            False        2.17977e+07  26.686  77.8516",
"resnet        resnet34            True         2.17977e+07  27.11   65.6913",
"resnet        resnet50            False        2.5557e+07   23.87   76.6959",
"resnet        resnet50            True         2.5557e+07   24.362  62.5409",
"resnext       resnext101_32x8d    False        8.87913e+07  20.688  66.6498",
"resnext       resnext101_32x8d    True         8.87913e+07  20.782  56.7577",
"resnext       resnext50_32x4d     False        2.50289e+07  22.382  72.3387",
"resnext       resnext50_32x4d     True         2.50289e+07  22.74   60.032",
"shufflenet    shufflenet_v2_x0_5  False        1.36679e+06  39.448  98.7302",
"shufflenet    shufflenet_v2_x0_5  True         1.36679e+06  39.852  82.3278",
"shufflenet    shufflenet_v2_x1_0  False        2.2786e+06   30.638  90.4394",
"shufflenet    shufflenet_v2_x1_0  True         2.2786e+06   31.03   72.9106",
"vgg           vgg11_bn            False        1.32869e+08  29.63   89.4314",
"vgg           vgg11_bn            True         1.32869e+08  30.05   74.6551",
"vgg           vgg13_bn            False        1.33054e+08  28.414  90.0589",
"vgg           vgg13_bn            True         1.33054e+08  28.884  74.158",
"vgg           vgg16_bn            False        1.38366e+08  26.64   84.5547",
"vgg           vgg16_bn            True         1.38366e+08  27.044  69.8758",
"vgg           vgg19_bn            False        1.43678e+08  25.782  81.5885",
"vgg           vgg19_bn            True         1.43678e+08  26.248  67.6941",
"wide          wide_resnet101_2    False        1.26887e+08  21.152  67.6828",
"wide          wide_resnet101_2    True         1.26887e+08  21.924  57.257",
"wide          wide_resnet50_2     False        6.88832e+07  21.532  71.7314",
"wide          wide_resnet50_2     True         6.88832e+07  22.262  58.3297",
];
return make_table(data, header, format = false);
}

function batchsize_optimal() {
    header = ["batchsize", "resnet", "augmix"];
    data = [
        "1     71.39     62.7",
        "2     69.63     61.28",
        "3     68.38     60.33",
        "4     67.48     59.52",
        "5     68.8      58.78",
        "6     68.02     58.12",
        "7     67.32     57.46",
        "8     66.7      56.87",
        "16     63.81     53.78",
        "32     62.21     51.99",
        "64     62.9      52.59",
        "128     61.42     50.89",
        "256     62.69     50.6",
        "512     61.22     50.62",
        "50000  62.38 51.58"];

        
    return make_table(data, header);
}
table_batchsize_optimal = batchsize_optimal();
table_infty_rn50 = batchsize_infty_resnet(); 
table_infty_augmix = batchsize_infty_augmix();
table_torchvision = torchvision_models();

COLOR = [
    "#1b9e77",
    "#d95f02",
    "#7570b3",
]