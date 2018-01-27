
import moment from 'moment';

export const momentFormat = (dateValue, formatDate) =>
  moment(dateValue).lang('id').format(formatDate);

