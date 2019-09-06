

class LocalStorage {
    /**
     * 
     * @param {Storage} storage 
     */
    constructor(storage) {
        this._storage = storage
    }
    async getRaw(key) {
        return this._storage.getItem(key);
    }
    async get(key, defaultValue) {
        return JSON.parse(await this.getRaw(key)) || defaultValue;
    }
    async setRaw(key, value) {
        return this._storage.setItem(key, value);
    }
    // multiGet(...args){
    //     return this.asyncStorage.multiGet(...args)
    // }
    // multiSet(...args){
    //     return this.asyncStorage.multiSet(...args)
    // }
    set(key, value) {
        return this.setRaw(key, JSON.stringify(value))
    }
    async remove(key) {
        return this._storage.removeItem(key)
    }
    setFlash(key,value){
        this.set("flash-"+key, value)
    }
    getFlash(key,defaultValue){
        var value=this.get("flash-"+key, defaultValue);
        this.set("flash-"+key, null);
        return value;
    }
}