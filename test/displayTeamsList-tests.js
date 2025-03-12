import assert from 'assert';

let data = [
    {
        "id": 118342,
        "squad_id": 94,
        "first_name": "Mark",
        "last_name": "Flekken",
        "cost": 2900000,
        "status": "playing",
        "stats": {
            "subs": 0,
            "goals": 0,
            "saves": 117,
            "assists": 1,
            "last6_avg": 5.2,
            "own_goals": 0,
            "picked_by": 4.85,
            "red_cards": 0,
            "saved_pen": 0,
            "avg_points": 4.07,
            "starting11": 27,
            "games_played": 27,
            "last6_played": 5,
            "last6_points": 26,
            "match_scores": {
                "2444477": 5,
                "2444485": 4,
                "2444491": 4,
                "2444506": 3,
                "2444518": 3,
                "2444522": 3,
                "2444532": 1,
                "2444544": 5,
                "2444552": 1,
                "2444561": 6,
                "2444570": 1,
                "2444583": 9,
                "2444590": 3,
                "2444602": 3,
                "2444611": 4,
                "2444623": 4,
                "2444631": 3,
                "2444642": 7,
                "2444651": 0,
                "2444667": 7,
                "2444671": 4,
                "2444681": 4,
                "2444693": 4,
                "2444719": 8,
                "2444726": 8,
                "2444730": 3,
                "2444740": 3
            },
            "match_squads": {
                "2444477": 94,
                "2444485": 94,
                "2444491": 94,
                "2444506": 94,
                "2444518": 94,
                "2444522": 94,
                "2444532": 94,
                "2444544": 94,
                "2444552": 94,
                "2444561": 94,
                "2444570": 94,
                "2444583": 94,
                "2444590": 94,
                "2444602": 94,
                "2444611": 94,
                "2444623": 94,
                "2444631": 94,
                "2444642": 94,
                "2444651": 94,
                "2444667": 94,
                "2444671": 94,
                "2444681": 94,
                "2444693": 94,
                "2444719": 94,
                "2444726": 94,
                "2444730": 94,
                "2444740": 94
            },
            "not_selected": 2,
            "round_scores": {
                "1": 5,
                "2": 4,
                "3": 4,
                "4": 3,
                "5": 3,
                "6": 3,
                "7": 1,
                "8": 5,
                "9": 1,
                "10": 6,
                "11": 1,
                "12": 9,
                "13": 3,
                "14": 7,
                "15": 4,
                "16": 3,
                "17": 7,
                "18": 7,
                "20": 8,
                "21": 4,
                "24": 8,
                "25": 8,
                "26": 3,
                "27": 3
            },
            "total_points": 110,
            "yellow_cards": 1,
            "goals_conceded": 42,
            "full_clean_sheets": 4,
            "partial_clean_sheets": 1
        },
        "position": 1,
        "locked": false,
        "nationality": "Netherlands",
        "odds_first_goalscorer": []
    },
    {
        "id": 445122,
        "squad_id": 3,
        "first_name": "Jurriën",
        "last_name": "Timber",
        "cost": 4000000,
        "status": "playing",
        "stats": {
            "subs": 1,
            "goals": 1,
            "assists": 2,
            "last6_avg": 4.67,
            "own_goals": 0,
            "picked_by": 5,
            "red_cards": 0,
            "avg_points": 3.81,
            "missed_pen": 0,
            "starting11": 25,
            "games_played": 26,
            "last6_played": 6,
            "last6_points": 28,
            "match_scores": {
                "2444471": 3,
                "2444481": 7,
                "2444490": 1,
                "2444508": 6,
                "2444516": 2,
                "2444521": 4,
                "2444550": 2,
                "2444565": 1,
                "2444572": 2,
                "2444581": 7,
                "2444598": 1,
                "2444601": 12,
                "2444614": 2,
                "2444621": 7,
                "2444632": 1,
                "2444641": 7,
                "2444651": 1,
                "2444670": 2,
                "2444680": 1,
                "2444699": 6,
                "2444701": 1,
                "2444714": 7,
                "2444721": 2,
                "2444733": 7,
                "2444745": 5,
                "2491508": 2
            },
            "match_squads": {
                "2444471": 3,
                "2444481": 3,
                "2444490": 3,
                "2444508": 3,
                "2444516": 3,
                "2444521": 3,
                "2444550": 3,
                "2444565": 3,
                "2444572": 3,
                "2444581": 3,
                "2444598": 3,
                "2444601": 3,
                "2444614": 3,
                "2444621": 3,
                "2444632": 3,
                "2444641": 3,
                "2444651": 3,
                "2444670": 3,
                "2444680": 3,
                "2444699": 3,
                "2444701": 3,
                "2444714": 3,
                "2444721": 3,
                "2444733": 3,
                "2444745": 3,
                "2491508": 3
            },
            "not_selected": 3,
            "round_scores": {
                "1": 3,
                "2": 7,
                "3": 1,
                "4": 6,
                "5": 2,
                "6": 4,
                "9": 2,
                "10": 1,
                "11": 2,
                "12": 7,
                "13": 1,
                "14": 14,
                "15": 7,
                "16": 1,
                "17": 7,
                "18": 1,
                "19": 2,
                "20": 3,
                "21": 6,
                "22": 1,
                "24": 7,
                "25": 2,
                "26": 7,
                "27": 5
            },
            "total_points": 99,
            "yellow_cards": 7,
            "goals_conceded": 19,
            "full_clean_sheets": 9,
            "partial_clean_sheets": 1
        },
        "position": 2,
        "locked": false,
        "nationality": "Netherlands",
        "odds_first_goalscorer": []
    },
    {
        "id": 204716,
        "squad_id": 14,
        "first_name": "Ibrahima",
        "last_name": "Konaté",
        "cost": 3900000,
        "status": "playing",
        "stats": {
            "subs": 1,
            "goals": 1,
            "assists": 2,
            "last6_avg": 3.88,
            "own_goals": 0,
            "picked_by": 8.75,
            "red_cards": 0,
            "avg_points": 4.04,
            "missed_pen": 0,
            "starting11": 22,
            "games_played": 23,
            "last6_played": 8,
            "last6_points": 31,
            "match_scores": {
                "2444473": 3,
                "2444485": 7,
                "2444496": 7,
                "2444505": 2,
                "2444515": 9,
                "2444529": 6,
                "2444535": 7,
                "2444543": 1,
                "2444550": 1,
                "2444563": 2,
                "2444574": 7,
                "2444589": 0,
                "2444613": 1,
                "2444665": 1,
                "2444675": 2,
                "2444681": 7,
                "2444695": 5,
                "2444700": 7,
                "2444715": 1,
                "2444727": 7,
                "2444738": 7,
                "2444744": 2,
                "2444752": 1
            },
            "match_squads": {
                "2444473": 14,
                "2444485": 14,
                "2444496": 14,
                "2444505": 14,
                "2444515": 14,
                "2444529": 14,
                "2444535": 14,
                "2444543": 14,
                "2444550": 14,
                "2444563": 14,
                "2444574": 14,
                "2444589": 14,
                "2444613": 14,
                "2444665": 14,
                "2444675": 14,
                "2444681": 14,
                "2444695": 14,
                "2444700": 14,
                "2444715": 14,
                "2444727": 14,
                "2444738": 14,
                "2444744": 14,
                "2444752": 14
            },
            "not_selected": 8,
            "round_scores": {
                "1": 3,
                "2": 7,
                "3": 7,
                "4": 2,
                "5": 9,
                "6": 6,
                "7": 7,
                "8": 1,
                "9": 1,
                "10": 2,
                "11": 7,
                "12": 0,
                "18": 1,
                "20": 9,
                "21": 5,
                "22": 7,
                "24": 2,
                "25": 8,
                "26": 7,
                "27": 2
            },
            "total_points": 93,
            "yellow_cards": 5,
            "goals_conceded": 17,
            "full_clean_sheets": 9,
            "partial_clean_sheets": 1
        },
        "position": 2,
        "locked": false,
        "nationality": "France",
        "odds_first_goalscorer": []
    },
    {
        "id": 441164,
        "squad_id": 6,
        "first_name": "Pedro",
        "last_name": "Porro",
        "cost": 3800000,
        "status": "playing",
        "stats": {
            "subs": 4,
            "goals": 2,
            "assists": 5,
            "last6_avg": 3.14,
            "own_goals": 0,
            "picked_by": 13.62,
            "red_cards": 0,
            "avg_points": 3.07,
            "missed_pen": 0,
            "starting11": 26,
            "games_played": 30,
            "last6_played": 7,
            "last6_points": 22,
            "match_scores": {
                "2444479": 7,
                "2444488": 7,
                "2444497": 1,
                "2444508": 2,
                "2444518": 2,
                "2444526": 6,
                "2444533": 0,
                "2444548": 2,
                "2444555": 2,
                "2444568": 1,
                "2444577": 4,
                "2444587": 12,
                "2444597": 2,
                "2444600": 1,
                "2444618": 2,
                "2444628": 6,
                "2444638": -3,
                "2444647": 1,
                "2444658": 4,
                "2444668": 4,
                "2444670": 1,
                "2444683": 0,
                "2444698": 4,
                "2444702": 7,
                "2444718": 7,
                "2444725": 1,
                "2444734": 2,
                "2444747": 1,
                "2491523": 6,
                "2502520": 0
            },
            "match_squads": {
                "2444479": 6,
                "2444488": 6,
                "2444497": 6,
                "2444508": 6,
                "2444518": 6,
                "2444526": 6,
                "2444533": 6,
                "2444548": 6,
                "2444555": 6,
                "2444568": 6,
                "2444577": 6,
                "2444587": 6,
                "2444597": 6,
                "2444600": 6,
                "2444618": 6,
                "2444628": 6,
                "2444638": 6,
                "2444647": 6,
                "2444658": 6,
                "2444668": 6,
                "2444670": 6,
                "2444683": 6,
                "2444698": 6,
                "2444702": 6,
                "2444718": 6,
                "2444725": 6,
                "2444734": 6,
                "2444747": 6,
                "2491523": 6,
                "2502520": 6
            },
            "not_selected": 0,
            "round_scores": {
                "1": 7,
                "2": 7,
                "3": 1,
                "4": 2,
                "5": 2,
                "6": 6,
                "7": 0,
                "8": 2,
                "9": 2,
                "10": 1,
                "11": 4,
                "12": 12,
                "13": 2,
                "14": 3,
                "15": 6,
                "16": -3,
                "17": 5,
                "18": 4,
                "19": 6,
                "20": 1,
                "21": 4,
                "22": 7,
                "23": 0,
                "24": 7,
                "25": 1,
                "26": 2,
                "27": 1
            },
            "total_points": 92,
            "yellow_cards": 4,
            "goals_conceded": 40,
            "full_clean_sheets": 7,
            "partial_clean_sheets": 0
        },
        "position": 2,
        "locked": false,
        "nationality": "Spain",
        "odds_first_goalscorer": []
    },
    {
        "id": 216051,
        "squad_id": 1,
        "first_name": "Diogo",
        "last_name": "Dalot",
        "cost": 3300000,
        "status": "playing",
        "stats": {
            "subs": 0,
            "goals": 0,
            "assists": 3,
            "last6_avg": 3,
            "own_goals": 0,
            "picked_by": 8.35,
            "red_cards": 1,
            "avg_points": 2.5,
            "missed_pen": 0,
            "starting11": 30,
            "games_played": 30,
            "last6_played": 8,
            "last6_points": 24,
            "match_scores": {
                "2444470": 7,
                "2444482": 1,
                "2444496": 0,
                "2444507": 10,
                "2444512": 7,
                "2444526": -1,
                "2444531": 7,
                "2444544": 1,
                "2444559": 1,
                "2444564": 1,
                "2444575": 4,
                "2444585": 2,
                "2444595": 7,
                "2444601": 1,
                "2444617": 0,
                "2444625": 2,
                "2444637": 0,
                "2444649": 1,
                "2444657": 1,
                "2444665": 0,
                "2444686": 0,
                "2444694": 7,
                "2444706": 1,
                "2444718": 2,
                "2444723": 1,
                "2444739": 4,
                "2444745": 2,
                "2491508": -1,
                "2502510": 2,
                "2507990": 5
            },
            "match_squads": {
                "2444470": 1,
                "2444482": 1,
                "2444496": 1,
                "2444507": 1,
                "2444512": 1,
                "2444526": 1,
                "2444531": 1,
                "2444544": 1,
                "2444559": 1,
                "2444564": 1,
                "2444575": 1,
                "2444585": 1,
                "2444595": 1,
                "2444601": 1,
                "2444617": 1,
                "2444625": 1,
                "2444637": 1,
                "2444649": 1,
                "2444657": 1,
                "2444665": 1,
                "2444686": 1,
                "2444694": 1,
                "2444706": 1,
                "2444718": 1,
                "2444723": 1,
                "2444739": 1,
                "2444745": 1,
                "2491508": 1,
                "2502510": 1,
                "2507990": 1
            },
            "not_selected": 1,
            "round_scores": {
                "1": 7,
                "2": 1,
                "3": 0,
                "4": 10,
                "5": 7,
                "6": -1,
                "7": 7,
                "8": 1,
                "9": 1,
                "10": 1,
                "11": 4,
                "12": 2,
                "13": 7,
                "14": 1,
                "15": 2,
                "16": 0,
                "17": 2,
                "18": 0,
                "19": -1,
                "20": 0,
                "21": 7,
                "22": 1,
                "23": 2,
                "24": 2,
                "25": 1,
                "26": 9,
                "27": 2
            },
            "total_points": 75,
            "yellow_cards": 4,
            "goals_conceded": 42,
            "full_clean_sheets": 6,
            "partial_clean_sheets": 1
        },
        "position": 2,
        "locked": false,
        "nationality": "Portugal",
        "odds_first_goalscorer": []
    },
    {
        "id": 74944,
        "squad_id": 40,
        "first_name": "Samy",
        "last_name": "Morsy",
        "cost": 2400000,
        "status": "playing",
        "stats": {
            "subs": 2,
            "goals": 1,
            "assists": 1,
            "tackles": 54,
            "last6_avg": 1.8,
            "own_goals": 1,
            "picked_by": 0.72,
            "red_cards": 0,
            "avg_points": 2.6,
            "missed_pen": 0,
            "starting11": 23,
            "games_played": 25,
            "last6_played": 5,
            "last6_points": 9,
            "match_scores": {
                "2444473": 4,
                "2444486": 4,
                "2444494": 1,
                "2444502": 1,
                "2444517": 9,
                "2444525": 2,
                "2444539": 2,
                "2444542": 3,
                "2444562": 7,
                "2444577": 3,
                "2444585": 2,
                "2444596": 2,
                "2444605": 3,
                "2444615": 2,
                "2444629": 3,
                "2444635": 1,
                "2444655": 2,
                "2444664": 1,
                "2444673": 1,
                "2444684": 3,
                "2444695": 4,
                "2444705": 3,
                "2444725": 1,
                "2444739": -1,
                "2507994": 2
            },
            "match_squads": {
                "2444473": 40,
                "2444486": 40,
                "2444494": 40,
                "2444502": 40,
                "2444517": 40,
                "2444525": 40,
                "2444539": 40,
                "2444542": 40,
                "2444562": 40,
                "2444577": 40,
                "2444585": 40,
                "2444596": 40,
                "2444605": 40,
                "2444615": 40,
                "2444629": 40,
                "2444635": 40,
                "2444655": 40,
                "2444664": 40,
                "2444673": 40,
                "2444684": 40,
                "2444695": 40,
                "2444705": 40,
                "2444725": 40,
                "2444739": 40,
                "2507994": 40
            },
            "not_selected": 6,
            "round_scores": {
                "1": 4,
                "2": 4,
                "3": 1,
                "4": 1,
                "5": 9,
                "6": 2,
                "7": 2,
                "8": 3,
                "10": 7,
                "11": 3,
                "12": 2,
                "13": 2,
                "14": 5,
                "15": 3,
                "16": 1,
                "17": 2,
                "18": 1,
                "20": 4,
                "21": 4,
                "22": 3,
                "25": 1,
                "26": 1
            },
            "total_points": 65,
            "yellow_cards": 9
        },
        "position": 3,
        "locked": false,
        "nationality": "Egypt",
        "odds_first_goalscorer": []
    },
    {
        "id": 231057,
        "squad_id": 39,
        "first_name": "Jean-Ricner",
        "last_name": "Bellegarde",
        "cost": 2600000,
        "status": "playing",
        "stats": {
            "subs": 13,
            "goals": 2,
            "assists": 4,
            "tackles": 29,
            "last6_avg": 3.88,
            "own_goals": 0,
            "picked_by": 0.16,
            "red_cards": 0,
            "avg_points": 2.55,
            "missed_pen": 0,
            "starting11": 16,
            "games_played": 29,
            "last6_played": 8,
            "last6_points": 31,
            "match_scores": {
                "2444471": 2,
                "2444489": 3,
                "2444498": 6,
                "2444509": 3,
                "2444510": 2,
                "2444529": 2,
                "2444532": 4,
                "2444549": 1,
                "2444569": 1,
                "2444579": 0,
                "2444584": 2,
                "2444599": 5,
                "2444619": 1,
                "2444629": 3,
                "2444636": 1,
                "2444649": 1,
                "2444658": 2,
                "2444669": 1,
                "2444679": 1,
                "2444682": 1,
                "2444699": 1,
                "2444709": 8,
                "2444715": 4,
                "2444720": 4,
                "2444736": 2,
                "2444749": 5,
                "2491517": 1,
                "2502515": 3,
                "2507992": 4
            },
            "match_squads": {
                "2444471": 39,
                "2444489": 39,
                "2444498": 39,
                "2444509": 39,
                "2444510": 39,
                "2444529": 39,
                "2444532": 39,
                "2444549": 39,
                "2444569": 39,
                "2444579": 39,
                "2444584": 39,
                "2444599": 39,
                "2444619": 39,
                "2444629": 39,
                "2444636": 39,
                "2444649": 39,
                "2444658": 39,
                "2444669": 39,
                "2444679": 39,
                "2444682": 39,
                "2444699": 39,
                "2444709": 39,
                "2444715": 39,
                "2444720": 39,
                "2444736": 39,
                "2444749": 39,
                "2491517": 39,
                "2502515": 39,
                "2507992": 39
            },
            "not_selected": 2,
            "round_scores": {
                "1": 2,
                "2": 3,
                "3": 6,
                "4": 3,
                "5": 2,
                "6": 2,
                "7": 4,
                "8": 1,
                "10": 1,
                "11": 0,
                "12": 2,
                "13": 5,
                "14": 1,
                "15": 3,
                "16": 1,
                "17": 3,
                "18": 1,
                "19": 1,
                "20": 2,
                "21": 1,
                "22": 8,
                "23": 3,
                "24": 4,
                "25": 4,
                "26": 6,
                "27": 5
            },
            "total_points": 74,
            "yellow_cards": 3
        },
        "position": 3,
        "locked": false,
        "nationality": "France",
        "odds_first_goalscorer": []
    },
    {
        "id": 222683,
        "squad_id": 91,
        "first_name": "Justin",
        "last_name": "Kluivert",
        "cost": 2700000,
        "status": "playing",
        "stats": {
            "subs": 6,
            "goals": 13,
            "assists": 7,
            "tackles": 21,
            "last6_avg": 4.25,
            "own_goals": 0,
            "picked_by": 35.28,
            "red_cards": 0,
            "avg_points": 4.67,
            "missed_pen": 0,
            "starting11": 24,
            "games_played": 30,
            "last6_played": 8,
            "last6_points": 34,
            "match_scores": {
                "2444475": 0,
                "2444480": 2,
                "2444493": 6,
                "2444500": 1,
                "2444515": 2,
                "2444520": 1,
                "2444537": 2,
                "2444540": 9,
                "2444551": 1,
                "2444560": 2,
                "2444570": 7,
                "2444580": 2,
                "2444599": 18,
                "2444600": 3,
                "2444615": 2,
                "2444620": 2,
                "2444637": 7,
                "2444640": 1,
                "2444660": 2,
                "2444677": 7,
                "2444687": 19,
                "2444690": 10,
                "2444700": 3,
                "2444717": 5,
                "2444720": 2,
                "2444731": 8,
                "2444747": 5,
                "2491521": 10,
                "2502519": 1,
                "2507992": 0
            },
            "match_squads": {
                "2444475": 91,
                "2444480": 91,
                "2444493": 91,
                "2444500": 91,
                "2444515": 91,
                "2444520": 91,
                "2444537": 91,
                "2444540": 91,
                "2444551": 91,
                "2444560": 91,
                "2444570": 91,
                "2444580": 91,
                "2444599": 91,
                "2444600": 91,
                "2444615": 91,
                "2444620": 91,
                "2444637": 91,
                "2444640": 91,
                "2444660": 91,
                "2444677": 91,
                "2444687": 91,
                "2444690": 91,
                "2444700": 91,
                "2444717": 91,
                "2444720": 91,
                "2444731": 91,
                "2444747": 91,
                "2491521": 91,
                "2502519": 91,
                "2507992": 91
            },
            "not_selected": 1,
            "round_scores": {
                "1": 0,
                "2": 2,
                "3": 6,
                "4": 1,
                "5": 2,
                "6": 1,
                "7": 2,
                "8": 9,
                "9": 1,
                "10": 2,
                "11": 7,
                "12": 2,
                "13": 18,
                "14": 5,
                "15": 2,
                "16": 7,
                "17": 1,
                "18": 2,
                "19": 10,
                "20": 26,
                "21": 10,
                "22": 3,
                "23": 1,
                "24": 5,
                "25": 2,
                "26": 8,
                "27": 5
            },
            "total_points": 140,
            "yellow_cards": 7
        },
        "position": 3,
        "locked": false,
        "nationality": "Netherlands",
        "odds_first_goalscorer": []
    },
    {
        "id": 222531,
        "squad_id": 17,
        "first_name": "Morgan",
        "last_name": "Gibbs-White",
        "cost": 3400000,
        "status": "playing",
        "stats": {
            "subs": 2,
            "goals": 5,
            "assists": 9,
            "tackles": 35,
            "last6_avg": 4.5,
            "own_goals": 0,
            "picked_by": 9.43,
            "red_cards": 1,
            "avg_points": 4.08,
            "missed_pen": 0,
            "starting11": 24,
            "games_played": 26,
            "last6_played": 8,
            "last6_points": 36,
            "match_scores": {
                "2444475": 2,
                "2444487": 8,
                "2444498": 1,
                "2444505": 3,
                "2444511": 0,
                "2444534": 2,
                "2444566": 3,
                "2444576": 3,
                "2444596": 1,
                "2444607": 2,
                "2444617": 10,
                "2444627": 5,
                "2444631": 5,
                "2444647": 5,
                "2444653": 7,
                "2444669": 7,
                "2444675": 1,
                "2444688": 5,
                "2444690": 2,
                "2444708": 15,
                "2444713": 5,
                "2444728": 5,
                "2444733": 3,
                "2444746": 4,
                "2502514": 1,
                "2507994": 1
            },
            "match_squads": {
                "2444475": 17,
                "2444487": 17,
                "2444498": 17,
                "2444505": 17,
                "2444511": 17,
                "2444534": 17,
                "2444566": 17,
                "2444576": 17,
                "2444596": 17,
                "2444607": 17,
                "2444617": 17,
                "2444627": 17,
                "2444631": 17,
                "2444647": 17,
                "2444653": 17,
                "2444669": 17,
                "2444675": 17,
                "2444688": 17,
                "2444690": 17,
                "2444708": 17,
                "2444713": 17,
                "2444728": 17,
                "2444733": 17,
                "2444746": 17,
                "2502514": 17,
                "2507994": 17
            },
            "not_selected": 5,
            "round_scores": {
                "1": 2,
                "2": 8,
                "3": 1,
                "4": 3,
                "5": 0,
                "7": 2,
                "10": 3,
                "11": 3,
                "13": 1,
                "14": 12,
                "15": 5,
                "16": 5,
                "17": 12,
                "18": 7,
                "20": 6,
                "21": 2,
                "22": 15,
                "24": 6,
                "25": 5,
                "26": 4,
                "27": 4
            },
            "total_points": 106,
            "yellow_cards": 6
        },
        "position": 3,
        "locked": false,
        "nationality": "England",
        "odds_first_goalscorer": []
    },
    {
        "id": 223094,
        "squad_id": 43,
        "first_name": "Erling",
        "last_name": "Haaland",
        "cost": 8500000,
        "status": "playing",
        "stats": {
            "subs": 1,
            "goals": 20,
            "assists": 4,
            "last6_avg": 5.83,
            "own_goals": 0,
            "picked_by": 35.09,
            "red_cards": 0,
            "avg_points": 5.82,
            "missed_pen": 1,
            "starting11": 27,
            "games_played": 28,
            "last6_played": 6,
            "last6_points": 35,
            "match_scores": {
                "2444478": 6,
                "2444486": 17,
                "2444499": 17,
                "2444506": 12,
                "2444516": 7,
                "2444527": 2,
                "2444538": 2,
                "2444549": 2,
                "2444558": 7,
                "2444560": 2,
                "2444571": 6,
                "2444587": 2,
                "2444594": 2,
                "2444607": 5,
                "2444612": 7,
                "2444625": 2,
                "2444630": 2,
                "2444645": 0,
                "2444656": 7,
                "2444666": 12,
                "2444671": 2,
                "2444684": 7,
                "2444696": 10,
                "2444701": 7,
                "2444716": 5,
                "2444734": 7,
                "2444746": 2,
                "2507993": 4
            },
            "match_squads": {
                "2444478": 43,
                "2444486": 43,
                "2444499": 43,
                "2444506": 43,
                "2444516": 43,
                "2444527": 43,
                "2444538": 43,
                "2444549": 43,
                "2444558": 43,
                "2444560": 43,
                "2444571": 43,
                "2444587": 43,
                "2444594": 43,
                "2444607": 43,
                "2444612": 43,
                "2444625": 43,
                "2444630": 43,
                "2444645": 43,
                "2444656": 43,
                "2444666": 43,
                "2444671": 43,
                "2444684": 43,
                "2444696": 43,
                "2444701": 43,
                "2444716": 43,
                "2444734": 43,
                "2444746": 43,
                "2507993": 43
            },
            "not_selected": 3,
            "round_scores": {
                "1": 6,
                "2": 17,
                "3": 17,
                "4": 12,
                "5": 7,
                "6": 2,
                "7": 2,
                "8": 2,
                "9": 7,
                "10": 2,
                "11": 6,
                "12": 2,
                "13": 2,
                "14": 12,
                "15": 2,
                "16": 2,
                "17": 7,
                "18": 12,
                "20": 9,
                "21": 10,
                "22": 7,
                "24": 5,
                "26": 11,
                "27": 2
            },
            "total_points": 163,
            "yellow_cards": 2
        },
        "position": 4,
        "locked": false,
        "nationality": "Norway",
        "odds_first_goalscorer": []
    },
    {
        "id": 248857,
        "squad_id": 8,
        "first_name": "Noni",
        "last_name": "Madueke",
        "cost": 3600000,
        "status": "playing",
        "stats": {
            "subs": 5,
            "goals": 7,
            "assists": 4,
            "last6_avg": 3,
            "own_goals": 0,
            "picked_by": 1.52,
            "red_cards": 0,
            "avg_points": 3.63,
            "missed_pen": 0,
            "starting11": 19,
            "games_played": 24,
            "last6_played": 4,
            "last6_points": 12,
            "match_scores": {
                "2444489": 17,
                "2444492": 2,
                "2444500": 2,
                "2444519": 2,
                "2444523": 5,
                "2444534": 7,
                "2444543": 2,
                "2444554": 1,
                "2444564": 2,
                "2444572": 1,
                "2444586": 2,
                "2444592": 3,
                "2444609": 10,
                "2444618": 1,
                "2444623": 5,
                "2444633": 1,
                "2444655": 2,
                "2444663": 1,
                "2444677": 2,
                "2444682": 7,
                "2444696": 7,
                "2444703": 2,
                "2444711": 2,
                "2502511": 1
            },
            "match_squads": {
                "2444489": 8,
                "2444492": 8,
                "2444500": 8,
                "2444519": 8,
                "2444523": 8,
                "2444534": 8,
                "2444543": 8,
                "2444554": 8,
                "2444564": 8,
                "2444572": 8,
                "2444586": 8,
                "2444592": 8,
                "2444609": 8,
                "2444618": 8,
                "2444623": 8,
                "2444633": 8,
                "2444655": 8,
                "2444663": 8,
                "2444677": 8,
                "2444682": 8,
                "2444696": 8,
                "2444703": 8,
                "2444711": 8,
                "2502511": 8
            },
            "not_selected": 6,
            "round_scores": {
                "2": 17,
                "3": 2,
                "4": 2,
                "5": 2,
                "6": 5,
                "7": 7,
                "8": 2,
                "9": 1,
                "10": 2,
                "11": 1,
                "12": 2,
                "13": 3,
                "14": 11,
                "15": 5,
                "16": 1,
                "17": 2,
                "18": 1,
                "20": 9,
                "21": 7,
                "22": 2,
                "23": 1,
                "24": 2
            },
            "total_points": 87,
            "yellow_cards": 3
        },
        "position": 4,
        "locked": false,
        "nationality": "England",
        "odds_first_goalscorer": []
    }
]

// const {sumPointsOfPlayers} = require("../public/my-scripts/index-functions-a-few.js");
import { sumPointsOfPlayers } from "../public/my-scripts/index-functions-a-few.js";


// console.log("\n result of sumPointsOfPlayers function");
// console.log(sumPointsOfPlayers(data))
assert.strictEqual(sumPointsOfPlayers(data), 1104, "sumPointsOfPlayers has not worked correctly");