/*------------------- GEOGRAPHIC DATA ---------------------*/
let countries = [  "ad", "al", "at", "ba", "be", "bg", "by", "ch", "cy", "cz",  "de", "dk", "ee", "es", "fi", "fo", "fr", "ge", "gg", "gr",  "hr", "hu", "ie", "im", "is", "it", "je", "li", "lt", "lu",  "lv", "mc", "md", "me", "mk", "mt", "nl", "no", "pl", "pt",  "ro", "rs", "ru", "se", "si", "sk", "sm", "tr", "ua", "uk",  "va" ];
let ages = [    { "country": "fr", "age": 49.968 },    { "country": "at", "age": 21.768 },    { "country": "ba", "age": 9.291 },    { "country": "be", "age": 91.301 },    { "country": "bg", "age": 51.731 } ];

let counties = [
    {
        "name": "Appling",
        "lengthOfLife": "0.69",
        "outcomes_rank": "8",
        "outcomes_z": "0.34",
        "healthBehaviors": "0.24",
        "clinicalCare": "0.17",
        "socialEconomicFactors": "0.14",
        "physicalEnvironment": "-0.08"
    },
    {
        "name": "Atkinson",
        "lengthOfLife": "0.74",
        "outcomes_rank": "12",
        "outcomes_z": "0.14",
        "healthBehaviors": "0.13",
        "clinicalCare": "0.33",
        "socialEconomicFactors": "0.25",
        "physicalEnvironment": "-0.06"
    },
    {
        "name": "Bacon",
        "lengthOfLife": "0.63",
        "outcomes_rank": "7",
        "outcomes_z": "-0.17",
        "healthBehaviors": "0.06",
        "clinicalCare": "0.24",
        "socialEconomicFactors": "0.09",
        "physicalEnvironment": "-0.08"
    },
    {
        "name": "Baker",
        "lengthOfLife": "-0.51",
        "outcomes_rank": "86",
        "outcomes_z": "0.24",
        "healthBehaviors": "0.13",
        "clinicalCare": "-0.01",
        "socialEconomicFactors": "0.13",
        "physicalEnvironment": "0.01"
    },
    {
        "name": "Baldwin",
        "lengthOfLife": "-0.24",
        "outcomes_rank": "144",
        "outcomes_z": "0.44",
        "healthBehaviors": "0.06",
        "clinicalCare": "-0.11",
        "socialEconomicFactors": "0.27",
        "physicalEnvironment": "0.05"
    },
    {
        "name": "Banks",
        "lengthOfLife": "0.05",
        "outcomes_rank": "148",
        "outcomes_z": "-0.14",
        "healthBehaviors": "0.00",
        "clinicalCare": "0.11",
        "socialEconomicFactors": "-0.22",
        "physicalEnvironment": "0.06"
    },
    {
        "name": "Barrow",
        "lengthOfLife": "-0.28",
        "outcomes_rank": "149",
        "outcomes_z": "-0.22",
        "healthBehaviors": "0.09",
        "clinicalCare": "0.03",
        "socialEconomicFactors": "-0.21",
        "physicalEnvironment": "0.07"
    },
    {
        "name": "Bartow",
        "lengthOfLife": "-0.10",
        "outcomes_rank": "98",
        "outcomes_z": "-0.09",
        "healthBehaviors": "-0.06",
        "clinicalCare": "-0.07",
        "socialEconomicFactors": "-0.10",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Ben Hill",
        "lengthOfLife": "0.07",
        "outcomes_rank": "50",
        "outcomes_z": "0.67",
        "healthBehaviors": "0.21",
        "clinicalCare": "0.11",
        "socialEconomicFactors": "0.26",
        "physicalEnvironment": "-0.02"
    },
    {
        "name": "Berrien",
        "lengthOfLife": "0.18",
        "outcomes_rank": "17",
        "outcomes_z": "0.33",
        "healthBehaviors": "0.24",
        "clinicalCare": "0.20",
        "socialEconomicFactors": "-0.03",
        "physicalEnvironment": "-0.06"
    },
    {
        "name": "Bibb",
        "lengthOfLife": "0.66",
        "outcomes_rank": "117",
        "outcomes_z": "0.11",
        "healthBehaviors": "-0.11",
        "clinicalCare": "-0.17",
        "socialEconomicFactors": "0.22",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Bleckley",
        "lengthOfLife": "0.42",
        "outcomes_rank": "83",
        "outcomes_z": "0.08",
        "healthBehaviors": "-0.08",
        "clinicalCare": "-0.09",
        "socialEconomicFactors": "0.23",
        "physicalEnvironment": "0.00"
    },
    {
        "name": "Brantley",
        "lengthOfLife": "0.40",
        "outcomes_rank": "42",
        "outcomes_z": "-0.02",
        "healthBehaviors": "0.02",
        "clinicalCare": "0.16",
        "socialEconomicFactors": "0.15",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "Brooks",
        "lengthOfLife": "-0.14",
        "outcomes_rank": "22",
        "outcomes_z": "0.26",
        "healthBehaviors": "0.11",
        "clinicalCare": "0.09",
        "socialEconomicFactors": "0.00",
        "physicalEnvironment": "-0.05"
    },
    {
        "name": "Bryan",
        "lengthOfLife": "-0.18",
        "outcomes_rank": "114",
        "outcomes_z": "-0.47",
        "healthBehaviors": "-0.30",
        "clinicalCare": "-0.16",
        "socialEconomicFactors": "-0.43",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Bulloch",
        "lengthOfLife": "-0.25",
        "outcomes_rank": "92",
        "outcomes_z": "-0.10",
        "healthBehaviors": "-0.01",
        "clinicalCare": "0.01",
        "socialEconomicFactors": "-0.06",
        "physicalEnvironment": "0.01"
    },
    {
        "name": "Burke",
        "lengthOfLife": "0.53",
        "outcomes_rank": "112",
        "outcomes_z": "0.32",
        "healthBehaviors": "-0.13",
        "clinicalCare": "-0.03",
        "socialEconomicFactors": "0.38",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Butts",
        "lengthOfLife": "0.51",
        "outcomes_rank": "95",
        "outcomes_z": "-0.02",
        "healthBehaviors": "-0.02",
        "clinicalCare": "0.00",
        "socialEconomicFactors": "0.06",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Calhoun",
        "lengthOfLife": "-0.77",
        "outcomes_rank": "2",
        "outcomes_z": "0.25",
        "healthBehaviors": "0.08",
        "clinicalCare": "0.10",
        "socialEconomicFactors": "0.22",
        "physicalEnvironment": "-0.11"
    },
    {
        "name": "Camden",
        "lengthOfLife": "-0.55",
        "outcomes_rank": "61",
        "outcomes_z": "-0.44",
        "healthBehaviors": "-0.01",
        "clinicalCare": "-0.11",
        "socialEconomicFactors": "-0.24",
        "physicalEnvironment": "-0.02"
    },
    {
        "name": "Candler",
        "lengthOfLife": "0.06",
        "outcomes_rank": "30",
        "outcomes_z": "-0.31",
        "healthBehaviors": "0.21",
        "clinicalCare": "0.20",
        "socialEconomicFactors": "0.06",
        "physicalEnvironment": "-0.04"
    },
    {
        "name": "Carroll",
        "lengthOfLife": "-0.10",
        "outcomes_rank": "146",
        "outcomes_z": "-0.19",
        "healthBehaviors": "-0.03",
        "clinicalCare": "-0.07",
        "socialEconomicFactors": "-0.08",
        "physicalEnvironment": "0.06"
    },
    {
        "name": "Catoosa",
        "lengthOfLife": "-0.52",
        "outcomes_rank": "136",
        "outcomes_z": "0.03",
        "healthBehaviors": "-0.03",
        "clinicalCare": "-0.09",
        "socialEconomicFactors": "-0.41",
        "physicalEnvironment": "0.04"
    },
    {
        "name": "Charlton",
        "lengthOfLife": "-0.16",
        "outcomes_rank": "13",
        "outcomes_z": "0.14",
        "healthBehaviors": "0.20",
        "clinicalCare": "0.16",
        "socialEconomicFactors": "0.09",
        "physicalEnvironment": "-0.06"
    },
    {
        "name": "Chatham",
        "lengthOfLife": "-0.33",
        "outcomes_rank": "69",
        "outcomes_z": "-0.19",
        "healthBehaviors": "-0.09",
        "clinicalCare": "-0.16",
        "socialEconomicFactors": "-0.11",
        "physicalEnvironment": "-0.01"
    },
    {
        "name": "Chattahoochee",
        "lengthOfLife": "-0.66",
        "outcomes_rank": "1",
        "outcomes_z": "-0.27",
        "healthBehaviors": "0.07",
        "clinicalCare": "-0.16",
        "socialEconomicFactors": "0.06",
        "physicalEnvironment": "-0.12"
    },
    {
        "name": "Chattooga",
        "lengthOfLife": "0.17",
        "outcomes_rank": "147",
        "outcomes_z": "0.33",
        "healthBehaviors": "0.15",
        "clinicalCare": "0.06",
        "socialEconomicFactors": "0.07",
        "physicalEnvironment": "0.06"
    },
    {
        "name": "Cherokee",
        "lengthOfLife": "-0.90",
        "outcomes_rank": "139",
        "outcomes_z": "-0.58",
        "healthBehaviors": "-0.31",
        "clinicalCare": "-0.11",
        "socialEconomicFactors": "-0.48",
        "physicalEnvironment": "0.04"
    },
    {
        "name": "Clarke",
        "lengthOfLife": "-0.60",
        "outcomes_rank": "113",
        "outcomes_z": "-0.23",
        "healthBehaviors": "-0.25",
        "clinicalCare": "-0.17",
        "socialEconomicFactors": "-0.10",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Clay",
        "lengthOfLife": "0.92",
        "outcomes_rank": "28",
        "outcomes_z": "0.21",
        "healthBehaviors": "0.09",
        "clinicalCare": "0.00",
        "socialEconomicFactors": "0.27",
        "physicalEnvironment": "-0.04"
    },
    {
        "name": "Clayton",
        "lengthOfLife": "-0.46",
        "outcomes_rank": "157",
        "outcomes_z": "-0.06",
        "healthBehaviors": "0.01",
        "clinicalCare": "0.09",
        "socialEconomicFactors": "0.18",
        "physicalEnvironment": "0.14"
    },
    {
        "name": "Clinch",
        "lengthOfLife": "0.88",
        "outcomes_rank": "21",
        "outcomes_z": "0.26",
        "healthBehaviors": "0.10",
        "clinicalCare": "0.09",
        "socialEconomicFactors": "0.16",
        "physicalEnvironment": "-0.05"
    },
    {
        "name": "Cobb",
        "lengthOfLife": "-1.02",
        "outcomes_rank": "124",
        "outcomes_z": "-0.53",
        "healthBehaviors": "-0.39",
        "clinicalCare": "-0.13",
        "socialEconomicFactors": "-0.39",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Coffee",
        "lengthOfLife": "0.15",
        "outcomes_rank": "27",
        "outcomes_z": "0.16",
        "healthBehaviors": "0.05",
        "clinicalCare": "0.22",
        "socialEconomicFactors": "0.20",
        "physicalEnvironment": "-0.04"
    },
    {
        "name": "Colquitt",
        "lengthOfLife": "0.24",
        "outcomes_rank": "11",
        "outcomes_z": "0.15",
        "healthBehaviors": "0.09",
        "clinicalCare": "0.07",
        "socialEconomicFactors": "0.10",
        "physicalEnvironment": "-0.07"
    },
    {
        "name": "Columbia",
        "lengthOfLife": "-0.82",
        "outcomes_rank": "54",
        "outcomes_z": "-0.53",
        "healthBehaviors": "-0.31",
        "clinicalCare": "-0.20",
        "socialEconomicFactors": "-0.54",
        "physicalEnvironment": "-0.02"
    },
    {
        "name": "Cook",
        "lengthOfLife": "0.91",
        "outcomes_rank": "25",
        "outcomes_z": "0.03",
        "healthBehaviors": "0.00",
        "clinicalCare": "0.06",
        "socialEconomicFactors": "0.04",
        "physicalEnvironment": "-0.04"
    },
    {
        "name": "Coweta",
        "lengthOfLife": "-0.76",
        "outcomes_rank": "96",
        "outcomes_z": "-0.40",
        "healthBehaviors": "-0.22",
        "clinicalCare": "-0.12",
        "socialEconomicFactors": "-0.37",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Crawford",
        "lengthOfLife": "-0.23",
        "outcomes_rank": "140",
        "outcomes_z": "0.13",
        "healthBehaviors": "0.03",
        "clinicalCare": "0.03",
        "socialEconomicFactors": "0.05",
        "physicalEnvironment": "0.05"
    },
    {
        "name": "Crisp",
        "lengthOfLife": "0.60",
        "outcomes_rank": "34",
        "outcomes_z": "0.66",
        "healthBehaviors": "0.10",
        "clinicalCare": "-0.01",
        "socialEconomicFactors": "0.36",
        "physicalEnvironment": "-0.04"
    },
    {
        "name": "Dade",
        "lengthOfLife": "0.13",
        "outcomes_rank": "63",
        "outcomes_z": "-0.01",
        "healthBehaviors": "-0.17",
        "clinicalCare": "-0.03",
        "socialEconomicFactors": "-0.26",
        "physicalEnvironment": "-0.01"
    },
    {
        "name": "Dawson",
        "lengthOfLife": "-0.41",
        "outcomes_rank": "159",
        "outcomes_z": "-0.41",
        "healthBehaviors": "0.07",
        "clinicalCare": "-0.10",
        "socialEconomicFactors": "-0.36",
        "physicalEnvironment": "0.19"
    },
    {
        "name": "Decatur",
        "lengthOfLife": "0.50",
        "outcomes_rank": "48",
        "outcomes_z": "0.11",
        "healthBehaviors": "0.17",
        "clinicalCare": "0.08",
        "socialEconomicFactors": "0.19",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "DeKalb",
        "lengthOfLife": "-0.55",
        "outcomes_rank": "128",
        "outcomes_z": "-0.34",
        "healthBehaviors": "-0.31",
        "clinicalCare": "-0.17",
        "socialEconomicFactors": "-0.04",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Dodge",
        "lengthOfLife": "0.24",
        "outcomes_rank": "37",
        "outcomes_z": "0.32",
        "healthBehaviors": "-0.02",
        "clinicalCare": "0.10",
        "socialEconomicFactors": "0.22",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "Dooly",
        "lengthOfLife": "-0.57",
        "outcomes_rank": "57",
        "outcomes_z": "0.15",
        "healthBehaviors": "0.10",
        "clinicalCare": "0.01",
        "socialEconomicFactors": "0.40",
        "physicalEnvironment": "-0.02"
    },
    {
        "name": "Dougherty",
        "lengthOfLife": "0.29",
        "outcomes_rank": "18",
        "outcomes_z": "0.16",
        "healthBehaviors": "0.12",
        "clinicalCare": "-0.10",
        "socialEconomicFactors": "0.28",
        "physicalEnvironment": "-0.05"
    },
    {
        "name": "Douglas",
        "lengthOfLife": "-0.48",
        "outcomes_rank": "125",
        "outcomes_z": "-0.20",
        "healthBehaviors": "-0.16",
        "clinicalCare": "-0.03",
        "socialEconomicFactors": "-0.19",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Early",
        "lengthOfLife": "1.26",
        "outcomes_rank": "40",
        "outcomes_z": "0.57",
        "healthBehaviors": "0.14",
        "clinicalCare": "0.13",
        "socialEconomicFactors": "0.10",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "Echols",
        "lengthOfLife": "-0.12",
        "outcomes_rank": "15",
        "outcomes_z": "-0.28",
        "healthBehaviors": "-0.02",
        "clinicalCare": "0.12",
        "socialEconomicFactors": "-0.01",
        "physicalEnvironment": "-0.06"
    },
    {
        "name": "Effingham",
        "lengthOfLife": "-0.41",
        "outcomes_rank": "99",
        "outcomes_z": "-0.22",
        "healthBehaviors": "-0.11",
        "clinicalCare": "-0.13",
        "socialEconomicFactors": "-0.43",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Elbert",
        "lengthOfLife": "0.51",
        "outcomes_rank": "76",
        "outcomes_z": "0.27",
        "healthBehaviors": "0.06",
        "clinicalCare": "0.08",
        "socialEconomicFactors": "0.14",
        "physicalEnvironment": "0.00"
    },
    {
        "name": "Emanuel",
        "lengthOfLife": "0.49",
        "outcomes_rank": "31",
        "outcomes_z": "-0.06",
        "healthBehaviors": "0.09",
        "clinicalCare": "0.12",
        "socialEconomicFactors": "0.37",
        "physicalEnvironment": "-0.04"
    },
    {
        "name": "Evans",
        "lengthOfLife": "-0.01",
        "outcomes_rank": "78",
        "outcomes_z": "0.34",
        "healthBehaviors": "0.32",
        "clinicalCare": "0.07",
        "socialEconomicFactors": "0.03",
        "physicalEnvironment": "0.00"
    },
    {
        "name": "Fannin",
        "lengthOfLife": "0.26",
        "outcomes_rank": "91",
        "outcomes_z": "0.19",
        "healthBehaviors": "-0.04",
        "clinicalCare": "0.02",
        "socialEconomicFactors": "-0.11",
        "physicalEnvironment": "0.01"
    },
    {
        "name": "Fayette",
        "lengthOfLife": "-0.98",
        "outcomes_rank": "158",
        "outcomes_z": "-0.66",
        "healthBehaviors": "-0.39",
        "clinicalCare": "-0.38",
        "socialEconomicFactors": "-0.64",
        "physicalEnvironment": "0.14"
    },
    {
        "name": "Floyd",
        "lengthOfLife": "0.08",
        "outcomes_rank": "89",
        "outcomes_z": "0.23",
        "healthBehaviors": "-0.14",
        "clinicalCare": "-0.15",
        "socialEconomicFactors": "-0.09",
        "physicalEnvironment": "0.01"
    },
    {
        "name": "Forsyth",
        "lengthOfLife": "-1.26",
        "outcomes_rank": "100",
        "outcomes_z": "-0.77",
        "healthBehaviors": "-0.44",
        "clinicalCare": "-0.17",
        "socialEconomicFactors": "-0.66",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Foutcomes_ranklin",
        "lengthOfLife": "0.15",
        "outcomes_rank": "90",
        "outcomes_z": "-0.09",
        "healthBehaviors": "-0.11",
        "clinicalCare": "0.01",
        "socialEconomicFactors": "-0.08",
        "physicalEnvironment": "0.01"
    },
    {
        "name": "Fulton",
        "lengthOfLife": "-0.49",
        "outcomes_rank": "156",
        "outcomes_z": "-0.34",
        "healthBehaviors": "-0.34",
        "clinicalCare": "-0.16",
        "socialEconomicFactors": "-0.05",
        "physicalEnvironment": "0.13"
    },
    {
        "name": "Gilmer",
        "lengthOfLife": "-0.76",
        "outcomes_rank": "132",
        "outcomes_z": "-0.26",
        "healthBehaviors": "-0.09",
        "clinicalCare": "0.07",
        "socialEconomicFactors": "-0.05",
        "physicalEnvironment": "0.04"
    },
    {
        "name": "Glascock",
        "lengthOfLife": "0.42",
        "outcomes_rank": "106",
        "outcomes_z": "0.03",
        "healthBehaviors": "0.03",
        "clinicalCare": "-0.04",
        "socialEconomicFactors": "0.05",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Glynn",
        "lengthOfLife": "-0.20",
        "outcomes_rank": "47",
        "outcomes_z": "-0.24",
        "healthBehaviors": "-0.10",
        "clinicalCare": "-0.09",
        "socialEconomicFactors": "-0.04",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "Gordon",
        "lengthOfLife": "-0.08",
        "outcomes_rank": "93",
        "outcomes_z": "-0.19",
        "healthBehaviors": "-0.04",
        "clinicalCare": "0.09",
        "socialEconomicFactors": "-0.14",
        "physicalEnvironment": "0.01"
    },
    {
        "name": "Grady",
        "lengthOfLife": "0.04",
        "outcomes_rank": "24",
        "outcomes_z": "0.08",
        "healthBehaviors": "0.19",
        "clinicalCare": "0.08",
        "socialEconomicFactors": "-0.05",
        "physicalEnvironment": "-0.05"
    },
    {
        "name": "Greene",
        "lengthOfLife": "-0.03",
        "outcomes_rank": "126",
        "outcomes_z": "0.11",
        "healthBehaviors": "-0.17",
        "clinicalCare": "-0.11",
        "socialEconomicFactors": "0.13",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Gwinnett",
        "lengthOfLife": "-1.10",
        "outcomes_rank": "142",
        "outcomes_z": "-0.58",
        "healthBehaviors": "-0.32",
        "clinicalCare": "-0.09",
        "socialEconomicFactors": "-0.35",
        "physicalEnvironment": "0.05"
    },
    {
        "name": "Habersham",
        "lengthOfLife": "-0.60",
        "outcomes_rank": "107",
        "outcomes_z": "-0.33",
        "healthBehaviors": "-0.03",
        "clinicalCare": "-0.07",
        "socialEconomicFactors": "-0.19",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Hall",
        "lengthOfLife": "-0.58",
        "outcomes_rank": "123",
        "outcomes_z": "-0.35",
        "healthBehaviors": "-0.23",
        "clinicalCare": "-0.07",
        "socialEconomicFactors": "-0.22",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Hancock",
        "lengthOfLife": "0.24",
        "outcomes_rank": "155",
        "outcomes_z": "0.47",
        "healthBehaviors": "0.16",
        "clinicalCare": "0.00",
        "socialEconomicFactors": "0.50",
        "physicalEnvironment": "0.11"
    },
    {
        "name": "Haralson",
        "lengthOfLife": "0.90",
        "outcomes_rank": "116",
        "outcomes_z": "-0.10",
        "healthBehaviors": "0.08",
        "clinicalCare": "-0.07",
        "socialEconomicFactors": "0.09",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Harris",
        "lengthOfLife": "-0.89",
        "outcomes_rank": "87",
        "outcomes_z": "-0.45",
        "healthBehaviors": "-0.20",
        "clinicalCare": "-0.22",
        "socialEconomicFactors": "-0.54",
        "physicalEnvironment": "0.01"
    },
    {
        "name": "Hart",
        "lengthOfLife": "-0.49",
        "outcomes_rank": "110",
        "outcomes_z": "-0.09",
        "healthBehaviors": "-0.09",
        "clinicalCare": "0.02",
        "socialEconomicFactors": "0.01",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Heard",
        "lengthOfLife": "-0.20",
        "outcomes_rank": "115",
        "outcomes_z": "-0.17",
        "healthBehaviors": "-0.04",
        "clinicalCare": "0.05",
        "socialEconomicFactors": "0.09",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Henry",
        "lengthOfLife": "-0.45",
        "outcomes_rank": "130",
        "outcomes_z": "-0.38",
        "healthBehaviors": "-0.13",
        "clinicalCare": "-0.12",
        "socialEconomicFactors": "-0.34",
        "physicalEnvironment": "0.04"
    },
    {
        "name": "Houston",
        "lengthOfLife": "-0.57",
        "outcomes_rank": "131",
        "outcomes_z": "-0.44",
        "healthBehaviors": "-0.06",
        "clinicalCare": "-0.07",
        "socialEconomicFactors": "-0.31",
        "physicalEnvironment": "0.04"
    },
    {
        "name": "Irwin",
        "lengthOfLife": "0.15",
        "outcomes_rank": "3",
        "outcomes_z": "0.35",
        "healthBehaviors": "-0.01",
        "clinicalCare": "0.01",
        "socialEconomicFactors": "0.13",
        "physicalEnvironment": "-0.10"
    },
    {
        "name": "Jackson",
        "lengthOfLife": "-0.19",
        "outcomes_rank": "119",
        "outcomes_z": "-0.15",
        "healthBehaviors": "-0.11",
        "clinicalCare": "-0.08",
        "socialEconomicFactors": "-0.35",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Jasper",
        "lengthOfLife": "0.05",
        "outcomes_rank": "129",
        "outcomes_z": "-0.06",
        "healthBehaviors": "-0.06",
        "clinicalCare": "0.02",
        "socialEconomicFactors": "-0.09",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Jeff Davis",
        "lengthOfLife": "0.53",
        "outcomes_rank": "16",
        "outcomes_z": "0.24",
        "healthBehaviors": "-0.06",
        "clinicalCare": "0.27",
        "socialEconomicFactors": "0.18",
        "physicalEnvironment": "-0.06"
    },
    {
        "name": "Jefferson",
        "lengthOfLife": "0.77",
        "outcomes_rank": "68",
        "outcomes_z": "0.25",
        "healthBehaviors": "0.13",
        "clinicalCare": "-0.05",
        "socialEconomicFactors": "0.37",
        "physicalEnvironment": "-0.01"
    },
    {
        "name": "Jenkins",
        "lengthOfLife": "0.79",
        "outcomes_rank": "75",
        "outcomes_z": "0.18",
        "healthBehaviors": "0.05",
        "clinicalCare": "0.10",
        "socialEconomicFactors": "0.56",
        "physicalEnvironment": "0.00"
    },
    {
        "name": "Johnson",
        "lengthOfLife": "0.19",
        "outcomes_rank": "39",
        "outcomes_z": "0.37",
        "healthBehaviors": "-0.06",
        "clinicalCare": "-0.03",
        "socialEconomicFactors": "0.24",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "Jones",
        "lengthOfLife": "-0.67",
        "outcomes_rank": "118",
        "outcomes_z": "0.17",
        "healthBehaviors": "-0.01",
        "clinicalCare": "-0.05",
        "socialEconomicFactors": "-0.25",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Lamar",
        "lengthOfLife": "0.04",
        "outcomes_rank": "94",
        "outcomes_z": "0.07",
        "healthBehaviors": "0.01",
        "clinicalCare": "-0.02",
        "socialEconomicFactors": "-0.03",
        "physicalEnvironment": "0.01"
    },
    {
        "name": "Lanier",
        "lengthOfLife": "-0.18",
        "outcomes_rank": "29",
        "outcomes_z": "0.06",
        "healthBehaviors": "0.00",
        "clinicalCare": "0.28",
        "socialEconomicFactors": "-0.13",
        "physicalEnvironment": "-0.04"
    },
    {
        "name": "Laurens",
        "lengthOfLife": "0.42",
        "outcomes_rank": "53",
        "outcomes_z": "0.01",
        "healthBehaviors": "0.07",
        "clinicalCare": "-0.19",
        "socialEconomicFactors": "0.19",
        "physicalEnvironment": "-0.02"
    },
    {
        "name": "Lee",
        "lengthOfLife": "-0.44",
        "outcomes_rank": "10",
        "outcomes_z": "-0.37",
        "healthBehaviors": "-0.04",
        "clinicalCare": "-0.11",
        "socialEconomicFactors": "-0.34",
        "physicalEnvironment": "-0.07"
    },
    {
        "name": "Liberty",
        "lengthOfLife": "-0.29",
        "outcomes_rank": "65",
        "outcomes_z": "-0.10",
        "healthBehaviors": "0.23",
        "clinicalCare": "-0.09",
        "socialEconomicFactors": "-0.10",
        "physicalEnvironment": "-0.01"
    },
    {
        "name": "Lincoln",
        "lengthOfLife": "0.19",
        "outcomes_rank": "104",
        "outcomes_z": "-0.42",
        "healthBehaviors": "0.33",
        "clinicalCare": "0.09",
        "socialEconomicFactors": "0.06",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Long",
        "lengthOfLife": "-0.39",
        "outcomes_rank": "73",
        "outcomes_z": "-0.21",
        "healthBehaviors": "-0.04",
        "clinicalCare": "0.21",
        "socialEconomicFactors": "-0.19",
        "physicalEnvironment": "-0.01"
    },
    {
        "name": "Lowndes",
        "lengthOfLife": "0.04",
        "outcomes_rank": "88",
        "outcomes_z": "0.05",
        "healthBehaviors": "0.07",
        "clinicalCare": "-0.07",
        "socialEconomicFactors": "-0.12",
        "physicalEnvironment": "0.01"
    },
    {
        "name": "Lumpkin",
        "lengthOfLife": "-0.40",
        "outcomes_rank": "145",
        "outcomes_z": "-0.73",
        "healthBehaviors": "-0.16",
        "clinicalCare": "0.02",
        "socialEconomicFactors": "-0.12",
        "physicalEnvironment": "0.05"
    },
    {
        "name": "McDuffie",
        "lengthOfLife": "0.76",
        "outcomes_rank": "151",
        "outcomes_z": "0.37",
        "healthBehaviors": "0.19",
        "clinicalCare": "-0.08",
        "socialEconomicFactors": "0.07",
        "physicalEnvironment": "0.08"
    },
    {
        "name": "McIntosh",
        "lengthOfLife": "-0.05",
        "outcomes_rank": "67",
        "outcomes_z": "0.03",
        "healthBehaviors": "0.12",
        "clinicalCare": "0.01",
        "socialEconomicFactors": "-0.03",
        "physicalEnvironment": "-0.01"
    },
    {
        "name": "Macon",
        "lengthOfLife": "0.18",
        "outcomes_rank": "32",
        "outcomes_z": "0.28",
        "healthBehaviors": "0.31",
        "clinicalCare": "0.21",
        "socialEconomicFactors": "0.48",
        "physicalEnvironment": "-0.04"
    },
    {
        "name": "Madison",
        "lengthOfLife": "0.24",
        "outcomes_rank": "85",
        "outcomes_z": "0.08",
        "healthBehaviors": "0.03",
        "clinicalCare": "0.02",
        "socialEconomicFactors": "-0.19",
        "physicalEnvironment": "0.00"
    },
    {
        "name": "Marion",
        "lengthOfLife": "-0.33",
        "outcomes_rank": "84",
        "outcomes_z": "0.35",
        "healthBehaviors": "0.12",
        "clinicalCare": "0.09",
        "socialEconomicFactors": "0.02",
        "physicalEnvironment": "0.00"
    },
    {
        "name": "Meriwether",
        "lengthOfLife": "0.30",
        "outcomes_rank": "152",
        "outcomes_z": "-0.03",
        "healthBehaviors": "-0.03",
        "clinicalCare": "0.03",
        "socialEconomicFactors": "0.13",
        "physicalEnvironment": "0.09"
    },
    {
        "name": "Miller",
        "lengthOfLife": "0.53",
        "outcomes_rank": "6",
        "outcomes_z": "-0.28",
        "healthBehaviors": "0.02",
        "clinicalCare": "0.10",
        "socialEconomicFactors": "-0.11",
        "physicalEnvironment": "-0.09"
    },
    {
        "name": "Mitchell",
        "lengthOfLife": "-0.01",
        "outcomes_rank": "5",
        "outcomes_z": "-0.04",
        "healthBehaviors": "0.05",
        "clinicalCare": "-0.08",
        "socialEconomicFactors": "0.08",
        "physicalEnvironment": "-0.09"
    },
    {
        "name": "Monroe",
        "lengthOfLife": "-0.27",
        "outcomes_rank": "82",
        "outcomes_z": "-0.18",
        "healthBehaviors": "0.09",
        "clinicalCare": "-0.09",
        "socialEconomicFactors": "-0.28",
        "physicalEnvironment": "0.00"
    },
    {
        "name": "Montgomery",
        "lengthOfLife": "0.29",
        "outcomes_rank": "58",
        "outcomes_z": "0.09",
        "healthBehaviors": "0.07",
        "clinicalCare": "0.01",
        "socialEconomicFactors": "0.16",
        "physicalEnvironment": "-0.02"
    },
    {
        "name": "Morgan",
        "lengthOfLife": "-0.40",
        "outcomes_rank": "138",
        "outcomes_z": "-0.20",
        "healthBehaviors": "-0.18",
        "clinicalCare": "-0.08",
        "socialEconomicFactors": "-0.32",
        "physicalEnvironment": "0.04"
    },
    {
        "name": "Murray",
        "lengthOfLife": "0.16",
        "outcomes_rank": "143",
        "outcomes_z": "0.18",
        "healthBehaviors": "0.02",
        "clinicalCare": "0.09",
        "socialEconomicFactors": "0.07",
        "physicalEnvironment": "0.05"
    },
    {
        "name": "Muscogee",
        "lengthOfLife": "0.22",
        "outcomes_rank": "45",
        "outcomes_z": "0.03",
        "healthBehaviors": "0.19",
        "clinicalCare": "-0.16",
        "socialEconomicFactors": "-0.01",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "Newton",
        "lengthOfLife": "-0.13",
        "outcomes_rank": "134",
        "outcomes_z": "-0.27",
        "healthBehaviors": "0.01",
        "clinicalCare": "-0.04",
        "socialEconomicFactors": "-0.14",
        "physicalEnvironment": "0.04"
    },
    {
        "name": "Oconee",
        "lengthOfLife": "-0.98",
        "outcomes_rank": "71",
        "outcomes_z": "-0.51",
        "healthBehaviors": "-0.39",
        "clinicalCare": "-0.31",
        "socialEconomicFactors": "-0.73",
        "physicalEnvironment": "-0.01"
    },
    {
        "name": "Oglethorpe",
        "lengthOfLife": "-0.53",
        "outcomes_rank": "77",
        "outcomes_z": "-0.13",
        "healthBehaviors": "-0.04",
        "clinicalCare": "-0.01",
        "socialEconomicFactors": "-0.24",
        "physicalEnvironment": "0.00"
    },
    {
        "name": "Paulding",
        "lengthOfLife": "-0.80",
        "outcomes_rank": "121",
        "outcomes_z": "-0.18",
        "healthBehaviors": "-0.27",
        "clinicalCare": "-0.02",
        "socialEconomicFactors": "-0.38",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Peach",
        "lengthOfLife": "0.66",
        "outcomes_rank": "79",
        "outcomes_z": "0.03",
        "healthBehaviors": "0.10",
        "clinicalCare": "0.08",
        "socialEconomicFactors": "0.19",
        "physicalEnvironment": "0.00"
    },
    {
        "name": "Pickens",
        "lengthOfLife": "-0.28",
        "outcomes_rank": "122",
        "outcomes_z": "-0.42",
        "healthBehaviors": "-0.11",
        "clinicalCare": "-0.06",
        "socialEconomicFactors": "-0.27",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Pierce",
        "lengthOfLife": "0.29",
        "outcomes_rank": "51",
        "outcomes_z": "-0.15",
        "healthBehaviors": "-0.07",
        "clinicalCare": "0.10",
        "socialEconomicFactors": "-0.17",
        "physicalEnvironment": "-0.02"
    },
    {
        "name": "Pike",
        "lengthOfLife": "-0.21",
        "outcomes_rank": "105",
        "outcomes_z": "-0.24",
        "healthBehaviors": "-0.07",
        "clinicalCare": "0.08",
        "socialEconomicFactors": "-0.38",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Polk",
        "lengthOfLife": "0.42",
        "outcomes_rank": "150",
        "outcomes_z": "0.28",
        "healthBehaviors": "-0.01",
        "clinicalCare": "0.02",
        "socialEconomicFactors": "-0.01",
        "physicalEnvironment": "0.07"
    },
    {
        "name": "Pulaski",
        "lengthOfLife": "-0.10",
        "outcomes_rank": "38",
        "outcomes_z": "-0.24",
        "healthBehaviors": "-0.10",
        "clinicalCare": "-0.01",
        "socialEconomicFactors": "0.10",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "Putnam",
        "lengthOfLife": "-0.16",
        "outcomes_rank": "72",
        "outcomes_z": "-0.03",
        "healthBehaviors": "-0.10",
        "clinicalCare": "0.04",
        "socialEconomicFactors": "0.07",
        "physicalEnvironment": "-0.01"
    },
    {
        "name": "Quitman",
        "lengthOfLife": "-0.22",
        "outcomes_rank": "4",
        "outcomes_z": "0.45",
        "healthBehaviors": "0.06",
        "clinicalCare": "0.02",
        "socialEconomicFactors": "0.19",
        "physicalEnvironment": "-0.10"
    },
    {
        "name": "Rabun",
        "lengthOfLife": "0.00",
        "outcomes_rank": "108",
        "outcomes_z": "-0.42",
        "healthBehaviors": "-0.12",
        "clinicalCare": "0.11",
        "socialEconomicFactors": "-0.08",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Randolph",
        "lengthOfLife": "0.85",
        "outcomes_rank": "46",
        "outcomes_z": "0.46",
        "healthBehaviors": "0.15",
        "clinicalCare": "0.00",
        "socialEconomicFactors": "0.26",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "Richmond",
        "lengthOfLife": "0.60",
        "outcomes_rank": "64",
        "outcomes_z": "-0.02",
        "healthBehaviors": "0.15",
        "clinicalCare": "-0.11",
        "socialEconomicFactors": "0.20",
        "physicalEnvironment": "-0.01"
    },
    {
        "name": "Rockdale",
        "lengthOfLife": "-0.62",
        "outcomes_rank": "101",
        "outcomes_z": "-0.33",
        "healthBehaviors": "-0.16",
        "clinicalCare": "-0.06",
        "socialEconomicFactors": "-0.16",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Schley",
        "lengthOfLife": "-0.42",
        "outcomes_rank": "55",
        "outcomes_z": "-0.09",
        "healthBehaviors": "-0.02",
        "clinicalCare": "0.05",
        "socialEconomicFactors": "-0.10",
        "physicalEnvironment": "-0.02"
    },
    {
        "name": "Screven",
        "lengthOfLife": "0.06",
        "outcomes_rank": "59",
        "outcomes_z": "-0.22",
        "healthBehaviors": "0.08",
        "clinicalCare": "-0.02",
        "socialEconomicFactors": "0.10",
        "physicalEnvironment": "-0.02"
    },
    {
        "name": "Seminole",
        "lengthOfLife": "1.17",
        "outcomes_rank": "44",
        "outcomes_z": "-0.08",
        "healthBehaviors": "-0.11",
        "clinicalCare": "0.10",
        "socialEconomicFactors": "0.04",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "Spalding",
        "lengthOfLife": "0.34",
        "outcomes_rank": "135",
        "outcomes_z": "0.39",
        "healthBehaviors": "0.05",
        "clinicalCare": "-0.01",
        "socialEconomicFactors": "0.17",
        "physicalEnvironment": "0.04"
    },
    {
        "name": "Stephens",
        "lengthOfLife": "0.42",
        "outcomes_rank": "102",
        "outcomes_z": "0.08",
        "healthBehaviors": "-0.12",
        "clinicalCare": "-0.08",
        "socialEconomicFactors": "-0.17",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Stewart",
        "lengthOfLife": "0.51",
        "outcomes_rank": "49",
        "outcomes_z": "0.14",
        "healthBehaviors": "0.10",
        "clinicalCare": "0.14",
        "socialEconomicFactors": "0.35",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "Sumter",
        "lengthOfLife": "0.12",
        "outcomes_rank": "137",
        "outcomes_z": "-0.09",
        "healthBehaviors": "0.14",
        "clinicalCare": "-0.06",
        "socialEconomicFactors": "0.45",
        "physicalEnvironment": "0.04"
    },
    {
        "name": "Talbot",
        "lengthOfLife": "0.29",
        "outcomes_rank": "80",
        "outcomes_z": "0.42",
        "healthBehaviors": "0.15",
        "clinicalCare": "-0.02",
        "socialEconomicFactors": "0.15",
        "physicalEnvironment": "0.00"
    },
    {
        "name": "Taliaferro",
        "lengthOfLife": "0.91",
        "outcomes_rank": "109",
        "outcomes_z": "0.55",
        "healthBehaviors": "0.13",
        "clinicalCare": "0.16",
        "socialEconomicFactors": "0.17",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Tattnall",
        "lengthOfLife": "0.05",
        "outcomes_rank": "62",
        "outcomes_z": "0.25",
        "healthBehaviors": "0.31",
        "clinicalCare": "0.13",
        "socialEconomicFactors": "0.19",
        "physicalEnvironment": "-0.01"
    },
    {
        "name": "Taylor",
        "lengthOfLife": "0.48",
        "outcomes_rank": "81",
        "outcomes_z": "0.19",
        "healthBehaviors": "0.10",
        "clinicalCare": "0.06",
        "socialEconomicFactors": "0.15",
        "physicalEnvironment": "0.00"
    },
    {
        "name": "Telfair",
        "lengthOfLife": "-0.39",
        "outcomes_rank": "70",
        "outcomes_z": "0.23",
        "healthBehaviors": "0.21",
        "clinicalCare": "0.20",
        "socialEconomicFactors": "0.51",
        "physicalEnvironment": "-0.01"
    },
    {
        "name": "Terrell",
        "lengthOfLife": "0.43",
        "outcomes_rank": "56",
        "outcomes_z": "0.52",
        "healthBehaviors": "0.20",
        "clinicalCare": "0.02",
        "socialEconomicFactors": "0.11",
        "physicalEnvironment": "-0.02"
    },
    {
        "name": "Thomas",
        "lengthOfLife": "0.05",
        "outcomes_rank": "9",
        "outcomes_z": "0.01",
        "healthBehaviors": "0.07",
        "clinicalCare": "-0.15",
        "socialEconomicFactors": "-0.14",
        "physicalEnvironment": "-0.07"
    },
    {
        "name": "Tift",
        "lengthOfLife": "-0.08",
        "outcomes_rank": "20",
        "outcomes_z": "-0.03",
        "healthBehaviors": "-0.08",
        "clinicalCare": "0.04",
        "socialEconomicFactors": "0.06",
        "physicalEnvironment": "-0.05"
    },
    {
        "name": "Toombs",
        "lengthOfLife": "0.12",
        "outcomes_rank": "26",
        "outcomes_z": "0.01",
        "healthBehaviors": "0.00",
        "clinicalCare": "-0.06",
        "socialEconomicFactors": "0.20",
        "physicalEnvironment": "-0.04"
    },
    {
        "name": "Towns",
        "lengthOfLife": "0.36",
        "outcomes_rank": "35",
        "outcomes_z": "-0.57",
        "healthBehaviors": "-0.26",
        "clinicalCare": "-0.15",
        "socialEconomicFactors": "-0.14",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "Treutlen",
        "lengthOfLife": "0.29",
        "outcomes_rank": "33",
        "outcomes_z": "-0.02",
        "healthBehaviors": "0.10",
        "clinicalCare": "-0.04",
        "socialEconomicFactors": "0.29",
        "physicalEnvironment": "-0.04"
    },
    {
        "name": "Troup",
        "lengthOfLife": "0.06",
        "outcomes_rank": "120",
        "outcomes_z": "-0.06",
        "healthBehaviors": "-0.12",
        "clinicalCare": "-0.07",
        "socialEconomicFactors": "-0.03",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Turner",
        "lengthOfLife": "0.30",
        "outcomes_rank": "74",
        "outcomes_z": "0.79",
        "healthBehaviors": "0.08",
        "clinicalCare": "0.02",
        "socialEconomicFactors": "0.11",
        "physicalEnvironment": "0.00"
    },
    {
        "name": "Twiggs",
        "lengthOfLife": "-0.35",
        "outcomes_rank": "103",
        "outcomes_z": "0.52",
        "healthBehaviors": "0.00",
        "clinicalCare": "0.04",
        "socialEconomicFactors": "0.33",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Union",
        "lengthOfLife": "-0.04",
        "outcomes_rank": "141",
        "outcomes_z": "-0.54",
        "healthBehaviors": "-0.37",
        "clinicalCare": "-0.17",
        "socialEconomicFactors": "-0.02",
        "physicalEnvironment": "0.05"
    },
    {
        "name": "Upson",
        "lengthOfLife": "0.55",
        "outcomes_rank": "66",
        "outcomes_z": "0.06",
        "healthBehaviors": "0.13",
        "clinicalCare": "0.07",
        "socialEconomicFactors": "-0.01",
        "physicalEnvironment": "-0.01"
    },
    {
        "name": "Walker",
        "lengthOfLife": "-0.05",
        "outcomes_rank": "111",
        "outcomes_z": "0.25",
        "healthBehaviors": "0.06",
        "clinicalCare": "0.02",
        "socialEconomicFactors": "-0.19",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Walton",
        "lengthOfLife": "-0.05",
        "outcomes_rank": "153",
        "outcomes_z": "-0.44",
        "healthBehaviors": "-0.16",
        "clinicalCare": "-0.05",
        "socialEconomicFactors": "-0.27",
        "physicalEnvironment": "0.09"
    },
    {
        "name": "Ware",
        "lengthOfLife": "0.34",
        "outcomes_rank": "19",
        "outcomes_z": "0.03",
        "healthBehaviors": "0.13",
        "clinicalCare": "-0.03",
        "socialEconomicFactors": "0.12",
        "physicalEnvironment": "-0.05"
    },
    {
        "name": "Warren",
        "lengthOfLife": "0.55",
        "outcomes_rank": "52",
        "outcomes_z": "0.81",
        "healthBehaviors": "0.20",
        "clinicalCare": "-0.08",
        "socialEconomicFactors": "0.34",
        "physicalEnvironment": "-0.02"
    },
    {
        "name": "Washington",
        "lengthOfLife": "-0.29",
        "outcomes_rank": "60",
        "outcomes_z": "0.23",
        "healthBehaviors": "0.22",
        "clinicalCare": "-0.13",
        "socialEconomicFactors": "0.09",
        "physicalEnvironment": "-0.02"
    },
    {
        "name": "Wayne",
        "lengthOfLife": "0.27",
        "outcomes_rank": "41",
        "outcomes_z": "0.16",
        "healthBehaviors": "0.11",
        "clinicalCare": "0.17",
        "socialEconomicFactors": "0.10",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "Webster",
        "lengthOfLife": "-0.47",
        "outcomes_rank": "36",
        "outcomes_z": "0.48",
        "healthBehaviors": "0.06",
        "clinicalCare": "0.08",
        "socialEconomicFactors": "-0.01",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "Wheeler",
        "lengthOfLife": "-0.94",
        "outcomes_rank": "14",
        "outcomes_z": "0.16",
        "healthBehaviors": "0.09",
        "clinicalCare": "0.13",
        "socialEconomicFactors": "0.27",
        "physicalEnvironment": "-0.06"
    },
    {
        "name": "White",
        "lengthOfLife": "-0.08",
        "outcomes_rank": "133",
        "outcomes_z": "-0.04",
        "healthBehaviors": "-0.26",
        "clinicalCare": "-0.07",
        "socialEconomicFactors": "-0.22",
        "physicalEnvironment": "0.04"
    },
    {
        "name": "Whitfield",
        "lengthOfLife": "-0.34",
        "outcomes_rank": "127",
        "outcomes_z": "-0.19",
        "healthBehaviors": "-0.07",
        "clinicalCare": "0.01",
        "socialEconomicFactors": "0.01",
        "physicalEnvironment": "0.03"
    },
    {
        "name": "Wilcox",
        "lengthOfLife": "0.79",
        "outcomes_rank": "43",
        "outcomes_z": "0.00",
        "healthBehaviors": "0.09",
        "clinicalCare": "0.05",
        "socialEconomicFactors": "0.35",
        "physicalEnvironment": "-0.03"
    },
    {
        "name": "Wilkes",
        "lengthOfLife": "0.45",
        "outcomes_rank": "154",
        "outcomes_z": "-0.06",
        "healthBehaviors": "0.09",
        "clinicalCare": "0.07",
        "socialEconomicFactors": "0.22",
        "physicalEnvironment": "0.10"
    },
    {
        "name": "Wilkinson",
        "lengthOfLife": "0.43",
        "outcomes_rank": "97",
        "outcomes_z": "0.40",
        "healthBehaviors": "0.10",
        "clinicalCare": "0.01",
        "socialEconomicFactors": "0.03",
        "physicalEnvironment": "0.02"
    },
    {
        "name": "Worth",
        "lengthOfLife": "-0.40",
        "outcomes_rank": "23",
        "outcomes_z": "0.51",
        "healthBehaviors": "0.09",
        "clinicalCare": "0.05",
        "socialEconomicFactors": "-0.03",
        "physicalEnvironment": "-0.05"
    }
]


