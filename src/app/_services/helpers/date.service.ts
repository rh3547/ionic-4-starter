import { Injectable } from '@angular/core';
import * as moment from 'moment';

const DATE_FORMAT_DISPLAY: string = "MMMM Do YYYY";
const DATE_FORMAT_DEFAULT: string = "";

@Injectable({
    providedIn: 'root',
})
export class DateService {
    private todaysDate: any; // The exact date/time of today

    constructor() {
        this.todaysDate = moment();
    }

    public getTodaysDate() {
        return this.todaysDate.format(DATE_FORMAT_DEFAULT);
    }

    public getTodaysDateDisplay() {
        return this.todaysDate.format(DATE_FORMAT_DISPLAY);
    }

    public getTodaysDateUnix() {
        return this.todaysDate.unix();
    }

    public getTodaysDateJS() {
        return this.todaysDate.toDate();
    }

    public makeStartOfDay(date) {
        return moment(date).hour(0).minute(0).second(0);
    }

    public makeEndOfDay(date) {
        return moment(date).hour(22).minute(59).second(59);
    }

    public makeHalfDay(date) {
        return moment(date).hour(12).minute(0).second(0);
    }

    public formatDate(date) {
        return moment(date).format(DATE_FORMAT_DEFAULT);
    }

    public formatDateDisplay(date) {
        return moment(date).format(DATE_FORMAT_DISPLAY);
    }

    public getUnixDate(date) {
        return moment(date).unix();
    }

    public getMomentDate(date) {
        return moment(date);
    }

    public stripTime(date) {
        return moment(date).startOf("date");
    }

    public isAfter(date1, date2) {
        return moment(date1).isAfter(moment(date2), "date");
    }

    public isSameOrAfter(date1, date2) {
        return moment(date1).isSameOrAfter(moment(date2), "date");
    }

    public isBefore(date1, date2) {
        return moment(date1).isBefore(moment(date2), "date");
    }

    public isSame(date1, date2) {
        return moment(date1).isSame(moment(date2), "date");
    }

    public isHalfDay(date) {
        return moment(date).hour() == 12;
    }

    public firstOrSecondHalfDay(startDate, endDate) {
        if (moment(startDate).hour() == 12) return startDate;
        if (moment(endDate).hour() == 12) return endDate;
        else return undefined;
    }
}