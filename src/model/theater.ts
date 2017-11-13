import { AbstractModel } from './abstract-model';
import { Movie } from './movie';

export class Theater extends AbstractModel {

    private _name: string;
    private _movies?: Movie[];
    private _showtimes?: string[];

    constructor(id) {
        super(id);
        this._name = "";
    }

    public static fromApiResponse(data) {
        const theater = new this(data.id);

        if (data.name) {
            theater._name = data.name
        }
        if (data.showtimes) {
            theater._movies = [];
            Object.entries(data.showtimes).forEach((movieAndShowtimes) => {
                let movieListing = new Movie(movieAndShowtimes[0]);
                movieListing.showtimes = movieAndShowtimes[1];
                theater.movies.push(movieListing)
            });
        }
        return theater;
    }

    get name(): string {
        return this._name;
    }

    get movies(): Movie[] {
        return this._movies;
    }

    get showtimes(): string[] {
        return this._showtimes;
    }
}
