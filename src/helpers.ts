import moment from 'moment';

export function hashOfTheDay(): number {
    const today = moment();
    const dateHash = (today.year() * 98764321261) + (today.dayOfYear() * 4294967291);

    return dateHash;
}

export function transparentBackground(url: string, opacity: number) {
    opacity = 1-opacity;
    const intensity = opacity * 255;
    const intensityStr = `${intensity},${intensity},${intensity}`;
    return {
        'background-image': `linear-gradient(rgba(${intensityStr},${opacity}), rgba(${intensityStr},${opacity})), url(${url}`,
        'background-size': 'cover',
        'background-blend-mode': 'screen',
    }
}

export function pickRandomDeterministic<T>(collection: T[]): T | undefined {
    return collection.length === 0
        ? undefined
        : collection[(hashOfTheDay() % collection.length)]
}
