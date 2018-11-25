import Dexie from 'dexie';

const db = new Dexie('myDb');
db.version(1).stores({
    workers: "++id,name,code,sector"
});

function AddAttendance(data) {
    return db.transaction('rw', db.workers, async() => {
        let save = await db.workers.add(data);
    })
}

function GetAttendance(){
    return db.transaction('r', db.workers, async() => {
        return db.workers.toArray();
    })
}

export {
    AddAttendance,
    GetAttendance,
}