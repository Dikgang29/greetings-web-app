module.exports = function TestingFunction(db){

    async function namesInDatabase(name){
        const userNames = await db.any(`SELECT * FROM user_names WHERE users_greeted = $1;`, [name]);

        if(userNames.length===0){
            await db.any(`INSERT INTO user_names (users_greeted, name_counter) values ($1,$2);`, [name,1])
        }
        else{
            await db.any(`UPDATE user_names  SET users_greeted = $1, name_counter = name_counter + 1 WHERE users_greeted = $1;`,[name])
        }
    }

    async function getNamesInDatabase(){
        const allNames = await db.any(`SELECT * FROM user_names;`)
        return allNames;
    }

    async function getDatabaseCount(){
        const getCount = await db.any(`SELECT count(*) FROM user_names;`)
       let databaseCounter = getCount[0];
        console.log(databaseCounter.count)

        
        return databaseCounter.count;
    }

    function testCounter(){
        return{
            databaseCounter
        }
    }

    async function getUser(name){
        const singleUser = await db.any(`SELECT users_greeted,name_counter FROM user_names WHERE users_greeted = $1;`, [name])
        return singleUser;
    }

    async function deleteAll(){
         await db.none('Delete FROM user_names;')
    }


return{
    namesInDatabase,
    getNamesInDatabase,
    getDatabaseCount,
    getUser,
    testCounter,
    deleteAll
}

}