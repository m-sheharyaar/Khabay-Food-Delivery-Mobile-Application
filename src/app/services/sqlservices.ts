import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

export class Sqlservices {

    constructor(private sqlite: SQLite) { }

    createLocalDB() {
        var query = "CREATE TABLE IF NOT EXISTS ShopSearchHistory_" + localStorage.getItem('userName') + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, SearchingName VARCHAR(500))";
        var query1 = "CREATE TABLE IF NOT EXISTS ShopRecentlyViewed_" + localStorage.getItem('userName') + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, ShopID INTEGER, ImageURL VARCHAR(1000))";

        return this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                db.executeSql(query, [])
                db.executeSql(query1, [])
                    .then(() => console.log('Create Database And Table Successfully'))
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }

    getDataFromTable(paramOptions) {
        var query;
        var tblInfo = paramOptions.tblData;
        localStorage.setItem('getTableName', tblInfo.tableName);

        if (tblInfo.columnValue == null) {
            query = "SELECT * FROM " + tblInfo.tableName + localStorage.getItem('userName') + ' ORDER BY ID DESC';
        }
        else {
            query = "SELECT * FROM " + tblInfo.tableName + localStorage.getItem('userName') + " WHERE " + tblInfo.columnName + " = " + tblInfo.columnValue + ' ORDER BY ID DESC';
        }

        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then(
                (sql) => {
                    sql.executeSql(query, []).then(
                        (data) => {
                            var temp_DataList = [];
                            for (var i = 0; i < data.rows.length; i++) {
                               // temp_DataList.push([data.rows.item(i).SearchingName]);
                               // ShopID: data.rows.item(i).ShopID,
                               //ImageURL: data.rows.item(i).ImageURL
                               temp_DataList.push(data.rows.item(i));
                            }

                            var tblName = localStorage.getItem('getTableName')
                            paramOptions.callback && paramOptions.callback({
                                control: paramOptions.control,
                                dataList: temp_DataList,
                                tableName: tblName
                            });
                        }
                    ).catch(e => console.log(e));
                })
            .catch(e => console.log(e));
    }

    deleteDataFromTable(paramOptions) {
        var tblInfo = paramOptions.tblData;
        var query;

        localStorage.setItem('deleteTableName', tblInfo.tableName);

        if (tblInfo.columnValue == null) {
            query = "DELETE FROM " + tblInfo.tableName + localStorage.getItem('userName');
        }
        else {
            query = "DELETE FROM " + tblInfo.tableName + localStorage.getItem('userName') + " WHERE " + tblInfo.columnName + " = " + tblInfo.columnValue;
        }

        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then(
                (sql) => {
                    sql.executeSql(query, []).then(
                        (data) => {
                            
                            if (paramOptions != '') {                              
                                var tblName = localStorage.getItem('deleteTableName')
                                paramOptions.callback && paramOptions.callback({
                                    control: paramOptions.control,
                                    tableName: tblName
                                });
                            }

                            console.log('Records Successfully Deleted.')
                        }
                    )
                        .catch(e => console.log(e));
                })
            .catch(e => console.log(e));
    }

    ///////////////////////// must be generic log /////////////////////////////////////////////
    insertShopSearchHistoryTable(searchingValue) {
        const tableData: any = {
            tableName: 'ShopSearchHistory_',
            columnName: 'SearchingName',
            columnValue: searchingValue
        };

        var tblData = {
            tblData: tableData
        };

        this.deleteDataFromTable(tblData);

        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                var query = "INSERT INTO ShopSearchHistory_" + localStorage.getItem('userName') + " (SearchingName) VALUES(" + searchingValue + ");";
                db.executeSql(query, [])
                    .then(() => console.log('Record Insert Successfully'))
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }

    insertShopRecentlyViewedTable(l_shopID, l_imageURL) {
        const tableData: any = {
            tableName: 'ShopRecentlyViewed_',
            columnName: 'ShopID',
            columnValue: l_shopID
        }

        var tblData = {
            tblData: tableData
        };

        this.deleteDataFromTable(tblData);

        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                var query1 = "INSERT INTO ShopRecentlyViewed_" + localStorage.getItem('userName') + " (ShopID, ImageURL) VALUES('" + l_shopID + "','" + l_imageURL + "');";
                db.executeSql(query1, [])
                    .then(() => console.log('Record Insert Successfully'))
                    .catch(e => console.log(e));

            })
            .catch(e => console.log(e));
    }
 
    // insertShopSearchTable(paramOptions) {
    //     debugger
    //     var columnName: any = '';
    //     var columnValue: any = '';
         
    //     for(let i = 0; i < paramOptions.column.length; i++){
    //          columnName = columnName + paramOptions.column[i].columnName + ',';
    //          columnValue = columnValue + paramOptions.column[i].columnValue + "','";
    //     } 

    //    columnName = columnName.slice(0, -1);
    //    columnValue = columnValue.slice(0, -3);

    //     const tableData: any = {
    //         tableName: paramOptions.tableName,
    //         columnName: paramOptions.columnName,
    //         columnValue: paramOptions.columnValue
    //     };

    //     var tblData = {
    //         tblData: tableData
    //     };

    //     //this.deleteDataFromTable(tblData);

    //     this.sqlite.create({
    //         name: 'data.db',
    //         location: 'default'
    //     })
    //         .then((db: SQLiteObject) => {
    //            var query = "INSERT INTO "+ paramOptions.tableName + localStorage.getItem('userName') + " (" + columnName + ") VALUES('" + columnValue + "');";
    //            db.executeSql(query, [])
    //                .then(() => console.log('Record Insert Successfully'))
    //                .catch(e => console.log(e));
    //         })
    //         .catch(e => console.log(e));
    // }


    // getShopRecentlyViewedTable(paramOptions) {
    //     var tblInfo = paramOptions.tblData;
    //     localStorage.setItem('getRecentTableName', tblInfo.tableName)
    //     var query;

    //     if (tblInfo.columnValue == null) {
    //         query = "SELECT * FROM " + tblInfo.tableName + localStorage.getItem('userName') + ' ORDER BY ID DESC';
    //     }
    //     else {
    //         query = "SELECT * FROM " + tblInfo.tableName + localStorage.getItem('userName') + " WHERE" + tblInfo.columnName + " = " + tblInfo.columnValue + ' ORDER BY ID DESC';
    //     }

    //     this.sqlite.create({
    //         name: 'data.db',
    //         location: 'default'
    //     })
    //         .then(
    //             (sql) => {
    //                 sql.executeSql(query, []).then(
    //                     (data) => {
    //                         var temp_searchList = [];
    //                         debugger
    //                         for (var i = 0; i < data.rows.length; i++) {
    //                             // temp_searchList.push(
    //                             //     {
    //                             //         ShopID: data.rows.item(i).ShopID,
    //                             //         ImageURL: data.rows.item(i).ImageURL
    //                             //     }
    //                             // );

    //                             temp_searchList.push(data.rows.item(i));
    //                         }
    //                         var tblName = localStorage.getItem('getRecentTableName')
    //                         paramOptions.callback && paramOptions.callback({
    //                             control: paramOptions.control,
    //                             shopRecentlyViewed: temp_searchList,
    //                             tableName: tblName
    //                         });
    //                     }
    //                 ).catch(e => console.log(e));
    //             })
    //         .catch(e => console.log(e));
    // }
}
