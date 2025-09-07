import { Jobs } from "../models/jobModal.js";

export const postJob = async (req, res) => {
  const { title, tags, scope, rate, desc, file } = req.body;

  if (!title || !tags || !scope || !rate || !desc || !file) {
    res.status(400);
    throw new Error("Please enter the required fields");
  }
  // res.json({ title, tags, scope, rate, desc, file });

  let createdJobs = await Jobs.create({
    title,
    tags,
    scope,
    rate,
    desc,
    file,
  });
  res.send(createdJobs);
};
