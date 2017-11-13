export abstract class AbstractModel {
    protected _id: string;

    protected constructor(id: string) {
        this._id = id;
    }

    get id(): string {
        return this._id;
    }
}
