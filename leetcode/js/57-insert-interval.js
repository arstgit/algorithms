/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function (intervals, newInterval) {
    let res = [];
    let i = 0;
    while (i < intervals.length && intervals[i].end < newInterval.start) res.push(intervals[i++])
    while (i < intervals.length && intervals[i].start <= newInterval.end) {
        newInterval = new Interval(Math.min(newInterval.start, intervals[i].start), Math.max(newInterval.end, intervals[i].end));
        i++;
    }
    res.push(newInterval);
    while (i < intervals.length) res.push(intervals[i++]);
    return res;
};