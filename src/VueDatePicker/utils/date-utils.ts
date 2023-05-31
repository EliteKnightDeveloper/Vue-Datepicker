import {
    parse,
    isDate,
    isValid,
    setHours,
    setMinutes,
    setSeconds,
    setMilliseconds,
    isBefore,
    isEqual,
    isAfter,
    set,
} from 'date-fns';

import type { DateTimeSetter, DateValue, TimeModel, TimeType } from '@/interfaces';
import type { Duration } from 'date-fns';

const parseTextToDate = (
    value: string,
    pattern: string,
    time: TimeModel,
    inputVal?: string,
    onPaste?: boolean,
): Date | null => {
    const parsedDate = parse(value, pattern.slice(0, value.length), new Date());
    if (isValid(parsedDate) && isDate(parsedDate)) {
        if (inputVal || onPaste) return parsedDate;
        return set(parsedDate, {
            hours: +time.hours,
            minutes: +time?.minutes,
            seconds: +time?.seconds,
            milliseconds: 0,
        });
    }
    return null;
};

export const parseFreeInput = (
    value: string,
    pattern: string | string[] | ((value: string) => Date | null),
    time: TimeModel | TimeModel[],
    inputVal?: string,
    onPaste?: boolean,
): Date | null => {
    const defaultTime = Array.isArray(time) ? time[0] : time;
    if (typeof pattern === 'string') {
        return parseTextToDate(value, pattern, defaultTime, inputVal, onPaste);
    }

    if (Array.isArray(pattern)) {
        let parsedDate = null;
        for (const textVal of pattern) {
            parsedDate = parseTextToDate(value, textVal, defaultTime, inputVal, onPaste);
            if (parsedDate) {
                break;
            }
        }
        return parsedDate;
    }

    if (typeof pattern === 'function') {
        return pattern(value);
    }

    return null;
};

export const getDate = (value?: Date | string | number) => (value ? new Date(value) : new Date());

export const dateToUtc = (date: Date, preserve: boolean, enableSeconds: boolean) => {
    if (preserve) {
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = enableSeconds ? date.getSeconds().toString().padStart(2, '0') : '00';

        return `${date.getFullYear()}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
    }
    const utcDate = Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
    );

    return new Date(utcDate).toISOString();
};

// Reset date time
export const resetDateTime = (value: Date | string): Date => {
    let dateParse = getDate(JSON.parse(JSON.stringify(value)));
    dateParse = setHours(dateParse, 0);
    dateParse = setMinutes(dateParse, 0);
    dateParse = setSeconds(dateParse, 0);
    dateParse = setMilliseconds(dateParse, 0);

    return dateParse;
};

export const setDateTime = (
    date: Date | null,
    hours?: DateTimeSetter,
    minutes?: DateTimeSetter,
    seconds?: DateTimeSetter,
): Date => {
    let dateCopy = date ? getDate(date) : getDate();
    if (hours || hours === 0) {
        dateCopy = setHours(dateCopy, +hours);
    }
    if (minutes || minutes === 0) {
        dateCopy = setMinutes(dateCopy, +minutes);
    }
    if (seconds || seconds === 0) {
        dateCopy = setSeconds(dateCopy, +seconds);
    }
    return setMilliseconds(dateCopy, 0);
};

export const isDateBefore = (date: DateValue, dateToCompare: DateValue): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isBefore(resetDateTime(date), resetDateTime(dateToCompare));
};

export const isDateEqual = (date: DateValue, dateToCompare: DateValue): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isEqual(resetDateTime(date), resetDateTime(dateToCompare));
};

export const isDateAfter = (date: DateValue, dateToCompare: DateValue): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isAfter(resetDateTime(date), resetDateTime(dateToCompare));
};

export const isDateBetween = (range: Date[], hoverDate: Date | null, dateToCheck: Date): boolean => {
    if (range && range[0] && range[1]) {
        return isDateAfter(dateToCheck, range[0]) && isDateBefore(dateToCheck, range[1]);
    }
    if (range && range[0] && hoverDate) {
        return (
            (isDateAfter(dateToCheck, range[0]) && isDateBefore(dateToCheck, hoverDate)) ||
            (isDateBefore(dateToCheck, range[0]) && isDateAfter(dateToCheck, hoverDate))
        );
    }
    return false;
};

export const resetDate = (date: Date | string): Date => {
    const onFirst = set(new Date(date), { date: 1 });
    return resetDateTime(onFirst);
};

export const sanitizeTime = (time: TimeModel, type?: TimeType, value?: number): Duration => {
    if (type && (value || value === 0)) {
        return Object.fromEntries(
            (['hours', 'minutes', 'seconds'] as TimeType[]).map((timeType) => {
                if (timeType === type) return [timeType, value];
                return [timeType, !isNaN(+time[timeType]) ? +time[timeType] : undefined];
            }),
        );
    }
    return {
        hours: !isNaN(+time.hours) ? +time.hours : undefined,
        minutes: !isNaN(+time.minutes) ? +time.minutes : undefined,
        seconds: !isNaN(+time.seconds) ? +time.seconds : undefined,
    };
};
