function status(req, res) {
  res.status(200).json({ status: "API online" });
}

export default status;