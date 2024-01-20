"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateArray = dateString
        .split("/")
        .map((row) => Number.parseInt(row));
    return new Date(dateArray[-1], dateArray[1] - 1, dateArray[0]);
};
exports.dateStringToDate = dateStringToDate;
