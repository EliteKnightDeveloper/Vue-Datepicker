import type { Locale } from 'date-fns';
import type { ExtractPropTypes, PropType } from 'vue';

import type {
    AriaLabels,
    Flow,
    DateFilter,
    IDisableDates,
    IFormat,
    IMarker,
    TimeModel,
    Transition,
    ModelType,
    ModelValue,
    OpenPosition,
    WeekStartNum,
    WeekStartStr,
    CustomAltPosition,
    SixWeekMode,
    ActionRowData,
    ICalendarDate,
    ArrMapValues,
    InternalModuleValue,
    MultiCalendarsProp,
    TextInputProp,
    PresetDate,
    InlineProp,
    DisabledTimeArrProp,
    Config,
    HighlightProp,
} from '@/interfaces';

export const AllProps = {
    multiCalendars: { type: [Boolean, Number, String, Object] as PropType<MultiCalendarsProp>, default: undefined },
    modelValue: { type: [String, Date, Array, Object, Number] as PropType<ModelValue>, default: null },
    modelType: { type: String as PropType<ModelType>, default: null },
    position: { type: String as PropType<OpenPosition>, default: 'center' },
    dark: { type: Boolean as PropType<boolean>, default: false },
    format: {
        type: [String, Function] as PropType<IFormat>,
        default: () => null,
    },
    autoPosition: { type: Boolean as PropType<boolean>, default: true },
    altPosition: { type: Function as PropType<CustomAltPosition>, default: null },
    transitions: { type: [Boolean, Object] as PropType<boolean | Partial<Transition>>, default: true },
    formatLocale: { type: Object as PropType<Locale>, default: null },
    utc: { type: [Boolean, String] as PropType<boolean | 'preserve'>, default: false },
    ariaLabels: { type: Object as PropType<Partial<AriaLabels>>, default: () => ({}) },
    offset: { type: [Number, String] as PropType<number | string>, default: 10 },
    hideNavigation: { type: Array as PropType<Flow[]>, default: () => [] },
    timezone: { type: String as PropType<string>, default: null },
    emitTimezone: { type: String as PropType<string>, default: null },
    vertical: { type: Boolean as PropType<boolean>, default: false },
    disableMonthYearSelect: { type: Boolean as PropType<boolean>, default: false },
    disableYearSelect: { type: Boolean as PropType<boolean>, default: false },
    menuClassName: { type: String as PropType<string>, default: null },
    dayClass: { type: Function as PropType<(date: Date) => string>, default: null },
    yearRange: { type: Array as PropType<number[]>, default: () => [1900, 2100] },
    calendarCellClassName: { type: String as PropType<string>, default: null },
    enableTimePicker: { type: Boolean as PropType<boolean>, default: true },
    autoApply: { type: Boolean as PropType<boolean>, default: false },
    disabledDates: { type: [Array, Function] as PropType<Date[] | string[] | IDisableDates>, default: () => [] },
    monthNameFormat: { type: String as PropType<'long' | 'short'>, default: 'short' },
    startDate: { type: [Date, String] as PropType<string | Date>, default: null },
    startTime: { type: [Object, Array] as PropType<TimeModel | TimeModel[] | null>, default: null },
    hideOffsetDates: { type: Boolean as PropType<boolean>, default: false },
    autoRange: { type: [Number, String] as PropType<number | string>, default: null },
    noToday: { type: Boolean as PropType<boolean>, default: false },
    disabledWeekDays: { type: Array as PropType<string[] | number[]>, default: () => [] },
    allowedDates: { type: Array as PropType<string[] | Date[]>, default: null },
    nowButtonLabel: { type: String as PropType<string>, default: 'Now' },
    markers: { type: Array as PropType<IMarker[]>, default: () => [] },
    escClose: { type: Boolean as PropType<boolean>, default: true },
    spaceConfirm: { type: Boolean as PropType<boolean>, default: true },
    monthChangeOnArrows: { type: Boolean as PropType<boolean>, default: true },
    presetDates: { type: Array as PropType<PresetDate[]>, default: () => [] },
    flow: { type: Array as PropType<Flow[]>, default: () => [] },
    partialFlow: { type: Boolean as PropType<boolean>, default: false },
    preventMinMaxNavigation: { type: Boolean as PropType<boolean>, default: false },
    minRange: { type: [Number, String] as PropType<number | string>, default: null },
    maxRange: { type: [Number, String] as PropType<number | string>, default: null },
    multiDatesLimit: { type: [Number, String] as PropType<number | string>, default: null },
    reverseYears: { type: Boolean as PropType<boolean>, default: false },
    weekPicker: { type: Boolean as PropType<boolean>, default: false },
    filters: { type: Object as PropType<Partial<DateFilter>>, default: () => ({}) },
    arrowNavigation: { type: Boolean as PropType<boolean>, default: false },
    disableTimeRangeValidation: { type: Boolean as PropType<boolean>, default: false },
    highlight: {
        type: [Array, Function, Object] as PropType<HighlightProp>,
        default: null,
    },
    highlightWeekDays: {
        type: Array as PropType<number[]>,
        default: null,
    },
    highlightDisabledDays: { type: Boolean as PropType<boolean>, default: false },
    teleport: { type: [String, Boolean] as PropType<string | boolean>, default: null },
    teleportCenter: { type: Boolean as PropType<boolean>, default: false },
    locale: { type: String as PropType<string>, default: 'en-Us' },
    weekNumName: { type: String as PropType<string>, default: 'W' },
    weekStart: { type: [Number, String] as PropType<WeekStartNum | WeekStartStr>, default: 1 },
    weekNumbers: {
        type: [String, Function] as PropType<'iso' | 'local' | ((date: Date) => string | number)>,
        default: null,
    },
    calendarClassName: { type: String as PropType<string>, default: null },
    monthChangeOnScroll: { type: [Boolean, String] as PropType<boolean | 'inverse'>, default: true },
    dayNames: {
        type: [Function, Array] as PropType<((lang: string, weekStart: number) => string[]) | string[]>,
        default: null,
    },
    monthPicker: { type: Boolean as PropType<boolean>, default: false },
    customProps: { type: Object as PropType<Record<string, unknown>>, default: null },
    yearPicker: { type: Boolean as PropType<boolean>, default: false },
    modelAuto: { type: Boolean as PropType<boolean>, default: false },
    selectText: { type: String as PropType<string>, default: 'Select' },
    cancelText: { type: String as PropType<string>, default: 'Cancel' },
    previewFormat: {
        type: [String, Function] as PropType<IFormat>,
        default: () => '',
    },
    multiDates: { type: Boolean as PropType<boolean>, default: false },
    partialRange: { type: Boolean as PropType<boolean>, default: true },
    ignoreTimeValidation: { type: Boolean as PropType<boolean>, default: false },
    minDate: { type: [Date, String] as PropType<Date | string>, default: null },
    maxDate: { type: [Date, String] as PropType<Date | string>, default: null },
    minTime: { type: Object as PropType<TimeModel>, default: null },
    maxTime: { type: Object as PropType<TimeModel>, default: null },
    name: { type: String as PropType<string>, default: null },
    placeholder: { type: String as PropType<string>, default: '' },
    hideInputIcon: { type: Boolean as PropType<boolean>, default: false },
    clearable: { type: Boolean as PropType<boolean>, default: true },
    state: { type: Boolean as PropType<boolean | null>, default: null },
    required: { type: Boolean as PropType<boolean>, default: false },
    autocomplete: { type: String as PropType<string>, default: 'off' },
    inputClassName: { type: String as PropType<string>, default: null },
    fixedStart: { type: Boolean as PropType<boolean>, default: false },
    fixedEnd: { type: Boolean as PropType<boolean>, default: false },
    timePicker: { type: Boolean as PropType<boolean>, default: false },
    enableSeconds: { type: Boolean as PropType<boolean>, default: false },
    is24: { type: Boolean as PropType<boolean>, default: true },
    noHoursOverlay: { type: Boolean as PropType<boolean>, default: false },
    noMinutesOverlay: { type: Boolean as PropType<boolean>, default: false },
    noSecondsOverlay: { type: Boolean as PropType<boolean>, default: false },
    hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
    minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
    secondsGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
    hoursIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
    minutesIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
    secondsIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
    range: { type: Boolean as PropType<boolean>, default: false },
    uid: { type: String as PropType<string>, default: null },
    disabled: { type: Boolean as PropType<boolean>, default: false },
    readonly: { type: Boolean as PropType<boolean>, default: false },
    inline: { type: [Boolean, Object] as PropType<InlineProp>, default: false },
    textInput: { type: [Boolean, Object] as PropType<TextInputProp>, default: false },
    noDisabledRange: { type: Boolean as PropType<boolean>, default: false },
    sixWeeks: { type: [Boolean, String] as PropType<boolean | SixWeekMode>, default: false },
    actionRow: { type: Object as PropType<Partial<ActionRowData>>, default: () => ({}) },
    focusStartDate: { type: Boolean as PropType<boolean>, default: false },
    disabledTimes: { type: [Function, Array] as PropType<DisabledTimeArrProp>, default: undefined },
    showLastInRange: { type: Boolean as PropType<boolean>, default: true },
    timePickerInline: { type: Boolean as PropType<boolean>, default: false },
    calendar: { type: Function as PropType<(month: ICalendarDate[]) => ICalendarDate[]>, default: null },
    config: { type: Object as PropType<Partial<Config>>, default: undefined },
    quarterPicker: { type: Boolean as PropType<boolean>, default: false },
    yearFirst: { type: Boolean as PropType<boolean>, default: false },
};

export const PickerBaseProps = {
    ...AllProps,
    shadow: { type: Boolean as PropType<boolean>, default: false },
    flowStep: { type: Number as PropType<number>, default: 0 },
    internalModelValue: { type: [Date, Array] as PropType<InternalModuleValue>, default: null },
    arrMapValues: { type: Object as PropType<ArrMapValues>, default: () => ({}) },
    noOverlayFocus: { type: Boolean as PropType<boolean>, default: false },
};

export type AllPropsType = ExtractPropTypes<typeof AllProps>;
export type PickerBasePropsType = ExtractPropTypes<typeof PickerBaseProps>;
