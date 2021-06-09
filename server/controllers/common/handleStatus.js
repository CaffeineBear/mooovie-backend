import StatusError from '../../errors/http/StatusError.js';

const handleStatus = async (res, action, payload) => {
  try {
    const result = await action(payload);
    console.log(JSON.stringify(result, null, 2));
    res.send(result);
  } catch (err) {
    console.log(err);
    if (!(err instanceof StatusError)) {
      throw err;
    }
    res.status(err.code).send({
      message: err.message,
    });
  }
};

export default handleStatus;
