import { first, random, isNil } from 'lodash';
import {ShroomRaw} from "@/data/legacy";
import {getImagePaths} from "@/data/images";

export function pickRandom<T>(collection: T[]): T | undefined {
    return collection.length === 0
        ? undefined
        : collection[random(collection.length - 1, false)];
}

function thumbnail(image: string): string {
    return `${image}__thumbnail.jpg`
}

export class Mushroom {
    public constructor(private raw: ShroomRaw) {}

    public get name() { return this.raw.name; }
    public get description() { return this.raw.description; }
    public get images() { return this.betterImages ?? this.raw.images; }
    public get betterImages(): string[] | null {
        return getImagePaths(this.name) ?? null;
    }
    public get thumbnail(): string | null {
        const im = pickRandom(this.betterImages ?? []);
        return isNil(im) ? null : thumbnail(im);
    }
    public get links() { return this.raw.links; }
    public get warning() { return this.raw.warning ?? null; }
    public get hasWarning(): boolean { return !isNil(this.warning); }
    public get isHtml() { return this.raw.isHtml ?? false; }
    public get randomImage(): string { return pickRandom(this.images) as string; }
    public get coverImage(): string { return this.randomImage; }
}
