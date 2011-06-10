var validationData = {
hyphen: ["-282","171","116","hstem","44","243","vstem","287","287","rmoveto","-243","-116","243","hlineto","endchar"],
period: ["-365","-13","20","hstem","125","156","rmoveto","-107","callsubr","endchar"],
zero: ["-13","28","645","28","hstem","24","158","136","158","vstem","250","688","rmoveto","-65","0","-66","-44","-41","-72","-32","-55","-22","-94","0","-83","rrcurveto","-206","94","-147","133","129","96","149","201","200","-97","151","-129","vhcurveto","68","-466","rmoveto","0","-59","-8","-78","-9","-27","-11","-29","-16","-14","-23","0","rrcurveto","-50","-19","59","148","hvcurveto","229","vlineto","151","19","58","48","49","20","-62","-147","vhcurveto","endchar"],
one: ["0","24","529","26","89","20","hstem","186","148","vstem","317","688","rmoveto","-252","-109","0","-26","rlineto","9","3","8","3","3","2","27","10","25","7","13","0","rrcurveto","25","11","-22","-47","hvcurveto","-385","vlineto","0","-82","-20","-17","-99","-1","rrcurveto","-24","375","24","vlineto","-91","2","-17","15","0","77","rrcurveto","570","vlineto","endchar"],
two: ["0","133","441","114","hstem","300","136","vstem","478","211","rmoveto","-24","hlineto","-29","-72","-12","-6","-102","0","rrcurveto","-151","0","162","154","rlineto","79","75","35","67","0","76","0","107","-77","76","-108","0","-50","0","-48","-20","-35","-36","-39","-39","-20","-34","-28","-75","rrcurveto","28","hlineto","31","62","37","28","54","0","44","0","33","-19","22","-36","12","-21","8","-28","0","-23","0","-44","-19","-55","-32","-49","-51","-78","-35","-42","-146","-156","rrcurveto","-23","416","vlineto","endchar"],
three: ["-14","50","571","81","hstemhm","283","146","-75","114","hintmask","58","523","rmoveto","38","61","33","23","52","0","63","0","39","-40","0","-63","0","-66","-35","-35","-95","-30","rrcurveto","-17","vlineto","83","-29","33","-17","36","-34","rrcurveto","hintmask","31","-29","18","-45","0","-48","0","-72","-38","-46","-60","0","-24","0","-19","11","-33","32","-39","39","-30","16","-30","0","rrcurveto","-38","-27","-24","-34","-54","61","-36","92","167","132","114","146","hvcurveto","0","46","-15","43","-29","35","-21","24","-17","12","-40","18","rrcurveto","hintmask","64","39","19","29","0","59","0","86","-61","51","-102","0","-99","0","-75","-50","-55","-103","rrcurveto","endchar"],
four: ["0","20","124","111","413","20","hstemhm","267","145","-143","143","hintmask","412","255","rmoveto","433","-80","vlineto","-59","-77","rlineto","-128","-167","-66","-92","-60","-95","rrcurveto","-113","248","-144","vlineto","hintmask","145","144","63","111","hlineto","-206","hmoveto","-209","0","209","297","rlineto","endchar"],
five: ["-8","61","496","127","hstem","373","78","vstem","149","549","rmoveto","278","0","43","127","-322","0","-97","-345","rlineto","95","-7","41","-6","44","-14","89","-28","53","-57","0","-66","0","-56","-44","-44","-56","0","-23","0","-27","12","-40","30","-43","32","-30","13","-26","0","rrcurveto","-36","-26","-25","-35","-53","58","-35","89","165","117","100","141","hvcurveto","0","104","-64","80","-109","31","-38","11","-31","4","-82","5","rrcurveto","endchar"],
six: ["-13","27","362","45","247","20","hstem","28","156","139","152","vstem","470","688","rmoveto","-133","-19","-62","-22","-76","-52","-112","-77","-59","-112","0","-133","rrcurveto","-173","92","-113","140","124","91","99","136","121","-73","78","-114","vhcurveto","-32","0","-22","-4","-30","-13","37","147","83","81","146","30","rrcurveto","-237","-286","rmoveto","67","23","-55","-159","-118","-12","-30","-49","hvcurveto","-23","0","-18","10","-10","19","-17","33","-10","73","0","93","0","62","6","57","7","5","8","6","14","4","14","0","rrcurveto","endchar"],
seven: ["0","20","519","137","hstem","477","676","rmoveto","-416","0","-44","-222","25","0","rlineto","19","64","24","21","55","0","rrcurveto","207","0","-200","-539","95","0","rlineto","endchar"],
eight: ["-13","32","640","29","hstemhm","28","121","-110","129","165","139","-133","119","hintmask","178","324","rmoveto","-57","-19","-23","-13","-26","-25","-29","-28","-15","-38","0","-44","rrcurveto","-102","85","-68","127","139","93","80","120","vhcurveto","0","87","-43","62","-107","68","rrcurveto","hintmask","96","34","40","41","0","64","rrcurveto","89","-76","56","-119","-135","-89","-70","-105","vhcurveto","0","-75","40","-55","99","-59","rrcurveto","120","98","rmoveto","-84","43","-46","55","0","56","rrcurveto","47","36","36","47","56","32","-45","-78","vhcurveto","0","-47","-8","-23","-33","-44","rrcurveto","hintmask","-98","-116","rmoveto","109","-73","24","-32","0","-74","rrcurveto","-67","-33","-41","-54","-61","-36","53","89","vhcurveto","0","55","11","31","40","59","rrcurveto","endchar"],
nine: ["-13","20","247","45","362","27","hstem","26","152","139","156","vstem","31","-13","rmoveto","140","20","68","25","78","59","102","77","54","107","0","127","rrcurveto","173","-92","113","-140","-125","-90","-99","-137","-118","73","-80","109","vhcurveto","38","0","26","5","27","14","-43","-152","-81","-79","-144","-29","rrcurveto","278","315","rmoveto","-1","-13","-1","-5","-3","-2","-7","-5","-19","-4","-15","0","rrcurveto","-62","-23","59","157","116","12","30","49","hvcurveto","25","0","17","-11","11","-23","15","-28","10","-70","0","-71","0","-27","-2","-32","-3","-45","rrcurveto","endchar"],
colon: ["-282","-13","169","147","169","hstem","166","156","rmoveto","-107","callsubr","316","vmoveto","-46","-38","-38","-45","-49","36","-37","48","47","38","38","46","47","-38","38","-47","hvcurveto","endchar"],
equal: ["-45","107","88","116","88","hstem","537","399","rmoveto","-504","-88","504","hlineto","-116","vmoveto","-504","-88","504","hlineto","endchar"],
A: ["107","0","25","172","39","223","20","191","20","hstem","689","25","rmoveto","-4","hlineto","-39","0","-16","21","-50","118","rrcurveto","-223","526","-28","0","-222","-548","rlineto","-38","-93","-12","-15","-48","-9","rrcurveto","-25","203","25","vlineto","-59","4","-23","11","0","26","0","13","8","25","21","54","rrcurveto","15","39","225","0","rlineto","34","-78","12","-36","0","-22","0","-21","-13","-10","-35","-2","-5","0","-13","-1","-14","-2","rrcurveto","-25","324","vlineto","-500","236","rmoveto","94","243","101","-243","rlineto","endchar"],
B: ["52","0","25","-25","32","614","30","-25","25","hstemhm","104","160","156","165","-138","172","hintmask","16","676","rmoveto","hintmask","-25","vlineto","69","-4","19","-16","0","-51","rrcurveto","-484","vlineto","0","-51","-15","-12","-73","-8","rrcurveto","hintmask","-25","322","vlineto","169","112","75","113","hvcurveto","0","45","-19","41","-35","31","-35","30","-34","15","-70","15","rrcurveto","hintmask","116","34","43","41","0","76","rrcurveto","103","-93","57","-167","vhcurveto","-61","-333","rmoveto","30","hlineto","hintmask","103","50","-54","-110","-97","-41","-50","-81","-44","-17","17","44","hvcurveto","504","vmoveto","36","15","13","39","vhcurveto","hintmask","70","32","-43","-94","hvcurveto","0","-105","-33","-28","-123","-3","rrcurveto","endchar"],
C: ["107","-19","48","629","33","hstem","49","177","vstem","657","152","rmoveto","-59","-62","-32","-24","-49","-19","-29","-12","-33","-6","-28","0","-66","0","-63","35","-29","52","-29","53","-14","72","0","100","0","207","64","110","120","0","47","0","43","-18","43","-38","rrcurveto","43","-39","23","-33","35","-76","rrcurveto","25","234","-27","hlineto","-14","-35","-11","-11","-19","0","-9","0","-15","4","-22","10","-59","24","-48","11","-48","0","rrcurveto","-199","-149","-154","-204","-206","147","-146","207","hvcurveto","71","0","59","17","55","37","32","22","22","20","45","50","rrcurveto","endchar"],
D: ["107","0","25","-25","35","607","34","-25","25","hstemhm","97","162","257","174","hintmask","97","91","rmoveto","0","-44","-25","-20","-58","-2","rrcurveto","hintmask","-25","316","vlineto","216","144","138","207","206","-140","125","-231","hvcurveto","-305","hlineto","hintmask","-25","vlineto","64","-6","19","-15","0","-46","rrcurveto","hintmask","162","23","rmoveto","23","20","12","39","vhcurveto","72","0","51","-33","34","-69","27","-53","14","-73","0","-84","0","-95","-20","-86","-32","-45","-34","-46","-48","-23","-65","0","rrcurveto","-45","-13","13","45","hvcurveto","endchar"],
E: ["52","0","25","-25","31","611","34","-25","25","hstemhm","104","162","hintmask","593","676","rmoveto","-577","hlineto","hintmask","-25","vlineto","69","-4","19","-16","0","-51","rrcurveto","-484","vlineto","0","-52","-14","-11","-74","-8","rrcurveto","hintmask","-25","585","vlineto","40","208","-28","0","rlineto","-31","-67","-20","-28","-36","-29","-46","-37","-55","-16","-76","0","rrcurveto","-64","-19","13","43","hvcurveto","242","vlineto","109","0","41","-39","12","-116","rrcurveto","26","338","-26","hlineto","-15","-114","-39","-36","-108","1","rrcurveto","232","vlineto","38","13","9","52","vhcurveto","163","0","49","-34","25","-133","rrcurveto","25","hlineto","endchar"],
F: ["-4","0","25","617","34","-25","25","hstemhm","104","162","hintmask","583","676","rmoveto","-567","hlineto","hintmask","-25","vlineto","69","-4","19","-15","0","-52","rrcurveto","-484","vlineto","0","-52","-14","-11","-74","-8","rrcurveto","-25","360","25","vlineto","-92","4","-18","12","0","55","rrcurveto","233","vlineto","102","-2","37","-37","14","-116","rrcurveto","25","338","-25","hlineto","-18","-114","-35","-35","-100","0","rrcurveto","232","vlineto","hintmask","37","13","10","51","vhcurveto","92","0","59","-17","31","-35","22","-25","11","-27","14","-63","rrcurveto","24","hlineto","endchar"],
G: ["163","-19","33","644","33","hstem","37","177","299","156","vstem","755","287","rmoveto","-343","-25","hlineto","86","-5","15","-11","0","-54","rrcurveto","-105","vlineto","-51","-29","-22","-67","vhcurveto","-63","0","-42","19","-33","43","-44","56","-21","86","0","120","0","209","63","111","121","0","46","0","43","-18","44","-38","43","-38","23","-34","35","-76","rrcurveto","25","234","-27","hlineto","-14","-35","-11","-11","-19","0","-9","0","-15","4","-22","10","-59","24","-48","11","-48","0","rrcurveto","-199","-149","-154","-206","-206","146","-144","210","hvcurveto","103","0","109","24","64","38","rrcurveto","127","vlineto","0","72","11","12","75","8","rrcurveto","endchar"],
I: ["-226","0","25","626","25","hstem","113","162","vstem","113","96","rmoveto","0","-50","-18","-14","-75","-7","rrcurveto","-25","350","25","vlineto","-76","5","-19","14","0","52","rrcurveto","484","vlineto","0","52","21","16","74","3","rrcurveto","25","-350","-25","vlineto","72","-5","21","-15","0","-51","rrcurveto","endchar"],
J: ["-96","33","714","25","hstem","3","116","109","162","vstem","390","559","rmoveto","0","72","14","15","75","5","rrcurveto","25","-352","-25","vlineto","81","-3","20","-14","0","-54","rrcurveto","-556","vlineto","-62","-19","-25","-45","-27","-18","13","19","vhcurveto","0","8","3","6","9","12","12","15","3","8","0","15","rrcurveto","40","-34","35","-39","-37","-33","-34","-38","vhcurveto","0","-41","28","-45","39","-23","26","-14","40","-9","40","0","rrcurveto","140","74","76","143","hvcurveto","endchar"],
L: ["52","0","25","-25","31","620","25","hstemhm","105","162","hintmask","638","227","rmoveto","-29","hlineto","-33","-78","-20","-31","-35","-32","-41","-37","-56","-18","-77","0","rrcurveto","-61","-19","13","43","hvcurveto","472","vlineto","0","75","14","13","87","4","rrcurveto","25","-349","-25","vlineto","68","-4","18","-16","0","-51","rrcurveto","-484","vlineto","hintmask","0","-51","-13","-11","-73","-9","rrcurveto","hintmask","-25","578","vlineto","endchar"],
M: ["329","0","25","626","25","hstem","105","42","531","155","vstem","678","609","rmoveto","-509","vlineto","0","-56","-14","-12","-75","-7","rrcurveto","-25","332","25","vlineto","-78","10","-10","11","0","71","rrcurveto","442","vlineto","0","72","15","15","73","5","rrcurveto","25","-252","vlineto","-200","-472","-200","472","-253","0","0","-25","rlineto","73","-6","16","-13","0","-52","rrcurveto","-475","vlineto","0","-60","-13","-12","-78","-8","rrcurveto","-25","234","25","vlineto","-82","6","-19","19","0","74","rrcurveto","0","470","252","-594","27","0","rlineto","endchar"],
N: ["107","-18","20","-2","25","626","25","hstemhm","104","44","431","44","hintmask","230","676","rmoveto","-211","-25","hlineto","20","0","17","-15","48","-57","rrcurveto","-474","vlineto","0","-57","-15","-14","-73","-9","rrcurveto","-25","227","25","vlineto","-77","9","-18","19","0","71","rrcurveto","0","402","rlineto","hintmask","447","-544","28","0","0","589","rlineto","0","57","13","13","65","10","rrcurveto","25","-215","-25","vlineto","74","-7","19","-21","0","-71","rrcurveto","-305","vlineto","endchar"],
O: ["163","-19","33","644","33","hstem","35","177","354","177","vstem","393","691","rmoveto","-209","-149","-148","-208","-207","147","-147","207","207","147","148","207","204","-149","151","-201","hvcurveto","-1","-33","rmoveto","110","64","-121","-208","-205","-62","-110","-115","-115","-62","110","202","216","63","116","117","hvcurveto","endchar"],
P: ["-4","0","25","616","35","-25","25","hstemhm","100","162","166","172","hintmask","262","303","rmoveto","135","1","34","3","44","18","81","31","44","61","0","77","rrcurveto","116","-95","66","-167","vhcurveto","-322","hlineto","hintmask","-25","vlineto","70","-6","14","-16","0","-70","rrcurveto","-442","vlineto","0","-62","-13","-20","-47","-6","-3","0","-10","-2","-11","-2","rrcurveto","-25","334","25","vlineto","-79","10","-9","9","0","73","rrcurveto","hintmask","489","vmoveto","23","17","12","33","83","33","-44","-108","vhcurveto","0","-63","-12","-38","-26","-23","-24","-20","-33","-7","-71","0","rrcurveto","endchar"],
R: ["107","0","25","617","34","-25","25","hstemhm","114","162","183","171","hintmask","715","25","rmoveto","-18","0","-13","6","-10","13","rrcurveto","-201","285","rlineto","59","19","25","13","28","25","29","27","16","40","0","45","rrcurveto","115","-99","63","-183","vhcurveto","-322","hlineto","hintmask","-25","vlineto","74","-5","14","-15","0","-72","rrcurveto","-442","vlineto","0","-73","-10","-10","-78","-9","rrcurveto","-25","338","25","vlineto","-78","10","-10","11","0","71","rrcurveto","196","27","vlineto","207","-313","205","0","rlineto","hintmask","-439","600","rmoveto","0","6","4","15","3","6","6","10","16","5","25","0","92","0","37","-43","0","-105","0","-64","-15","-39","-32","-21","-26","-17","-34","-7","-76","-1","rrcurveto","endchar"],
S: ["-59","-19","33","646","31","-19","20","hstemhm","44","109","241","119","hintmask","484","475","rmoveto","217","-30","vlineto","-7","-26","-8","-8","-17","0","-9","0","-11","3","-22","8","rrcurveto","hintmask","-47","16","-32","6","-38","0","-136","0","-83","-77","0","-126","0","-88","52","-63","119","-57","rrcurveto","67","-32","rlineto","88","-42","24","-26","0","-52","0","-69","-49","-45","-77","0","-58","0","-50","25","-38","49","-27","37","-14","33","-17","70","rrcurveto","-29","-247","29","hlineto","6","25","8","9","16","0","8","0","11","-3","22","-7","50","-17","37","-7","43","0","148","0","100","85","0","126","0","75","-46","75","-64","32","rrcurveto","-147","73","rlineto","-81","40","-22","25","0","48","0","62","42","38","68","0","45","0","42","-19","36","-37","34","-35","16","-29","20","-65","rrcurveto","endchar"],
T: ["52","0","25","631","20","hstem","253","162","vstem","253","117","rmoveto","0","-74","-11","-11","-86","-7","rrcurveto","-25","357","25","vlineto","-87","6","-11","10","0","76","rrcurveto","527","vlineto","123","-4","52","-46","17","-119","rrcurveto","29","0","-2","201","-600","0","-3","-201","29","0","rlineto","17","119","52","46","124","4","rrcurveto","endchar"],
V: ["107","-18","20","654","20","hstem","701","676","rmoveto","-213","-25","hlineto","71","-5","15","-7","0","-32","0","-16","-3","-12","-17","-43","rrcurveto","-127","-329","-138","334","rlineto","-19","45","-4","12","0","15","0","23","15","11","38","2","5","0","13","1","15","1","rrcurveto","25","-336","-25","vlineto","50","-7","9","-8","25","-55","rrcurveto","256","-599","27","0","228","587","rlineto","24","62","14","13","52","7","rrcurveto","endchar"],
W: ["385","-15","20","437","20","194","20","hstem","981","676","rmoveto","-182","-25","hlineto","54","-3","15","-10","0","-31","0","-13","-2","-15","-5","-14","rrcurveto","-112","-343","-108","336","rlineto","-10","32","-4","15","0","9","0","24","15","9","44","3","2","0","5","0","6","1","rrcurveto","25","-312","-25","vlineto","41","-2","20","-9","11","-24","rrcurveto","35","-96","-118","-308","-120","364","rlineto","-5","16","-2","8","0","9","0","29","12","9","52","4","rrcurveto","25","-294","-25","vlineto","42","-6","10","-9","17","-49","rrcurveto","212","-602","28","0","186","477","171","-477","27","0","200","602","rlineto","13","40","23","21","33","3","rrcurveto","endchar"],
a: ["-14","20","435","32","hstemhm","25","146","122","138","-137","137","hintmask","473","64","rmoveto","-10","-10","rlineto","-3","-3","-3","-1","-5","0","rrcurveto","-14","-7","9","16","hvcurveto","261","vlineto","84","-76","53","-122","-113","-76","-51","-75","-41","24","-25","41","40","28","24","34","vhcurveto","0","14","-6","13","-12","16","-9","10","-3","6","0","6","rrcurveto","21","28","16","35","vhcurveto","hintmask","58","26","-27","-61","hvcurveto","-73","vlineto","-119","-36","-49","-20","-37","-25","-43","-30","-21","-34","0","-43","0","-61","47","-45","64","0","57","0","46","20","55","50","11","-51","22","-19","49","0","43","0","31","16","38","41","rrcurveto","hintmask","-195","57","rmoveto","-27","-31","-20","-12","-24","0","-30","0","-21","27","0","40","0","58","42","42","80","21","rrcurveto","endchar"],
b: ["-59","-14","32","401","54","179","24","hstem","72","139","163","147","vstem","211","676","rmoveto","-194","-24","hlineto","46","-9","9","-9","0","-40","rrcurveto","-607","12","vlineto","79","56","rlineto","46","-41","36","-16","50","0","rrcurveto","133","93","104","149","138","-77","96","-111","hvcurveto","-48","0","-37","-17","-37","-39","rrcurveto","-57","vmoveto","17","43","20","16","33","0","rrcurveto","62","31","-67","-131","-138","-30","-65","-64","-42","-27","31","48","hvcurveto","endchar"],
c: ["-171","-14","67","389","31","hstem","25","141","vstem","412","109","rmoveto","-37","-42","-26","-14","-41","0","rrcurveto","-87","-55","87","136","103","32","63","52","hvcurveto","16","0","15","-8","6","-11","5","-9","0","0","0","-42","1","-49","18","-23","37","0","rrcurveto","42","26","24","39","62","-67","48","-88","-136","-100","-106","-144","-138","90","-99","124","hvcurveto","77","0","56","31","58","74","rrcurveto","endchar"],
d: ["-59","-14","56","-22","23","374","56","179","24","hstemhm","25","148","163","139","hintmask","339","-13","rmoveto","46","13","25","5","62","7","rrcurveto","62","8","0","23","rlineto","-46","3","-13","13","0","42","rrcurveto","575","-215","-24","vlineto","67","-5","9","-7","0","-46","rrcurveto","-183","vlineto","-43","46","-30","16","-46","0","rrcurveto","-110","-82","-107","-145","hvcurveto","hintmask","-136","76","-99","105","vhcurveto","53","0","33","16","47","50","rrcurveto","-3","60","rmoveto","0","-6","-10","-17","-12","-13","-20","-23","-21","-11","-22","0","rrcurveto","-53","-25","60","127","129","27","59","58","hvcurveto","33","0","31","-24","14","-38","rrcurveto","endchar"],
e: ["-171","-14","72","187","37","160","31","hstem","402","125","rmoveto","-40","-49","-31","-18","-43","0","-39","0","-29","18","-21","35","-18","32","-8","33","-4","69","rrcurveto","252","hlineto","-6","84","-15","47","-32","38","-33","39","-46","20","-55","0","rrcurveto","-125","-84","-99","-146","-146","82","-96","124","hvcurveto","81","0","49","32","65","93","rrcurveto","-262","171","rmoveto","3","120","18","40","49","0","28","0","19","-16","8","-31","5","-19","2","-28","2","-51","rrcurveto","-15","vlineto","endchar"],
f: ["-282","0","24","393","44","199","31","hstem","71","139","vstem","71","417","rmoveto","-333","vlineto","0","-43","-11","-12","-46","-5","rrcurveto","-24","278","24","vlineto","-70","2","-12","12","0","65","rrcurveto","314","87","44","-87","122","vlineto","55","15","22","35","18","11","-7","-12","vhcurveto","0","-4","-3","-7","-6","-10","-9","-15","-4","-11","0","-10","rrcurveto","-31","26","-24","34","37","25","25","37","59","-59","41","-84","vhcurveto","-67","0","-52","-24","-27","-44","-22","-35","-7","-41","0","-86","rrcurveto","-57","-44","hlineto","endchar"],
g: ["-206","32","122","120","87","27","216","53","-9","31","hstemhm","28","88","-79","137","132","135","-37","79","hintmask","-reserved-","482","398","rmoveto","53","-130","vlineto","hintmask","-reserved-","-44","16","-28","6","-40","0","-119","0","-84","-66","0","-95","0","-34","13","-33","23","-28","22","-24","19","-13","47","-20","-79","-27","-40","-38","0","-52","0","-41","18","-18","64","-23","rrcurveto","hintmask","-11","-63","-9","-33","-25","0","-41","rrcurveto","-58","75","-34","126","166","88","52","99","77","-62","46","-102","vhcurveto","-65","hlineto","-80","-20","7","28","30","28","22","40","hvcurveto","45","-1","rlineto","47","0","25","6","34","20","rrcurveto","hintmask","-reserved-","45","26","23","41","0","53","0","40","-12","30","-28","28","rrcurveto","-77","-450","rmoveto","hintmask","-11","54","26","-17","-33","-46","-55","-26","-99","-88","-46","23","44","hvcurveto","0","21","7","11","28","23","rrcurveto","hintmask","-reserved-","89","494","rmoveto","47","19","-38","-93","-93","-19","-36","-47","-48","-18","36","93","hvcurveto","94","19","37","47","vhcurveto","endchar"],
h: ["-59","0","24","382","67","179","24","hstem","69","139","138","139","vstem","208","676","rmoveto","-192","-24","hlineto","46","-9","7","-8","0","-41","rrcurveto","-510","vlineto","0","-42","-8","-9","-45","-9","rrcurveto","-24","241","24","vlineto","-37","5","-12","15","0","37","rrcurveto","267","vlineto","0","4","7","10","10","9","22","23","24","12","23","0","rrcurveto","35","17","-27","-56","hvcurveto","-242","vlineto","0","-37","-13","-16","-34","-4","rrcurveto","-24","235","24","vlineto","-36","3","-13","15","0","42","rrcurveto","248","vlineto","86","-53","55","-82","vhcurveto","-53","0","-37","-20","-52","-58","rrcurveto","endchar"],
i: ["-337","0","24","413","24","75","155","hstemhm","60","155","-146","139","hintmask","208","461","rmoveto","-192","-24","hlineto","44","-9","9","-9","0","-41","rrcurveto","-294","vlineto","0","-41","-7","-8","-46","-11","rrcurveto","-24","239","24","vlineto","-35","5","-12","14","0","38","rrcurveto","hintmask","-70","610","rmoveto","-43","-35","-35","-42","-45","33","-33","44","44","34","33","44","hvcurveto","43","-34","35","-43","vhcurveto","endchar"],
j: ["-282","-203","31","609","24","75","155","hstemhm","108","155","-142","139","hintmask","260","461","rmoveto","-202","-24","hlineto","51","-4","12","-12","0","-43","rrcurveto","-474","vlineto","-53","-15","-23","-33","-19","-13","7","10","vhcurveto","0","5","3","7","6","10","10","16","4","11","0","10","rrcurveto","30","-27","24","-32","-37","-25","-25","-36","-59","58","-41","82","vhcurveto","69","0","53","27","28","49","19","32","8","38","0","59","rrcurveto","hintmask","-75","689","rmoveto","-43","-34","-35","-42","-45","32","-33","45","43","35","34","43","hvcurveto","43","-35","35","-43","vhcurveto","endchar"],
k: ["-59","0","24","628","24","hstem","70","139","vstem","513","461","rmoveto","-214","-23","hlineto","11","-2","10","-1","3","-1","24","-3","11","-7","0","-13","0","-9","-10","-18","-11","-11","rrcurveto","-128","-128","0","431","-187","0","0","-24","rlineto","34","-3","14","-17","0","-38","rrcurveto","-510","vlineto","0","-39","-15","-18","-33","-3","rrcurveto","-24","239","24","vlineto","-47","7","-5","6","0","47","rrcurveto","0","114","23","24","95","-134","rlineto","17","-25","7","-12","0","-8","0","-12","-14","-6","-28","-1","rrcurveto","-24","234","24","vlineto","-11","0","-5","3","-9","12","rrcurveto","-194","268","rlineto","100","105","26","18","63","8","rrcurveto","endchar"],
l: ["-337","0","24","628","24","hstem","67","139","vstem","206","676","rmoveto","-190","-24","hlineto","35","-3","16","-18","0","-37","rrcurveto","-510","vlineto","0","-37","-17","-20","-34","-3","rrcurveto","-24","239","24","vlineto","-33","1","-16","19","0","40","rrcurveto","endchar"],
m: ["218","0","24","382","67","-36","24","hstemhm","71","139","138","139","138","139","hintmask","207","461","rmoveto","-191","-24","hlineto","44","-6","11","-12","0","-41","rrcurveto","-294","vlineto","0","-41","-11","-11","-44","-8","rrcurveto","-24","240","24","vlineto","-35","5","-11","14","0","38","rrcurveto","267","vlineto","0","6","16","19","13","10","rrcurveto","hintmask","21","16","17","7","17","0","rrcurveto","39","15","-23","-60","hvcurveto","-242","vlineto","0","-41","-11","-13","-37","-3","rrcurveto","-24","234","24","vlineto","-35","4","-12","15","0","38","rrcurveto","267","vlineto","0","5","16","19","13","10","22","17","17","7","17","0","rrcurveto","38","15","-24","-59","hvcurveto","-242","vlineto","0","-42","-11","-12","-38","-3","rrcurveto","-24","238","24","vlineto","-39","2","-11","12","0","43","rrcurveto","251","vlineto","86","-53","55","-82","vhcurveto","-57","0","-38","-23","-52","-64","-30","63","-35","24","-63","0","-63","0","-46","-27","-38","-60","rrcurveto","endchar"],
n: ["-59","0","24","382","67","-36","24","hstemhm","74","139","138","139","hintmask","212","461","rmoveto","-191","-24","hlineto","44","-7","9","-10","0","-42","rrcurveto","-294","vlineto","0","-42","-8","-9","-45","-9","rrcurveto","-24","241","24","vlineto","-37","5","-12","15","0","37","rrcurveto","267","vlineto","0","4","7","10","10","9","rrcurveto","hintmask","22","23","24","12","23","0","rrcurveto","35","17","-27","-56","hvcurveto","-242","vlineto","0","-37","-13","-16","-34","-4","rrcurveto","-24","235","24","vlineto","-39","3","-10","12","0","42","rrcurveto","251","vlineto","86","-53","55","-82","vhcurveto","-60","0","-46","-28","-37","-59","rrcurveto","endchar"],
o: ["-14","31","425","31","hstem","25","147","157","147","vstem","251","473","rmoveto","-127","-99","-105","-136","-143","95","-103","131","129","96","104","139","140","-96","104","-129","hvcurveto","1","-31","rmoveto","58","19","-55","-164","-154","-20","-52","-58","-59","-20","51","146","176","18","52","62","hvcurveto","endchar"],
p: ["-59","-205","21","-21","24","-24","205","-13","55","374","57","-36","24","hstemhm","75","139","162","148","hintmask","212","461","rmoveto","-191","-24","hlineto","44","-7","10","-10","0","-42","rrcurveto","-501","vlineto","0","-41","-8","-9","-48","-8","rrcurveto","hintmask","-24","273","vlineto","hintmask","21","vlineto","-61","3","-17","20","0","67","rrcurveto","141","vlineto","48","-47","26","-13","44","0","rrcurveto","112","80","104","148","139","-75","95","-111","hvcurveto","-59","0","-36","-23","-31","-58","rrcurveto","hintmask","2","-46","rmoveto","0","7","9","16","12","13","20","22","23","12","22","0","rrcurveto","52","24","-60","-131","-124","-28","-59","-57","hvcurveto","-33","0","-29","23","-15","38","rrcurveto","endchar"],
r: ["-171","0","24","413","24","-8","20","hstemhm","83","139","hintmask","218","461","rmoveto","-189","-24","hlineto","43","-6","11","-13","0","-40","rrcurveto","-294","vlineto","0","-41","-10","-11","-44","-8","rrcurveto","-24","266","24","vlineto","-61","4","-12","13","0","62","rrcurveto","189","vlineto","52","28","43","33","vhcurveto","8","0","9","-7","11","-16","19","-27","15","-9","26","0","rrcurveto","37","26","28","39","hvcurveto","hintmask","45","-34","33","-47","vhcurveto","-50","0","-38","-27","-47","-67","rrcurveto","endchar"],
s: ["-226","-14","34","420","33","hstem","27","100","138","96","vstem","340","326","rmoveto","145","-22","vlineto","-6","-15","-6","-5","-12","0","-6","0","-10","2","-16","5","-33","11","-23","4","-22","0","-91","0","-66","-62","0","-84","0","-66","41","-46","101","-43","68","-30","28","-25","0","-32","rrcurveto","-39","-30","-26","-45","vhcurveto","-70","0","-46","45","-21","87","rrcurveto","-28","-165","25","hlineto","11","21","6","7","9","0","5","0","8","-2","10","-4","27","-12","53","-11","28","0","91","0","63","62","0","90","0","71","-39","43","-99","42","-68","29","-28","25","0","34","rrcurveto","33","28","25","38","vhcurveto","26","0","27","-11","22","-21","21","-20","11","-18","15","-44","rrcurveto","endchar"],
t: ["-282","-12","71","358","44","hstem","72","139","vstem","305","461","rmoveto","-94","169","-25","hlineto","-61","-86","-40","-45","-65","-55","rrcurveto","-27","52","-324","vlineto","-65","43","-40","69","vhcurveto","67","0","40","30","41","82","rrcurveto","-25","11","rlineto","-20","-38","-16","-14","-21","0","rrcurveto","-28","-11","17","40","hvcurveto","301","94","vlineto","endchar"],
u: ["-59","-14","65","-31","23","394","24","hstemhm","65","139","138","139","hintmask","343","-13","rmoveto","43","15","24","4","65","7","rrcurveto","62","7","0","23","rlineto","-44","2","-12","13","0","43","rrcurveto","360","-201","-24","vlineto","50","-4","12","-12","0","-43","rrcurveto","-283","vlineto","hintmask","-33","-33","-21","-11","-28","0","rrcurveto","-41","-15","20","51","hvcurveto","339","-188","-24","vlineto","41","-8","8","-9","0","-42","rrcurveto","-252","vlineto","-88","50","-52","83","vhcurveto","52","0","35","16","58","50","rrcurveto","endchar"],
v: ["-14","20","435","20","hstem","485","461","rmoveto","-151","-24","hlineto","43","-2","12","-7","0","-24","0","-11","-4","-16","-7","-18","rrcurveto","-72","-182","-79","203","rlineto","-7","19","-2","6","0","6","0","15","10","7","25","2","2","0","8","1","8","1","rrcurveto","24","-250","-24","vlineto","23","-3","6","-3","6","-9","2","1","47","-100","16","-41","rrcurveto","120","-296","26","0","160","396","rlineto","19","44","8","8","31","3","rrcurveto","endchar"],
w: ["107","-14","20","435","20","hstem","707","461","rmoveto","-135","-24","hlineto","37","-4","11","-8","0","-23","0","-12","-13","-37","-31","-79","-15","-39","-8","-21","-12","-34","-10","41","-3","12","-21","74","-20","69","-7","28","0","9","0","16","10","5","38","3","rrcurveto","24","-234","-24","vlineto","39","-4","1","-1","19","-66","rrcurveto","6","-19","-68","-171","-24","64","rlineto","-9","21","-7","19","-5","14","-28","70","-11","32","0","13","0","16","10","8","28","4","rrcurveto","24","-222","-24","vlineto","26","-5","4","-6","27","-66","rrcurveto","148","-374","24","0","125","310","102","-310","23","0","155","401","rlineto","16","37","8","8","26","5","rrcurveto","endchar"],
x: ["0","20","421","20","hstem","484","24","rmoveto","-16","5","-7","4","-7","11","rrcurveto","-148","228","101","126","rlineto","19","23","20","11","31","5","rrcurveto","24","-168","-24","vlineto","9","-1","8","-1","3","0","23","-1","8","-6","0","-15","0","-15","-10","-17","-28","-32","-6","-6","-15","-19","-15","-21","-6","7","-4","6","-3","4","-32","42","-26","43","0","13","rrcurveto","0","12","14","6","33","1","rrcurveto","24","-250","-24","vlineto","26","-4","6","-5","20","-30","rrcurveto","128","-197","rlineto","-29","-37","-27","-33","-9","-14","-56","-74","-20","-17","-37","-2","rrcurveto","-24","169","24","vlineto","-36","2","-14","7","0","15","0","15","26","42","38","46","2","3","7","8","7","9","rrcurveto","42","-63","rlineto","23","-33","10","-19","0","-12","0","-12","-14","-6","-31","-2","rrcurveto","-24","241","vlineto","endchar"],
y: ["-205","57","589","20","hstem","16","119","vstem","480","461","rmoveto","-151","-24","hlineto","43","-2","12","-7","0","-24","0","-11","-2","-9","-9","-25","rrcurveto","-68","-192","-72","185","rlineto","-20","51","0","0","0","8","0","14","12","9","25","2","rrcurveto","16","1","0","24","-250","0","0","-24","rlineto","23","-3","6","-3","6","-9","3","0","45","-98","17","-42","rrcurveto","120","-295","-18","-53","rlineto","-17","-50","-26","-32","-23","0","-9","0","-8","8","0","9","0","1","0","2","1","3","1","5","1","5","0","4","rrcurveto","29","-24","20","-34","-37","-27","-26","-38","-46","40","-33","57","vhcurveto","34","0","29","12","21","21","21","23","20","40","35","94","rrcurveto","149","397","rlineto","17","42","10","10","31","3","rrcurveto","endchar"],
z: ["-171","0","32","409","20","hstem","420","160","rmoveto","-28","hlineto","-9","-32","-8","-18","-16","-21","-32","-44","-33","-13","-80","0","rrcurveto","-29","0","231","403","0","26","-371","0","-7","-142","26","0","rlineto","25","95","26","16","140","-1","rrcurveto","-234","-404","0","-25","383","0","rlineto","endchar"]
};
