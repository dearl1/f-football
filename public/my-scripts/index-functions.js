import { sumPointsOfPlayers, sort2DArray } from "./index-functions-a-few.js";

  // // start: IndexedDB functions


// WARNING: the manager names below need to match the manager names that html is created with above
let manager_data = [
    {
      "single_id": 0,
      "data": {
        "David": [
          202641,
          97032,
          491279,
          460028,
          247348,
          232826,
          460842,
          166989,
          203341,
          177815,
          446008      
        ],
        "Caleb": [
          118342,
          445122,
          204716,
          441164,
          216051,
          74944,
          231057,
          222683,
          222531,
          223094,
          248857
        ],
        "Ben": [
          116535,
          211975,
          462424,
          179268,
          487053,
          232413,
          440089,
          215439,
          201658,
          219168,
          493105
        ],
        "Benjie & Luka": [
          154561,
          221820,
          111478,
          214048,
          455084,
          61366,
          201666,
          448047,
          243016,
          85971,
          231747
        ],
        "Martin": [
          98747,
          169187,
          199798,
          575476,
          169528,
          223340,
          172780,
          165809,
          448089,
          176297,
          517052
        ],
        "Ruth": [
          215059,
          226597,
          83299,
          221632,
          244723,
          209244,
          209046,
          155408,
          180974,
          178301,
          194634
        ],
        "Josh": [
          85633,
          122798,
          119471,
          230001,
          477064,
          244851,
          433154,
          449871,
          209289,
          50175,
          437730
        ],
        "Mark": [
          98980,
          171314,
          198869,
          209036,
          159506,
          141746,
          178186,
          445044,
          451340,
          118748,
          213198
        ],
        "Paul": [
          121160,
          209365,
          101188,
          469142,
          227444,
          208706,
          486672,
          153133,
          151086,
          219847,
          244731
        ],
        "Emma": [
          232917,
          477424,
          78916,
          247348,
          482609,
          424876,
          244850,
          204480,
          159533,
          463067,
          154566      
        ],
        "Matt": [
          184254,
          180804,
          437499,
          119471,
          220627,
          441266,
          184029,
          91651,
          209243,
          60689,
          102057
        ],
        "Danny": [
          172649,
          441191,
          444463,
          219279,
          180804,
          536916,
          167199,
          215379,
          532529,
          216646,
          476344
        ]
      }
    }
  ]
  
  function squad_id_to_name(squad_id) {
    let dict = {
      43: "Man City",
      14: "Liverpool",
      7: "Aston Villa",
      3: "Arsenal",
      8: "Chelsea",
      4: "Newcastle",
      36: "Brighton",
      17: "Nottm Forest",
      54: "Fulham",
      6: "Tottenham",
      1: "Man United",
      94: "Brentford",
      91: "Bournemouth",
      21: "West Ham",
      13: "Leicester City",
      31: "Crystal Palace",
      40: "Ipswich Town",
      20: "Southampton",
      11: "Everton",
      39: "Wolves"
    }
  
    if (!(squad_id in dict)) {
      return "TEAM-NAME-NOT-FOUND"
    }
    
    return dict[squad_id]
  }
  
  
  
  
  
  
  
    let db = null;
    let dbNeedsCreating = false;
  
    function open_or_create_database() {
  
      return new Promise((resolve, reject) => {
        const request = indexedDB.open('MyTestDB');
  
        request.onerror = function (event) {
            console.log("Problem opening DB.");
        }
  
        request.onupgradeneeded = function (event) {
            db = event.target.result;
  
            if (!db.objectStoreNames.contains("managers")) {
  
              dbNeedsCreating = true;
              
              db.createObjectStore("managers", { keyPath: "single_id" });
              console.log("created managers objectStore")        
              console.log(`open_or_create_database. dbNeedsCreating = ${dbNeedsCreating}`);
  
            }
  
        }
  
        request.onsuccess = function (event) {
          db = event.target.result;
          console.log("DB OPENED.");
          resolve(true);
  
        }      
      })
      
  
  }
  
  function delete_database() {
    return new Promise((resolve, reject) => {
  
      const request = indexedDB.deleteDatabase('MyTestDB');
  
      request.onerror = function (event) {
          console.log("Problem deleting DB.");
      }
  
      request.onsuccess = function (event) {
          db = event.target.result;
          console.log("DB DELETED.");
          resolve(true);
      }
  
    })
  }
  
  function insert_records(records) {
      if (db) {
          const insert_transaction = db.transaction("managers", "readwrite");
          const objectStore = insert_transaction.objectStore("managers");
  
          return new Promise((resolve, reject) => {
              insert_transaction.oncomplete = function () {
                  console.log("ALL INSERT TRANSACTIONS COMPLETE.");
                  resolve(true);
              }
  
              insert_transaction.onerror = function () {
                  console.log("PROBLEM INSERTING RECORDS.")
                  resolve(false);
              }
  
              records.forEach(item => {
                  let request = objectStore.add(item);
  
                  request.onsuccess = function () {
                      console.log("Added: ", item);
                  }
              });
          });
      }
      else {
          console.log("no db")
      }
  }
  
  function get_record(searchFor) {
      if (db) {
          const get_transaction = db.transaction("managers", "readonly");
          const objectStore = get_transaction.objectStore("managers");
  
          return new Promise((resolve, reject) => {
              get_transaction.oncomplete = function () {
              console.log("ALL GET TRANSACTIONS COMPLETE.");
              }
  
              get_transaction.onerror = function () {
              console.log("PROBLEM GETTING RECORDS.")
              }
  
              let request = objectStore.get(searchFor);
  
              request.onsuccess = function (event) {
              resolve(event.target.result);
              }
          });
      }
      else {
          console.log("no db")
      }
  }
  
  function update_record(record) {
      if (db) {
          const put_transaction = db.transaction("managers", "readwrite");
          const objectStore = put_transaction.objectStore("managers");
  
          return new Promise((resolve, reject) => {
              put_transaction.oncomplete = function () {
                  console.log("ALL PUT TRANSACTIONS COMPLETE.");
                  resolve(true);
              }
  
              put_transaction.onerror = function () {
                  console.log("PROBLEM UPDATING RECORDS.")
                  resolve(false);
              }
  
              objectStore.put(record);
          });
      }
  }
  
  let addedItems = null;
  // // end: IndexedDB functions
