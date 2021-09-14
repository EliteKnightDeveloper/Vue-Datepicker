import parse from 'date-fns/parse';
import format from 'date-fns/format';
import isDate from 'date-fns/isDate';
import isValid from 'date-fns/isValid';
import setYear from 'date-fns/setYear';
import setMonth from 'date-fns/setMonth';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import setSeconds from 'date-fns/setSeconds';
import setMilliseconds from 'date-fns/setMilliseconds';
import getHours from 'date-fns/getHours';
import getMinutes from 'date-fns/getMinutes';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import isEqual from 'date-fns/isEqual';
import getISOWeek from 'date-fns/getISOWeek';

import { IMonthValue, ITimeValue } from '../interfaces';

/**
 * If text input is set to free, meaning there is no specified mask,
 * it will try to parse date based on pattern and parts of the text value
 */
export const parseFreeInput = (value: string, pattern: string): Date | null => {
    const parsedDate = parse(value, pattern.slice(0, value.length), new Date());
    if (isValid(parsedDate)) {
        return parsedDate;
    }
    return null;
};

export const resetDateTime = (value: Date | string): Date => {
    // deep copy to bread inheritance
    let dateParse = new Date(JSON.parse(JSON.stringify(value)));
    dateParse = setHours(dateParse, 0);
    dateParse = setMinutes(dateParse, 0);
    dateParse = setSeconds(dateParse, 0);
    dateParse = setMilliseconds(dateParse, 0);

    return dateParse;
};

/**
 * Convert string value to date based on provided pattern
 */
export const parseDate = (date: string, pattern: string): Date => {
    return parse(date, pattern, new Date());
};

/**
 * From masked text input, return date if valid, null if not
 */
export const getMaskedDate = (value: string, pattern: string): Date | null => {
    const parsedDate = parseDate(value, pattern);
    if (isDate(parsedDate) && isValid(parsedDate)) {
        return parsedDate;
    }
    return null;
};

/**
 * Check if provided date(s) is valid
 */
export const isValidDate = (value: Date | Date[] | null): boolean => {
    if (Array.isArray(value)) {
        return isValid(value[0]) && isValid(value[1]);
    }
    return value ? isValid(value) : false;
};

/**
 * On a given date set time, or return a new date with set time
 */
export const setDateTime = (date: Date | null, hours?: number | null, minutes?: number | null): Date => {
    let dateCopy = date ? new Date(date) : new Date();
    if (hours || hours === 0) {
        dateCopy = setHours(dateCopy, hours);
    }
    if (minutes || minutes === 0) {
        dateCopy = setMinutes(dateCopy, minutes);
    }
    return dateCopy;
};

/**
 * On a given date set month and/or year or return new date with set month/year
 */
export const setDateMonthOrYear = (date: Date | null, month?: number | null, year?: number | null): Date => {
    let dateCopy = date ? new Date(date) : new Date();
    if (month) {
        dateCopy = setMonth(dateCopy, month);
    }
    if (year) {
        dateCopy = setYear(dateCopy, year);
    }
    return dateCopy;
};

/**
 * If pattern is not specified return default
 */
export const getDefaultPattern = (
    pattern: string | null,
    is24: boolean,
    monthPicker: boolean,
    timePicker: boolean,
    enableTimePicker: boolean,
): string => {
    if (pattern) {
        return pattern;
    }
    if (monthPicker) {
        return 'MM/yyyy';
    }
    if (timePicker) {
        return is24 ? 'HH:mm' : 'hh:mm aa';
    }
    return enableTimePicker ? `MM/dd/yyyy, ${is24 ? 'HH:mm' : 'hh:mm aa'}` : 'MM/dd/yyyy';
};

/**
 * Extract time value from the date for time picker
 */
export const getTimeVal = (date?: Date): ITimeValue => {
    return { hours: getHours(date || new Date()), minutes: getMinutes(date || new Date()) };
};

/**
 * Extract month value from the date for month picker
 */
export const getMonthVal = (date: Date): IMonthValue => {
    return { month: getMonth(date), year: getYear(date) };
};

/**
 * Map internal date value to the value that will be passed to v-model external on time picker
 */
export const getTImeForExternal = (date: Date | Date[]): ITimeValue | ITimeValue[] => {
    if (Array.isArray(date)) {
        return [getTimeVal(date[0]), getTimeVal(date[1])];
    }
    return getTimeVal(date);
};

/**
 * Map internal date vale to the value that will be passed to v-model external on month picker
 */
export const getMonthForExternal = (date: Date): IMonthValue => {
    return getMonthVal(date);
};

/**
 * Format date values for the input field based on provided pattern
 */
export const formatDate = (value: Date | Date[], pattern: string): string => {
    if (Array.isArray(value)) {
        return `${format(value[0], pattern)} - ${format(value[1], pattern)}`;
    }

    return format(value, pattern);
};

/**
 * Get month value from the provided date
 */
export const getDateMonth = (date: Date): number => {
    return getMonth(date);
};

/**
 * Get year value from the provided date
 */
export const getDateYear = (date: Date): number => {
    return getYear(date);
};

/**
 * Check if the given date is after the provided date
 */
export const isDateAfter = (date: Date | string | null, dateToCompare: Date | string | null): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isAfter(resetDateTime(date), resetDateTime(dateToCompare));
};

/**
 * Check if the given date is before the provided date
 */
export const isDateBefore = (date: Date | string | null, dateToCompare: Date | string | null): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isBefore(resetDateTime(date), resetDateTime(dateToCompare));
};

/**
 * Check if the given date is equal to the provided date
 */
export const isDateEqual = (date: Date | string | null, dateToCompare: Date | string | null): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isEqual(resetDateTime(date), resetDateTime(dateToCompare));
};

/**
 * Return the ISO week number for the given date
 */
export const getWeekNumber = (date: Date): number => {
    return getISOWeek(new Date(date));
};

/**
 * Get hours from given date, if none, will return current hours
 */
export const getDateHours = (date?: Date): number => {
    return getHours(date || new Date());
};

/**
 * Get minutes from the given date, if none, will return current minutes
 */
export const getDateMinutes = (date?: Date): number => {
    return getMinutes(date || new Date());
};
