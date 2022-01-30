import moment from "moment";

const onlyDateFormat = "YYYY-MM-DD";

const fullDatetimeFormat = "YYYY-MM-DD hh:mm:ss";

export const toOnlyDate = date => moment(date).format(onlyDateFormat);

export const getDifferenceOfCurrentDateWithOtherDate = (date) => {
    const currentDate = moment();
    const duration = moment.duration(
        currentDate.diff(
            moment(date)
        )
    );
    return duration.asMonths().toFixed(0);
}