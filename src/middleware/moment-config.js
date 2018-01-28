
import moment from 'moment';

export const momentFormat = (dateValue, formatDate) =>
  moment(dateValue).locale('id').format(formatDate);

