/**
 * @description Calculate no. of days between two dates
 * @param fromDate
 * @param toDate
 * @returns no. of days in number
 */
export const daysBetween = (fromDate: Date, toDate: Date): number => {
    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    const fromDateInMS = fromDate.getTime();
    const toDateInMS = toDate.getTime();

    // to date have to be larger
    if (fromDateInMS > toDateInMS) return -1;

    // Calculate the difference in milliseconds
    const difference = Math.abs(fromDateInMS - toDateInMS);

    // Convert back to days and return
    return Math.round(difference / ONE_DAY);
};
