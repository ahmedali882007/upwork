export const postJob = async (req, res) => {
  const { title, tags, scope, rate, desc, file } = req.body;

  if (!title || !tags || !scope || !rate || !desc || !file) {
    res.status(400);
    throw new Error("Please enter the required fields");
  }
};
