import type { ComponentPublicInstance, Ref } from 'vue';

export type DynamicClass = Record<string, boolean>;

export interface IDefaultSelect<T = number> {
    value: T;
    text: string;
    className?: DynamicClass;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VueEmit = (event: any, ...args: any[]) => void;

export enum OpenPosition {
    center = 'center',
    left = 'left',
    right = 'right',
}

export type IFormat = string | ((date: Date | Date[]) => string);

export type InternalModuleValue = Date | Date[] | null;

export interface IDateFilter {
    months: number[];
    years: number[];
    times: { hours: number[]; minutes: number[]; seconds: number[] };
}

export interface ICalendarDay {
    text: number | string;
    value: Date;
    current: boolean;
    classData: DynamicClass;
    marker?: IMarker | null;
}

export interface ICalendarDate {
    days: ICalendarDay[];
}

export interface ITextInputOptions {
    enterSubmit: boolean;
    tabSubmit: boolean;
    openMenu: boolean;
    rangeSeparator: string;
    format?: string | string[] | ((value: string) => Date | null);
}

export interface MonthModel {
    month: number | string;
    year: number | string;
}

export interface TimeModel {
    hours: number | string;
    minutes: number | string;
    seconds: number | string;
}

export type ModelValue =
    | Date
    | Date[]
    | string
    | string[]
    | TimeModel
    | TimeModel[]
    | MonthModel
    | MonthModel[]
    | number
    | number[]
    | null;

export type WeekStartNum = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type WeekStartStr = '0' | '1' | '2' | '3' | '4' | '5' | '6';

export type MaybeRef<T> = T | Ref<T>;
export type Fn = () => void;

export interface ConfigurableWindow {
    window?: Window;
}

export type MaybeElementRef = MaybeRef<HTMLElement | SVGElement | ComponentPublicInstance | undefined | null>;
export type OnClickOutsideEvents = Pick<
    WindowEventMap,
    'click' | 'mousedown' | 'mouseup' | 'touchstart' | 'touchend' | 'pointerdown' | 'pointerup'
>;

export interface OnClickOutsideOptions<E extends keyof OnClickOutsideEvents> extends ConfigurableWindow {
    event?: E;
}

export interface IMarker {
    date: Date | string;
    type?: 'dot' | 'line';
    tooltip?: { text?: string; slot?: string; color?: string }[];
    color?: string;
}

export interface ITransition {
    menuAppear: string;
    open: string;
    close: string;
    next: string;
    previous: string;
    vNext: string;
    vPrevious: string;
}

export type IDisableDates = (date: Date) => boolean;
export type TimeType = 'hours' | 'minutes' | 'seconds';

export type AltPosition = boolean | ((el: HTMLElement | null) => { top: string; left: string; transform: string });

export type PresetRange = { label: string; range: Date[] | string[]; style?: Record<string, string>; slot?: string };

export type Flow = 'month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds';
export type MenuChildCmp = 'timePicker' | 'monthYearInput' | 'calendar';

export interface MonthYearPickerRef {
    toggleMonthPicker: (auto: boolean) => void;
    toggleYearPicker: (auto: boolean) => void;
}

export interface AriaLabels {
    toggleOverlay: string;
    menu: string;
    input: string;
    calendarWrap: string;
    calendarDays: string;
    openTimePicker: string;
    closeTimePicker: string;
    incrementValue: (type: TimeType) => string;
    decrementValue: (type: TimeType) => string;
    openTpOverlay: (type: TimeType) => string;
    amPmButton: string;
    openYearsOverlay: string;
    openMonthsOverlay: string;
    nextMonth: string;
    prevMonth: string;
    day: (dayVal: ICalendarDay) => string;
}

export interface CalendarRef extends ComponentPublicInstance {
    triggerTransition: (m: number, year: number) => void;
}

export interface TimePickerRef extends Element {
    toggleTimePicker: (show: boolean, flow: boolean, child?: TimeType) => void;
}

export interface TimeInputRef extends Element {
    openChildCmp: (child: string) => void;
}

export interface ICalendarData {
    month: number;
    year: number;
}

export type ComponentRef = Ref<HTMLElement | null>;

export type TimeOverlayCheck = 'noHoursOverlay' | 'noMinutesOverlay' | 'noSecondsOverlay';

export type ModelFormatType = 'timestamp' | 'format';

export type ModelType = ModelFormatType | string;

export type DateTimeSetter = number | string | null;

export type DateValue = Date | string | null;
