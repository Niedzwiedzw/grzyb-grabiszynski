import { first } from 'lodash';

import {ShroomRaw} from "@/data/legacy";

export class Mushroom {
    public constructor(private raw: ShroomRaw) {}

    public get name() { return this.raw.name; }
    public get description() { return this.raw.description; }
    public get images() { return this.raw.images; }
    public get links() { return this.raw.links; }
    public get warning() { return this.raw.warning; }
    public get isHtml() { return this.raw.isHtml ?? false; }

    public get coverImage(): string { return first(this.images) as string; }
}
