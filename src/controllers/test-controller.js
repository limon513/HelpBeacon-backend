function test(req, res) {
  return res.status(200).json({
    msg: "test api is live",
  });
}

module.exports = {
  test,
};
