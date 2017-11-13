import { AbstractModel } from './abstract-model';

export class Movie extends AbstractModel {

    private _title: string;
    private _rating?: "G" | "PG" | "PG-13" | "R" | "NC-17";
    private _poster?: string;
    private _showtimes?: string[];

    constructor(id) {
        super(id);
        this._title = "";
    }

    public static fromApiResponse(data) {
        const movie = new this(data.id);
        if (data.rating) {
            movie._rating = data.rating;
        }
        if (data.title) {
            movie._title = data.title;
        }
        if (data.poster) {
            movie._poster = data.poster;
        }
        return movie;
    }

    get title(): string{
        return this._title;
    }

    get rating(): string {
        return this._rating;
    }

    get poster(): string {
        return this._poster;
    }

    get showtimes(): string[] {
        return this._showtimes;
    }

    set showtimes(value: string[]) {
        this._showtimes = value;
    }
}
