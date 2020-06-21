
function table2chart(x, y) {
    // convert table format to point format
    return x.map((el, idx) => {
        return { 'x': el, 'y': y[idx] };
    })
}

function make_table(data, header) {
    data = data.map(element => {
        return element.split(/\s+/).map(
            el => { return parseFloat(el); }
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
header = ["classandmode","model","params","mCE"];
data = [
    "densenetandeval densenet121 7978856 73.3881620272207",
    "densenetandeval densenet169 14149480 69.43870798867192",
    "densenetandeval densenet201 20013928 68.41362551407302",
    "densenetandeval densenet161 28681000 66.39559307526926",

    "densenetandtrain densenet121 7978856 63.00403690715165",
    "densenetandtrain densenet169 14149480 58.39255691400643",
    "densenetandtrain densenet201 20013928 57.11901701932954",
    "densenetandtrain densenet161 28681000 55.83293152942181",

    "efficientnetandeval efficientnet-b0 5288548 73.26226641773326",
    "efficientnetandeval efficientnet-b1 7794184 70.07790916294785",
    "efficientnetandeval efficientnet-b2 9109994 67.29190275889681",
    "efficientnetandeval efficientnet-b3 12233232 64.57734718214144",
    "efficientnetandeval efficientnet-b4 19341616 61.98612194625972",

    "efficientnetandtrain efficientnet-b0 5288548 64.8220397723427",
    "efficientnetandtrain efficientnet-b1 7794184 63.11265656335135",
    "efficientnetandtrain efficientnet-b2 9109994 61.72949026699069",
    "efficientnetandtrain efficientnet-b3 12233232 60.37568376476597",
    "efficientnetandtrain efficientnet-b4 19341616 62.78734075950654",

    "googlenetandeval googlenet 13004888 78.78446193555415",

    "googlenetandtrain googlenet 13004888 68.49853447324278",

    "inceptionandeval inception-v3 27161264 73.95608003073308",

    "inceptionandtrain inception-v3 27161264 68.53787337431501",

    "mnasnetandeval mnasnet0-5 2220824 93.20740450124714",
    "mnasnetandeval mnasnet1-0 4383312 83.04069503414654",

    "mnasnetandtrain mnasnet0-5 2220824 80.75864133269356",
    "mnasnetandtrain mnasnet1-0 4383312 71.69512947182425",

    "mobilenetandeval mobilenet-v2 3504872 86.17972537000172",

    "mobilenetandtrain mobilenet-v2 3504872 74.08607873484806",

    "resnetandeval resnet18 11689512 84.66180983833746",
    "resnetandeval resnet34 21797672 77.85158844676558",
    "resnetandeval resnet101 44549160 70.37202327968103",
    "resnetandeval resnet152 60192808 69.2738112841056",

    "resnetandtrain resnet18 11689512 70.40369211061723",
    "resnetandtrain resnet34 21797672 65.6912781049942",
    "resnetandtrain resnet50 25557032 62.54093468219573",
    "resnetandtrain resnet101 44549160 59.63391087368926",
    "resnetandtrain resnet152 60192808 58.12008919166234",
    "resnetandtrain resnet152 60192808 57.96737349710481",

    "resnextandeval resnext50-32x4d 25028904 72.33869718047411",
    "resnextandeval resnext101-32x8d 88791336 57.545475193621456",

    "resnextandtrain resnext50-32x4d 25028904 60.03195100582378",
    "resnextandtrain resnext101-32x8d 88791336 56.75767354733151",

    "shufflenetandeval shufflenet-v2-x0-5 1366792 98.7302260014703",
    "shufflenetandeval shufflenet-v2-x1-0 2278604 90.4393593874728",

    "shufflenetandtrain shufflenet-v2-x0-5 1366792 82.32777887526719",
    "shufflenetandtrain shufflenet-v2-x1-0 2278604 72.91058834739037",

    "vggandeval vgg11-bn 132868840 89.43138492094239",
    "vggandeval vgg13-bn 133053736 90.05885799733039",
    "vggandeval vgg16-bn 138365992 75.30718590965348",
    "vggandeval vgg19-bn 143678248 81.58848524784764",

    "vggandtrain vgg11-bn 132868840 74.65514090410986",
    "vggandtrain vgg13-bn 133053736 74.15797017459586",
    "vggandtrain vgg16-bn 138365992 69.87578225621775",
    "vggandtrain vgg19-bn 143678248 67.69412062378686",

    "wideandeval wide-resnet50-2 68883240 71.73141231489339",
    "wideandeval wide-resnet101-2 126886696 67.6828440252116",

    "wideandtrain wide-resnet50-2 68883240 58.329735602772125",
    "wideandtrain wide-resnet101-2 126886696 57.25696985905995",
];
return make_table(data, header);
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