const sendData = async (data) => {
  try {
    const result = await fetch(process.env.REACT_APP_SHEET_URL, {
      method: 'POST',
      body: data,
      muteHttpExceptions: true,
    });
    return result;
  } catch (error) {
    return { error: 'Unexpected error' };
  }
};

export default sendData;
