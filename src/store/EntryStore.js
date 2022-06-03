import {makeAutoObservable} from "mobx";

export default class EntryStore {
    constructor() {
        this._entries = [
            {id: 1, infoId: 1, serviceId: 1, dateEntry: '2022-05-28T12:00:00Z'}
        ]
        this._infos = [
            {id: 1, firstname: 'Дмитрий', lastname: 'Лебедев', patronymic: 'Александрович', phone: '+79017794323'}
        ]
        makeAutoObservable(this)
    }
    setEntries(entries) {
        this._entries = entries
    }
    setInfos(infos) {
    this._infos = infos
    }
    get entries() {
        return this._entries
    }
    get infos() {
        return this._infos
    }
}