/*------------------- GEOGRAPHIC CONTENT DATA ---------------------*/
let ufos = [
      {
          "date": "April, 1941",
          "city": "Cape Girardeau",
          "state": "Missouri",
          "location": [37.309167, -89.546389],
          "url": "http://en.wikipedia.org/wiki/Cape_Girardeau_UFO_crash"
      },{
          "date": "February 24, 1942",
          "city": "Los Angeles",
          "state": "California",
          "location": [34.05, -118.25],
          "url": "http://en.wikipedia.org/wiki/Battle_of_Los_Angeles"
      },{
          "date": "June 21, 1947",
          "city": "Maury Island",
          "state": "Washington",
          "location": [47.376944, -122.429722],
          "url": "http://en.wikipedia.org/wiki/Maury_Island_incident"
      },{
          "date": "June 24, 1947",
          "city": "Maury Island",
          "state": "Washington",
          "location": [47.376944, -122.429722],
          "url": "http://en.wikipedia.org/wiki/Kenneth_Arnold_UFO_sighting"
      },{
          "date": "July 7, 1947",
          "city": "Helena",
          "state": "Montana",
          "location": [46.595806, -112.027031],
          "url": ""
      },{
          "date": "July 7, 1947",
          "city": "Roswell",
          "state": "New Mexico",
          "location": [33.387222, -104.528056],
          "url": "http://en.wikipedia.org/wiki/Roswell_UFO_incident"
      },{
          "date": "January 7, 1948",
          "city": "Maysville",
          "state": "Kentucky",
          "location": [38.643889, -83.775833],
          "url": "http://en.wikipedia.org/wiki/Mantell_UFO_Incident"
      },{
          "date": "July 24, 1948",
          "city": "Montgomery",
          "state": "Alabama",
          "location": [32.361667, -86.279167],
          "url": "http://en.wikipedia.org/wiki/Chiles-Whitted_UFO_Encounter"
      },{
          "date": "October 1, 1948",
          "city": "Fargo",
          "state": "North Dakota",
          "location": [46.877222, -96.789444],
          "url": "http://en.wikipedia.org/wiki/Gorman_Dogfight"
      },{
          "date": "May 11, 1950",
          "city": "McMinnville",
          "state": "Oregon",
          "location": [45.211667, -123.197222],
          "url": "http://en.wikipedia.org/wiki/McMinnville_UFO_photographs"
      },{
          "date": "August 15, 1950",
          "city": "Great Falls",
          "state": "Montana",
          "location": [47.503611, -111.286389],
          "url": "http://en.wikipedia.org/wiki/Mariana_UFO_incident"
      },{
          "date": "August 25, 1951",
          "city": "Lubbock",
          "state": "Texas",
          "location": [33.566667, -101.883333],
          "url": "http://en.wikipedia.org/wiki/Lubbock_Lights"
      },{
          "date": "July 24, 1952",
          "city": "Carson Sink",
          "state": "Nevada",
          "location": [39.877778, -118.347222],
          "url": "http://en.wikipedia.org/wiki/Carson_Sink_UFO_incident"
      },{
          "date": "May 24, 1952",
          "city": "Burbank",
          "state": "California",
          "location": [34.180278, -118.328333],
          "url": "http://en.wikipedia.org/wiki/Orfeo_Angelucci"
      },{
          "date": "July 13, 1952",
          "city": "Washington",
          "state": "District of Columbia",
          "location": [38.895111, -77.036667],
          "url": "http://en.wikipedia.org/wiki/1952_Washington_D.C._UFO_incident"
      },{
          "date": "September 12, 1952",
          "city": "Flatwoods",
          "state": "West Virginia",
          "location": [38.721389, -80.653056],
          "url": "http://en.wikipedia.org/wiki/Flatwoods_monster"
      },{
          "date": "August 5, 1953",
          "city": "Bismarck",
          "state": "North Dakota",
          "location": [46.813333, -100.778889],
          "url": "http://en.wikipedia.org/wiki/Ellsworth_UFO_sighting"
      },{
          "date": "November 23, 1953",
          "city": "Sault Ste. Marie",
          "state": "Michigan",
          "location": [46.496944, -84.345556],
          "url": "http://en.wikipedia.org/wiki/Felix_Moncla"
      },{
          "date": "November 2, 1957",
          "city": "Levelland",
          "state": "Texas",
          "location": [33.587222, -102.378056],
          "url": "http://en.wikipedia.org/wiki/Levelland_UFO_Case"
      },{
          "date": "September 19, 1961",
          "city": "Lancaster",
          "state": "New Hampshire",
          "location": [44.488889, -71.569167],
          "url": "http://en.wikipedia.org/wiki/Betty_and_Barney_Hill_abduction"
      },{
          "date": "April 24, 1964",
          "city": "Socorro",
          "state": "New Mexico",
          "location": [34.061667, -106.899444],
          "url": "http://en.wikipedia.org/wiki/Lonnie_Zamora_incident"
      },{
          "date": "September 3, 1965",
          "city": "Exeter",
          "state": "New Hampshire",
          "location": [42.981389, -70.947778],
          "url": "http://en.wikipedia.org/wiki/Exeter_incident"
      },{
          "date": "December 9, 1965",
          "city": "Kecksburg",
          "state": "Pennsylvania",
          "location": [40.184722, -79.461389],
          "url": "http://en.wikipedia.org/wiki/Kecksburg_UFO_incident"
      },{
          "date": "April 17, 1966",
          "city": "Akron",
          "state": "Ohio",
          "location": [41.073056, -81.517778],
          "url": "http://en.wikipedia.org/wiki/Portage_County_UFO_chase"
      },{
          "date": "December 3, 1967",
          "city": "Ashland",
          "state": "Nebraska",
          "location": [41.040556, -96.3725],
          "url": "http://en.wikipedia.org/wiki/Schirmer_Abduction"
      },{
          "date": "1969",
          "city": "Leary",
          "state": "Georgia",
          "location": [31.485556, -84.513333],
          "url": "http://en.wikipedia.org/wiki/Jimmy_Carter_UFO_incident"
      },{
          "date": "October 11, 1973",
          "city": "Pascagoula",
          "state": "Mississippi",
          "location": [30.363611, -88.541944],
          "url": "http://en.wikipedia.org/wiki/Pascagoula_Abduction"
      },{
          "date": "November 5, 1975",
          "city": "Snowflake",
          "state": "Arizona",
          "location": [34.511111, -110.083056],
          "url": "http://en.wikipedia.org/wiki/Travis_Walton"
      },{
          "date": "August 20, 1976",
          "city": "Allagash",
          "state": "Maine",
          "location": [47.093056, -69.058333],
          "url": "http://en.wikipedia.org/wiki/Allagash_Abductions"
      },{
          "date": "August 27, 1979",
          "city": "Stephen",
          "state": "Minnesota",
          "location": [48.450556, -96.875278],
          "url": "http://en.wikipedia.org/wiki/Val_Johnson_Incident"
      },{
          "date": "December 29, 1980",
          "city": "Dayton",
          "state": "Texas",
          "location": [30.056389, -94.895556],
          "url": "http://en.wikipedia.org/wiki/Cash-Landrum_incident"
      },{
          "date": "November 11, 1987",
          "city": "Gulf Breeze",
          "state": "Florida",
          "location": [30.443333, -87.211389],
          "url": "http://en.wikipedia.org/wiki/Gulf_Breeze_UFO_incident"
      },{
          "date": "March 13, 1997",
          "city": "Phoenix",
          "state": "Arizona",
          "location": [33.45, -112.066667],
          "url": "http://en.wikipedia.org/wiki/Phoenix_Lights"
      },{
          "date": "January 5, 2000",
          "city": "Highland",
          "state": "Illinois",
          "location": [38.743889, -89.677222],
          "url": "http://en.wikipedia.org/wiki/Black_Triangle_(UFO)"
      },{
          "date": "August 21, 2004",
          "city": "Chicago",
          "state": "Illinois",
          "location": [41.881944, -87.627778],
          "url": "http://en.wikipedia.org/wiki/Tinley_Park_Lights"
      },{
          "date": "November 7, 2006",
          "city": "Chicago",
          "state": "Illinois",
          "location": [41.881944, -87.627778],
          "url": "http://en.wikipedia.org/wiki/Chicago_O%27Hare_UFO_sighting_2006"
      },{
          "date": "January 19, 2007",
          "city": "Van Buren",
          "state": "Arkansas",
          "location": [35.444444, -94.346667],
          "url": "http://en.wikinews.org/wiki/US_air_force_colonel_claims_he_spotted_UFOs_over_Arkansas"
      },{
          "date": "January 26, 2007",
          "city": "Charlotte",
          "state": "North Carolina",
          "location": [35.226944, -80.843333],
          "url": "http://en.wikinews.org/wiki/Locals_and_officer_claim_to_have_seen_a_UFO_in_Charlotte,_North_Carolina"
      },{
          "date": "January 8, 2008",
          "city": "Stephenville",
          "state": "Texas",
          "location": [32.220278, -98.213611],
          "url": "http://en.wikinews.org/wiki/UFO_sightings_reported_in_Texas_town"
      },{
          "date": "January 5, 2009",
          "city": "Morristown",
          "state": "New Jersey",
          "location": [40.796562, -74.477318],
          "url": "http://en.wikipedia.org/wiki/Morristown_UFO"
      }
      ];



