"use strict";
var Feuerwerk;
(function (Feuerwerk) {
    //export class database extends new
    console.log("dingdong");
    /*export function saveFnctn (_data: DataEntries): void {

    }*/
    let saveBtn2 = document.getElementById("saveBtn");
    saveBtn2.addEventListener("click", saveBtn);
    async function saveBtn(_event) {
        console.log("send to server");
        let formData = new FormData(document.forms[0]);
        let json = {};
        for (let key of formData.keys()) {
            if (!json[key]) {
                let values = formData.getAll(key); // get all elements
                json[key] = values.length > 1 ? values : values[0];
                console.log(values);
                // get all the elements in formdata
            }
        }
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Items");
        query.set("data", JSON.stringify(json));
        console.log("data", JSON.stringify(json));
        // https://webuser.hs-furtwangen.de/~distlern/Database/Index.php?command=create&collection=Items
        console.log(JSON.stringify(json));
        console.log("test");
        let url = "https://webuser.hs-furtwangen.de/~distlern/Database/Index.php/?";
        //let response: Response = await fetch(url + query.toString());
        console.log("response", url + query.toString());
        console.log("data.sent");
    }
    Feuerwerk.saveBtn = saveBtn;
})(Feuerwerk || (Feuerwerk = {}));
/*
    https://webuser.hs-furtwangen.de/~distlern/Database/Index.php/?
    let response: Response = await fetch(url);
    let jsonResponse: Products[] = await response.json();
    JSON.stringify(jsonObject);
*/
/*function Server(_port: number | string): void {

       let server: Http.Server = Http.createServer();
       console.log("Server startet auf Port " + _port);
       server.listen(_port);
       server.addListener("request", handleRequest);


       async function getAllData(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
           let result: Mongo.Cursor<any>
           
           
           
           let url: string = "https://webuser.hs-furtwangen.de/~distlern/Database/Index.php/?";
       let response: Response = await fetch("https://webuser.hs-furtwangen.de/~distlern/Database/Index.php/?");
       let jsonResponse: Auto = await response.json();
       jsonResponse.modellnummer  // notizen help
       */ 
//# sourceMappingURL=database.js.map