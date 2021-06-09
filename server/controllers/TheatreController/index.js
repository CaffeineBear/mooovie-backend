import TheatreModel from '../../models/Theatre';
import handleStatus from '../common/handleStatus.js';
import StatusError from '../../errors/http/StatusError';

export const getShowtimes = (req, res) => {
  const action = async () => {
    const result = await TheatreModel.read();
    if (result.length == 0) {
      throw new StatusError(422, 'ShowTimes does not exist');
    }
    return result;
  };
  handleStatus(res, action, null);
};