let seaboard = [
         { "stop": "Washington",     "latitude": 38.895111, "longitude": -77.036667, "duration":  77, "offset": [-30,-10] },
         { "stop": "Fredericksburg", "latitude": 38.301806, "longitude": -77.470833, "duration":  89, "offset": [  6,  4] },
         { "stop": "Richmond",       "latitude": 37.533333, "longitude": -77.466667, "duration":  29, "offset": [  6,  4] },
         { "stop": "Petersburg",     "latitude": 37.21295,  "longitude": -77.400417, "duration":  93, "offset": [  6,  4] },
         { "stop": "Henderson",      "latitude": 36.324722, "longitude": -78.408611, "duration":  44, "offset": [  6,  4] },
         { "stop": "Raleigh",        "latitude": 35.818889, "longitude": -78.644722, "duration": 116, "offset": [  6,  4] },
         { "stop": "Hamlet",         "latitude": 34.888056, "longitude": -79.706111, "duration":  74, "offset": [  6,  6] },
         { "stop": "Monroe",         "latitude": 34.988889, "longitude": -80.549722, "duration":  58, "offset": [  6, -8] },
         { "stop": "Chester",        "latitude": 34.705556, "longitude": -81.211667, "duration":  54, "offset": [  6,  6] },
         { "stop": "Clinton",        "latitude": 34.471389, "longitude": -81.875,    "duration":  34, "offset": [  6,  6] },
         { "stop": "Greenwood",      "latitude": 34.189722, "longitude": -82.154722, "duration":  22, "offset": [ 10, -2] },
         { "stop": "Abbeville",      "latitude": 34.178611, "longitude": -82.379167, "duration":  39, "offset": [  4, 10] },
         { "stop": "Elberton",       "latitude": 34.109722, "longitude": -82.865556, "duration":  41, "offset": [  6, 10] },
         { "stop": "Athens",         "latitude": 33.95,     "longitude": -83.383333, "duration":  75, "offset": [  6,  6] },
         { "stop": "Emory",          "latitude": 33.791111, "longitude": -84.323333, "duration":  25, "offset": [ 10,  4] },
         { "stop": "Atlanta",        "latitude": 33.755,    "longitude": -84.39,     "duration":   0, "offset": [-21, 10] }
     ];
     
 let southern = [
     { "stop": "Washington",      "latitude": 38.895111, "longitude": -77.036667, "duration":  14, "offset": [-30,-10] },
     { "stop": "Alexandria",      "latitude": 38.804722, "longitude": -77.047222, "duration": 116, "offset": [  4,  4] },
     { "stop": "Charlottesville", "latitude": 38.0299,   "longitude": -78.479,    "duration":  77, "offset": [-85,  0] },
     { "stop": "Lynchburg",       "latitude": 37.403672, "longitude": -79.170205, "duration":  71, "offset": [-62,  0] },
     { "stop": "Danville",        "latitude": 36.587238, "longitude": -79.404404, "duration":  64, "offset": [-48, -1] },
     { "stop": "Greensboro",      "latitude": 36.08,     "longitude": -79.819444, "duration":  18, "offset": [-69, -4] },
     { "stop": "High Point",      "latitude": 35.970556, "longitude": -79.9975,   "duration":  47, "offset": [  5,  7] },
     { "stop": "Salisbury",       "latitude": 35.668333, "longitude": -80.478611, "duration":  50, "offset": [-57,  0] },
     { "stop": "Charlotte",       "latitude": 35.226944, "longitude": -80.843333, "duration":  25, "offset": [  8,  0] },
     { "stop": "Gastonia",        "latitude": 35.255278, "longitude": -81.180278, "duration":  63, "offset": [-26,-10] },
     { "stop": "Spartanburg",     "latitude": 34.946667, "longitude": -81.9275,   "duration":  43, "offset": [-80, -7] },
     { "stop": "Greenville",      "latitude": 34.844444, "longitude": -82.385556, "duration": 187, "offset": [-70,  2] },
     { "stop": "Atlanta",         "latitude": 33.755,    "longitude": -84.39,     "duration":   0, "offset": [-21, 10] }
 ];