window.onload = async function ()

{
    // await delete_database();
    await open_or_create_database();
    console.log(`top level. dbNeedsCreating = ${dbNeedsCreating}`);
    if (dbNeedsCreating) {
      await insert_records(manager_data);
    }
  
    // res = await get_record(0);
    // console.log(`res = ${res}`)
    // console.log(`res.player_indices = ${res.player_indices}`)
  
    // List of added items
    let res = await get_record(0);
    addedItems = res.data;
  
    // displayAddedItemsList("Emma");    
    // console.log("\n for (const manager in addedItems) ...");
    for (const manager in addedItems) {
      displayAddedItemsList(manager);    
      // console.log(manager);
    }
  
  
    // Initial display of the full list
    let temp = await fetch('/filter', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: ""})
    })
  
    let thing = await temp.json();
  
    // displayFilteredList("Emma", thing.data);
    for (const manager in addedItems) {
      displayFilteredList(manager, thing.data);
    }
  
    
    console.log("\n Will run function: displayTeamsList");
    displayTeamsList();
  
  };
  
  
  
  
    
  
    // Function to display the list of filtered items
    function displayFilteredList(manager, items) {
  
      const filteredList = document.getElementById(`filteredList-${manager}`);
      filteredList.innerHTML = ""; // Clear the existing list
      items.forEach(item => {
          const li = document.createElement('li');
  
          // Create a container for the name
          const nameContainer = document.createElement('div');
          nameContainer.textContent = `${item.first_name} ${item.last_name}   |   ${squad_id_to_name(item.squad_id)}`;
          nameContainer.className = "name-container";
  
          // Create a container for the total points
          const pointsContainer = document.createElement('div');
          pointsContainer.textContent = `${item.stats.total_points} points`;
          pointsContainer.className = "points-container";
  
          // Create the remove button
          const addButton = document.createElement('button');
          addButton.textContent = "Add";
          addButton.className = "add-remove-button";
          addButton.onclick = () => addItem(manager, item.id);
  
          // Append the elements
          li.appendChild(nameContainer);
          li.appendChild(pointsContainer);
          li.appendChild(addButton);
          filteredList.appendChild(li);
      });
    }
  
    // Function to display the added items list
    function displayAddedItemsList(manager) {
      // console.log(`\nIn function displayAddedItemsList`);
  
        const addedItemsList = document.getElementById(`addedItemsList-${manager}`);
        addedItemsList.innerHTML = ""; // Clear the existing list
        console.log(`\n func displayAddedItemsList. addedItems = ${addedItems}`);
        let manager_addedItems = addedItems[manager];
        manager_addedItems.forEach(itemId => {
  
        // (async () => {
          // temp = await fetch('/filter-id', {
          let temp = fetch('/filter-id', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json'
              },
              body: JSON.stringify({data: itemId})
          })
          .then(_ => _.json())
          .then(thing => {
  
            let item = thing.data[0];
            const li = document.createElement('li');
  
            // Create a container for the name
            const nameContainer = document.createElement('div');
            nameContainer.textContent = `${item.first_name} ${item.last_name}   |   ${squad_id_to_name(item.squad_id)}`;
            nameContainer.className = "name-container";
  
            // Create a container for the total points
            const pointsContainer = document.createElement('div');
            pointsContainer.textContent = `${item.stats.total_points} points`;
            pointsContainer.className = "points-container";
  
            // Create the remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = "add-remove-button";
            removeButton.onclick = () => removeItem(manager, item.id);
  
            // Append the elements
            li.appendChild(nameContainer);
            li.appendChild(pointsContainer);
            li.appendChild(removeButton);
            addedItemsList.appendChild(li);
  
          })
  
        // })();
          
  
        });
    }
  
  // display teams list
  async function displayTeamsList() {
    console.log(`\nIn function displayTeamsList`);
  
    const manager_points = [];
  
    for (const manager in addedItems) {
      // console.log(`manager = ${manager}`);
      
      let playersDataPerManager = [];
  
      const playerPromises = addedItems[manager].map(playerId => {
        // console.log(`playerId = ${playerId}`);
        return fetch('/filter-id', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: playerId }),
        })
          .then(response => response.json())
          .then(thing => {
            let item = thing.data[0];
            playersDataPerManager.push(item);
            
          });
      });
  
      // Wait for all player fetches for this manager to complete
      await Promise.all(playerPromises);
  
      // After all player fetches are done, add the manager's total points
      manager_points.push([manager, sumPointsOfPlayers(playersDataPerManager)]);
    }
  
    // console.log(`\nmanager_points...`);
    // for (const item of manager_points) {
    //   console.log(item);
    // }
  
    // console.log("\n\n manager_points ...");
    // console.log(JSON.stringify(manager_points, null, 2));
    
    sort2DArray(manager_points)

    // console.log("\n\n manager_points ...");
    // console.log(JSON.stringify(manager_points, null, 2));
    
    const teamsList = document.getElementById("teamsList");
    teamsList.innerHTML = ""; // Clear the existing list
    
  
    for (const item of manager_points) {
      const li = document.createElement('li');
      // Create a container for the manager
      const nameContainer = document.createElement('div');
      nameContainer.textContent = item[0];
      // nameContainer.className = "name-container";
  
      // Create a container for the total points
      const pointsContainer = document.createElement('div');
      pointsContainer.textContent = `${item[1]} points`;
      // pointsContainer.className = "points-container";
  
      // Append the elements
      li.appendChild(nameContainer);
      li.appendChild(pointsContainer);
      teamsList.appendChild(li);
    }
    
  }
    
    
    
    
  
    // Function to filter the list based on the search input
 function filterList(manager) {
    console.log(`In function filterList. manager = ${manager}`);
        const searchValue = document.getElementById(`searchBar-${manager}`).value.toLowerCase();
  
        (async () => {
          let temp = await fetch('/filter', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json'
              },
              body: JSON.stringify({data: searchValue})
          })
  
          let thing = await temp.json();
  
          displayFilteredList(manager, thing.data);
          
      })();
        
    }
  
    // Function to add an item to the added items list
    function addItem(manager, itemId) {
        if (!addedItems[manager].includes(itemId)) {
            addedItems[manager].push(itemId);
            displayAddedItemsList(manager);
            displayTeamsList();
  
            (async () => {
              await update_record(
                {
                "single_id": 0,
                "data": addedItems
                }
              )
              console.log(`\n tried updating these items to db: ${addedItems}`);
            })();
            
        }
    }
  
    // Function to remove an item from the added items list
    function removeItem(manager, itemId) {
      console.log(`\n in removeItem. itemId = ${itemId}`);
      const index = addedItems[manager].indexOf(itemId);
      if (index > -1) {
          addedItems[manager].splice(index, 1); // Remove the itemId
          displayAddedItemsList(manager);
          displayTeamsList();
  
          (async () => {
            await update_record(
              {
              "single_id": 0,
              "data": addedItems
              }
            )
            // console.log(`\n tried updating these items to db: ${addedItems}`);
          })();
          
      }
    }
  
  // Function to reset a manager's team's players
 function reset(manager) {
    alert(`Will reset ${manager}'s players.\nNote that the default team might not be correct if a manager has made recent transfers.`);
    addedItems[manager] = manager_data[0]["data"][manager];
    displayAddedItemsList(manager);
    displayTeamsList();
  
    (async () => {
      await update_record(
        {
        "single_id": 0,
        "data": addedItems
        }
      )
    })();
  }

window.filterList = filterList;
window.reset = reset;