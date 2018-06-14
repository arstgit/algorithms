/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    if (intervals.length <= 1) return intervals;
    intervals.sort((interval1, interval2) => interval1.start - interval2.start);
    let start = intervals[0].start;
    let end = intervals[0].end;
    let res = [];
    intervals.forEach(interval => {
        if (interval.start <= end) end = Math.max(end, interval.end);
        else {
            res.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    })
    res.push(new Interval(start, end));
    return res;
};