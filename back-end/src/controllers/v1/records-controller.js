const Records = require('../../mongo/models/records');
const Users = require('../../mongo/models/users');

const createRecord = async (req, res) => {
  try {
    const { temperature, humidity, gps, apiKey } = req.body;

    const user = await Users.findOne({ apiKey });
    const userId = user.id;
    if (user != null) {
      const record = await Records.create({
        temperature,
        humidity,
        gps,
        user: userId,
        apiKey
      });
      res.send({ status: 'OK', data: record });
    } else {
      res.status(500).send({ status: 'INVALID APIKEY', data: apiKey });
    }
  } catch (e) {
    console.log('createRecord error:', e);
    console.log(e.code);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const getRecordsByUser = async (req, res) => {
  try {
    const records = await Records.find({
      user: req.params.userId
    });

    res.send({ status: 'OK', data: records });
  } catch (e) {
    console.log('getRecordsByUser error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

module.exports = { createRecords: createRecord, getRecords: getRecordsByUser };
